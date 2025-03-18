"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[8612],{28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}},73688:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"quick-start/quick-start-guide","title":"Quick Start Guide","description":"This document provides a quick overview of setting up Apache Ambari 3.0.0 in various environments. For detailed environment-specific setup instructions, please refer to the appropriate environment setup guide.","source":"@site/versioned_docs/version-3.0.0/quick-start/quick-start-guide.md","sourceDirName":"quick-start","slug":"/quick-start/quick-start-guide","permalink":"/docs/3.0.0/quick-start/quick-start-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-3.0.0/quick-start/quick-start-guide.md","tags":[],"version":"3.0.0","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"ambariSidebar","previous":{"title":"Frequently Asked Questions (FAQ)","permalink":"/docs/3.0.0/faq"},"next":{"title":"Vagrant Environment Setup for Apache Ambari","permalink":"/docs/3.0.0/quick-start/environment-setup/vagrant-environment-setup"}}');var r=i(74848),s=i(28453);const o={sidebar_position:1},a="Quick Start Guide",l={},c=[{value:"Environment Setup Options",id:"environment-setup-options",level:2},{value:"1. Vagrant Environment",id:"1-vagrant-environment",level:3},{value:"2. Docker Environment",id:"2-docker-environment",level:3},{value:"3. Bare Metal/KVM Setup",id:"3-bare-metalkvm-setup",level:3},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Key Features in Ambari 3.0.0",id:"key-features-in-ambari-300",level:2},{value:"New Service Support",id:"new-service-support",level:3},{value:"Monitoring and Visualization",id:"monitoring-and-visualization",level:3},{value:"Development and Code Quality",id:"development-and-code-quality",level:3},{value:"Security Enhancements",id:"security-enhancements",level:3},{value:"Infrastructure Improvements",id:"infrastructure-improvements",level:3},{value:"Getting Help",id:"getting-help",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"quick-start-guide",children:"Quick Start Guide"})}),"\n",(0,r.jsx)(n.p,{children:"This document provides a quick overview of setting up Apache Ambari 3.0.0 in various environments. For detailed environment-specific setup instructions, please refer to the appropriate environment setup guide."}),"\n",(0,r.jsx)(n.h2,{id:"environment-setup-options",children:"Environment Setup Options"}),"\n",(0,r.jsx)(n.p,{children:"Apache Ambari 3.0.0 can be installed in several different environments:"}),"\n",(0,r.jsx)(n.h3,{id:"1-vagrant-environment",children:"1. Vagrant Environment"}),"\n",(0,r.jsx)(n.p,{children:"The Vagrant environment provides a quick way to set up a development cluster using virtual machines on your local computer. This is ideal for testing and development purposes."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/3.0.0/quick-start/environment-setup/vagrant-environment-setup",children:"View Vagrant Environment Setup Guide"})}),"\n",(0,r.jsx)(n.h3,{id:"2-docker-environment",children:"2. Docker Environment"}),"\n",(0,r.jsx)(n.p,{children:"The Docker environment offers a lightweight, containerized approach using multiple containers with one server and two agents. This setup uses Rocky Linux 8 as the base image and includes container networking, SSH setup, and security configuration."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/3.0.0/quick-start/environment-setup/docker-environment-setup",children:"View Docker Environment Setup Guide"})}),"\n",(0,r.jsx)(n.h3,{id:"3-bare-metalkvm-setup",children:"3. Bare Metal/KVM Setup"}),"\n",(0,r.jsx)(n.p,{children:"For production deployments or larger development environments, the Bare Metal/KVM setup covers both physical servers and KVM virtual machines. This guide includes detailed system requirements, network configuration, and both development and production security settings."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/3.0.0/quick-start/environment-setup/bare-metal-kvm-setup",children:"View Bare Metal/KVM Setup Guide"})}),"\n",(0,r.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,r.jsx)(n.p,{children:"Once you have set up your environment using one of the methods above, you can proceed with the Ambari installation process:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/3.0.0/quick-start/installation-guide",children:"View Installation Guide"})}),"\n",(0,r.jsx)(n.h2,{id:"key-features-in-ambari-300",children:"Key Features in Ambari 3.0.0"}),"\n",(0,r.jsx)(n.p,{children:"Apache Ambari 3.0.0 includes numerous enhancements and improvements across various areas:"}),"\n",(0,r.jsx)(n.h3,{id:"new-service-support",children:"New Service Support"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Alluxio Integration"})," (AMBARI-26055) - Full support for Alluxio distributed file system"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ozone File System"})," (AMBARI-24976) - Integration with Apache Hadoop Ozone object store"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OceanBase Support"})," - Added compatibility with OceanBase database systems"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"monitoring-and-visualization",children:"Monitoring and Visualization"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Grafana Dashboards"})," (AMBARI-25960) - Enhanced monitoring capabilities with pre-configured Grafana dashboards"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HiveServer2 Web UI Quicklink"})," (AMBARI-26270) - Direct access to HiveServer2 web interface"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Improved Metrics Collection"})," - Enhanced metrics gathering for better system insights"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Timeline Service Enhancements"})," - Improved performance and reliability of the Timeline Service"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"development-and-code-quality",children:"Development and Code Quality"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Java 17 Support"})," - Full compatibility with OpenJDK 17"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Python Modernization"})," - Code improvements including:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Implementation of f-strings for better readability"}),"\n",(0,r.jsx)(n.li,{children:"Python 3 compatibility throughout the codebase"}),"\n",(0,r.jsx)(n.li,{children:"Ruff integration (AMBARI-26147) for code quality"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Spark Performance Improvements"})," - Optimizations for Spark processing"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"security-enhancements",children:"Security Enhancements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Multiple CVE Fixes"})," - Addressing security vulnerabilities"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Dependency Updates"})," - Security-focused upgrades including:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Commons-collections library"}),"\n",(0,r.jsx)(n.li,{children:"Logback framework"}),"\n",(0,r.jsx)(n.li,{children:"PostgreSQL client"}),"\n",(0,r.jsx)(n.li,{children:"Snakeyaml parser"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Kerberos Encryption Fixes"})," - Improved Kerberos authentication security"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"LDAP/AD Authentication Improvements"})," - Enhanced directory service integration"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"infrastructure-improvements",children:"Infrastructure Improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Docker and Containerization Support"})," - Better support for containerized deployments"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rocky Linux 8 Compatibility"})," - Added support for Rocky Linux 8 deployments"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Enhanced Installation Workflows"})," - Streamlined installation process across environments"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For a complete list of new features, improvements, and fixes, please refer to the ",(0,r.jsx)(n.a,{href:"/docs/3.0.0/release-notes",children:"Release Notes"})]}),"\n",(0,r.jsx)(n.h2,{id:"getting-help",children:"Getting Help"}),"\n",(0,r.jsxs)(n.p,{children:["If you encounter any issues during setup or installation, please refer to our ",(0,r.jsx)(n.a,{href:"/docs/3.0.0/faq",children:"FAQ"})," for common questions and troubleshooting tips."]}),"\n",(0,r.jsx)(n.p,{children:"For additional help, you can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Join the ",(0,r.jsx)(n.a,{href:"https://ambari.apache.org/mail-lists.html",children:"Ambari mailing lists"})]}),"\n",(0,r.jsxs)(n.li,{children:["File issues in the ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/projects/AMBARI",children:"Ambari JIRA"})]}),"\n",(0,r.jsxs)(n.li,{children:["Contribute to the ",(0,r.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/AMBARI/Ambari",children:"Ambari Wiki"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);