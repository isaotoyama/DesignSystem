"use strict";(self.webpackChunkdesignsystem=self.webpackChunkdesignsystem||[]).push([[960],{"./.yarn/__virtual__/@storybook-blocks-virtual-ff25e53ef0/0/cache/@storybook-blocks-npm-7.0.10-b101e8dcba-fbb401b448.zip/node_modules/@storybook/blocks/dist/Color-3YIJY6X7.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorControl:function(){return ColorControl},default:function(){return Color_default}});var ColorSpace2,_chunk_GWAJ4KRU_mjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./.yarn/__virtual__/@storybook-blocks-virtual-ff25e53ef0/0/cache/@storybook-blocks-npm-7.0.10-b101e8dcba-fbb401b448.zip/node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/index.js"),react_colorful__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.yarn/__virtual__/react-colorful-virtual-fd95a619e3/0/cache/react-colorful-npm-5.6.1-ba0c706357-e432b7cb0d.zip/node_modules/react-colorful/dist/index.mjs"),color_convert__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.yarn/cache/color-convert-npm-2.0.1-79730e935b-79e6bdb9fd.zip/node_modules/color-convert/index.js"),color_convert__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_1__),lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/throttle.js"),lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2__),_storybook_theming__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.yarn/__virtual__/@storybook-theming-virtual-cefe417a51/0/cache/@storybook-theming-npm-7.0.10-b55c2d800b-e2be76acb0.zip/node_modules/@storybook/theming/dist/index.mjs"),_storybook_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.yarn/__virtual__/@storybook-components-virtual-2cfbe1f500/0/cache/@storybook-components-npm-7.0.10-28e5d2cd18-aec44e0b08.zip/node_modules/@storybook/components/dist/index.mjs"),Wrapper=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo.div({position:"relative",maxWidth:250}),PickerTooltip=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo)(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.Rl)({position:"absolute",zIndex:1,top:4,left:4}),TooltipContent=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Note=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo)(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.gu)((({theme:theme})=>({fontFamily:theme.typography.fonts.base}))),Swatches=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),SwatchColor=_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo.div((({theme:theme,active:active})=>({width:16,height:16,boxShadow:active?`${theme.appBorderColor} 0 0 0 1px inset, ${theme.textMutedColor}50 0 0 0 4px`:`${theme.appBorderColor} 0 0 0 1px inset`,borderRadius:theme.appBorderRadius}))),Swatch=({value:value,active:active,onClick:onClick,style:style,...props})=>{let backgroundImage=`linear-gradient(${value}, ${value}), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>'), linear-gradient(#fff, #fff)`;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SwatchColor,{...props,active:active,onClick:onClick,style:{...style,backgroundImage:backgroundImage}})},Input=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo)(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.l0.Input)((({theme:theme})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:theme.typography.fonts.base}))),ToggleIcon=(0,_storybook_theming__WEBPACK_IMPORTED_MODULE_3__.zo)(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.PJ)((({theme:theme})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:theme.input.color}))),ColorSpace=((ColorSpace2=ColorSpace||{}).RGB="rgb",ColorSpace2.HSL="hsl",ColorSpace2.HEX="hex",ColorSpace2),COLOR_SPACES=Object.values(ColorSpace),COLOR_REGEXP=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,RGB_REGEXP=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,HSL_REGEXP=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,HEX_REGEXP=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,SHORTHEX_REGEXP=/^\s*#?([0-9a-f]{3})\s*$/i,ColorPicker={hex:react_colorful__WEBPACK_IMPORTED_MODULE_5__.gW,rgb:react_colorful__WEBPACK_IMPORTED_MODULE_5__.ef,hsl:react_colorful__WEBPACK_IMPORTED_MODULE_5__.W3},fallbackColor={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},stringToArgs=value=>{let match=value?.match(COLOR_REGEXP);if(!match)return[0,0,0,1];let[,x,y,z,a=1]=match;return[x,y,z,a].map(Number)},parseValue=value=>{if(!value)return;let valid=!0;if(RGB_REGEXP.test(value)){let[r,g,b,a]=stringToArgs(value),[h,s,l]=color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.hsl([r,g,b])||[0,0,0];return{valid:valid,value:value,keyword:color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.keyword([r,g,b]),colorSpace:"rgb",rgb:value,hsl:`hsla(${h}, ${s}%, ${l}%, ${a})`,hex:`#${color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.hex([r,g,b]).toLowerCase()}`}}if(HSL_REGEXP.test(value)){let[h,s,l,a]=stringToArgs(value),[r,g,b]=color_convert__WEBPACK_IMPORTED_MODULE_1___default().hsl.rgb([h,s,l])||[0,0,0];return{valid:valid,value:value,keyword:color_convert__WEBPACK_IMPORTED_MODULE_1___default().hsl.keyword([h,s,l]),colorSpace:"hsl",rgb:`rgba(${r}, ${g}, ${b}, ${a})`,hsl:value,hex:`#${color_convert__WEBPACK_IMPORTED_MODULE_1___default().hsl.hex([h,s,l]).toLowerCase()}`}}let plain=value.replace("#",""),rgb=color_convert__WEBPACK_IMPORTED_MODULE_1___default().keyword.rgb(plain)||color_convert__WEBPACK_IMPORTED_MODULE_1___default().hex.rgb(plain),hsl=color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.hsl(rgb),mapped=value;if(/[^#a-f0-9]/i.test(value)?mapped=plain:HEX_REGEXP.test(value)&&(mapped=`#${plain}`),mapped.startsWith("#"))valid=HEX_REGEXP.test(mapped);else try{color_convert__WEBPACK_IMPORTED_MODULE_1___default().keyword.hex(mapped)}catch{valid=!1}return{valid:valid,value:mapped,keyword:color_convert__WEBPACK_IMPORTED_MODULE_1___default().rgb.keyword(rgb),colorSpace:"hex",rgb:`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`,hsl:`hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, 1)`,hex:mapped}},useColorInput=(initialValue,onChange)=>{let[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue||""),[color,setColor]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>parseValue(value))),[colorSpace,setColorSpace]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(color?.colorSpace||"hex");(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let nextValue=initialValue||"",nextColor=parseValue(nextValue);setValue(nextValue),setColor(nextColor),setColorSpace(nextColor?.colorSpace||"hex")}),[initialValue]);let realValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>((value,color,colorSpace)=>{if(!value||!color?.valid)return fallbackColor[colorSpace];if("hex"!==colorSpace)return color?.[colorSpace]||fallbackColor[colorSpace];if(!color.hex.startsWith("#"))try{return`#${color_convert__WEBPACK_IMPORTED_MODULE_1___default().keyword.hex(color.hex)}`}catch{return fallbackColor.hex}let short=color.hex.match(SHORTHEX_REGEXP);if(!short)return HEX_REGEXP.test(color.hex)?color.hex:fallbackColor.hex;let[r,g,b]=short[1].split("");return`#${r}${r}${g}${g}${b}${b}`})(value,color,colorSpace).toLowerCase()),[value,color,colorSpace]),updateValue=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((update=>{let parsed=parseValue(update),v=parsed?.value||update||"";setValue(v),""===v&&(setColor(void 0),onChange(void 0)),parsed&&(setColor(parsed),setColorSpace(parsed.colorSpace),onChange(parsed.value))}),[onChange]),cycleColorSpace=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{let next=COLOR_SPACES.indexOf(colorSpace)+1;next>=COLOR_SPACES.length&&(next=0),setColorSpace(COLOR_SPACES[next]);let update=color?.[COLOR_SPACES[next]]||"";setValue(update),onChange(update)}),[color,colorSpace,onChange]);return{value:value,realValue:realValue,updateValue:updateValue,color:color,colorSpace:colorSpace,cycleColorSpace:cycleColorSpace}},id=value=>value.replace(/\s*/,"").toLowerCase(),ColorControl=({name:name,value:initialValue,onChange:onChange,onFocus:onFocus,onBlur:onBlur,presetColors:presetColors,startOpen:startOpen=!1})=>{let throttledOnChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(lodash_throttle_js__WEBPACK_IMPORTED_MODULE_2___default()(onChange,200),[onChange]),{value:value,realValue:realValue,updateValue:updateValue,color:color,colorSpace:colorSpace,cycleColorSpace:cycleColorSpace}=useColorInput(initialValue,throttledOnChange),{presets:presets,addPreset:addPreset}=((presetColors,currentColor,colorSpace)=>{let[selectedColors,setSelectedColors]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(currentColor?.valid?[currentColor]:[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{void 0===currentColor&&setSelectedColors([])}),[currentColor]);let presets=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(presetColors||[]).map((preset=>"string"==typeof preset?parseValue(preset):preset.title?{...parseValue(preset.color),keyword:preset.title}:parseValue(preset.color))).concat(selectedColors).filter(Boolean).slice(-27)),[presetColors,selectedColors]),addPreset=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((color=>{color?.valid&&(presets.some((preset=>id(preset[colorSpace])===id(color[colorSpace])))||setSelectedColors((arr=>arr.concat(color))))}),[colorSpace,presets]);return{presets:presets,addPreset:addPreset}})(presetColors,color,colorSpace),Picker=ColorPicker[colorSpace];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(PickerTooltip,{startOpen:startOpen,closeOnOutsideClick:!0,onVisibleChange:()=>addPreset(color),tooltip:react__WEBPACK_IMPORTED_MODULE_0__.createElement(TooltipContent,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Picker,{color:"transparent"===realValue?"#000000":realValue,onChange:updateValue,onFocus:onFocus,onBlur:onBlur}),presets.length>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(Swatches,null,presets.map(((preset,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_4__.Rl,{key:`${preset.value}-${index}`,hasChrome:!1,tooltip:react__WEBPACK_IMPORTED_MODULE_0__.createElement(Note,{note:preset.keyword||preset.value})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Swatch,{value:preset[colorSpace],active:color&&id(preset[colorSpace])===id(color[colorSpace]),onClick:()=>updateValue(preset.value)}))))))},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Swatch,{value:realValue,style:{margin:4}})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Input,{id:(0,_chunk_GWAJ4KRU_mjs__WEBPACK_IMPORTED_MODULE_6__.d)(name),value:value,onChange:e=>updateValue(e.target.value),onFocus:e=>e.target.select(),placeholder:"Choose color..."}),value?react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToggleIcon,{icon:"markup",onClick:cycleColorSpace}):null)},Color_default=ColorControl}}]);