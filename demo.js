/* Demo data for the public showcase. Every company, job, person and date here is fictional. */
const rel=n=>{const d=new Date();d.setDate(d.getDate()+n);return d.toISOString().slice(0,10);};
const DEMO={
 profile:[{id:"main",firstName:"Alex",weeklyGoal:10,
  headline:"Program and learning professional where people, programs, technology and data meet",
  tracks:"A: Helping people grow (coaching, training) · B: Education & learning · C: Technical & organizing",
  preferences:"Full-time, in-office or hybrid, short commute, no evenings or weekends",
  targets:"Training, implementation, program coordination and customer success roles",
  contact:"alex@example.com",saveTo:"Resume folder (PDF only)",open:"Confirm start year for volunteer role"}],
 agents:[
  {id:"a1-profile",order:1,name:"Profile agent",role:"Keeps the master profile current and enforces the writing rules.",status:"Active",done:"Added two new stories to the story bank.",next:"Waiting on one date to confirm."},
  {id:"a2-scout",order:2,name:"Job scout",role:"Finds new postings nightly and confirms each is open on the employer's own site.",status:"Active",done:"Re-checked 14 postings overnight, closed 2 that expired, and added 4 new verified jobs.",next:"Tonight: training roles within 15 minutes of home."},
  {id:"a3-research",order:3,name:"Company researcher",role:"Watches target companies and writes a one-line research note.",status:"Active",done:"Found a new Training Coordinator role at Northwind Learning.",next:"Check Cedar Ridge Builders' new careers page."},
  {id:"a4-apply",order:4,name:"Application assistant",role:"Tailors a resume and cover letter for every job you approve.",status:"Active",done:"Prepared 2 applications as PDFs.",next:"One approval waiting for files.",suggestion:"Apply to the Northwind Learning role next: it's the best fit and closes Friday."},
  {id:"a5-network",order:5,name:"Networking agent",role:"Suggests warm introductions and drafts short notes you send yourself.",status:"Active",done:"Drafted notes to two former colleagues.",next:"Follow up with Jordan after the intro."},
  {id:"a6-tracker",order:6,name:"Application tracker",role:"Tracks every application and drafts follow-ups on time.",status:"Active",done:"Tracking 6 applications: 3 applied, 2 ready to apply, 1 interviewing.",next:"Two follow-ups due next week."}],
 jobs:[
  {id:"j1",title:"Training Coordinator",employer:"Northwind Learning",place:"Herndon, VA (hybrid)",commute:10,pay:"$62K–$74K",track:"A",fit:"Strong",stage:"Found",batch:rel(-1),verifiedOn:rel(0),rec:"Apply",order:1,link:"#",recWhy:"Training logistics, LMS reporting and facilitation, 10 minutes from home. Your teaching and dashboard work line up closely.",research:["Lead with the staff-onboarding program you built.","Say you'd learn their LMS quickly rather than claim it."],useFiles:"Training & Data resume",why:"Coordinate training calendars, enrollments and reports.",watch:"Asks for 2+ years coordinating training."},
  {id:"j2",title:"Implementation Specialist",employer:"Bluefern Software",place:"Reston, VA (hybrid)",commute:5,pay:"$70K–$85K",track:"C",fit:"Good",stage:"Found",batch:rel(-2),verifiedOn:rel(0),rec:"Apply",order:2,link:"#",recWhy:"Onboarding new customers onto software: requirements, data imports and training. Uses both your technical and teaching sides.",research:["Frame your system rollout across 29 countries as implementation."],useFiles:"Training & Data resume",why:"Guide new customers from kickoff to launch.",watch:"Salesforce familiarity preferred."},
  {id:"j3",title:"Learning Strategist",employer:"Harbor Consulting Group",place:"McLean, VA (hybrid)",commute:20,pay:"$80K–$120K",track:"B",fit:"Stretch",stage:"Found",batch:rel(-2),verifiedOn:rel(-1),rec:"Hold",order:3,link:"#",recWhy:"Great fit for your interests, but it asks for 5+ years of formal instructional design.",research:["Ask your contact there how strict the 5-year requirement is."],useFiles:"Training & Data resume",why:"Design learning pathways for large clients.",watch:"Needs eligibility for a security clearance."},
  {id:"j4",title:"Field Assistant, Quality",employer:"Cedar Ridge Builders",place:"Chantilly, VA",commute:20,pay:"$60K–$70K",track:"C",fit:"Good",stage:"Found",batch:rel(-3),verifiedOn:rel(-1),rec:"Skip",order:4,link:"#",recWhy:"A real construction fit, but it's an entry-level field role with lots of driving.",research:[],useFiles:"",why:"Quality checks and trade coordination on new homes.",watch:"Field-based; lifting up to 40 lbs."},
  {id:"j5",title:"Program Coordinator",employer:"Brightpath Foundation",place:"Arlington, VA (hybrid)",commute:30,pay:"$58K–$66K",track:"A",fit:"Good",stage:"Applying",decision:"yes",decidedAt:rel(-1),order:1,link:"#",materials:"Resume and cover letter PDFs, plus a combined PDF (ready)",next:"Upload the combined PDF on the employer's site",verifiedOn:rel(0)},
  {id:"j6",title:"Customer Success Associate",employer:"Lumen Analytics",place:"Herndon, VA (hybrid)",commute:10,pay:"$65K–$78K",track:"C",fit:"Good",stage:"Applying",decision:"yes",decidedAt:rel(0),order:2,link:"#",materials:"Resume and cover letter PDFs, plus a combined PDF (ready)",next:"Upload the combined PDF on the employer's site",verifiedOn:rel(0)},
  {id:"j7",title:"Academic Success Coach",employer:"Valley State University",place:"Fairfax, VA (hybrid)",commute:25,pay:"$55K–$68K",track:"A",fit:"Strong",stage:"Interviewing",appliedOn:rel(-9),followUp:rel(5),link:"#",materials:"Combined cover letter and resume PDF",next:"Phone screen Thursday. Prep notes are in your queue."},
  {id:"j8",title:"Operations Analyst",employer:"Granite Peak Partners",place:"Tysons, VA (hybrid)",commute:15,pay:"$68K–$80K",track:"C",fit:"Good",stage:"Applied",appliedOn:rel(-4),followUp:rel(10),link:"#",materials:"Combined cover letter and resume PDF",next:"Follow up if no word by the follow-up date."},
  {id:"j9",title:"Project Coordinator",employer:"Elmstead Renovations",place:"Washington, DC",commute:40,pay:"$65K–$75K",track:"C",fit:"Good",stage:"Applied",appliedOn:rel(-2),followUp:rel(12),link:"#",materials:"Emailed the cover letter and resume to the hiring manager",next:"Follow up if no word by the follow-up date."},
  {id:"j10",title:"Corporate Trainer",employer:"Summit Health Partners",place:"Reston, VA",commute:5,pay:"$60K–$72K",track:"A",fit:"Good",stage:"Closed",closedOn:rel(-1),closedBy:"Claude",closedReason:"No longer listed on the employer's careers page.",link:"#"}],
 tasks:[
  {id:"t1",title:"Check the scout's new jobs and respond",owner:"You",daily:true,minutes:10,order:0,rec:"Open Approve it and give each new job Yes, Not now or No."},
  {id:"t2",title:"Submit your Brightpath Foundation application",owner:"You",now:true,due:rel(0),minutes:20,order:1,status:"open",createdOn:rel(-1),rec:"Upload the combined PDF from your resume folder."},
  {id:"t3",title:"Prepare for the Valley State phone screen",owner:"You",due:rel(2),minutes:30,order:2,status:"open",createdOn:rel(0),rec:"Review your three best stories and the job posting."},
  {id:"t4",title:"Follow up with Granite Peak Partners",owner:"You",due:rel(10),minutes:5,order:3,status:"open",createdOn:rel(-4),rec:"Claude drafts the note that morning."},
  {id:"t5",title:"Tailor resume & cover letter: Customer Success Associate",owner:"Claude",status:"open",order:4,note:"Preparing tonight."},
  {id:"t6",title:"Line up three professional references",owner:"You",due:rel(6),minutes:30,order:5,status:"open",createdOn:rel(-3)},
  {id:"t7",title:"Update LinkedIn headline",owner:"You",status:"done",doneAt:rel(-2)+"T10:00:00Z",order:6}],
 companies:[
  {id:"c1",order:1,name:"Northwind Learning",match:["Northwind"],where:"Herndon, VA · 10 min",why:"Training-focused company close to home.",roles:"Training coordinator, implementation",notes:"New role posted this week.",link:"#"},
  {id:"c2",order:2,name:"Valley State University",match:["Valley State"],where:"Fairfax, VA · 25 min",why:"Coaching and advising roles.",roles:"Success coach, academic advisor",notes:"Interview in progress.",link:"#"},
  {id:"c3",order:3,name:"Harbor Consulting Group",match:["Harbor"],where:"McLean, VA · 20 min",why:"Learning and change-management work.",roles:"Learning strategist",notes:"A former colleague works here.",link:"#"},
  {id:"c4",order:4,name:"Bluefern Software",match:["Bluefern"],where:"Reston, VA · 5 min",why:"Software company with an onboarding team.",roles:"Implementation, customer success",notes:"",link:"#"}],
 contacts:[
  {id:"p1",name:"Jordan Lee",org:"Harbor Consulting Group",role:"Program Manager",status:"Intro sent",why:"Former colleague; can share how the learning team hires.",next:"Ask for a 20-minute call."},
  {id:"p2",name:"Sam Ortiz",org:"Mentor",role:"Former recruiter",status:"Talked",why:"Offered introductions to three people in the area.",next:"Send the three-sentence blurb to forward."}],
 library:[
  {id:"r1",order:1,name:"Training & Data resume",use:"Training, implementation and analyst roles",file:"Resume_Training_Data.pdf",status:"Ready",updated:rel(-3)},
  {id:"r2",order:2,name:"Program & Coaching resume",use:"Coaching, advising and program roles",file:"Resume_Program_Coaching.pdf",status:"Ready",updated:rel(-3)},
  {id:"r3",order:3,name:"Project Management resume",use:"Construction and operations project roles",file:"Resume_Project_Management.pdf",status:"Ready",updated:rel(-5)}],
 messages:[
  {id:"m1",from:"Claude",text:"What year did your volunteer data role start? Two of your older resumes disagree.",createdAt:rel(-1)+"T03:10:00Z",status:"open"},
  {id:"m2",from:"You",text:"Please stop showing me roles that need a teaching license.",createdAt:rel(-2)+"T18:00:00Z",reply:"Done. I've removed licensed-teacher roles from the nightly search and noted it in your profile.",repliedAt:rel(-1)+"T03:05:00Z"}]
};
function demoDb(){
  const store=JSON.parse(JSON.stringify(DEMO)), L={};
  const emit=c=>(L[c]||[]).forEach(cb=>cb({docs:(store[c]||[]).map(x=>({id:x.id,data:()=>{const {id,...r}=x;return r;}}))}));
  return {collection:c=>({
    onSnapshot:cb=>{(L[c]=L[c]||[]).push(cb);emit(c);return()=>{};},
    doc:id=>({update:async p=>{const d=(store[c]||[]).find(x=>x.id===id);if(d)Object.assign(d,p);emit(c);},
              set:async p=>{store[c]=store[c]||[];const i=store[c].findIndex(x=>x.id===id);const v={id,...p};if(i>=0)store[c][i]=v;else store[c].push(v);emit(c);}}),
    add:async p=>{store[c]=store[c]||[];store[c].push({id:"d"+Date.now(),...p});emit(c);}})};
}
