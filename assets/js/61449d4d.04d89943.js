"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[8695],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}},42136:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"ambari-dev/development-process-for-new-major-features","title":"Development Process for New Major Features","description":"Goals","source":"@site/versioned_docs/version-2.7.5/ambari-dev/development-process-for-new-major-features.md","sourceDirName":"ambari-dev","slug":"/ambari-dev/development-process-for-new-major-features","permalink":"/docs/2.7.5/ambari-dev/development-process-for-new-major-features","draft":false,"unlisted":false,"editUrl":"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.5/ambari-dev/development-process-for-new-major-features.md","tags":[],"version":"2.7.5","frontMatter":{},"sidebar":"ambariSidebar","previous":{"title":"Ambari Development","permalink":"/docs/2.7.5/ambari-dev/"},"next":{"title":"Ambari Code Layout","permalink":"/docs/2.7.5/ambari-dev/ambari-code-layout"}}');var a=r(74848),i=r(28453);const s={},o="Development Process for New Major Features",c={},l=[{value:"Goals",id:"goals",level:2},{value:"Process",id:"process",level:2},{value:"Feature Branches",id:"feature-branches",level:2},{value:"Feature Flags",id:"feature-flags",level:2},{value:"Contribution Flow",id:"contribution-flow",level:2},{value:"Git Feature Branches",id:"git-feature-branches",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Drawbacks",id:"drawbacks",level:3},{value:"Guidelines to Follow",id:"guidelines-to-follow",level:3},{value:"Approach",id:"approach",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"development-process-for-new-major-features",children:"Development Process for New Major Features"})}),"\n",(0,a.jsx)(n.h2,{id:"goals",children:"Goals"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Make it clear to the community of new feature development happening at a high level"}),"\n",(0,a.jsx)(n.li,{children:"Make it easier to correlate features with JIRAs"}),"\n",(0,a.jsx)(n.li,{children:"Make it easier to track progress for features in development"}),"\n",(0,a.jsx)(n.li,{children:"Make it easier to understand estimated release schedule for features in development"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"process",children:"Process"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['Create a JIRA of type "Epic" for the new feature in ',(0,a.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/AMBARI",children:"Apache Ambari JIRA"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Add the feature to the ",(0,a.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=30755705",children:"Features + Roadmap"})," wiki and link it to the Epic created"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The Epic should contain a high-level description that is easy to understand"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"The Epic should also contain the initial, detailed design (this can be in the form of a shared Google Doc for ease of collaboration,Word doc, pdf, etc)"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Once the initial design is posted, announce to the dev mailing list to elicit feedback (Subject: [DISCUSS] ",(0,a.jsx)(n.em,{children:"Epic Name"}),". Be sure include a link to the Epic JIRA in the body).It is recommended to ask for review feedback to be given by a certain date so that the review process does not drag on."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Iterate on the design based on community feedback. Incorporate multiple review cycles as needed."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Once the design is finalized, break it down into Tasks that are linked to the Epic"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"(Nice to have) Once the Tasks are defined, schedule them into sprints using the Agile Board so that it's easy to see who is working on what/when, what tasks remain but unassigned so the community can pick up work from the backlog, etc."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"feature-branches",children:"Feature Branches"}),"\n",(0,a.jsx)(n.p,{children:"The use of feature branches allows for the large, potentially destabilizing changes to be made without affecting the stability of the trunk."}),"\n",(0,a.jsx)(n.h2,{id:"feature-flags",children:"Feature Flags"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Sometimes, we want to have the ability for the users to experiment with a new feature, but not make expose it as a general feature since it has not gone through rigorous testing. In other cases, we want to provide an escape hatch for certain edge-case scenarios that we may not want to expose in general because using the escape hatch is potentially dangerous and should only be reserved special occasions. For these purposes, Ambari has a notion of ",(0,a.jsx)(n.strong,{children:"feature flags"}),". Make use of Feature Flags when adding new features that follow under these categories. ",(0,a.jsx)(n.a,{href:"/docs/2.7.5/ambari-dev/feature-flags",children:"Feature Flags"})," has more details on this."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"contribution-flow",children:"Contribution Flow"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1hz7qjGKkNeckMibEs67ZmAa2kxjie0zkG6H_IiC2RgA/edit?pli=1",children:"https://docs.google.com/document/d/1hz7qjGKkNeckMibEs67ZmAa2kxjie0zkG6H_IiC2RgA/edit?pli=1"})}),"\n",(0,a.jsx)(n.h2,{id:"git-feature-branches",children:"Git Feature Branches"}),"\n",(0,a.jsxs)(n.p,{children:["The Git feature branch workflow is a simple, yet powerful way to develop new features in an encapsulated environment while at the same time fostering collaboration within the community. The idea is create short-lived branches where new development will take place and eventually merge the completed feature branch back into ",(0,a.jsx)(n.code,{children:"trunk"}),". A short-lived branch could mean anywhere from several days to several months depending on the extent of the feature and how often the branch is merged back into ",(0,a.jsx)(n.code,{children:"trunk"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Feature branches are also useful for changes which are not necessarily considered to be new features. They can be for proof-of-concept changes or architectural changes which have the likelihood of destabilizing ",(0,a.jsx)(n.code,{children:"trunk"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"benefits",children:"Benefits"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Allows incremental work to proceed without destabilizing the main trunk of source control."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Smaller commits means smaller and clearer code reviews."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Each code review is not required to be fully functional allowing a more agile approach to gathering feedback on the progress of the feature."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Maintains Git history and allows for code to be backed out easily after merging."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Requires frequent merges from ",(0,a.jsx)(n.code,{children:"trunk"})," into your feature branch to keep merge conflicts to a minimum."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"May require periodic merges of the feature branch back into trunk during development to help mitigate frequent merge conflicts."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"No continuous integration coverage on feature branches. Although this is not really a drawback since most feature branches will break some aspects of CI in the early stages of the feature."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"guidelines-to-follow",children:"Guidelines to Follow"}),"\n",(0,a.jsx)(n.p,{children:"The following simple rules can help in keeping Ambari's approach to feature branch development simple and consistent."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["When creating a feature branch, it should be given a meaningful name. Acceptable names include either the name of the feature or the name of the Ambari JIRA. The branch should also always start with the text ",(0,a.jsx)(n.code,{children:"branch-feature-"}),". Some examples of properly named feature branches include:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"branch-feature-patch-upgrades"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"branch-feature-AMBARI-12345"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Every commit in your feature branch should have an associated ",(0,a.jsx)(n.code,{children:"AMBARI-XXXXX"})," JIRA. This way, when your branch is merged back into trunk, the commit history follows Ambari's conventions."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Merge frequently from trunk into your branch to keep your branch up-to-date and lessen the number of potential merge conflicts."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Do ",(0,a.jsx)(n.strong,{children:"NOT"})," squash commits. Every commit in your feature branch must have an ",(0,a.jsx)(n.code,{children:"AMBARI-XXXXX"})," association with it."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Once a feature has been completed and the branch has been merged into trunk, the branch can be safely removed. Feature branches should only exist while the work is still in progress."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"approach",children:"Approach"}),"\n",(0,a.jsx)(n.p,{children:"The following steps outline the lifecycle of a feature branch. You'll notice that once the feature has been completed and merged back into trunk, the feature branch is deleted. This is an important step to keep the git branch listing as clean as possible."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"$ git checkout -b branch-feature-AMBARI-12345 trunk\nSwitched to a new branch 'branch-feature-AMBARI-12345'\n\n$ git push -u origin branch-feature-AMBARI-12345\nTotal 0 (delta 0), reused 0 (delta 0)\nTo https://git-wip-us.apache.org/repos/asf/ambari.git\n * [new branch]      branch-feature-AMBARI-12345 -> branch-feature-AMBARI-12345\nBranch branch-feature-AMBARI-12345 set up to track remote branch branch-feature-AMBARI-12345 from origin by rebasing.\n\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Branch is correctly named"}),"\n",(0,a.jsx)(n.li,{children:"Branch is pushed to Apache so it can be visible to other developers"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ git checkout -b branch-feature-AMBARI-12345 trunk\nSwitched to a new branch 'branch-feature-AMBARI-12345'\n\n$ git add\n$ git commit -m 'AMBARI-28375 - Some Change (me)'\n\n$ git add\n$ git commit -m 'AMBARI-28499 - Another Change (me)'\n\n$ git push\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Each commit to the feature branch has its own AMBARI-XXXXX JIRA"}),"\n",(0,a.jsx)(n.li,{children:"Multiple commits are allowed before pushing the changes to the feature branch"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ git checkout branch-feature-AMBARI-12345\nSwitched to branch 'branch-feature-AMBARI-18456'\n\n$ git merge trunk\nUpdating ed28ff4..3ab2a7c\nFast-forward\n ambari-server/include.xml | 0\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 ambari-server/include.xml\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Merging trunk into the feature branch often (daily, hourly) allows for faster and easier merge conflict resolution"}),"\n",(0,a.jsx)(n.li,{children:'Fast-forwards are OK here since trunk is always the source of truth and we don\'t need extra "merge" commits in the feature branch'}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ git checkout trunk\nSwitched to branch 'trunk'\n\n$ git merge --no-ff branch-feature-AMBARI-12345\nUpdating ed28ff4..3ab2a7c\n ambari-server/include.xml | 0\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 ambari-server/include.xml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Notice that the ",(0,a.jsx)(n.code,{children:"--no-ff"})," option was provided when merging back into ",(0,a.jsx)(n.code,{children:"trunk"}),'. This is to ensure that an additional "merge" commit is created which references all feature branch commits. With this single merge commit, the entire merge can be easily backed out if a problem was discovered which destabilized trunk.']}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'The feature is merged successfully with a "merge" commit back to trunk'}),"\n",(0,a.jsx)(n.li,{children:"This can be done multiple times during the course of the feature development as long as the code merged back to trunk is stable"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ git checkout trunk\nSwitched to branch 'trunk'\n\n$ git branch -d branch-feature-AMBARI-12345\nDeleted branch branch-feature-AMBARI-12345 (was ed28ff4).\n\n$ git push origin --delete branch-feature-AMBARI-12345\nTo https://git-wip-us.apache.org/repos/asf/ambari.git\n - [deleted]         branch-feature-AMBARI-12345\n\n$ git remote update origin --prune\nFetching origin\nFrom https://git-wip-us.apache.org/repos/asf/ambari\n x [deleted]         (none)     -> branch-feature-AMBARI-56789\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Cleanup the branch when done, both locally and remotely"}),"\n",(0,a.jsx)(n.li,{children:"Prune your local branches which no longer track remote branches"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);