"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[55],{28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function t(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:a},e.children)}},72131:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ambari-dev/verifying-release-candidate","title":"Verifying Release Candidate","description":"Apache Release Process","source":"@site/versioned_docs/version-2.7.6/ambari-dev/verifying-release-candidate.md","sourceDirName":"ambari-dev","slug":"/ambari-dev/verifying-release-candidate","permalink":"/docs/2.7.6/ambari-dev/verifying-release-candidate","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.6/ambari-dev/verifying-release-candidate.md","tags":[],"version":"2.7.6","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Feature Flags","permalink":"/docs/2.7.6/ambari-dev/feature-flags"},"next":{"title":"Ambari Plugin Contributions","permalink":"/docs/2.7.6/ambari-plugin-contribution/"}}');var i=n(74848),r=n(28453);const t={},l="Verifying Release Candidate",d={},c=[{value:"Verify hashes and signature",id:"verify-hashes-and-signature",level:2},{value:"Compiling the code",id:"compiling-the-code",level:2},{value:"Install mvn",id:"install-mvn",level:3},{value:"Install java",id:"install-java",level:3},{value:"Install packages",id:"install-packages",level:3},{value:"Install python tools",id:"install-python-tools",level:3},{value:"Additional steps",id:"additional-steps",level:3},{value:"Compile the code",id:"compile-the-code",level:3}];function o(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"verifying-release-candidate",children:"Verifying Release Candidate"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.a,{href:"http://www.apache.org/dev/release-publishing",children:"Apache Release Process"})}),"\n",(0,i.jsxs)(a.p,{children:["The steps are based on what is needed on a fresh centos6 VM created based on ",(0,i.jsx)(a.a,{href:"/docs/2.7.6/quick-start/quick-start-guide",children:"Quick Start Guide"})]}),"\n",(0,i.jsx)(a.h2,{id:"verify-hashes-and-signature",children:"Verify hashes and signature"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"mkdir -p /usr/work/ambari\npushd /usr/work/ambari\n"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Download the src tarball, asc signature, and md5/sha1 hashes."})}),"\n",(0,i.jsx)(a.p,{children:"Verify the hashes"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{children:"openssl md5 apache-ambari-2.4.1-src.tar.gz | diff apache-ambari-2.4.1-src.tar.gz.md5 -\nopenssl sha1 apache-ambari-2.4.1-src.tar.gz | diff apache-ambari-2.4.1-src.tar.gz.sha1 -\n"})}),"\n",(0,i.jsx)(a.p,{children:"Verify the signature"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"gpg --keyserver pgpkeys.mit.edu --recv-key <key ID>\ngpg apache-ambari-2.4.1-src.tar.gz.asc\n"})}),"\n",(0,i.jsx)(a.h2,{id:"compiling-the-code",children:"Compiling the code"}),"\n",(0,i.jsx)(a.p,{children:"If you are verifying the release on a clean machine (e.g. freshly installed VM) then you need to run several preparatory step."}),"\n",(0,i.jsx)(a.h3,{id:"install-mvn",children:"Install mvn"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"mkdir /usr/local/apache-maven\ncd /usr/local/apache-maven\nwget http://mirror.olnevhost.net/pub/apache/maven/binaries/apache-maven-3.2.1-bin.tar.gz\ntar -xvf apache-maven-3.2.1-bin.tar.gz\nexport M2_HOME=/usr/local/apache-maven/apache-maven-3.2.1\nexport M2=$M2_HOME/bin\nexport PATH=$M2:$PATH\n"})}),"\n",(0,i.jsx)(a.h3,{id:"install-java",children:"Install java"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'mkdir /usr/jdk\ncd /usr/jdk\ncp "FROM SOURCE"/jdk-7u67-linux-x64.tar.gz . (or download the latest)\ntar -xvf jdk-7u67-linux-x64.tar.gz\nexport PATH=$PATH:/usr/jdk/jdk1.7.0_67/bin\nexport JAVA_HOME=/usr/jdk/jdk1.7.0_67\nexport _JAVA_OPTIONS="-Xmx2048m -XX:MaxPermSize=1024m -Djava.awt.headless=true"\n'})}),"\n",(0,i.jsx)(a.h3,{id:"install-packages",children:"Install packages"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"yum install -y git\ncurl --silent --location https://rpm.nodesource.com/setup | bash -\nyum install -y nodejs\nyum install -y gcc-c++ make\nnpm install -g brunch@1.7.20\nyum install -y libfreetype.so.6\nyum install -y freetype\nyum install -y fontconfig\nyum install -y python-devel\nyum install -y rpm-build\n"})}),"\n",(0,i.jsx)(a.h3,{id:"install-python-tools",children:"Install python tools"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"wget http://pypi.python.org/packages/2.6/s/setuptools/setuptools-0.6c11-py2.6.egg --no-check-certificate\n\nsh setuptools-0.6c11-py2.6.egg\n"})}),"\n",(0,i.jsx)(a.h3,{id:"additional-steps",children:"Additional steps"}),"\n",(0,i.jsx)(a.p,{children:"These steps may not be needed in every environment. You can either perform these steps before build or after, and if, you encounter specific errors."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:"Install pom files needed by ambari-metrics-kafka-sink"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'mkdir /tmp/pom-files\npushd /tmp/pom-files\ncp "FROM SOURCE"/jms-1.1.pom .\ncp "FROM SOURCE"/jmxri-1.2.1.pom .\ncp "FROM SOURCE"/jmxtools-1.2.1.pom .\nmvn install:install-file -Dfile=jmxri-1.2.1.pom -DgroupId=com.sun.jmx -DartifactId=jmxri -Dversion=1.2.1 -Dpackaging=jar\nmvn install:install-file -Dfile=jms-1.1.pom -DgroupId=javax.jms -DartifactId=jms -Dversion=1.1 -Dpackaging=jar\nmvn install:install-file -Dfile=jmxtools-1.2.1.pom -DgroupId=com.sun.jdmk -DartifactId=jmxtools -Dversion=1.2.1 -Dpackaging=jar\npopd\n'})}),"\n",(0,i.jsx)(a.h3,{id:"compile-the-code",children:"Compile the code"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"pushd /usr/work/ambari\ntar -xvf apache-ambari-2.4.1-src.tar.gz\ncd apache-ambari-2.4.1-src\nmvn clean install -DskipTests\n"})})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);