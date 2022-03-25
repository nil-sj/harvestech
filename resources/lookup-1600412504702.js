(function(window, undefined) {
  var dictionary = {
    "bef3efd1-ae1e-4e84-b28b-c7ad9ea127a6": "Add Events",
    "a80a3b1a-a092-4212-9c07-ed1b248f1c6e": "Logged In Screen",
    "fd183f42-3f54-4fdd-acff-2ae72bb26308": "Event Added",
    "df1e833c-5086-46c7-b7e3-405b6ae13846": "Event Addition Successful",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Flash Screen",
    "bbe1f34a-d230-47f3-a397-d0fc61afbc8b": "Record Events",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);