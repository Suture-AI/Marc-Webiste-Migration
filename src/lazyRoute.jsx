/* Code-split route components without hydration flashes.
 *
 * React.lazy always suspends on first render — even for a chunk that is
 * already downloaded — which would blank out prerendered HTML during
 * hydration. This variant renders synchronously once its modules are loaded,
 * so main.jsx can preload the current route's chunk and hydrate seamlessly;
 * only client-side navigations (where a blink behind the page fade is fine)
 * ever suspend.
 */
const entries = new Map();

export function lazyRoute(id, loaders, render) {
  let entry = entries.get(id);
  if (!entry) {
    entry = { mods: null, promise: null };
    entries.set(id, entry);
  }
  const load = () => {
    if (!entry.promise) {
      entry.promise = Promise.all(loaders()).then((mods) => {
        entry.mods = mods;
      });
    }
    return entry.promise;
  };

  function RouteChunk(props) {
    if (!entry.mods) throw load(); // caught by the route's <Suspense>
    return render(entry.mods, props);
  }
  RouteChunk.preload = load;
  return RouteChunk;
}
