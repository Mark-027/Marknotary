// NYC Public Notary Exam - 40 QCM Questions
// Based on NYS Department of State Notary Public guidelines

const QUESTIONS = [
  {
    id: 1,
    question: "What is the maximum fee a notary public may charge for administering an oath or taking an acknowledgment in New York?",
    options: ["$1.00", "$2.00", "$5.00", "$10.00"],
    correct: 1,
    explanation: "A notary public may charge a fee of $2.00 for administering an oath or affirmation or for taking an acknowledgment or proof of execution. Unless otherwise authorized by law, a notarial fee may not exceed this amount."
  },
  {
    id: 2,
    question: "Who is exempt from taking the notary public examination in New York?",
    options: [
      "Real estate agents",
      "NYS attorneys and court clerks of the Unified Court System",
      "County clerks",
      "Paralegals with 5+ years experience"
    ],
    correct: 1,
    explanation: "NYS attorneys and court clerks of the Unified Court System (appointed after Civil Service promotional examination) may be appointed a notary public without examination. They are not exempt from the application fee."
  },
  {
    id: 3,
    question: "How long is a notary public commission valid in New York State?",
    options: ["2 years", "3 years", "4 years", "5 years"],
    correct: 2,
    explanation: "The notary public commission is valid for four years in New York State."
  },
  {
    id: 4,
    question: "What happens to a document notarized by someone who was not actually commissioned as a notary public?",
    options: [
      "The document is automatically invalid",
      "The document may still be valid under Executive Law Section 142-a",
      "The signer must re-sign before a real notary",
      "The document is void and cannot be used"
    ],
    correct: 1,
    explanation: "Executive Law Section 142-a provides that a document notarized by a person who was not commissioned as a notary public will not be deemed invalid because of that fact alone. Consult an attorney for specific situations."
  },
  {
    id: 5,
    question: "What role does the County Clerk play regarding notaries public?",
    options: [
      "Issues the notary commission",
      "Maintains records of the commission and signature; public may verify official signature there",
      "Administers the notary exam",
      "Collects notary application fees"
    ],
    correct: 1,
    explanation: "The Secretary of State forwards the commission and signature to the county clerk of the notary's residence. The county clerk maintains the record, and the public may verify the official signature at the county clerk's office."
  },
  {
    id: 6,
    question: "Can a person convicted of a felony become a notary public in New York?",
    options: [
      "Yes, after 5 years",
      "Generally no, unless they obtain an executive pardon, certificate of relief from disabilities, or certificate of good conduct",
      "Yes, if the conviction was in another state",
      "No, under any circumstances"
    ],
    correct: 1,
    explanation: "Generally, a person convicted of a felony cannot be appointed. However, with an executive pardon, certificate of relief from disabilities, or certificate of good conduct from the parole board, they may be considered."
  },
  {
    id: 7,
    question: "What is the fee for the initial notary public application in New York?",
    options: ["$15", "$30", "$60", "$100"],
    correct: 2,
    explanation: "The initial application fee is $60. The written exam fee is $15."
  },
  {
    id: 8,
    question: "Which of the following is a notarial function in New York?",
    options: [
      "Preparing legal documents for clients",
      "Giving legal advice",
      "Receiving and certifying acknowledgments of deeds and powers of attorney",
      "Witnessing wills without the presence of an attorney"
    ],
    correct: 2,
    explanation: "Notaries may receive and certifying acknowledgments of written instruments such as deeds, mortgages, and powers of attorney. They may also administer oaths, take affidavits, and protest bills of exchange."
  },
  {
    id: 9,
    question: "Is Remote Ink Notarization (RIN) permitted in New York State?",
    options: [
      "Yes, it is the preferred method",
      "No, it was repealed effective January 31, 2023",
      "Yes, only for out-of-state signers",
      "Yes, only during emergencies"
    ],
    correct: 1,
    explanation: "RIN was permitted during COVID-19 and by temporary statute. As of January 31, 2023, only electronic notarization is permitted in New York State."
  },
  {
    id: 10,
    question: "How much may an Electronic Notary charge per electronic notarial act?",
    options: ["$2.00", "$5.00", "$15.00", "Up to $25.00"],
    correct: 3,
    explanation: "An Electronic Notary may charge up to $25.00 per electronic notarial act. A certificate of authenticity (papering out) is a separate notarial act for which $2.00 may be charged."
  },
  {
    id: 11,
    question: "Are notaries required to keep a journal in New York?",
    options: [
      "No, it is optional",
      "Yes, only electronic notaries",
      "Yes, all notaries must keep a journal (effective January 25, 2023)",
      "Only for acknowledgments, not oaths"
    ],
    correct: 2,
    explanation: "Beginning January 25, 2023, all notaries—including traditional in-person only—must keep a journal of all notarial acts for 10 years. Electronic notaries must also maintain audio/video recordings."
  },
  {
    id: 12,
    question: "What must the notary include in the journal for each notarial act?",
    options: [
      "Only the date and type of act",
      "Date, time, type of act, names/addresses of individuals, type of credential used, verification procedures",
      "Only the signer's name",
      "A copy of the document"
    ],
    correct: 1,
    explanation: "The journal must include: date and approximate time, type of act, name and address of individuals, number and type of services, type of credential used, and verification procedures."
  },
  {
    id: 13,
    question: "For how long must electronic notaries retain audio-video recordings of electronic notarial acts?",
    options: ["1 year", "3 years", "5 years", "Minimum 10 years"],
    correct: 3,
    explanation: "Electronic notaries must make and keep an audio-visual recording of electronic notarizations with a backup, retained for a minimum of 10 years."
  },
  {
    id: 14,
    question: "Where must the notary be physically located when performing an electronic notarization?",
    options: [
      "Anywhere in the United States",
      "Within the State of New York",
      "In the same county as the signer",
      "In the same room as the signer"
    ],
    correct: 1,
    explanation: "The notary public must be physically located within the State of New York at the time of the electronic notarization. The signer may be anywhere."
  },
  {
    id: 15,
    question: "What is 'credential analysis' in electronic notarization?",
    options: [
      "A background check on the signer",
      "A process where a third-party validates a government-issued ID through data sources",
      "Verification of the notary's credentials",
      "Analysis of the document being notarized"
    ],
    correct: 1,
    explanation: "Credential analysis validates the authenticity of the principal's government-issued identification through review of public and proprietary data sources."
  },
  {
    id: 16,
    question: "What is 'identity proofing'?",
    options: [
      "Checking the signer's credit score",
      "A process where a third party confirms the identity of the signer through personal information from data sources",
      "Verifying the notary's identity",
      "Taking a fingerprint of the signer"
    ],
    correct: 1,
    explanation: "Identity proofing confirms the identity of the individual principal through review of personal information from public and proprietary data sources."
  },
  {
    id: 17,
    question: "What is 'papering out'?",
    options: [
      "Printing the document before notarization",
      "A process where the notary certifies that a paper copy of an electronically notarized document is accurate",
      "Sending documents by mail",
      "Destroying paper records after scanning"
    ],
    correct: 1,
    explanation: "Papering out is when the notary executes a certificate of authenticity stating that a tangible copy of an electronically notarized document is an accurate copy of the electronic record."
  },
  {
    id: 18,
    question: "What statement must be added to the jurat for remote online electronic notarizations?",
    options: [
      "The signer appeared in person",
      "This electronic notarial act involved a remote online appearance involving the use of communication technology",
      "The document was signed electronically",
      "Identity was verified by credential analysis"
    ],
    correct: 1,
    explanation: "For electronic notarial acts performed remotely, the jurat must expressly state that the person appeared through use of communication technology."
  },
  {
    id: 19,
    question: "What fee is charged for a change of name or address on a notary license?",
    options: ["$5", "$10", "$15", "No fee"],
    correct: 1,
    explanation: "A change of personal name or address form requires a $10 fee, except when the name change is due to marital status."
  },
  {
    id: 20,
    question: "If a notary changes their name during their commission, how must they sign notarizations?",
    options: [
      "Using their new name immediately",
      "Using the name under which they were commissioned for the remainder of the term",
      "Either name is acceptable",
      "They must apply for a new commission"
    ],
    correct: 1,
    explanation: "A notary must continue to notarize using the name under which they were commissioned throughout the remainder of their term, even after a legal name change."
  },
  {
    id: 21,
    question: "How long are notary exam results valid?",
    options: ["6 months", "1 year", "2 years", "5 years"],
    correct: 2,
    explanation: "Exam results are valid for two years only. Applicants must apply for their commission within that period."
  },
  {
    id: 22,
    question: "Does a notary receive an identification card upon approval?",
    options: [
      "No, only a certificate",
      "Yes, indicating name, address, county, and commission term",
      "Only upon request",
      "Only for electronic notaries"
    ],
    correct: 1,
    explanation: "Upon approval, the Department issues an identification card with the notary's name, address, county, and commission term."
  },
  {
    id: 23,
    question: "Can a traditional notary change to an electronic notary without a new application?",
    options: [
      "Yes, by paying a fee",
      "No, they must apply for an electronic notary commission; the traditional license is then cancelled",
      "Yes, it's automatic",
      "Only at renewal time"
    ],
    correct: 1,
    explanation: "A traditional notary must apply for an electronic notary commission. Once the e-notary license is issued, the traditional license is automatically cancelled."
  },
  {
    id: 24,
    question: "What are the three methods an electronic notary may use to identify a remote signer?",
    options: [
      "Driver's license only, passport only, birth certificate only",
      "Personal knowledge; credential analysis and identity proofing via communication technology; oath of a witness who knows the signer",
      "Social Security number, fingerprint, photo ID",
      "Credit check, employment verification, reference letters"
    ],
    correct: 1,
    explanation: "The notary may identify the signer through: (1) personal knowledge; (2) credential analysis and identity proofing via communication technology; or (3) oath of a witness who personally knows the signer."
  },
  {
    id: 25,
    question: "Must the signer be physically in New York State for electronic notarization?",
    options: [
      "Yes, always",
      "No, the notary must be in NYS but the signer may be anywhere",
      "Yes, for real estate documents only",
      "Only for acknowledgments, not jurats"
    ],
    correct: 1,
    explanation: "The notary must be in New York State. The signer may be anywhere; if outside the US, additional verification rules apply regarding US jurisdiction."
  },
  {
    id: 26,
    question: "What must an applicant provide to become a notary public in New York?",
    options: [
      "Only the application and fee",
      "Completed application, fees, Oath of Office (sworn before a notary), and exam pass slip",
      "Application and proof of residency only",
      "Application and a character reference"
    ],
    correct: 1,
    explanation: "Applicants must submit a completed application, required fees, an Oath of Office (sworn and notarized), and a pass slip showing they passed the notary exam."
  },
  {
    id: 27,
    question: "What is the written exam fee for the notary public examination?",
    options: ["$10", "$15", "$25", "$60"],
    correct: 1,
    explanation: "The written examination fee is $15. The initial application fee is $60."
  },
  {
    id: 28,
    question: "To become a notary in New York, an applicant must:",
    options: [
      "Be a US citizen only",
      "Be a resident of NYS or have an office/place of business in NYS",
      "Have a college degree",
      "Be employed by a notary agency"
    ],
    correct: 1,
    explanation: "Applicants must be a resident of New York State or have an office or place of business in the state."
  },
  {
    id: 29,
    question: "What can a notary charge for a certificate of authenticity (papering out)?",
    options: ["$5", "$10", "$25", "$2"],
    correct: 3,
    explanation: "A certificate of authenticity for an electronically notarized document is a notarial act for which $2.00 may be charged."
  },
  {
    id: 30,
    question: "Are typed signatures accepted for an electronic notary's exemplar?",
    options: [
      "Yes, typed signatures are preferred",
      "No, the electronic signature must be a digital version of the notary's actual signature",
      "Either is acceptable",
      "Only for renewals"
    ],
    correct: 1,
    explanation: "The electronic signature must be a digital version of the notary's signature. Typed signatures are not accepted for the exemplar."
  },
  {
    id: 31,
    question: "Does the NYS Department of State recommend a particular electronic notarization platform?",
    options: [
      "Yes, they provide a list of approved platforms",
      "No, but notaries must use a provider that meets NYS requirements",
      "Yes, only one platform is certified",
      "Notaries may use any platform"
    ],
    correct: 1,
    explanation: "The Department does not recommend any provider. Notaries must use a platform that complies with NYS requirements and should obtain confirmation from the provider."
  },
  {
    id: 32,
    question: "What is the renewal fee for a notary public commission?",
    options: ["$15", "$30", "$60", "$100"],
    correct: 2,
    explanation: "The renewal application fee is $60, the same as the initial application fee."
  },
  {
    id: 33,
    question: "Which notarial acts may a New York notary perform?",
    options: [
      "Only acknowledgments",
      "Administering oaths, taking affidavits, receiving acknowledgments, protesting bills of exchange",
      "Only jurats",
      "Only for real estate documents"
    ],
    correct: 1,
    explanation: "Notaries may administer oaths and affirmations, take affidavits and depositions, receive and certify acknowledgments, and demand/protest bills of exchange."
  },
  {
    id: 34,
    question: "Why might an applicant provide a business address on the notary application?",
    options: [
      "It is required",
      "The residence address is subject to FOIL disclosure; a business address may be used for disclosure if the applicant prefers",
      "To receive mail faster",
      "Only if they work from home"
    ],
    correct: 1,
    explanation: "The application address is subject to Freedom of Information Law disclosure. Applicants who don't want their residence released may provide a business address for disclosure purposes."
  },
  {
    id: 35,
    question: "Who commissions notaries public in New York?",
    options: [
      "The County Clerk",
      "The Secretary of State",
      "The Governor",
      "The Attorney General"
    ],
    correct: 1,
    explanation: "Notaries public are commissioned by the New York Secretary of State through the Department of State."
  },
  {
    id: 36,
    question: "When did electronic notarization registration become available in New York?",
    options: ["January 2020", "February 2023", "January 2024", "July 2022"],
    correct: 1,
    explanation: "On February 1, 2023, notaries could register as Electronic Notaries with the Department of State under Executive Law Section 135-c."
  },
  {
    id: 37,
    question: "For electronic notarial acts, the notary must be able to:",
    options: [
      "Only hear the signer",
      "See and interact in real-time with the signer through audio-visual technology",
      "Receive documents by email only",
      "Use telephone verification"
    ],
    correct: 1,
    explanation: "Regardless of the signer's location, the notary must be able to see and interact in real-time with the signer through audio-visual communication technology."
  },
  {
    id: 38,
    question: "What must happen to the document before the notary applies their stamp in electronic notarization?",
    options: [
      "The signer mails the original",
      "The executed document must be transmitted to the notary; the notary must confirm it is the same document signed before applying stamp and signature",
      "The notary prints it first",
      "A witness must sign it"
    ],
    correct: 1,
    explanation: "After the signer executes the document, it must be transmitted to the notary. The notary must confirm the document is the same as the one signed before applying the stamp and signature."
  },
  {
    id: 39,
    question: "What proof is required for a name change on a notary license?",
    options: [
      "None",
      "Court order, marriage certificate, driver's license, passport, or immigration documents",
      "Only a sworn statement",
      "Social Security card only"
    ],
    correct: 1,
    explanation: "Proof of name change may include: court order, marriage certificate, driver's license, non-driver ID, valid passport, or immigration documents."
  },
  {
    id: 40,
    question: "Paper copies of electronically notarized documents must be accepted for recording when:",
    options: [
      "Never; only electronic filings are accepted",
      "The notary has certified the document through the papering out process",
      "The signer requests it",
      "Only for deeds"
    ],
    correct: 1,
    explanation: "County clerks and recording officers must accept tangible copies of electronically notarized documents that have been certified (papered out) by the notary, if otherwise eligible for recording."
  }
];
