__GLOBAL_ASYNC_TO_PROMISES__._async(function(){let _interrupt=false;return __GLOBAL_ASYNC_TO_PROMISES__._continue(__GLOBAL_ASYNC_TO_PROMISES__._for(function(){return!_interrupt;},void 0,function(){console.log("loop");return __GLOBAL_ASYNC_TO_PROMISES__._await(null,function(){// important
_interrupt=true;});// important
}),__GLOBAL_ASYNC_TO_PROMISES__._empty);})