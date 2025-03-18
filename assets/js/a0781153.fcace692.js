"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[5355],{28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>a});var s=r(96540);const n={},t=s.createContext(n);function d(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:i},e.children)}},42285:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ambari-design/views/view-definition","title":"View Definition","description":"The following describes the syntax of the View Definition File (view.xml) as part of the View Package.","source":"@site/versioned_docs/version-2.7.5/ambari-design/views/view-definition.md","sourceDirName":"ambari-design/views","slug":"/ambari-design/views/view-definition","permalink":"/docs/2.7.5/ambari-design/views/view-definition","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.5/ambari-design/views/view-definition.md","tags":[],"version":"2.7.5","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"View API","permalink":"/docs/2.7.5/ambari-design/views/view-api"},"next":{"title":"Ambari Development","permalink":"/docs/2.7.5/ambari-dev/"}}');var n=r(74848),t=r(28453);const d={},a="View Definition",l={},c=[{value:"<code>&lt;view&gt;</code>",id:"view",level:2},{value:"<code>&lt;name&gt;</code>",id:"name",level:2},{value:"<code>&lt;label&gt;</code>",id:"label",level:2},{value:"<code>&lt;version&gt;</code>",id:"version",level:2},{value:"<code>&lt;min-ambari-version&gt; &lt;max-ambari-version&gt;</code>",id:"min-ambari-version-max-ambari-version",level:2},{value:"<code>&lt;description&gt;</code>",id:"description",level:2},{value:"<code>&lt;parameter&gt;</code>",id:"parameter",level:2},{value:"<code>&lt;permission&gt;</code>",id:"permission",level:2},{value:"<code>&lt;resource&gt;</code>",id:"resource",level:2},{value:"<code>&lt;instance&gt;</code>",id:"instance",level:2},{value:"<code>&lt;property&gt;</code>",id:"property",level:2},{value:"<code>&lt;view-class&gt;</code>",id:"view-class",level:2},{value:"<code>&lt;validator-class&gt;</code>",id:"validator-class",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"view-definition",children:"View Definition"})}),"\n",(0,n.jsxs)(i.p,{children:["The following describes the syntax of the View Definition File (",(0,n.jsx)(i.code,{children:"view.xml"}),") as part of the View Package."]}),"\n",(0,n.jsxs)(i.p,{children:["An XML Schema Definition is available ",(0,n.jsx)(i.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/resources/view.xsd",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"view",children:(0,n.jsx)(i.code,{children:"<view>"})}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"<view>"})," element is the enclosing element in the Definition File. The following table describes the elements you can include in the ",(0,n.jsx)(i.code,{children:"<view>"})," element:"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Element"}),(0,n.jsx)(i.th,{children:"Requred"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"name"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsxs)(i.td,{children:["The unique name of the view. See ",(0,n.jsx)(i.code,{children:"<name>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"label"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsxs)(i.td,{children:["The display label of the view. See ",(0,n.jsx)(i.code,{children:"<label>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"version"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsxs)(i.td,{children:["The version of the view. See ",(0,n.jsx)(i.code,{children:"<version>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsxs)(i.td,{children:["min-ambari-version",(0,n.jsx)("br",{}),"max-ambari-version"]}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["The minimum and maximum Ambari version this view can be deployed with. See ",(0,n.jsx)(i.code,{children:"<min-ambari-version>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"description"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["The description of the view. See ",(0,n.jsx)(i.code,{children:"<description>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"icon"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The 32x32 icon to display for this view. Suggested size is 32x32 and will be displayed as 8x8 and 16x16 as necessary. If this property is not set, a default view framework icon is used."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"icon64"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The 64x64 icon to display for this view. If this property is not set, the 32x32 sized icon will be used."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"permission"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Defines a custom permission for this view. See ",(0,n.jsx)(i.code,{children:"<permission>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"parameter"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Defines a configuration parameter that is used to when creating a view instance. See ",(0,n.jsx)(i.code,{children:"<parameter>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"resource"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Defines a resource that is exposed by the view. See ",(0,n.jsx)(i.code,{children:"<resource>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"instance"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Defines a static instance of the view. See ",(0,n.jsx)(i.code,{children:"<instance>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"view-class"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Registers a view class to receive framework events. See ",(0,n.jsx)(i.code,{children:"<view-class>"})," for more information."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"validator-class"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Registers a validator class to receive framework events. See ",(0,n.jsx)(i.code,{children:"<validator-class>"})," for more information."]})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"name",children:(0,n.jsx)(i.code,{children:"<name>"})}),"\n",(0,n.jsx)(i.p,{children:"The unique name of the view. Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<name>MY_COOL_VIEW</name>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"label",children:(0,n.jsx)(i.code,{children:"<label>"})}),"\n",(0,n.jsx)(i.p,{children:"The label of the view. Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<label>My Cool View</label>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"version",children:(0,n.jsx)(i.code,{children:"<version>"})}),"\n",(0,n.jsx)(i.p,{children:"The version of the view. Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<version>0.1.0</version>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"min-ambari-version-max-ambari-version",children:(0,n.jsx)(i.code,{children:"<min-ambari-version> <max-ambari-version>"})}),"\n",(0,n.jsx)(i.p,{children:"The minimum and maximum version of Ambari server that can run this view. Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<min-ambari-version>1.7.0</min-ambari-version>\n<min-ambari-version>1.7.*</min-ambari-version>\n<max-ambari-version>2.0</max-ambari-version>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"description",children:(0,n.jsx)(i.code,{children:"<description>"})}),"\n",(0,n.jsx)(i.p,{children:"The description of the view. Example:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<description>This view is used to display information.</description>\n\n"})}),"\n",(0,n.jsx)(i.h2,{id:"parameter",children:(0,n.jsx)(i.code,{children:"<parameter>"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Element"}),(0,n.jsx)(i.th,{children:"Requred"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"name"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The name of the configuration parameter."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"description"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The description of the configuration parameter."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"label"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The user friendly name of the configuration parameter (used in the Ambari Administration Interface UI)."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"placeholder"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The placeholder value for the configuration parameter (used in the Ambari Administration Interface UI)."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"default-value"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The default value for the configuration parameter (used in the Ambari Administration Interface UI)."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"required"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"If true, the configuration parameter is required in order to create a view instance."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"masked"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:'Indicated this parameter value is to be "masked" in the Ambari Web UI (i.e. not shown in the clear). Omitting this element default to not-masked. Otherwise, if true, the parameter value will be "masked" in the Web UI.'})]})]})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<parameter>\n    <name>someParameter</name>\n    <description>Some parameter this is used to configure an instance of this view</description>\n    <required>false</required>\n</parameter>\n"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<parameter>\n    <name>name.label.descr.default.place</name>\n    <description>Name, label, description, default and placeholder</description>\n    <label>NameLabelDescDefaultPlace</label>\n    <placeholder>this is placeholder text but you should see default</placeholder>\n    <default-value>youshouldseethisdefault</default-value>\n    <required>true</required>\n</parameter>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-views/examples/property-view/docs/index.md",children:"Property View Example"})," to see the different parameter options in use."]}),"\n",(0,n.jsx)(i.h2,{id:"permission",children:(0,n.jsx)(i.code,{children:"<permission>"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Element"}),(0,n.jsx)(i.th,{children:"Requred"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"name"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The unique name of the permission."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"description"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The description of the permission."})]})]})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<permission>\n  <name>SOME_CUSTOM_PERM</name>\n  <description>A custom permission for this view</description>\n</permission>\n<permission>\n  <name>SOME_OTHER_PERM</name>\n  <description>Another custom permission for this view</description>\n</permission>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"resource",children:(0,n.jsx)(i.code,{children:"<resource>"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Element"}),(0,n.jsx)(i.th,{children:"Requred"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"name"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The name of the resource. This will be the resource endpoint name of the view instance."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"plural-name"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The plural name of the resource."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"service-class"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The JAX-RS annotated resource service class."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"id-property"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The resource identifier."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"provider-class"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The Ambari ResourceProvider resource class."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"resource-class"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"The JavaBean resource class."})]})]})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<resource>\n  <name>calculator</name>\n  <service-class>org.apache.ambari.view.proxy.CalculatorResource</service-class>\n</resource>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-views/examples/calculator-view/docs/index.md",children:"Calculator View Example"})," to see a REST service endpoint view implementation."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<resource>\n  <name>city</name>\n  <plural-name>cities</plural-name>\n  <id-property>id</id-property>\n  <resource-class>org.apache.ambari.view.weather.CityResource</resource-class>\n  <provider-class>org.apache.ambari.view.weather.CityResourceProvider</provider-class>\n  <service-class>org.apache.ambari.view.weather.CityService</service-class>\n</resource>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["See the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-views/examples/weather-view/docs/index.md",children:"Weather View Example"})," to see an Ambari ResourceProvider view implementation.."]}),"\n",(0,n.jsx)(i.h2,{id:"instance",children:(0,n.jsx)(i.code,{children:"<instance>"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Element"}),(0,n.jsx)(i.th,{children:"Requred"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"name"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The unique name of the view instance."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"label"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["The display label of the view instance. If not set, the view definition ",(0,n.jsx)(i.code,{children:"<label>"})," is used."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"description"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["The description of the view instance. If not set, the view definition ",(0,n.jsx)(i.code,{children:"<description>"})," is used."]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"visible"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"If true, for the view instance to show up in the users view instance list."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"icon"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"Overrides the view icon for this specific view instance."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"icon64"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"Overrides the view icon64 for this specific view instance."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"property"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsxs)(i.td,{children:["Specifies any necessary configuration parameters for the view instance. See  ",(0,n.jsx)(i.code,{children:"<property>"})," for more information."]})]})]})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<instance>\n  <name>US_WEST</name>\n  <property>\n    <key>cities</key>\n    <value>Palo Alto, US;Los Angeles, US;Portland, US;Seattle, US</value>\n  </property>\n  <property>\n    <key>units</key>\n    <value>imperial</value>\n  </property>\n</instance>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"property",children:(0,n.jsx)(i.code,{children:"<property>"})}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Element"}),(0,n.jsx)(i.th,{children:"Requred"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"key"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The property key (for the configuration parameter to set)."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"value"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"The property value (for the configuration parameter to set)."})]})]})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<property>\n  <key>units</key>\n  <value>imperial</value>\n</property>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"view-class",children:(0,n.jsx)(i.code,{children:"<view-class>"})}),"\n",(0,n.jsxs)(i.p,{children:["Registers a view class to receive framework events. The view class must implement the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/View.java",children:"View"})," interface."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<view-class>this.is.my.viewclazz</view-class>\n"})}),"\n",(0,n.jsx)(i.h2,{id:"validator-class",children:(0,n.jsx)(i.code,{children:"<validator-class>"})}),"\n",(0,n.jsxs)(i.p,{children:["Registers a validator class to receive property and instance validation requests. The validator class must implement the ",(0,n.jsx)(i.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-views/src/main/java/org/apache/ambari/view/validation/Validator.java",children:"Validator"})," interface."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-xml",children:"<validator-class>org.apache.ambari.view.property.MyValidator</validator-class>\n"})}),"\n",(0,n.jsxs)(i.p,{children:["See ",(0,n.jsx)(i.a,{href:"https://github.com/apache/ambari/blob/trunk/ambari-views/examples/property-validator-view/docs/index.md",children:"Property Validator View Example"})," to see view property and instance validation in use."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);