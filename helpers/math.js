function convert_fraction(r){let t=r.replace(/\\,\s*/g,"").match(/\\frac\{(.+?)\}\{(.+?)\}/);if(t){return`(${t[1]})／(${t[2]})`}return r}