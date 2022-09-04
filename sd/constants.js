// Options the user could type in
const prompts = [
  ["hi", "hey", "hello"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["information related to pproval rocess"],
  ["new Userid and password login credentials"],
  ["forgot password"],
  ["how can generate report"],
  ["how to update faculty details"],
  ["i have made nline ayment but amount is not updated in portal."],
  ["who is chairman of aicte"],
  ["what is aishe code"],
  ["how do i edit my aicte profile"],
  ["who founded aicte"],
  ["does aicte follow ugc guidelines"],
  ["what is the role of aicte"],
  ["how can i get approval from aicte"],
  ["what happens if my college is not aicte approved but university is ugc approved"],
  ["is aicte approval mandatory"],
  ["how to delete old faculty details "],
  ["does aicte comes under ugc"],
  ["which is better ugc or aicte"],
  ["is aicte a good college"],
  ["is naac and aicte same"],
  ["what is Student ID in aicte internship"],
  ["what is institute permanent id"],
  ["is aicte a statutory body"],
  ["is aicte certificate valid"],
  ["is aicte approval necessary for government jobs"],
  ["what is ter charges of aicte"],
  ["what if ree is not aicte approved"],
  ["how can I change my institute name in aicte internship"],
  ["is ugc approval necessary"],
  ["bye"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ], 
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am AICTE chatbot"],
  ["Information related to Approval Process 2020 21 available on AICTE Website's Homepage Quick Links Approval Process 2020 21."],
  ["Please click on Sign Up link on AICTE Webportal or go to link http://portal.aicteindia.org/partnerportal_enu. User Manual for Obtaining USERNAME and PASSWORD @https://aicte-india.org/bureaus/approval/ap_2020-21"],
  ["please refer user manual for forgotten password available https://aicteindia.org/bureaus/approval/ap_2020-21"],
  ["please refer user manual for report generation to generate reports."],
  ["Please follow the user manual available  https://aicte-india.org/bureaus/approval/ap_2020-21for uploading faculty details by import method."],
  ["generally payment receipt gets updated immediately In case your payment receipt is notupdated then click on view transaction button under payment tab otherwise it will get updated in48 to 72 working hours in case it is not updated even after that please raisegrievance with transaction details transaction id generated while making the payment through online grievance Redressal form Link is available on approval process 2020-21 page."],
  ["prof anil sahasrabudhe"],
  ["identifier for a college university or standalone institution in India issued by the all india survey on higher education no label defined."],
  ["data editing in aicte web portal steps to be followed click on submit application button to submit the changes once the changes are submitted no editing will be allowed further."],
  ["the government of india constitution of the technical education committee of the central advisory board of education cabe of 1943 preparation of the sergeant report of 1944 and formation of the all india council for technical education aicte in 1945 by the government of india."],
  ["all the aicte approved institutions universities have been asked to follow aicte and university grants commission ugc guidelines issued from time to time in view of the covid 19 pandemic as per an official release."],
  ["stablished in November 1945 first as an advisory body and later on in 1987 given statutory status by an act of parliament aicte is responsible for proper planning and coordinated development of the technical education and management education system in India."],
  ["institute first go to official website of aicte url www.aicte-india.org Page 3 after login click on extension approval tab a instruction page will appear in which general instructions to be followed are listed in a sequential order for all the institutions Now the application will get open."],
  ["so if a student is joining a course that is run by a ugc approved University and the university is not aicte approved then the student shall have no fear the main object to do the course is to have a legitimate and legal degree to join a public sector or a private sector job to do higher study etc."],
  [" universities do not require prior approval of aicte to commence a new department or course and programme in technical education however Universities have obligation or duty to conform to the standards and norms laid down by the aicte."],
  ["Faculty record cannot be deleted Faculty can be marked as Duplicate or Left the Institute under HOI  Faculty Details tab."],
  ["ugc and aicte are two apex organisations that cater for the higher studies in india One of the main differences between University Grants Commission UGC and the all india council for technical education aicte is that the later one basically deals with technical education."],
  ["ugc approved is better as it wii be internationally recognised aicte is some kind of govt recognition but it will have no reciprocal approval internationally aicte approval is used be deemed universities as a money spinner for the colleges."],
  ["aicte and ugc are two the zenith regulators of our Indian education they offer quality education to all masses and have indeed done a very good job aicte was established in 1945 and on the other hand ugc was established in 1956."],
  ["these bodies will replace autonomous bodies like university grants commission ugc all india council of technical education aicte and national assessment and accreditation council naac the first vertical of heci will be the national higher education regulatory council nherc."],
  ["student shall select step2 and enter state institute permanent id first name last name roll Number provided by the institute and date of birth after entering all details click on get student id on completion of steps as above the system will display student id"],
  ["identifier number issued by AICTE the authorized organization in India which grants approval for starting and accreditation technical institutions in india No label defined."],
  ["in view of the above aicte became a statutory body through an act of parliament 52 in 1987."],
  ["aicte stands for all india council for technical education it is an advisory board which grants approval for colleges by certification the aicte certificated universities degree is valid through out the world."],
  ["you are eligible to apply for government jobs if your college is not recognised or apporoved by aicte if any college is already approved by ugc then the approval from aicte is not necessary."],
  ["required land and infrastructure are available and ready withthe Society please confirm whether we have to pay 8Lakh ter charges for both the Courses or have to pay 8lakh ter charges page 3 ans for individual course the ter charges is 8 lakh for both courses together."],
  ["so if a student is joining a course that is run by a ugc approved university and the university is not aicte approved then the student shall have no fear the main object to do the course is to have a legitimate and legal degree to join a public sector or a private sector job to do higher study etc."],
  ["navigate to the institute tab for applying for the change of institute name fill in the below details do you wish to change institute name select y from dropdown please enter new institute name provide the new name for the institute."],
  ["ugc has been established under the ministry of education for the maintenance of standards of education by higher education institutes it is mandatory for every university to get approved or recognized by the university grants commission to provide valuable and valid degree courses in India."],
  ["bye thank you"]
]

// Random for any other user input

const alternative = [
  "Try again",
  "I don't understand :("
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]