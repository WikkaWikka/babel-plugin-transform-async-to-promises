_async(function(){let _interrupt=false;return _continueIgnored(_for(function(){return!_interrupt;},void 0,function(){console.log("loop");return _await(null,function(){// important
_interrupt=true;});// important
}));})