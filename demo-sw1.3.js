//  demo-sw.js (2.1)

    self.version = 2.1;
    var debugMode = true;

    self.importScripts(
        "/js/Objectid.js",
        "/js/zangodb.min.js",
        "/three/three.js",
        "/three/Animation.js",
        "/three/AnimationHandler.js",
        "/three/KeyFrameAnimation.js",
        "/AW3D_js/AW3D-dev0.3.2.js",
        "/AW3D_db/AW3D.db.js",
    );

    var skinned = {};

    skinned.male = [
        "/skinned/male/body.json",
        "/skinned/male/eyes.json",
        "/skinned/male/hairs.json",
        "/skinned/male/underwears.json",
        "/skinned/male/costume.json",
        "/skinned/male/trousers.json",
        "/skinned/male/shoes.json",
    ];

    skinned.female = [
        "/skinned/female/body.json",
        "/skinned/female/eyes.json",
        "/skinned/female/hairs.json",
        "/skinned/female/stockings.json",
        "/skinned/female/underwears.json",
        "/skinned/female/dress.json",
        "/skinned/female/costume.json",
        "/skinned/female/trousers.json",
        "/skinned/female/shoes.json",
    ];

    skinned.skeleton = [
        "/skinned/skeleton/bones.json",
        "/skinned/skeleton/skeleton.json",
    ];

    var animations = {};

    animations.basic = [
        "/animations/basic/idle.json",
        "/animations/basic/walk.json",
        "/animations/basic/run.json",
        "/animations/basic/jump.json",
    ];

    animations.male = [
        "/animations/male/idle.json",
        "/animations/male/walk.json",
        "/animations/male/run.json",
        "/animations/male/jump.json",
    ];

    animations.female = [
        "/animations/female/idle.json",
        "/animations/female/walk.json",
        "/animations/female/run.json",
        "/animations/female/jump.json",
    ];

    var AW3DDB = "/AW3D_db/dev_DB_v3.6.json";

    async function installDB(url){

        var cache = await caches.open("databases")
        .then(async function(cache){ return cache; });

        await cache.add(url);

        var collections = await cache.match(url)
        .then(function(response){
            return response.json();
        }).then(function(json){
            return json;
        });

        debugMode && console.log(collections);

    }
