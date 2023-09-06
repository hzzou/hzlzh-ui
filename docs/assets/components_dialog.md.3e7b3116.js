import{d as D,i as F,H as e,o as y,c as d,J as o,E as t,V as r,a as n}from"./chunks/framework.60648194.js";const i=r('<h1 id="dialog-弹窗" tabindex="-1"><strong>Dialog 弹窗</strong> <a class="header-anchor" href="#dialog-弹窗" aria-label="Permalink to &quot;**Dialog 弹窗**&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在保留当前页面状态的情况下，告知用户并承载相关操作</p></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>',3),u=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showModal = true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">展示弹窗</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">hz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hz-dialog</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showModal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2121</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            内容</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showModal = false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">取消</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">hz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">hz-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">showModal = false</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">确定</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">hz-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">hz-dialog</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> showModal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="dialog-api" tabindex="-1"><strong>Dialog API</strong> <a class="header-anchor" href="#dialog-api" aria-label="Permalink to &quot;**Dialog API**&quot;">​</a></h2><h3 id="dialog-attributes" tabindex="-1"><strong>Dialog Attributes</strong> <a class="header-anchor" href="#dialog-attributes" aria-label="Permalink to &quot;**Dialog Attributes**&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>model-value/v-model</td><td>绑定的值</td><td>Boolean</td><td>false</td></tr><tr><td>modal</td><td>弹窗蒙层</td><td>Boolean</td><td>true</td></tr><tr><td>title</td><td>弹窗标题</td><td>String</td><td>&#39;&#39;</td></tr><tr><td>width</td><td>弹窗宽度</td><td>String,Number</td><td>&#39;&#39;</td></tr><tr><td>height</td><td>弹窗高度</td><td>String,Number</td><td>&#39;&#39;</td></tr></tbody></table><h3 id="dialog-events" tabindex="-1"><strong>Dialog Events</strong> <a class="header-anchor" href="#dialog-events" aria-label="Permalink to &quot;**Dialog Events**&quot;">​</a></h3><table><thead><tr><th>名称</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>open</td><td>打开Dialog的会掉</td><td>Function</td></tr><tr><td>close</td><td>关闭Dialog的会掉</td><td>Function</td></tr></tbody></table><h3 id="dialog-slots" tabindex="-1"><strong>Dialog Slots</strong> <a class="header-anchor" href="#dialog-slots" aria-label="Permalink to &quot;**Dialog Slots**&quot;">​</a></h3><table><thead><tr><th>插槽名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义默认内容</td></tr><tr><td>header</td><td>对话框标题的内容,会替换标题部分，但不会移除关闭按钮</td></tr><tr><td>footer</td><td>弹窗按钮操作区的内容</td></tr></tbody></table>`,8),m=JSON.parse('{"title":"Dialog 弹窗","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog.md","filePath":"components/dialog.md"}'),C={name:"components/dialog.md"},b=D({...C,setup(h){const a=F(!1);return(g,s)=>{const p=e("hz-button"),c=e("hz-dialog");return y(),d("div",null,[i,o(p,{type:"primary",onClick:s[0]||(s[0]=l=>a.value=!0)},{default:t(()=>[n("展示弹窗")]),_:1}),o(c,{modelValue:a.value,"onUpdate:modelValue":s[3]||(s[3]=l=>a.value=l),title:"标题"},{default:t(()=>[n(" 内容 ")]),footer:t(()=>[o(p,{onClick:s[1]||(s[1]=l=>a.value=!1)},{default:t(()=>[n("取消")]),_:1}),o(p,{type:"primary",onClick:s[2]||(s[2]=l=>a.value=!1)},{default:t(()=>[n("确定")]),_:1})]),_:1},8,["modelValue"]),u])}}});export{m as __pageData,b as default};