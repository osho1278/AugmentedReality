/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */


 const { getDefaultConfig } = require("metro-config");

 module.exports = (async () => {
   const {
     resolver: { assetExts }
   } = await getDefaultConfig();
 
   return {
     resolver: {
       assetExts: [...assetExts,"tga", "obj", "mtl", "JPG","jpg", "vrx", "hdr", "gltf", "glb", "bin", "arobject", "gif","png","mp4"]
     }
   };
 })();