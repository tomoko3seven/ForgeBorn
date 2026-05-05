WorldgenEvents.add((event) => {
    console.log(Object.keys(event));
    Platform.mods.kubejs.name = 'ForgeBorn';
});
