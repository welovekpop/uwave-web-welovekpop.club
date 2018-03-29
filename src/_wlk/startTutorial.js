export default function startTutorial() {
  return import('./tutorial' /* webpackChunkName: "tutorial" */).then(([Sideshow]) => {
    Sideshow.start({ listAll: true });
  });
}
