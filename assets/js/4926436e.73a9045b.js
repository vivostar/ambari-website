"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[5534],{28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}},53450:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"ambari-design/stack-and-services/extensions","title":"Extensions","description":"Background","source":"@site/docs/ambari-design/stack-and-services/extensions.md","sourceDirName":"ambari-design/stack-and-services","slug":"/ambari-design/stack-and-services/extensions","permalink":"/docs/next/ambari-design/stack-and-services/extensions","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/docs/ambari-design/stack-and-services/extensions.md","tags":[],"version":"current","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Defining a Custom Stack and Services","permalink":"/docs/next/ambari-design/stack-and-services/defining-a-custom-stack-and-services"},"next":{"title":"How-To Define Stacks and Services","permalink":"/docs/next/ambari-design/stack-and-services/how-to-define-stacks-and-services"}}');var t=s(74848),r=s(28453);const o={},a="Extensions",c={},l=[{value:"Background",id:"background",level:2},{value:"Structure",id:"structure",level:2},{value:"Extension Inheritance",id:"extension-inheritance",level:2},{value:"Supported Stack Versions",id:"supported-stack-versions",level:2},{value:"Installing Extensions",id:"installing-extensions",level:2},{value:"Extension REST APIs",id:"extension-rest-apis",level:2},{value:"Get all extensions",id:"get-all-extensions",level:3},{value:"Get extension",id:"get-extension",level:3},{value:"Get extension version",id:"get-extension-version",level:3},{value:"Extension Links",id:"extension-links",level:2},{value:"Extension Link REST APIs",id:"extension-link-rest-apis",level:2},{value:"Create Extension Link",id:"create-extension-link",level:3},{value:"Get All Extension Links",id:"get-all-extension-links",level:3},{value:"Get Extension Link",id:"get-extension-link",level:3},{value:"Delete Extension Link",id:"delete-extension-link",level:3},{value:"Update All Extension Links",id:"update-all-extension-links",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"extensions",children:"Extensions"})}),"\n",(0,t.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,t.jsx)(n.p,{children:"Added in Ambari 2.4."}),"\n",(0,t.jsxs)(n.p,{children:["An Extension is a collection of one or more custom services which are packaged together. Much like stacks, each extension has a name which needs to be unique in the cluster. It also has a version directory to distinguish different releases of the extension. Much like stack versions which go in ",(0,t.jsx)(n.code,{children:"/var/lib/ambari-server/resources/stacks with <stack_name>/<stack_version>"})," sub-directories, extension versions go in ",(0,t.jsx)(n.code,{children:"/var/lib/ambari-server/resources/extensions with <extension_name>/<extension_version>"})," sub-directories."]}),"\n",(0,t.jsx)(n.p,{children:"An extension can be linked to supported stack versions.  Once an extension version has been linked to the currently installed stack version, the custom services contained in the extension version may be added to the cluster in the same manner as if they were actually contained in the stack version."}),"\n",(0,t.jsx)(n.p,{children:"Third party developers can release Extensions which can be added to a cluster."}),"\n",(0,t.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.p,{children:"The structure of an Extension definition is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"|_ extensions\n   |_ <extension_name>\n      |_ <extension_version>\n         |_ metainfo.xml\n         |_ services\n            |_ <service_name>\n               |_ metainfo.xml\n               |_ metrics.json\n               |_ configuration\n                  |_ {configuration files}\n               |_ package\n                  |_ {files, scripts, templates}\n"})}),"\n",(0,t.jsx)(n.p,{children:"An extension version is similar to a stack version but it only includes the metainfo.xml and the services directory. This means that the alerts, kerberos, metrics, role command order, widgets files are not supported and should be included at the service level. In addition, the repositories, hooks, configurations, and upgrades directories are not supported although upgrade support can be added at the service level."}),"\n",(0,t.jsx)(n.h2,{id:"extension-inheritance",children:"Extension Inheritance"}),"\n",(0,t.jsx)(n.p,{children:"Extension versions can extend other Extension versions in order to share command scripts and configurations. This reduces duplication of code across Extensions with the following:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"add new Services in the child Extension version (not in the parent Extension version)"}),"\n",(0,t.jsx)(n.li,{children:"override command scripts of the parent Services"}),"\n",(0,t.jsx)(n.li,{children:"override configurations of the parent Services"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.strong,{children:"MyExtension 2.0"})," could extend ",(0,t.jsx)(n.strong,{children:"MyExtension 1.0"})," so only the changes applicable to the ",(0,t.jsx)(n.strong,{children:"MyExtension 2.0"})," extension are present in that Extension definition. This extension is defined in the metainfo.xml for ",(0,t.jsx)(n.strong,{children:"MyExtension 2.0"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<metainfo>\n  <extends>1.0</extends>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"supported-stack-versions",children:"Supported Stack Versions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Each Extension Version must support one or more Stack Versions."}),"  The Extension Version specifies the minimum Stack Version which it supports.  This is included in the extension's metainfo.xml in the prerequisites section like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<metainfo>\n  <prerequisites>\n    <min-stack-versions>\n      <stack>\n        <name>HDP</name>\n        <version>2.4</version>\n      </stack>\n      <stack>\n        <name>OTHER</name>\n        <version>1.0</version>\n      </stack>\n    </min-stack-versions>\n  </prerequisites>\n</metainfo>\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-extensions",children:"Installing Extensions"}),"\n",(0,t.jsxs)(n.p,{children:["It is recommended to install extensions using ",(0,t.jsx)(n.a,{href:"/docs/next/ambari-design/stack-and-services/management-packs",children:"management packs"}),".  For more details see the ",(0,t.jsx)(n.a,{href:"/docs/next/ambari-design/stack-and-services/custom-services",children:"instructions on packaging custom services using extensions and management packs"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Once the extension version directory has been created under the resource/extensions directory with the required metainfo.xml file, you can restart ambari-server."}),"\n",(0,t.jsx)(n.h2,{id:"extension-rest-apis",children:"Extension REST APIs"}),"\n",(0,t.jsx)(n.p,{children:"You can query for extensions by calling REST APIs."}),"\n",(0,t.jsx)(n.h3,{id:"get-all-extensions",children:"Get all extensions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -u admin:admin -H \'X-Requested-By:ambari\' -X GET \'http://<server>:<port>/api/v1/extensions\'\n{\n  "href" : "http://<server>:<port>/api/v1/extensions/",\n  "items" : [\n    {\n      "href" : "http://<server>:<port>/api/v1/extensions/EXT",\n      "Extensions" : {\n        "extension_name" : "EXT"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"get-extension",children:"Get extension"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -u admin:admin -H \'X-Requested-By:ambari\' -X GET \'http://<server>:<port>/api/v1/extensions/EXT\'\n\n{\n  "href" : "http://<server>:<port>/api/v1/extensions/EXT",\n  "Extensions" : {\n    "extension_name" : "EXT"\n  },\n  "versions" : [\n    {\n      "href" : "http://<server>:<port>/api/v1/extensions/EXT/versions/1.0",\n      "Versions" : {\n        "extension_name" : "EXT",\n        "extension_version" : "1.0"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"get-extension-version",children:"Get extension version"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -u admin:admin -H \'X-Requested-By:ambari\' -X GET \'http://<server>:<port>/api/v1/extensions/EXT/versions/1.0\'\n\n{\n  "href" : "http://<server>:<port>/api/v1/extensions/EXT/versions/1.0/",\n  "Versions" : {\n    "extension-errors" : [],\n    "extension_name" : "EXT",\n    "extension_version" : "1.0",\n    "parent_extension_version" : null,\n    "valid" : true\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"extension-links",children:"Extension Links"}),"\n",(0,t.jsx)(n.p,{children:"An Extension Link is a link between a stack version and an extension version.  Once an extension version has been linked to the currently installed stack version, the custom services contained in the extension version may be added to the cluster in the same manner as if they were actually contained in the stack version."}),"\n",(0,t.jsx)(n.p,{children:"It is only possible to link an extension version to a stack version if the stack version is supported by the extension version.  The stack name must be specified in the prerequisites section of the extension's metainfo.xml and the stack version must be greater than or equal to the minimum version number specified."}),"\n",(0,t.jsx)(n.h2,{id:"extension-link-rest-apis",children:"Extension Link REST APIs"}),"\n",(0,t.jsx)(n.p,{children:"You can retrieve, create, update and delete extension links by calling REST APIs."}),"\n",(0,t.jsx)(n.h3,{id:"create-extension-link",children:"Create Extension Link"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'The following curl command will link an extension EXT/1.0 to the stack HDP/2.4\n\ncurl -u admin:admin -H \'X-Requested-By: ambari\' -X POST -d \'{"ExtensionLink": {"stack_name": "HDP", "stack_version":\n\n"2.4", "extension_name": "EXT", "extension_version": "1.0"}}\' http://<server>:<port>/api/v1/links/\n'})}),"\n",(0,t.jsx)(n.h3,{id:"get-all-extension-links",children:"Get All Extension Links"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -u admin:admin -H \'X-Requested-By:ambari\' -X GET \'http://<server>:<port>/api/v1/links\'\n\n{\n  "href" : "http://<server>:<port>/api/v1/links/",\n  "items" : [\n    {\n      "href" : "http://<server>:<port>:8080/api/v1/links/1",\n      "ExtensionLink" : {\n        "extension_name" : "EXT",\n        "extension_version" : "1.0",\n        "link_id" : 1,\n        "stack_name" : "HDP",\n        "stack_version" : "2.4"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"get-extension-link",children:"Get Extension Link"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -u admin:admin -H \'X-Requested-By:ambari\' -X GET \'http://<server>:<port>/api/v1/link/1\'\n{\n  "href" : "http://<server>:<port>/api/v1/links/1",\n  "ExtensionLink" : {\n    "extension_name" : "EXT",\n    "extension_version" : "1.0",\n    "link_id" : 1,\n    "stack_name" : "HDP",\n    "stack_version" : "2.4"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"delete-extension-link",children:"Delete Extension Link"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"You must specify the ID of the Extension Link to be deleted.\n\ncurl -u admin:admin -H 'X-Requested-By: ambari' -X DELETE http://<server>:<port>/api/v1/links/<link_id>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"update-all-extension-links",children:"Update All Extension Links"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"This will reread the stacks, extensions and services in order to make sure the state of the stack is up to date in memory.\n\ncurl -u admin:admin -H 'X-Requested-By: ambari' -X PUT http://<server>:<port>/api/v1/links/\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);