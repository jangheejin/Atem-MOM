define([
    'mustache'
  , 'require/text!./metapolation.tpl'
], function(
    mustache
  , template
) {
    return function(masterCount) {
        var n
          , view = {}
          , masterNs = view.n = [] // [0,1,2,3] when masterCount = 4
          ;
        for(n=0;n<masterCount;n++)
            masterNs.push(n);
        return mustache.render(template, view);
    };
});


