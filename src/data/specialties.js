const specialties = [
  {
    "slug": "oncology",
    "specialty": "Oncology",
    "tagline": "Orchestrate every chemo cycle, infusion chair, and survivorship milestone — no patient left behind",
    "heroDescription": "Configural transforms oncology operations by orchestrating the entire patient journey from referral through survivorship — automating chemo cycle scheduling, filling infusion chair cancellations in minutes, and ensuring zero patients are lost to follow-up across complex multi-visit treatment protocols.",
    "description": "Oncology practices struggle with intricate multi-cycle scheduling, infusion chair underutilization from last-minute cancellations, treatment protocol timing gaps that delay care, and survivorship patients silently falling off surveillance calendars. Manual coordination across medical oncology, radiation, and surgical teams creates referral bottlenecks and lost handoffs.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — including prior authorization initiation for chemo regimens",
      "AI-driven scheduling that matches patients to optimal infusion chair slots based on regimen duration, chair availability, and nursing ratios",
      "Smart waitlist that fills infusion chair cancellations within minutes via automated SMS and voice outreach to treatment-ready patients",
      "Pre-treatment prep automation — lab order verification, anti-emetic protocols, and hydration instructions with patient compliance confirmation before each cycle",
      "Multi-channel patient engagement: cycle reminders, port-flush scheduling, lab draw confirmations, and prep instructions via SMS, voice, and portal",
      "Real-time chemotherapy symptom monitoring with AI severity assessment for neutropenic fever, nausea, and neuropathy — auto-escalation to on-call oncologist",
      "Post-treatment AI triage with 91% first-call resolution — distinguishing expected chemo side effects from emergent complications requiring ED diversion",
      "Automated survivorship surveillance — imaging, tumor markers, and follow-up visit scheduling per NCCN guidelines with zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "94%",
        "label": "Infusion chair utilization rate"
      },
      {
        "value": "3 min",
        "label": "Referral-to-scheduling turnaround"
      },
      {
        "value": "61%",
        "label": "Reduction in chemo cycle delays"
      },
      {
        "value": "0",
        "label": "Survivorship patients lost to follow-up"
      }
    ],
    "challenges": [
      "Infusion chairs sit empty after last-minute cancellations while waitlisted patients go unnotified for days",
      "Multi-cycle chemo scheduling requires manual coordination across labs, pharmacy, and nursing — delaying treatment starts",
      "Survivorship patients silently fall off surveillance calendars when reminder systems lack protocol-aware automation",
      "Referrals from surgery and radiation sit in fax queues, creating handoff gaps between oncology disciplines",
      "Pre-chemo lab verification is manual, causing same-day cancellations when bloodwork is incomplete",
      "After-hours symptom calls overwhelm on-call staff with low-acuity concerns that could be triaged automatically"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes oncology referrals with OCR extraction, verifies diagnosis codes, initiates prior auth for treatment regimens, and routes to appropriate oncology subspecialty"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-cycle chemo scheduling across chairs, nurses, and labs — fills cancellations within minutes by matching waitlisted patients to open infusion slots"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers cycle-specific prep instructions, lab reminders, and port-flush scheduling via SMS, voice, and portal — confirms compliance before each treatment visit"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-chemo symptoms in real time, triages neutropenic fever and emergent complications, and manages survivorship surveillance scheduling"
      }
    ]
  },
  {
    "slug": "multi-specialty",
    "specialty": "Multi-Specialty Groups",
    "tagline": "Unify referral routing, shared resources, and waitlists across every department in one intelligent platform",
    "heroDescription": "Configural connects the operational dots across multi-specialty groups — routing internal referrals to the right department instantly, optimizing shared resources like imaging and labs, and maintaining a unified waitlist that fills openings across specialties without manual phone-tag.",
    "description": "Multi-specialty groups face fragmented referral routing where patients bounce between departments, shared resources like imaging suites and procedure rooms sit underutilized, each department runs its own siloed waitlist, and cross-department handoffs create gaps where patients are lost between specialties.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — with intelligent routing to the correct specialty department based on diagnosis and acuity",
      "AI-driven scheduling that matches patients to optimal slots based on cross-department resource availability, provider subspecialty, and shared equipment calendars",
      "Smart unified waitlist that fills cancellations within minutes across all departments via automated SMS and voice outreach — one patient pool, many specialties",
      "Pre-treatment prep automation — department-specific instructions, cross-specialty lab consolidation, and compliance confirmation across coordinated visits",
      "Multi-channel patient engagement: consolidated reminders for multi-department visit days, prep instructions, and confirmations via SMS, voice, and portal",
      "Real-time cross-department care tracking with AI severity assessment — flagging patients who need escalation from primary care to specialist or vice versa",
      "Post-treatment AI triage with 91% first-call resolution — routing patient concerns to the correct specialty without transfer loops",
      "Automated cross-specialty surveillance — coordinating follow-up schedules across departments with zero patients lost between specialty handoffs"
    ],
    "results": [
      {
        "value": "38%",
        "label": "Reduction in internal referral leakage"
      },
      {
        "value": "91%",
        "label": "First-call triage resolution rate"
      },
      {
        "value": "22%",
        "label": "Increase in shared resource utilization"
      },
      {
        "value": "<5 min",
        "label": "Cross-department referral routing time"
      }
    ],
    "challenges": [
      "Internal referrals between departments get lost in EHR task queues, causing patients to leak to outside providers",
      "Shared resources like imaging suites and procedure rooms are underbooked because each department schedules independently",
      "Patients with multi-department visits receive conflicting prep instructions and overlapping appointment times",
      "No unified waitlist exists — a cardiology cancellation cannot be backfilled from the GI or ortho queue",
      "After-hours patient calls get routed to the wrong specialty, creating callback loops and patient frustration",
      "Cross-department follow-up ownership is unclear, and patients fall through the cracks between handoffs"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Ingests referrals from all sources, extracts clinical context via OCR, and intelligently routes to the correct specialty department based on diagnosis, acuity, and provider availability"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Manages a unified cross-department waitlist, coordinates shared resource calendars, and fills cancellations across specialties within minutes"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Consolidates multi-department visit reminders into a single patient communication stream — delivering coordinated prep instructions via SMS, voice, and portal"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Routes post-visit concerns to the correct specialty on the first call, tracks cross-department care plans, and flags patients at risk of falling between specialty handoffs"
      }
    ]
  },
  {
    "slug": "primary-care",
    "specialty": "Primary Care & FQHC",
    "tagline": "Close chronic care gaps, maximize AWV completion, and manage your entire panel — with zero patients lost",
    "heroDescription": "Configural empowers primary care and FQHC practices to proactively manage patient panels — automating Annual Wellness Visit outreach, closing chronic care management gaps, addressing SDOH barriers to scheduling, and ensuring every patient in the panel is engaged and up to date.",
    "description": "Primary care and FQHC practices are overwhelmed by large patient panels where chronic care gaps go undetected, AWV scheduling relies on manual outreach with low completion rates, social determinants of health create invisible barriers to appointment adherence, and patients quietly disengage without follow-up.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — including Medicaid eligibility re-verification and sliding-fee determination",
      "AI-driven scheduling that matches patients to optimal slots based on care gap priority, chronic condition acuity, and AWV eligibility windows",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with overdue chronic care or AWV visits",
      "Pre-treatment prep automation — medication reconciliation, preventive screening reminders, and SDOH barrier assessment with compliance confirmation",
      "Multi-channel patient engagement: AWV outreach, chronic care reminders, and transportation assistance coordination via SMS, voice, and portal in preferred language",
      "Real-time chronic condition monitoring with AI severity assessment for diabetes, hypertension, and behavioral health — flagging patients trending toward ED utilization",
      "Post-treatment AI triage with 91% first-call resolution — managing acute concerns, medication questions, and chronic disease flare-ups without unnecessary office visits",
      "Automated panel surveillance — identifying patients overdue for screenings, vaccinations, and chronic care visits with zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "73%",
        "label": "AWV completion rate improvement"
      },
      {
        "value": "42%",
        "label": "Reduction in chronic care gaps"
      },
      {
        "value": "0",
        "label": "Panel patients lost to follow-up"
      },
      {
        "value": "58%",
        "label": "Reduction in no-show rate via SDOH-aware outreach"
      }
    ],
    "challenges": [
      "Large patient panels make it impossible to manually identify who is overdue for AWVs, screenings, or chronic care visits",
      "SDOH barriers like transportation, language, and work schedules cause no-shows that standard reminders cannot address",
      "Chronic care management requires proactive outreach, but staff bandwidth is consumed by reactive same-day scheduling",
      "Medicaid re-enrollment gaps cause patients to silently lose coverage and disengage from care",
      "After-hours calls for chronic disease flare-ups overwhelm triage lines with issues resolvable through guided self-management",
      "Referrals to specialists go untracked, and patients never complete the loop back to primary care"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes referrals with OCR extraction, verifies Medicaid and sliding-fee eligibility, and flags patients with SDOH barriers that may impact scheduling"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Prioritizes scheduling by care gap severity and AWV eligibility, fills cancellations with overdue chronic care patients, and coordinates transportation when needed"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multilingual AWV outreach, chronic care reminders, and SDOH-informed messaging via SMS, voice, and portal — adapting channel and timing to patient preferences"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors chronic conditions between visits, triages after-hours concerns with guided self-management, and tracks specialist referral completion back to primary care"
      }
    ]
  },
  {
    "slug": "surgical",
    "specialty": "Surgical Practices",
    "tagline": "Maximize OR utilization, eliminate pre-op clearance delays, and track every patient from consult to recovery",
    "heroDescription": "Configural streamlines surgical practice operations by automating pre-op clearance workflows, filling OR cancellations from a surgery-ready waitlist, ensuring patients arrive fully prepped, and tracking recovery milestones through discharge — so no surgical patient is lost between consult and follow-up.",
    "description": "Surgical practices lose OR time to last-minute cancellations and incomplete pre-op clearances, pre-surgical prep compliance is inconsistent, recovery milestone tracking is manual and error-prone, and patients drop off between surgical consult and post-op follow-up without anyone noticing.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — including surgical prior authorization and pre-op clearance requirement identification",
      "AI-driven scheduling that matches patients to optimal OR slots based on procedure duration, anesthesia requirements, equipment needs, and surgeon block time",
      "Smart waitlist that fills OR cancellations within minutes via automated SMS and voice outreach to patients with completed pre-op clearance",
      "Pre-treatment prep automation — pre-op clearance tracking, NPO instructions, medication hold lists, and bowel prep verification with compliance confirmation",
      "Multi-channel patient engagement: pre-op checklists, arrival instructions, medication hold reminders, and post-op care guides via SMS, voice, and portal",
      "Real-time post-surgical symptom monitoring with AI severity assessment for wound complications, pain management, and mobility milestones",
      "Post-treatment AI triage with 91% first-call resolution — distinguishing normal post-surgical symptoms from wound infections and complications requiring intervention",
      "Automated recovery surveillance — tracking post-op milestones, wound check scheduling, PT referral completion, and return-to-activity clearance with zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "89%",
        "label": "OR utilization rate"
      },
      {
        "value": "47%",
        "label": "Reduction in day-of-surgery cancellations"
      },
      {
        "value": "3 min",
        "label": "Average waitlist-to-OR-fill time"
      },
      {
        "value": "0",
        "label": "Post-op patients lost to follow-up"
      }
    ],
    "challenges": [
      "OR blocks go unfilled when cancellations happen because waitlisted patients are not surgery-ready or cannot be reached in time",
      "Pre-op clearance involves multiple external providers, and incomplete clearance packages cause same-day surgical cancellations",
      "Patients arrive without completing NPO, medication hold, or bowel prep instructions — forcing procedure rescheduling",
      "Post-op follow-up scheduling is ad hoc, and patients miss wound checks or PT referrals without anyone tracking compliance",
      "After-hours post-surgical calls overwhelm on-call staff with concerns about normal recovery symptoms",
      "Surgical consult-to-procedure conversion rates drop when patients are not proactively engaged through the pre-op process"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes surgical referrals with OCR extraction, identifies pre-op clearance requirements, initiates prior authorization, and flags incomplete clinical documentation"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Optimizes OR block utilization, maintains a surgery-ready waitlist ranked by prep completion and acuity, and fills cancellations within minutes"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers pre-op checklists, NPO and medication hold reminders, and arrival instructions via SMS, voice, and portal — confirms compliance before surgery day"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-surgical recovery milestones, triages wound and pain concerns with AI severity assessment, and tracks PT referral and follow-up visit completion"
      }
    ]
  },
  {
    "slug": "cardiology",
    "specialty": "Cardiology",
    "tagline": "Orchestrate device follow-ups, cardiac rehab, and heart failure monitoring with zero patients falling through",
    "heroDescription": "Configural powers cardiology operations by synchronizing device monitoring follow-ups, cardiac rehab enrollment and attendance, injection and infusion scheduling, and heart failure patient surveillance — ensuring every high-risk cardiac patient stays on their care pathway.",
    "description": "Cardiology practices juggle device monitoring schedules, cardiac rehab enrollment that consistently falls short of referral volume, complex injection and infusion timing, and heart failure patients who silently decompensate between visits because follow-up systems are fragmented and reactive.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — including device type identification and cardiac rehab eligibility screening",
      "AI-driven scheduling that matches patients to optimal slots based on device interrogation intervals, rehab session sequencing, and injection timing windows",
      "Smart waitlist that fills cardiac rehab and imaging cancellations within minutes via automated SMS and voice outreach to eligible patients",
      "Pre-treatment prep automation — fasting instructions for lipid panels, medication hold protocols for stress tests, and device interrogation preparation with compliance confirmation",
      "Multi-channel patient engagement: device follow-up reminders, cardiac rehab attendance nudges, and medication adherence check-ins via SMS, voice, and portal",
      "Real-time heart failure symptom monitoring with AI severity assessment — tracking weight trends, dyspnea progression, and fluid retention for early intervention",
      "Post-treatment AI triage with 91% first-call resolution — differentiating stable angina from acute coronary concerns and managing post-procedure recovery questions",
      "Automated cardiac surveillance — device interrogation scheduling, rehab completion tracking, and heart failure readmission prevention with zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "68%",
        "label": "Increase in cardiac rehab enrollment completion"
      },
      {
        "value": "41%",
        "label": "Reduction in heart failure readmissions"
      },
      {
        "value": "0",
        "label": "Device patients with missed interrogation windows"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-procedure triage"
      }
    ],
    "challenges": [
      "Cardiac rehab referrals convert at low rates because enrollment outreach is manual and patients are not engaged promptly after discharge",
      "Device monitoring follow-ups are tracked on spreadsheets, and patients silently miss interrogation windows without alerts",
      "Heart failure patients decompensate between visits because weight and symptom trends are not monitored proactively",
      "Stress test and echo scheduling requires fasting and medication hold compliance that is rarely confirmed before arrival",
      "Post-catheterization and post-ablation patients call after hours with access-site concerns that could be triaged automatically",
      "Injection scheduling for PCSK9 inhibitors and other cardiac biologics requires precise timing that manual systems cannot reliably maintain"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes cardiac referrals with OCR extraction, identifies device types and interrogation schedules, screens for cardiac rehab eligibility, and initiates prior authorization"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates device follow-ups, rehab sessions, and injection timing — fills imaging and rehab cancellations from a prioritized waitlist within minutes"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Drives cardiac rehab attendance, medication adherence, and device follow-up compliance via multi-channel outreach with escalating engagement intensity"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors heart failure symptoms and weight trends in real time, triages post-procedure concerns with AI severity scoring, and tracks rehab completion milestones"
      }
    ]
  },
  {
    "slug": "gastroenterology",
    "specialty": "Gastroenterology",
    "tagline": "Maximize procedure throughput, perfect colonoscopy prep compliance, and never lose a surveillance patient",
    "heroDescription": "Configural transforms GI practice operations by automating colonoscopy prep delivery and compliance verification, filling procedure suite cancellations instantly, managing IBD therapy scheduling, and maintaining airtight surveillance calendars so no polyp patient is ever lost to follow-up.",
    "description": "Gastroenterology practices lose procedure slots to inadequate bowel prep and last-minute cancellations, IBD patients on biologic therapies require precise scheduling that manual systems fail to maintain, and surveillance colonoscopy patients silently fall off follow-up calendars — creating clinical risk and revenue loss.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — including procedure-specific prior authorization and prep protocol assignment",
      "AI-driven scheduling that matches patients to optimal procedure slots based on prep type, sedation requirements, scope duration estimates, and physician throughput patterns",
      "Smart waitlist that fills procedure suite cancellations within minutes via automated SMS and voice outreach to prep-compliant patients ready for next-day scheduling",
      "Pre-treatment prep automation — split-dose bowel prep instructions, clear liquid diet timing, medication hold protocols, and prep compliance verification before procedure day",
      "Multi-channel patient engagement: step-by-step prep delivery, hydration reminders, dietary restrictions, and arrival instructions via SMS, voice, and portal",
      "Real-time IBD symptom monitoring with AI severity assessment — tracking flare frequency, stool patterns, and biologic response for timely dose adjustments",
      "Post-treatment AI triage with 91% first-call resolution — managing post-polypectomy bleeding concerns, bloating, and sedation recovery questions",
      "Automated surveillance scheduling — polyp-based interval calculation per guideline, IBD dysplasia monitoring, and recall outreach with zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "34%",
        "label": "Reduction in inadequate bowel prep rates"
      },
      {
        "value": "96%",
        "label": "Surveillance colonoscopy recall compliance"
      },
      {
        "value": "<4 min",
        "label": "Procedure slot cancellation backfill time"
      },
      {
        "value": "0",
        "label": "Surveillance patients lost to follow-up"
      }
    ],
    "challenges": [
      "Inadequate bowel prep causes same-day procedure cancellations and repeat visits — wasting suite time and frustrating patients",
      "Surveillance colonoscopy intervals vary by pathology, and patients fall off recall calendars when tracking is manual",
      "IBD patients on biologic infusions require precise timing, and missed doses lead to flares and loss of therapeutic response",
      "Procedure suite cancellations go unfilled because waitlisted patients have not completed prep or cannot be reached quickly",
      "Post-polypectomy patients call after hours with bleeding and pain concerns that overwhelm on-call GI providers",
      "Referrals for screening colonoscopies sit unscheduled for weeks because outreach to asymptomatic patients is deprioritized"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes GI referrals with OCR extraction, assigns procedure-specific prep protocols, initiates prior authorization, and identifies surveillance interval requirements from pathology history"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Optimizes procedure suite throughput, maintains a prep-verified waitlist for rapid cancellation backfill, and coordinates biologic infusion timing for IBD patients"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers timed bowel prep instructions, hydration reminders, and dietary restrictions via multi-channel outreach — verifies prep compliance the evening before and morning of procedure"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages post-polypectomy complications with AI severity scoring, monitors IBD flare patterns between visits, and automates guideline-based surveillance recall scheduling"
      }
    ]
  },
  {
    "slug": "orthopedics",
    "specialty": "Orthopedics",
    "tagline": "Match patients to the right subspecialist, fill surgical slots fast, and track every recovery milestone",
    "heroDescription": "Configural orchestrates orthopedic operations by routing patients to the correct subspecialist on the first referral, filling surgical and imaging cancellations from a ready waitlist, automating pre-op and PT coordination, and tracking recovery milestones from injury through return to activity.",
    "description": "Orthopedic practices lose efficiency when referrals land with the wrong subspecialist, surgical and MRI slots go unfilled after cancellations, pre-op clearance and PT referral completion are untracked, and post-surgical patients miss critical recovery milestones because follow-up coordination is manual.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — with AI-powered routing to the correct orthopedic subspecialist (spine, sports, joints, hand, foot/ankle)",
      "AI-driven scheduling that matches patients to optimal slots based on subspecialty, imaging requirements, surgical complexity, and post-op PT coordination needs",
      "Smart waitlist that fills MRI, surgical, and injection appointment cancellations within minutes via automated SMS and voice outreach",
      "Pre-treatment prep automation — pre-op clearance tracking, imaging completion verification, PT pre-hab instructions, and home preparation checklists with compliance confirmation",
      "Multi-channel patient engagement: pre-op instructions, post-op exercise videos, PT appointment reminders, and brace/DME coordination via SMS, voice, and portal",
      "Real-time post-surgical symptom monitoring with AI severity assessment — tracking pain trajectories, swelling, range of motion milestones, and wound healing",
      "Post-treatment AI triage with 91% first-call resolution — differentiating normal post-operative pain and swelling from DVT, infection, and hardware complications",
      "Automated recovery surveillance — PT completion tracking, return-to-activity milestone verification, and long-term implant follow-up with zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "52%",
        "label": "Reduction in subspecialist referral mismatch"
      },
      {
        "value": "87%",
        "label": "PT referral completion rate"
      },
      {
        "value": "3 min",
        "label": "Average surgical slot backfill time"
      },
      {
        "value": "0",
        "label": "Post-surgical patients lost to follow-up"
      }
    ],
    "challenges": [
      "Referrals arrive without body-region specificity, and patients are scheduled with the wrong subspecialist — causing reschedules and delays",
      "MRI and surgical slot cancellations go unfilled because waitlisted patients lack completed imaging or pre-op clearance",
      "PT referrals are handed to patients on paper and rarely tracked — completion rates are unknown and often below 50%",
      "Pre-op clearance involves external PCPs and cardiologists, and incomplete packages cause day-of-surgery cancellations",
      "Post-surgical patients call after hours with pain, swelling, and mobility concerns that are often normal recovery but require triage",
      "Long-term implant and hardware follow-up schedules are not systematically maintained, and patients miss annual check-ins"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts body region and injury type from referral documents via OCR, routes to the correct orthopedic subspecialist, and identifies imaging and pre-op clearance requirements"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates surgical, imaging, and injection scheduling — maintains a clearance-verified waitlist and fills cancellations within minutes across all appointment types"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers pre-op prep checklists, post-op exercise instructions, PT appointment reminders, and DME coordination via multi-channel outreach with compliance tracking"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-surgical recovery trajectories, triages pain and swelling concerns with AI severity assessment, and tracks PT completion and return-to-activity milestones"
      }
    ]
  },
  {
    "slug": "dermatology",
    "specialty": "Dermatology",
    "tagline": "Track every biopsy result, coordinate Mohs seamlessly, and keep skin cancer surveillance airtight",
    "heroDescription": "Configural streamlines dermatology operations by closing biopsy result-to-treatment loops, coordinating complex Mohs surgery days, managing biologic therapy scheduling for chronic conditions, and maintaining skin cancer surveillance calendars — so no biopsy goes unfollowed and no melanoma patient is lost.",
    "description": "Dermatology practices face biopsy results that sit in queues without patient notification, Mohs surgery coordination that requires multi-step same-day scheduling, biologic therapy timing that lapses without precise tracking, and skin cancer surveillance patients who silently miss annual skin checks because recall systems are manual.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — including biopsy pathology result ingestion and acuity-based triage prioritization",
      "AI-driven scheduling that matches patients to optimal slots based on visit type (medical vs. surgical vs. cosmetic), Mohs block time, and biopsy result urgency",
      "Smart waitlist that fills Mohs, excision, and procedure cancellations within minutes via automated SMS and voice outreach to biopsy-confirmed patients awaiting treatment",
      "Pre-treatment prep automation — Mohs day-of instructions, biologic injection timing, phototherapy session scheduling, and wound care supply verification with compliance confirmation",
      "Multi-channel patient engagement: biopsy result notifications, Mohs surgery prep instructions, biologic refill reminders, and skin check recall via SMS, voice, and portal",
      "Real-time biologic therapy monitoring with AI severity assessment — tracking psoriasis and eczema flare patterns, injection adherence, and adverse reaction screening",
      "Post-treatment AI triage with 91% first-call resolution — managing post-Mohs wound care questions, biopsy site concerns, and biologic injection reactions",
      "Automated skin cancer surveillance — melanoma and NMSC follow-up scheduling per risk stratification with zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "100%",
        "label": "Biopsy result-to-patient notification closure rate"
      },
      {
        "value": "29%",
        "label": "Increase in Mohs surgical day throughput"
      },
      {
        "value": "0",
        "label": "Skin cancer surveillance patients lost to follow-up"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-procedure triage"
      }
    ],
    "challenges": [
      "Biopsy pathology results sit in queues for days before patients are notified, delaying treatment decisions for malignant findings",
      "Mohs surgery requires same-day multi-stage coordination that is difficult to schedule efficiently alongside routine appointments",
      "Biologic therapy patients miss injection windows when refill and scheduling reminders are not precisely timed",
      "Skin cancer surveillance relies on patients remembering annual skin checks — recall systems are inconsistent and manual",
      "Post-Mohs and post-excision patients call with wound care concerns that could be resolved through automated triage guidance",
      "High-volume practices lose biopsy tracking when results arrive from multiple external pathology labs without a unified ingestion system"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes dermatology referrals and pathology results with OCR extraction, prioritizes malignant findings for urgent scheduling, and routes to appropriate visit type (medical, surgical, Mohs)"
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Optimizes Mohs block days, fills procedure cancellations with biopsy-confirmed patients within minutes, and manages biologic injection timing calendars"
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers biopsy result notifications, Mohs prep instructions, biologic refill reminders, and annual skin check recalls via multi-channel outreach with confirmation tracking"
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages post-Mohs and post-excision wound concerns with AI severity assessment, monitors biologic therapy adherence and flare patterns, and manages risk-stratified skin cancer surveillance scheduling"
      }
    ]
  },
  {
    "slug": "urology",
    "specialty": "Urology",
    "tagline": "Orchestrate every urology patient journey from referral to survivorship with zero patients lost to follow-up",
    "heroDescription": "Configural transforms urology operations by automating referral intake, coordinating complex robotic surgery schedules, and ensuring every PSA surveillance patient is tracked through a seamless, AI-driven patient journey — from first contact to long-term survivorship.",
    "description": "Urology practices struggle with fragmented PSA surveillance tracking, lengthy cystoscopy scheduling backlogs, and patients falling through the cracks between robotic surgery coordination and catheter care follow-up. Manual waitlists delay time-sensitive procedures, and no-shows to critical surveillance appointments put patients at risk.",
    "workflows": [
      "Automated OCR extraction of urology referrals with instant patient matching and insurance verification in under 3 minutes",
      "AI-driven multi-resource scheduling for cystoscopy suites, robotic surgery blocks, and urodynamic testing with real-time conflict resolution",
      "Proactive pre-procedure medication reviews, bowel prep instructions, and anticoagulant management outreach for surgical patients",
      "Real-time post-operative symptom monitoring for catheter complications, hematuria severity, and pain escalation with AI triage",
      "AI-powered post-treatment triage achieving 91% first-call resolution for catheter care questions and post-surgical concerns",
      "Automated PSA surveillance scheduling with zero patients lost to follow-up across active surveillance and watchful waiting cohorts",
      "Intelligent waitlist management that fills cancelled cystoscopy and robotic surgery slots within minutes using AI prioritization",
      "Multi-channel patient engagement via SMS, voice, and portal to reduce no-shows for time-sensitive urological procedures"
    ],
    "results": [
      {
        "value": "94%",
        "label": "PSA surveillance adherence rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "62%",
        "label": "Reduction in cystoscopy scheduling backlog"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in active surveillance"
      }
    ],
    "challenges": [
      "Patients on active PSA surveillance fall off tracking when manual reminder systems fail",
      "Robotic surgery scheduling requires coordination across surgeon, anesthesia, and OR availability with no unified view",
      "Cancelled cystoscopy slots go unfilled for days, extending wait times for urgent cases",
      "Post-operative catheter care questions overwhelm staff, delaying responses to serious complications",
      "Referral faxes for complex urological conditions sit unprocessed, delaying time-sensitive evaluations",
      "No-shows to urodynamic testing and follow-up appointments create cascading scheduling gaps"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts urology referral data via OCR, matches patients across systems, verifies insurance eligibility, and flags urgent cases like elevated PSA or hematuria for expedited scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-resource booking for robotic surgery, cystoscopy suites, and urodynamic labs while filling cancellations within minutes through AI-driven waitlist prioritization."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for pre-procedure prep, appointment reminders, and PSA surveillance recalls via SMS, voice, and portal — reducing no-shows with predictive modeling and smart overbooking."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative symptoms in real time, triages catheter care and complication calls with AI severity assessment, and achieves 91% first-call resolution for post-treatment concerns."
      }
    ]
  },
  {
    "slug": "ent",
    "specialty": "ENT / Otolaryngology",
    "tagline": "Streamline every ENT patient journey from allergy referral to long-term hearing care with AI-driven coordination",
    "heroDescription": "Configural unifies ENT operations by automating referral processing, orchestrating complex multi-visit allergy immunotherapy series, coordinating sleep study logistics, and ensuring no patient is lost between sinus surgery follow-up and hearing aid fitting appointments.",
    "description": "ENT practices face unique scheduling complexity across allergy immunotherapy series, sinus surgery coordination, hearing aid fittings, and sleep study referrals. Patients drop off multi-visit treatment plans, immunotherapy dose escalation schedules break down, and sleep study coordination with external labs creates referral leakage.",
    "workflows": [
      "Automated OCR extraction of ENT referrals including audiograms, sleep study orders, and allergy testing results with insurance pre-verification in under 3 minutes",
      "AI-orchestrated scheduling for immunotherapy dose series, sinus surgery blocks, hearing aid fittings, and sleep lab coordination across multiple resources",
      "Proactive pre-treatment outreach for sinus surgery prep, immunotherapy consent, dietary restrictions, and medication holds with multi-channel delivery",
      "Real-time symptom monitoring for post-surgical complications, immunotherapy reactions, and CPAP tolerance with AI-driven severity scoring",
      "AI-powered triage for post-procedure calls covering epistaxis, hearing changes, and allergic reactions with 91% first-call resolution",
      "Automated surveillance for immunotherapy series completion, hearing aid adjustment milestones, and sleep apnea treatment adherence with zero patients lost",
      "Intelligent waitlist resolution that fills cancelled sinus surgery and audiometry slots within minutes using AI matching and patient preference data",
      "Multi-channel engagement via SMS, voice, and portal for immunotherapy dose reminders, sleep study prep instructions, and follow-up scheduling"
    ],
    "results": [
      {
        "value": "88%",
        "label": "Immunotherapy series completion rate"
      },
      {
        "value": "71%",
        "label": "Reduction in sleep study referral leakage"
      },
      {
        "value": "3 min",
        "label": "Referral intake to insurance verification"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up across treatment series"
      }
    ],
    "challenges": [
      "Immunotherapy patients miss escalation doses, breaking treatment protocols and requiring series restarts",
      "Sleep study coordination with external labs creates referral leakage and lost patients",
      "Cancelled sinus surgery slots remain unfilled while waitlisted patients endure prolonged symptoms",
      "Hearing aid fitting follow-ups fall through the cracks, reducing patient satisfaction and device adoption",
      "Post-surgical triage calls for epistaxis and swelling overwhelm staff without severity classification",
      "Referral faxes for complex multi-specialty ENT cases sit unprocessed, delaying critical evaluations"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes ENT referral documents via OCR, extracts audiogram and sleep study data, matches patients, verifies insurance, and routes urgent cases like sudden hearing loss for same-day scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates multi-visit immunotherapy series, sinus surgery blocks, hearing aid fittings, and sleep lab appointments while filling cancellations within minutes through predictive waitlist management."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Automates multi-channel outreach for immunotherapy dose reminders, pre-surgical instructions, hearing aid follow-ups, and sleep study prep — using predictive no-show modeling and smart overbooking to optimize slots."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Provides real-time monitoring of post-surgical symptoms and immunotherapy reactions, triages patient calls with AI severity assessment, and delivers 91% first-call resolution for ENT post-treatment concerns."
      }
    ]
  },
  {
    "slug": "ophthalmology",
    "specialty": "Ophthalmology",
    "tagline": "Automate every ophthalmology patient journey from diabetic screening referral to lifelong glaucoma surveillance",
    "heroDescription": "Configural powers ophthalmology practices by automating referral intake, orchestrating high-volume injection series and cataract surgery chains, monitoring glaucoma patients proactively, and ensuring diabetic screening compliance — so zero patients are lost between visits.",
    "description": "Ophthalmology practices manage enormous patient volumes across recurring injection series, cataract surgery chains, glaucoma monitoring intervals, and diabetic retinopathy screening mandates. Missed injection windows compromise treatment efficacy, cataract surgery scheduling bottlenecks delay care, and patients silently fall off glaucoma follow-up.",
    "workflows": [
      "Automated OCR extraction of ophthalmology referrals including diabetic screening orders, OCT reports, and visual acuity data with insurance verification in under 3 minutes",
      "AI-driven scheduling for intravitreal injection series, cataract surgery chains with pre-op and post-op visits, and glaucoma monitoring intervals across providers and locations",
      "Proactive pre-treatment outreach for cataract surgery prep, injection appointment reminders, pupil dilation instructions, and medication reconciliation",
      "Real-time monitoring of post-injection symptoms, cataract surgery recovery milestones, and IOP changes with AI-powered severity assessment",
      "AI-powered triage for post-procedure calls covering floaters, vision changes, and injection site concerns with 91% first-call resolution",
      "Automated glaucoma and diabetic retinopathy surveillance scheduling with zero patients lost to follow-up across annual and quarterly monitoring cycles",
      "Intelligent waitlist management that fills cancelled injection slots and cataract surgery openings within minutes based on treatment urgency and window compliance",
      "Multi-channel patient engagement via SMS, voice, and portal to reduce no-shows for time-sensitive injection windows and screening appointments"
    ],
    "results": [
      {
        "value": "96%",
        "label": "Injection series adherence rate"
      },
      {
        "value": "58%",
        "label": "Reduction in cataract surgery scheduling backlog"
      },
      {
        "value": "3 min",
        "label": "Referral intake to verification time"
      },
      {
        "value": "0",
        "label": "Glaucoma patients lost to follow-up"
      }
    ],
    "challenges": [
      "Patients miss critical injection windows, compromising treatment efficacy for wet AMD and diabetic macular edema",
      "Cataract surgery chains require precise sequencing of pre-op, surgery, and post-op across multiple resources",
      "Glaucoma patients silently fall off IOP monitoring schedules without automated surveillance",
      "Diabetic retinopathy screening referrals go unprocessed, leaving at-risk patients untracked",
      "Cancelled injection slots go unfilled while patients with expiring treatment windows wait on manual lists",
      "High-volume post-injection and post-surgical calls overwhelm staff without AI-assisted triage and severity routing"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts ophthalmology referral data via OCR, processes diabetic screening orders and OCT reports, matches patients, verifies insurance, and flags urgent cases like retinal detachment symptoms for immediate scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates injection series timing, cataract surgery chains, and glaucoma monitoring intervals while filling cancellations within minutes — ensuring treatment windows are never missed through AI-driven waitlist prioritization."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for injection reminders, cataract pre-op instructions, and glaucoma monitoring recalls via SMS, voice, and portal — with predictive no-show modeling and smart overbooking to maximize slot utilization."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-injection and post-surgical symptoms in real time, assesses severity of vision changes and IOP spikes with AI, and achieves 91% first-call resolution for ophthalmology post-treatment triage."
      }
    ]
  },
  {
    "slug": "pain-management",
    "specialty": "Pain Management",
    "tagline": "Coordinate every pain management patient journey from referral through multi-modal treatment with built-in compliance tracking",
    "heroDescription": "Configural streamlines pain management operations by automating referral intake, coordinating injection series and multi-modal treatment plans, enforcing PDMP and UDS compliance schedules, and keeping every patient engaged across long-term care pathways.",
    "description": "Pain management clinics face intense regulatory scrutiny around PDMP checks and urine drug screening compliance while juggling complex multi-modal treatment coordination, injection series scheduling, and high patient volumes. Missed UDS windows create compliance gaps, injection series fall apart, and patients disengage from long-term treatment plans.",
    "workflows": [
      "Automated OCR extraction of pain management referrals with imaging reports, prior authorization data, and insurance verification completed in under 3 minutes",
      "AI-driven scheduling for injection series, UDS appointments, PDMP review intervals, and multi-modal treatment sessions across providers and facilities",
      "Proactive pre-treatment outreach for injection prep, medication hold instructions, fasting requirements, and UDS scheduling reminders via preferred channels",
      "Real-time post-injection symptom monitoring and pain score tracking with AI severity assessment for complications and treatment response evaluation",
      "AI-powered triage for post-procedure calls covering injection site reactions, pain flares, and medication concerns with 91% first-call resolution",
      "Automated compliance surveillance for UDS scheduling, PDMP check intervals, and treatment agreement renewals with zero patients lost to follow-up",
      "Intelligent waitlist management that fills cancelled injection and procedure slots within minutes, prioritizing patients by treatment urgency and compliance status",
      "Multi-channel patient engagement via SMS, voice, and portal to reduce no-shows and maintain treatment plan adherence across multi-modal care pathways"
    ],
    "results": [
      {
        "value": "99%",
        "label": "PDMP and UDS compliance rate"
      },
      {
        "value": "47%",
        "label": "Reduction in no-show rate for injection series"
      },
      {
        "value": "3 min",
        "label": "Referral intake to insurance verification"
      },
      {
        "value": "0",
        "label": "Patients with lapsed compliance follow-up"
      }
    ],
    "challenges": [
      "UDS scheduling lapses create compliance gaps that expose practices to regulatory risk",
      "Injection series require precise timing and coordination that manual scheduling cannot sustain at scale",
      "PDMP check intervals are tracked inconsistently across providers and patient panels",
      "Patients disengage from multi-modal treatment plans when communication is fragmented across channels",
      "Cancelled injection slots go unfilled while waitlisted patients experience prolonged pain episodes",
      "Referral intake for pain management involves complex prior authorization and imaging review that delays onboarding"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes pain management referrals via OCR, extracts imaging and prior authorization data, verifies insurance, matches patients, and flags cases requiring urgent evaluation for expedited scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates injection series, UDS appointments, PDMP review schedules, and multi-modal treatment sessions while filling cancellations within minutes through AI-prioritized waitlist management."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for injection reminders, UDS scheduling, treatment agreement renewals, and compliance notifications — using predictive no-show modeling and smart overbooking to maintain slot utilization."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-injection symptoms and pain scores in real time, triages patient calls with AI severity assessment, enforces PDMP and UDS compliance tracking, and achieves 91% first-call resolution."
      }
    ]
  },
  {
    "slug": "behavioral-health",
    "specialty": "Behavioral Health",
    "tagline": "Reduce no-shows, automate PHQ-9 screening, and keep every behavioral health patient connected through AI-powered engagement",
    "heroDescription": "Configural addresses behavioral health's unique challenges by automating referral intake, reducing industry-high no-show rates through predictive engagement, coordinating telehealth and in-person scheduling, and ensuring crisis-risk patients are never lost to follow-up.",
    "description": "Behavioral health practices face the highest no-show rates in healthcare, fragmented referral pathways, and critical gaps in screening compliance and crisis follow-up. Patients disengage silently, PHQ-9 and screening intervals lapse, telehealth coordination adds complexity, and crisis workflows lack the speed and structure to protect vulnerable patients.",
    "workflows": [
      "Automated OCR extraction of behavioral health referrals with screening history, medication lists, and insurance verification completed in under 3 minutes",
      "AI-driven scheduling for therapy sessions, psychiatric evaluations, telehealth appointments, and group therapy with predictive no-show overbooking and modality preferences",
      "Proactive pre-appointment PHQ-9 and screening instrument delivery, medication review outreach, and session prep reminders via patient-preferred channels",
      "Real-time symptom monitoring between sessions with AI-driven severity assessment for depression, anxiety, and substance use risk escalation",
      "AI-powered crisis triage and post-session follow-up with 91% first-call resolution for medication concerns, symptom escalation, and care coordination needs",
      "Automated PHQ-9 surveillance scheduling, treatment plan review intervals, and re-engagement outreach with zero patients lost to follow-up",
      "Intelligent waitlist management that fills cancelled therapy and psychiatry slots within minutes, matching patient acuity and provider specialization",
      "Multi-channel patient engagement via SMS, voice, and portal designed for behavioral health sensitivity — reducing no-shows through warm, personalized outreach"
    ],
    "results": [
      {
        "value": "41%",
        "label": "Reduction in no-show rate"
      },
      {
        "value": "93%",
        "label": "PHQ-9 screening compliance rate"
      },
      {
        "value": "3 min",
        "label": "Referral intake to verification time"
      },
      {
        "value": "0",
        "label": "Crisis-flagged patients lost to follow-up"
      }
    ],
    "challenges": [
      "Behavioral health no-show rates exceed 30%, creating massive revenue loss and gaps in patient care continuity",
      "PHQ-9 and screening intervals lapse when tracking relies on manual systems, missing deterioration signals",
      "Crisis-risk patients disengage silently without automated surveillance and proactive re-engagement workflows",
      "Telehealth and in-person scheduling coordination creates confusion and duplicate bookings across modalities",
      "Cancelled therapy slots go unfilled for days while patients on waitlists experience worsening symptoms",
      "Referral intake for behavioral health involves sensitive documentation that requires careful processing and rapid turnaround"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes behavioral health referrals via OCR with sensitivity-aware data handling, matches patients, verifies insurance, extracts screening history, and flags crisis-risk cases for immediate scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates therapy, psychiatry, telehealth, and group session scheduling with predictive no-show overbooking while filling cancellations within minutes by matching patient acuity to provider availability."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers warm, multi-channel outreach for session reminders, PHQ-9 screening delivery, re-engagement campaigns, and crisis check-ins — using behavioral health-tuned no-show prediction to optimize slot utilization."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors between-session symptoms, triages crisis and medication calls with AI severity assessment, escalates high-risk patients to clinical staff, and achieves 91% first-call resolution for post-session concerns."
      }
    ]
  },
  {
    "slug": "aco",
    "specialty": "ACO Organizations",
    "tagline": "Close care gaps, eliminate referral leakage, and hit quality benchmarks with AI-orchestrated population health workflows",
    "heroDescription": "Configural empowers ACOs by automating Annual Wellness Visit scheduling at scale, closing care gaps through proactive patient outreach, preventing referral leakage to out-of-network providers, and ensuring every attributed life is tracked through continuous population health surveillance.",
    "description": "ACOs struggle with scheduling Annual Wellness Visits across large attributed populations, closing care gaps before measurement periods end, preventing referral leakage that erodes shared savings, and maintaining engagement with hard-to-reach patients. Manual outreach cannot scale, and fragmented systems leave quality metrics at risk.",
    "workflows": [
      "Automated intake of attributed patient rosters and referral documents with OCR extraction, patient matching, and insurance verification in under 3 minutes",
      "AI-driven AWV scheduling across the full attributed population with multi-provider coordination, seasonal volume balancing, and gap-based prioritization",
      "Proactive pre-visit care gap identification, medication reconciliation outreach, and preventive screening reminders delivered via patient-preferred channels",
      "Real-time population health monitoring with AI-driven risk stratification, chronic condition tracking, and emerging care gap alerts",
      "AI-powered triage for patient inquiries about wellness visits, referrals, and care coordination with 91% first-call resolution",
      "Automated care gap surveillance, referral leakage tracking, and quality measure compliance monitoring with zero patients lost to follow-up",
      "Intelligent waitlist and scheduling optimization that fills cancelled AWV slots within minutes and accelerates gap closure before measurement deadlines",
      "Multi-channel population-scale engagement via SMS, voice, and portal for AWV outreach, care gap closure campaigns, and in-network referral steering"
    ],
    "results": [
      {
        "value": "87%",
        "label": "AWV completion rate across attributed lives"
      },
      {
        "value": "73%",
        "label": "Reduction in referral leakage to out-of-network"
      },
      {
        "value": "3 min",
        "label": "Roster intake to patient verification"
      },
      {
        "value": "0",
        "label": "Attributed patients lost to care gap follow-up"
      }
    ],
    "challenges": [
      "Annual Wellness Visit scheduling across thousands of attributed lives cannot be managed through manual outreach alone",
      "Care gaps remain open past measurement deadlines because tracking systems lack proactive alert and outreach capabilities",
      "Referral leakage to out-of-network providers erodes shared savings without real-time steering and tracking",
      "Hard-to-reach patients ignore single-channel outreach, leaving quality measures unmet and risk scores inaccurate",
      "Cancelled AWV slots go unfilled while care gap closure targets slip further behind schedule",
      "Population health surveillance requires continuous monitoring that manual chart reviews cannot sustain at scale"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes attributed patient rosters and referral documents via OCR, matches patients across systems, verifies insurance and attribution status, and flags referral leakage for in-network redirection."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates AWV scheduling across the full attributed population with seasonal balancing and gap-based prioritization while filling cancellations within minutes to maximize closure rates before deadlines."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Executes population-scale multi-channel outreach for AWV scheduling, care gap closure, preventive screening reminders, and in-network referral steering — using predictive no-show modeling to optimize contact strategies."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors population health metrics in real time, triages patient inquiries with AI-powered resolution, tracks care gap closure progress, and ensures 91% first-call resolution for coordination-related questions."
      }
    ]
  },
  {
    "slug": "mso",
    "specialty": "MSO Organizations",
    "tagline": "Centralize operations across every practice with standardized AI workflows, unified scheduling, and consistent patient engagement",
    "heroDescription": "Configural gives MSOs a single platform to centralize referral intake, standardize scheduling workflows across all managed practices, unify patient engagement strategies, and maintain operational consistency — ensuring no patient falls through the cracks regardless of practice location.",
    "description": "MSOs manage operations across multiple practices with inconsistent workflows, fragmented scheduling systems, and no unified view of patient journeys. Credentialing delays stall provider onboarding, referral processing varies by location, and patients experience disjointed care coordination when moving between affiliated practices.",
    "workflows": [
      "Centralized OCR-powered referral intake across all managed practices with standardized patient matching, insurance verification, and routing completed in under 3 minutes",
      "Unified multi-practice scheduling with AI-driven resource orchestration, cross-location load balancing, and standardized booking protocols across all affiliated providers",
      "Standardized pre-appointment workflows including medication reviews, patient instructions, and proactive outreach deployed consistently across every managed practice",
      "Real-time operational monitoring across all practices with AI-driven performance scoring, bottleneck detection, and standardized escalation protocols",
      "AI-powered centralized triage handling patient calls across practices with standardized protocols and 91% first-call resolution",
      "Automated credentialing surveillance, provider onboarding tracking, and cross-practice quality compliance monitoring with zero gaps in follow-up",
      "Intelligent cross-practice waitlist management that fills cancelled slots within minutes by matching patients to available providers across all locations",
      "Unified multi-channel patient engagement via SMS, voice, and portal with standardized messaging, branding, and no-show reduction strategies across all practices"
    ],
    "results": [
      {
        "value": "68%",
        "label": "Reduction in scheduling workflow variance across practices"
      },
      {
        "value": "52%",
        "label": "Faster provider credentialing and onboarding"
      },
      {
        "value": "3 min",
        "label": "Standardized referral intake time across locations"
      },
      {
        "value": "0",
        "label": "Patients lost between affiliated practice handoffs"
      }
    ],
    "challenges": [
      "Each managed practice operates with different scheduling workflows, making centralized oversight and optimization impossible",
      "Referral processing varies by location, creating inconsistent patient onboarding experiences and intake delays",
      "Credentialing backlogs stall provider onboarding and reduce capacity across the network",
      "Patients moving between affiliated practices experience fragmented communication and lost follow-up appointments",
      "Cancelled slots at one practice go unfilled while another location maintains a growing waitlist",
      "Lack of standardized engagement protocols results in inconsistent no-show rates and patient satisfaction across the network"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Centralizes referral processing across all managed practices via OCR extraction, standardized patient matching, insurance verification, and intelligent routing to the appropriate location and provider."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Unifies scheduling across all affiliated practices with cross-location load balancing, standardized booking protocols, and AI-driven waitlist management that fills cancellations within minutes network-wide."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Deploys consistent multi-channel outreach across all practices for appointment reminders, pre-visit prep, and re-engagement campaigns — with centralized no-show prediction and smart overbooking strategies."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Provides centralized triage across all managed practices with standardized protocols, AI severity assessment, cross-practice care coordination, and 91% first-call resolution for patient inquiries."
      }
    ]
  },
  {
    "slug": "pulmonology",
    "specialty": "Pulmonology",
    "tagline": "Coordinate every pulmonology patient journey from PFT scheduling through COPD surveillance with AI-driven compliance tracking",
    "heroDescription": "Configural transforms pulmonology operations by automating referral intake, orchestrating PFT and pulmonary rehab scheduling, monitoring CPAP compliance and COPD patients remotely, and ensuring every post-hospitalization patient receives timely follow-up — with zero patients lost across long-term respiratory care.",
    "description": "Pulmonology practices manage complex workflows across PFT scheduling, COPD remote patient monitoring, CPAP compliance tracking, pulmonary rehabilitation coordination, and critical post-hospitalization follow-up windows. Patients miss PFT appointments, CPAP adherence drops silently, post-discharge follow-ups fall outside required windows, and COPD exacerbations go undetected.",
    "workflows": [
      "Automated OCR extraction of pulmonology referrals including PFT orders, hospitalization discharge summaries, and sleep study results with insurance verification in under 3 minutes",
      "AI-driven scheduling for PFTs, pulmonary rehab sessions, CPAP follow-ups, and post-hospitalization visits with multi-resource coordination and required-window compliance",
      "Proactive pre-appointment outreach for PFT preparation instructions, inhaler technique reviews, medication reconciliation, and pulmonary rehab orientation via preferred channels",
      "Real-time COPD remote patient monitoring with AI-driven exacerbation risk scoring, CPAP compliance tracking, and oxygen saturation trend analysis",
      "AI-powered triage for post-hospitalization calls, CPAP troubleshooting, and respiratory symptom escalation with 91% first-call resolution",
      "Automated COPD surveillance scheduling, CPAP compliance check intervals, and pulmonary rehab completion tracking with zero patients lost to follow-up",
      "Intelligent waitlist management that fills cancelled PFT and pulmonary rehab slots within minutes, prioritizing post-hospitalization and high-acuity patients",
      "Multi-channel patient engagement via SMS, voice, and portal for CPAP adherence nudges, rehab session reminders, and post-discharge check-in scheduling"
    ],
    "results": [
      {
        "value": "89%",
        "label": "CPAP compliance rate at 90 days"
      },
      {
        "value": "95%",
        "label": "Post-hospitalization follow-up within required window"
      },
      {
        "value": "3 min",
        "label": "Referral intake to insurance verification"
      },
      {
        "value": "0",
        "label": "COPD patients lost to surveillance follow-up"
      }
    ],
    "challenges": [
      "Post-hospitalization follow-up windows are missed when discharge referrals sit unprocessed in manual intake queues",
      "CPAP compliance drops silently without automated monitoring and proactive patient engagement",
      "PFT scheduling backlogs delay diagnosis and treatment initiation for complex respiratory conditions",
      "COPD patients between visits experience undetected exacerbations without remote monitoring and AI risk assessment",
      "Pulmonary rehab sessions require multi-week coordination that manual scheduling cannot sustain without patient drop-off",
      "Cancelled PFT and rehab slots go unfilled while post-hospitalization patients wait beyond recommended follow-up windows"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes pulmonology referrals and discharge summaries via OCR, extracts PFT orders and hospitalization data, verifies insurance, and flags post-discharge patients for expedited scheduling within required follow-up windows."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates PFT scheduling, pulmonary rehab series, CPAP follow-ups, and post-hospitalization visits with required-window enforcement while filling cancellations within minutes through AI-prioritized waitlist management."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for CPAP adherence nudges, PFT prep instructions, rehab session reminders, and post-discharge check-ins — using predictive no-show modeling and smart overbooking to maintain scheduling efficiency."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors COPD patients via RPM data, tracks CPAP compliance metrics, triages respiratory symptom calls with AI severity assessment, and achieves 91% first-call resolution for pulmonology post-treatment concerns."
      }
    ]
  },
  {
    "slug": "addiction-psychiatry",
    "specialty": "Addiction Psychiatry",
    "tagline": "Orchestrate every step of the addiction recovery journey — from referral to sustained sobriety",
    "heroDescription": "Configural transforms addiction psychiatry with end-to-end patient journey orchestration. From the moment a referral arrives, our AI platform automates intake, matches patients to appropriate treatment intensity, manages complex scheduling around group and individual sessions, and ensures no patient falls through the cracks during the critical early recovery window.",
    "description": "Addiction psychiatry programs lose patients at every handoff — referrals sit unprocessed while patients lose motivation, intake paperwork delays first appointments by days, and post-detox follow-up gaps lead to relapse. Without automated engagement, patients miss medication-assisted treatment (MAT) appointments and fall out of care during the highest-risk recovery periods.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — automatically flagging substance use severity and co-occurring mental health diagnoses",
      "AI-driven scheduling matching patients to optimal slots based on treatment phase, substance type, group therapy availability, and MAT medication timing windows",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients in early recovery or acute withdrawal risk",
      "Pre-treatment prep automation — urine drug screen scheduling, baseline lab orders, consent forms for MAT, and PDMP check coordination with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — with motivational messaging calibrated to recovery stage",
      "Real-time relapse risk monitoring with AI severity assessment and escalation — tracking missed appointments, pharmacy fill gaps, and behavioral pattern changes",
      "Post-treatment AI triage with 91% first-call resolution — addressing withdrawal symptoms, medication side effects, cravings management, and crisis de-escalation",
      "Automated recovery surveillance and follow-up — zero patients lost to follow-up with scheduled check-ins at 30, 60, 90 days and ongoing sobriety milestones"
    ],
    "results": [
      {
        "value": "74%",
        "label": "Reduction in referral-to-first-appointment time"
      },
      {
        "value": "89%",
        "label": "MAT medication adherence rate"
      },
      {
        "value": "62%",
        "label": "Decrease in early recovery dropout"
      },
      {
        "value": "3.1x",
        "label": "Increase in sustained 90-day sobriety rates"
      }
    ],
    "challenges": [
      "Referrals from ERs and primary care arrive incomplete, missing substance history and prior treatment records, delaying intake by days",
      "Patients in early recovery lose motivation during scheduling delays, with each day increasing relapse probability",
      "Group therapy and individual session coordination creates scheduling nightmares that leave providers underutilized",
      "Post-detox handoff gaps result in patients missing critical first MAT appointments",
      "No automated way to detect missed pharmacy fills or appointment patterns that signal relapse risk",
      "Follow-up compliance drops below 40% after 60 days without proactive, multi-channel outreach"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes addiction psychiatry referrals by extracting substance use history, prior treatment episodes, co-occurring diagnoses, and insurance authorization requirements. Validates PDMP data and flags high-acuity cases for expedited intake within hours rather than days."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates complex treatment schedules across group therapy, individual sessions, and MAT appointments. Fills cancellations by matching waitlisted patients based on recovery phase and treatment urgency, ensuring early-recovery patients are prioritized."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers recovery-stage-appropriate messaging via SMS, voice, and portal. Sends motivational check-ins, appointment reminders with transportation assistance, and prep instructions for drug screens — adapting tone and frequency to each patient recovery timeline."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors relapse risk indicators including missed appointments, pharmacy gaps, and patient-reported symptoms. Provides 24/7 AI-powered crisis support with 91% first-call resolution for withdrawal symptoms, cravings, and medication concerns, escalating to on-call providers when needed."
      }
    ]
  },
  {
    "slug": "adolescent-medicine",
    "specialty": "Adolescent Medicine",
    "tagline": "Guide every adolescent patient seamlessly from referral through developmental milestones and follow-up",
    "heroDescription": "Configural brings patient journey orchestration to adolescent medicine, where developmental sensitivity and family dynamics demand specialized coordination. Our AI platform handles referral processing, age-appropriate scheduling, parent-teen communication balancing, and ensures continuity through the transition to adult care.",
    "description": "Adolescent medicine practices struggle with unique journey gaps — referrals lack developmental context, scheduling must accommodate school hours, confidentiality requirements complicate communication, and the transition to adult care loses patients at alarming rates. Without automation, teens disengage and parents lose trust in the care process.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — capturing developmental stage, school accommodations, and minor confidentiality requirements",
      "AI-driven scheduling matching patients to optimal slots based on school schedules, developmental urgency, provider gender preferences, and confidential visit requirements",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — contacting both teens and parents per consent preferences",
      "Pre-treatment prep automation — growth chart compilation, immunization record pulls, screening questionnaire delivery (PHQ-A, CRAFFT), and consent form routing with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — with age-appropriate messaging and separate parent/teen communication channels",
      "Real-time developmental milestone monitoring with AI severity assessment and escalation — tracking growth patterns, behavioral health flags, and social determinant risks",
      "Post-treatment AI triage with 91% first-call resolution — addressing hormonal concerns, mental health questions, contraceptive side effects, and sports injury follow-up",
      "Automated transition-to-adult-care surveillance — zero patients lost to follow-up with structured handoff protocols at ages 18-21 and milestone tracking"
    ],
    "results": [
      {
        "value": "68%",
        "label": "Reduction in missed adolescent appointments"
      },
      {
        "value": "91%",
        "label": "Screening questionnaire completion rate before visits"
      },
      {
        "value": "55%",
        "label": "Improvement in transition-to-adult-care completion"
      },
      {
        "value": "2.4x",
        "label": "Increase in confidential visit utilization"
      }
    ],
    "challenges": [
      "Referrals arrive without developmental history, school performance data, or confidentiality directives, requiring manual follow-up",
      "Scheduling around school hours, extracurriculars, and parent availability creates impossible coordination puzzles",
      "Confidentiality requirements for teen patients conflict with parent communication needs, causing messaging errors",
      "Screening tools for depression, substance use, and eating disorders are rarely completed before appointments",
      "Transition to adult care at 18-21 loses over 60% of patients with chronic conditions",
      "No system tracks developmental milestones or flags teens falling behind on immunizations and preventive care"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes adolescent referrals by extracting developmental history, school accommodations, confidentiality preferences, and immunization records. Automatically routes minor consent forms and flags urgent cases like eating disorders or suicidal ideation for same-day intake."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Builds schedules around school calendars, extracurricular activities, and family availability. Manages confidential visit booking separately from parent-visible appointments and fills cancellations by matching waitlisted teens to after-school and weekend slots."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Maintains dual communication channels — age-appropriate SMS and portal messaging for teens alongside parent-facing updates that respect confidentiality boundaries. Delivers screening questionnaires, appointment reminders, and health education content matched to developmental stage."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors developmental trajectories, screening scores, and immunization gaps with AI-powered risk stratification. Provides after-hours triage for adolescent-specific concerns with 91% first-call resolution, escalating self-harm risk or acute eating disorder symptoms immediately."
      }
    ]
  },
  {
    "slug": "behavioral-sleep-medicine",
    "specialty": "Behavioral Sleep Medicine",
    "tagline": "Automate the full sleep patient journey — from referral and sleep study to sustained behavioral change",
    "heroDescription": "Configural orchestrates the behavioral sleep medicine journey end-to-end. Our AI automates referral intake with sleep questionnaire extraction, coordinates multi-step diagnostic pathways including polysomnography scheduling, and maintains patient engagement through multi-week CBT-I programs where dropout rates traditionally exceed 40%.",
    "description": "Behavioral sleep medicine programs face journey breakdowns at every stage — referrals lack sleep diary data, polysomnography scheduling delays extend wait times by weeks, patients drop out of multi-session CBT-I programs, and long-term adherence to behavioral interventions goes unmonitored. Manual processes cannot sustain the engagement intensity these patients need.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — capturing sleep diary data, prior sleep study results, and comorbid conditions affecting sleep",
      "AI-driven scheduling matching patients to optimal slots based on CBT-I session sequence, sleep study lab availability, provider specialization, and chronotype-appropriate appointment times",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with severe insomnia severity index scores or occupational sleep impairment",
      "Pre-treatment prep automation — sleep diary delivery and tracking, Epworth and ISI questionnaire completion, medication reconciliation for sedative-hypnotics, and sleep study prep instructions with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including nightly sleep diary prompts and CBT-I homework reminders",
      "Real-time sleep pattern monitoring with AI severity assessment and escalation — tracking diary entries, actigraphy data trends, and treatment response trajectories",
      "Post-treatment AI triage with 91% first-call resolution — addressing sleep hygiene questions, stimulus control challenges, CPAP alternatives, and relapse of insomnia symptoms",
      "Automated sleep health surveillance and follow-up — zero patients lost to follow-up with scheduled reassessments at 1, 3, and 6 months post-CBT-I completion"
    ],
    "results": [
      {
        "value": "71%",
        "label": "Reduction in CBT-I program dropout rates"
      },
      {
        "value": "94%",
        "label": "Sleep diary completion compliance"
      },
      {
        "value": "58%",
        "label": "Faster time from referral to sleep study"
      },
      {
        "value": "2.8x",
        "label": "Improvement in long-term insomnia remission rates"
      }
    ],
    "challenges": [
      "Referrals arrive without sleep diaries, prior polysomnography results, or medication lists including OTC sleep aids",
      "Multi-step diagnostic pathways — questionnaires, sleep studies, follow-ups — require complex sequential scheduling",
      "CBT-I dropout exceeds 40% because patients lose engagement between weekly sessions without proactive outreach",
      "Sleep diary compliance drops dramatically without nightly automated reminders and easy submission channels",
      "No system tracks longitudinal sleep patterns to detect early signs of treatment failure or relapse",
      "Patients on sedative-hypnotics need coordinated tapering protocols that span weeks of careful monitoring"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes behavioral sleep medicine referrals by extracting sleep study history, medication lists (including OTC and supplements), insomnia severity scores, and comorbid psychiatric conditions. Validates insurance coverage for polysomnography and CBT-I session series."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-step sleep treatment pathways — initial evaluation, sleep study, results review, and sequential CBT-I sessions. Fills cancellations by matching waitlisted patients based on insomnia severity and occupational impairment risk."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Maintains daily sleep diary engagement through automated nightly prompts via SMS and app. Sends CBT-I homework reminders, sleep hygiene tips between sessions, and prep instructions for sleep studies — sustaining the engagement intensity that prevents program dropout."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Analyzes sleep diary trends and treatment response trajectories using AI pattern recognition. Provides triage for sleep concerns with 91% first-call resolution, flags patients showing inadequate treatment response, and monitors sedative-hypnotic tapering progress with escalation protocols."
      }
    ]
  },
  {
    "slug": "clinical-immunology",
    "specialty": "Clinical Immunology",
    "tagline": "Orchestrate complex immunology patient journeys from referral through lifelong immune surveillance",
    "heroDescription": "Configural transforms clinical immunology with AI-powered patient journey orchestration. From processing referrals with complex immune workup histories to coordinating infusion schedules and monitoring immunoglobulin levels, our platform ensures immunodeficient patients never experience gaps in their critical treatment continuity.",
    "description": "Clinical immunology patients face dangerous journey gaps — referrals with incomplete immune workups delay diagnosis by months, infusion scheduling conflicts cause treatment interruptions, and post-infusion monitoring lapses put immunocompromised patients at infection risk. Manual coordination cannot manage the complexity of lifelong immunotherapy regimens.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — parsing immune panel results, vaccination history, and prior immunoglobulin therapy records",
      "AI-driven scheduling matching patients to optimal slots based on infusion timing cycles, immune panel monitoring intervals, provider expertise in specific immunodeficiencies, and infusion chair availability",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with critically low immunoglobulin levels or active infections",
      "Pre-treatment prep automation — pre-infusion lab orders, infection symptom screening, medication reconciliation for immunosuppressants, and hydration protocol reminders with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including infection prevention education and symptom reporting channels",
      "Real-time immunoglobulin level and infection risk monitoring with AI severity assessment and escalation — tracking lab trends, symptom reports, and hospitalization patterns",
      "Post-treatment AI triage with 91% first-call resolution — addressing infusion reactions, infection symptoms, immunosuppressant side effects, and vaccination timing questions",
      "Automated immune surveillance and follow-up — zero patients lost to follow-up with scheduled immune panels, infection tracking, and lifelong treatment adherence monitoring"
    ],
    "results": [
      {
        "value": "76%",
        "label": "Reduction in infusion scheduling gaps"
      },
      {
        "value": "88%",
        "label": "Pre-infusion lab completion rate"
      },
      {
        "value": "63%",
        "label": "Decrease in preventable infection hospitalizations"
      },
      {
        "value": "2.5x",
        "label": "Improvement in immunoglobulin trough level consistency"
      }
    ],
    "challenges": [
      "Referrals arrive with fragmented immune workups from multiple labs, requiring manual compilation before evaluation",
      "Infusion scheduling across 2-4 week cycles with pre-infusion labs creates cascading coordination failures",
      "Immunocompromised patients cannot afford any gaps in treatment, yet cancellations leave infusion chairs empty",
      "No automated tracking of immunoglobulin trough levels or infection frequency to detect treatment inadequacy",
      "Patients on immunosuppressants need coordinated monitoring across immunology and prescribing specialists",
      "Lifelong treatment adherence drops without sustained proactive engagement and simplified refill processes"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes immunology referrals by extracting and consolidating immune panel results from multiple labs, vaccination records, infection histories, and prior immunoglobulin therapy details. Flags critically low levels for urgent evaluation and validates specialty prior authorization requirements."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Manages cyclical infusion scheduling with pre-infusion lab coordination, ensuring treatment intervals stay within therapeutic windows. Fills cancelled infusion slots by matching waitlisted patients based on immunoglobulin trough urgency and infection risk status."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers infection prevention education, pre-infusion preparation reminders, and hydration protocols via SMS, voice, and portal. Maintains symptom reporting channels for immunocompromised patients and coordinates communication across multiple treating specialists."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors immunoglobulin trends, infection frequency, and hospitalization patterns with AI-powered risk stratification. Provides 24/7 triage with 91% first-call resolution for infusion reactions, infection concerns, and medication questions, with immediate escalation for febrile immunocompromised patients."
      }
    ]
  },
  {
    "slug": "cognitive-behavioral-neurology",
    "specialty": "Cognitive & Behavioral Neurology",
    "tagline": "Guide patients from cognitive concern through diagnosis, treatment, and longitudinal brain health monitoring",
    "heroDescription": "Configural orchestrates the cognitive and behavioral neurology journey — from the first referral for memory concerns through neuropsychological testing, diagnosis disclosure, treatment initiation, and long-term cognitive surveillance. Our AI ensures no patient is lost between the multiple evaluation steps that define this specialty.",
    "description": "Cognitive neurology patients face a fragmented diagnostic odyssey — referrals lack cognitive screening scores, neuropsychological testing wait times extend to months, caregiver coordination is absent, and post-diagnosis follow-up attrition exceeds 50%. Without orchestration, patients with progressive conditions lose critical treatment windows.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting cognitive screening scores (MMSE, MoCA), neuroimaging findings, and family history of dementia",
      "AI-driven scheduling matching patients to optimal slots based on cognitive evaluation sequence, neuropsychological testing battery duration, caregiver availability, and time-of-day cognitive performance patterns",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with rapid cognitive decline or acute behavioral changes",
      "Pre-treatment prep automation — cognitive screening questionnaire delivery to patients and caregivers, prior neuroimaging compilation, medication reconciliation for anticholinergics, and caregiver information packet with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — with caregiver-inclusive communication and simplified instructions for cognitively impaired patients",
      "Real-time cognitive trajectory monitoring with AI severity assessment and escalation — tracking serial test scores, functional status changes, and caregiver burden indicators",
      "Post-treatment AI triage with 91% first-call resolution — addressing medication side effects, behavioral symptom management, caregiver crisis support, and driving safety concerns",
      "Automated cognitive surveillance and follow-up — zero patients lost to follow-up with scheduled reassessments at 6 and 12 months and caregiver wellbeing check-ins"
    ],
    "results": [
      {
        "value": "69%",
        "label": "Reduction in time from referral to completed evaluation"
      },
      {
        "value": "93%",
        "label": "Pre-visit cognitive screening completion rate"
      },
      {
        "value": "57%",
        "label": "Improvement in longitudinal follow-up adherence"
      },
      {
        "value": "2.6x",
        "label": "Increase in early-stage dementia detection"
      }
    ],
    "challenges": [
      "Referrals for memory concerns arrive without cognitive screening scores, neuroimaging, or medication lists that affect cognition",
      "Multi-step evaluations — clinical interview, neuropsych testing, imaging review — require sequential scheduling that breaks down constantly",
      "Caregiver involvement is essential but coordination with their schedules and communication preferences is entirely manual",
      "Post-diagnosis follow-up attrition exceeds 50% as overwhelmed caregivers struggle to maintain appointment schedules",
      "No automated way to track cognitive trajectories across serial assessments to detect accelerated decline",
      "Patients on anticholinergic medications need cross-specialty coordination to reduce cognitive burden"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes cognitive neurology referrals by extracting screening scores, neuroimaging summaries, medication lists flagging anticholinergics, and family dementia history. Routes rapid-decline cases for expedited multi-step evaluation and validates neuropsychological testing authorization."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates sequential evaluation pathways — clinical interview, neuropsychological testing (accounting for battery duration), imaging, and results disclosure — while coordinating caregiver availability. Fills cancellations prioritizing patients with acute behavioral changes."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Manages dual-channel communication to patients and caregivers with cognitively-appropriate messaging. Delivers pre-visit screening tools to both parties, sends simplified appointment reminders, and provides caregiver education resources matched to diagnosis stage."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Tracks cognitive trajectories using serial assessment data with AI-powered decline detection. Provides triage with 91% first-call resolution for behavioral symptoms, medication concerns, and caregiver crisis support, escalating rapidly for safety concerns including wandering and driving risk."
      }
    ]
  },
  {
    "slug": "consultation-liaison-psychiatry",
    "specialty": "Consultation-Liaison Psychiatry",
    "tagline": "Streamline psychiatric consultations across the hospital — from consult request to outpatient handoff",
    "heroDescription": "Configural brings orchestration to consultation-liaison psychiatry, where speed and coordination between medical and psychiatric teams determine outcomes. Our AI automates consult request processing, prioritizes by acuity, coordinates with primary medical teams, and ensures every patient has a seamless transition from inpatient consultation to outpatient psychiatric follow-up.",
    "description": "C-L psychiatry operates in a high-pressure, cross-service environment where consult requests arrive incomplete, prioritization is subjective, communication with primary teams breaks down, and post-discharge psychiatric follow-up falls through the cracks for over 60% of patients. Manual workflows cannot sustain the responsiveness this specialty demands.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting consult urgency, primary medical diagnosis, psychiatric history, and current psychotropic medications from inpatient records",
      "AI-driven scheduling matching patients to optimal slots based on consult acuity, requesting service urgency, psychiatrist subspecialty expertise, and medical stability windows for evaluation",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with active suicidal ideation, delirium, or capacity evaluation needs",
      "Pre-treatment prep automation — psychiatric history compilation from EMR, collateral contact identification, medication reconciliation for psychotropic-medical interactions, and capacity assessment framework preparation with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — coordinating with primary team nursing for bedside evaluation timing and family meetings",
      "Real-time psychiatric acuity monitoring with AI severity assessment and escalation — tracking suicidality screens, delirium scores, agitation levels, and medication response across hospitalization",
      "Post-treatment AI triage with 91% first-call resolution — addressing psychotropic medication questions, discharge anxiety, crisis de-escalation, and outpatient appointment coordination",
      "Automated post-discharge psychiatric follow-up surveillance — zero patients lost to follow-up with 7-day and 30-day outpatient appointment tracking and crisis resource confirmation"
    ],
    "results": [
      {
        "value": "82%",
        "label": "Reduction in consult response time"
      },
      {
        "value": "91%",
        "label": "Post-discharge psychiatric follow-up completion"
      },
      {
        "value": "67%",
        "label": "Decrease in repeat psychiatric consult requests"
      },
      {
        "value": "3.4x",
        "label": "Improvement in outpatient handoff success rate"
      }
    ],
    "challenges": [
      "Consult requests arrive with vague reasons like \"psych eval\" lacking psychiatric history, current medications, and specific clinical questions",
      "Prioritization across dozens of simultaneous consults relies on subjective assessment without standardized acuity scoring",
      "Communication gaps between psychiatry and primary teams lead to missed evaluation windows and duplicated work",
      "Post-discharge psychiatric follow-up fails for over 60% of consulted patients, especially those without established outpatient providers",
      "Medication reconciliation across medical and psychiatric formularies creates dangerous interaction risks without automated checking",
      "Capacity evaluations and involuntary hold coordination require time-sensitive documentation that manual processes cannot reliably produce"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes inpatient psychiatric consult requests by extracting clinical questions, psychiatric history, psychotropic medications, and acuity indicators from EMR data. Applies standardized urgency scoring and routes emergent consults (suicidality, delirium, capacity) for immediate response."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates consult timing with primary team rounds, patient medical stability windows, and psychiatrist availability. Manages dynamic prioritization across active consults and ensures discharge-pending patients receive evaluation before transfer."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Coordinates communication across patients, families, primary teams, and outpatient psychiatric providers. Manages discharge transition messaging including outpatient appointment confirmations, medication instructions, and crisis resource distribution via SMS, voice, and portal."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors psychiatric status throughout hospitalization using serial screening data. Provides post-discharge triage with 91% first-call resolution for medication concerns and crisis support, tracking 7-day and 30-day follow-up completion with immediate escalation for missed appointments."
      }
    ]
  },
  {
    "slug": "diabetes-metabolic-medicine",
    "specialty": "Diabetes & Metabolic Medicine",
    "tagline": "Automate the diabetes care journey — from diagnosis through lifelong metabolic optimization",
    "heroDescription": "Configural orchestrates the complete diabetes and metabolic medicine journey. From processing referrals with glucose data extraction to coordinating multi-disciplinary visits with endocrinology, nutrition, and ophthalmology, our AI ensures patients maintain tight metabolic control through automated monitoring, education, and follow-up protocols.",
    "description": "Diabetes management breaks down across fragmented care pathways — referrals lack recent A1C and glucose data, appointment gaps allow metabolic decompensation, patients miss annual eye and foot exams, and post-visit insulin titration goes unmonitored. Without automation, the multi-disciplinary coordination diabetes demands is unsustainable at scale.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting A1C history, current glucose management regimen, complication screening status, and CGM/pump data",
      "AI-driven scheduling matching patients to optimal slots based on A1C urgency, insulin start/titration needs, diabetes educator availability, and bundled annual screening coordination",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with A1C above 9%, recurrent hypoglycemia, or new insulin starts",
      "Pre-treatment prep automation — CGM data downloads, recent lab compilation, medication adherence assessment, and annual screening checklist delivery with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including glucose log reminders, dietary prep for labs, and diabetes education module delivery",
      "Real-time glucose trend monitoring with AI severity assessment and escalation — tracking CGM patterns, hypoglycemic events, and A1C trajectories across visits",
      "Post-treatment AI triage with 91% first-call resolution — addressing insulin dosing questions, hypoglycemia management, sick-day rules, and device troubleshooting for CGMs and pumps",
      "Automated metabolic surveillance and follow-up — zero patients lost to follow-up with quarterly A1C tracking, annual eye/foot/kidney screening, and complication prevention protocols"
    ],
    "results": [
      {
        "value": "72%",
        "label": "Improvement in annual screening completion rates"
      },
      {
        "value": "87%",
        "label": "Patients achieving target A1C within 6 months"
      },
      {
        "value": "61%",
        "label": "Reduction in ER visits for hypo/hyperglycemia"
      },
      {
        "value": "2.9x",
        "label": "Increase in CGM data utilization for dosing decisions"
      }
    ],
    "challenges": [
      "Referrals arrive without recent A1C values, current medication regimens, or CGM/pump data, requiring days of chart review",
      "Multi-disciplinary coordination — endocrinology, nutrition, ophthalmology, podiatry — is managed via phone tag and fax",
      "Annual screening compliance for eyes, feet, and kidneys drops below 50% without automated tracking and scheduling",
      "Insulin titration between visits goes unmonitored, leaving patients at risk for weeks until the next appointment",
      "CGM and pump data sits unreviewed because manual download and analysis is too time-consuming",
      "Patients newly diagnosed with diabetes need intensive education that practice workflows cannot accommodate"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes diabetes referrals by extracting A1C trends, medication regimens, CGM/pump data, and complication screening history. Flags patients with A1C above 9% or recurrent hypoglycemia for expedited evaluation and validates insurance coverage for devices and education."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates bundled multi-disciplinary visits — endocrinology, nutrition, ophthalmology, podiatry — and manages insulin start/titration follow-up scheduling. Fills cancellations prioritizing metabolically unstable patients and ensures quarterly visit cadence."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers diabetes self-management education modules, glucose logging reminders, and fasting lab prep instructions via SMS, voice, and portal. Coordinates annual screening reminders across multiple specialties and maintains dietary and exercise engagement between visits."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors glucose trends from CGM data and patient-reported logs with AI pattern recognition. Provides triage with 91% first-call resolution for insulin dosing, hypoglycemia management, and sick-day protocols, escalating dangerous patterns like recurrent severe hypoglycemia immediately."
      }
    ]
  },
  {
    "slug": "endocrine-oncology",
    "specialty": "Endocrine Oncology",
    "tagline": "Orchestrate every step from endocrine tumor referral through treatment, hormonal management, and lifelong surveillance",
    "heroDescription": "Configural transforms endocrine oncology with patient journey orchestration that spans the full spectrum — from thyroid nodule referral to post-surgical hormone optimization and lifelong tumor marker surveillance. Our AI coordinates the complex interplay between oncologic treatment and endocrine management that defines this subspecialty.",
    "description": "Endocrine oncology patients navigate two simultaneous care tracks — cancer treatment and hormone management — that are rarely coordinated. Referrals lack critical biopsy and hormone data, post-surgical thyroid hormone titration goes unmonitored, tumor marker surveillance scheduling falls behind, and patients are lost between oncology and endocrinology providers.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting biopsy pathology, hormone panels, tumor markers, and imaging findings for endocrine malignancies",
      "AI-driven scheduling matching patients to optimal slots based on tumor staging urgency, post-surgical hormone check timing, RAI therapy windows, and multidisciplinary tumor board coordination",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with aggressive endocrine malignancies or symptomatic hormone derangements",
      "Pre-treatment prep automation — pre-surgical lab panels, low-iodine diet instructions for RAI, thyroid hormone withdrawal protocols, and tumor board case preparation with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including hormone replacement compliance tracking and dietary restriction guidance",
      "Real-time tumor marker and hormone level monitoring with AI severity assessment and escalation — tracking thyroglobulin trends, calcitonin levels, and hormone replacement adequacy",
      "Post-treatment AI triage with 91% first-call resolution — addressing hormone replacement dosing concerns, RAI side effects, surgical recovery questions, and recurrence anxiety",
      "Automated endocrine cancer surveillance and follow-up — zero patients lost to follow-up with scheduled tumor markers, imaging, and hormone optimization at protocol-defined intervals"
    ],
    "results": [
      {
        "value": "73%",
        "label": "Reduction in referral-to-tumor-board time"
      },
      {
        "value": "92%",
        "label": "Surveillance protocol adherence rate"
      },
      {
        "value": "59%",
        "label": "Faster post-surgical hormone optimization"
      },
      {
        "value": "3.0x",
        "label": "Improvement in tumor marker monitoring compliance"
      }
    ],
    "challenges": [
      "Referrals arrive with scattered biopsy results, hormone panels from different labs, and incomplete imaging — requiring hours of manual compilation",
      "Coordination between surgical oncology, endocrinology, nuclear medicine, and pathology is entirely manual",
      "Post-thyroidectomy hormone replacement titration requires frequent monitoring that scheduling systems cannot automate",
      "Low-iodine diet compliance before RAI therapy is poorly supported without proactive patient education",
      "Tumor marker surveillance schedules vary by cancer type and stage, and manual tracking leads to missed intervals",
      "Patients fall between oncology and endocrinology providers with neither team owning longitudinal follow-up"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes endocrine oncology referrals by extracting biopsy pathology, hormone panels, tumor markers, and imaging from multiple sources. Compiles complete case profiles for tumor board presentation and flags aggressive histologies for expedited multi-disciplinary review."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates complex treatment sequences — biopsy, surgery, RAI therapy, follow-up imaging — with hormone monitoring appointments. Manages post-surgical lab check scheduling and fills cancellations prioritizing patients with hormone-dependent symptoms."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers treatment-phase-specific education including low-iodine diet guides, thyroid hormone withdrawal instructions, and RAI precautions via SMS, voice, and portal. Tracks hormone replacement compliance and provides emotional support resources for cancer-specific anxiety."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors tumor marker trends and hormone levels using AI trajectory analysis. Provides triage with 91% first-call resolution for dosing concerns, treatment side effects, and recurrence fears, escalating rising tumor markers or symptomatic hormone crises immediately to the care team."
      }
    ]
  },
  {
    "slug": "epilepsy",
    "specialty": "Epilepsy",
    "tagline": "Orchestrate the full epilepsy journey — from first seizure referral through seizure freedom and lifelong management",
    "heroDescription": "Configural transforms epilepsy care with end-to-end patient journey orchestration. From processing referrals with seizure semiology extraction to coordinating EEG monitoring, anti-seizure medication titration, and surgical evaluation pathways, our AI ensures patients move swiftly toward seizure control while never falling through follow-up gaps.",
    "description": "Epilepsy patients face dangerous journey gaps — referrals lack seizure descriptions and medication history, EEG scheduling delays extend diagnostic timelines, medication titration between visits is unmonitored, and surgical candidates wait months for evaluation. Each gap extends time to seizure control and increases injury risk.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting seizure semiology, frequency logs, current anti-seizure medications, and prior EEG/MRI findings",
      "AI-driven scheduling matching patients to optimal slots based on seizure frequency urgency, EEG monitoring bed availability, surgical evaluation pathway positioning, and medication titration check timing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with uncontrolled seizures, status epilepticus history, or pending surgical evaluations",
      "Pre-treatment prep automation — seizure diary delivery, medication level lab orders, EEG prep instructions including sleep deprivation protocols, and surgical evaluation checklist with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including seizure diary prompts, medication reminders, and driving restriction education",
      "Real-time seizure frequency and medication level monitoring with AI severity assessment and escalation — tracking seizure diary trends, drug levels, and side effect reports",
      "Post-treatment AI triage with 91% first-call resolution — addressing breakthrough seizures, medication side effects, aura management, and first-aid guidance for caregivers",
      "Automated epilepsy surveillance and follow-up — zero patients lost to follow-up with scheduled drug levels, EEGs, and MRIs at protocol-defined intervals for seizure-free patients"
    ],
    "results": [
      {
        "value": "70%",
        "label": "Reduction in time to seizure diagnosis completion"
      },
      {
        "value": "86%",
        "label": "Seizure diary compliance rate"
      },
      {
        "value": "64%",
        "label": "Faster identification of surgical candidates"
      },
      {
        "value": "2.7x",
        "label": "Improvement in seizure freedom rates within 12 months"
      }
    ],
    "challenges": [
      "Referrals for seizure evaluation arrive without witness descriptions, seizure frequency, or current medication and dosing information",
      "EEG monitoring bed availability creates multi-week bottlenecks that delay diagnosis while patients continue having seizures",
      "Medication titration between visits is unmonitored, and breakthrough seizures go unreported until the next appointment",
      "Surgical evaluation pathways require coordination across epileptology, neurosurgery, neuropsychology, and neuroradiology",
      "Seizure diary compliance drops without automated daily reminders, leaving providers with incomplete data at visits",
      "Driving restriction counseling and documentation is inconsistently delivered, creating medicolegal exposure"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes epilepsy referrals by extracting seizure semiology from clinical notes, medication history with levels, and prior EEG/MRI findings. Classifies urgency based on seizure frequency and type, and routes refractory epilepsy cases to comprehensive epilepsy center evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Manages multi-step diagnostic pathways — outpatient EEG, inpatient monitoring, imaging, neuropsychological testing — and coordinates surgical evaluation timelines. Fills EEG monitoring cancellations by matching waitlisted patients based on seizure frequency and surgical candidacy."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Drives daily seizure diary completion through automated prompts, delivers medication reminders at prescribed times, and sends EEG prep instructions including sleep deprivation protocols via SMS, voice, and portal. Provides driving restriction documentation and caregiver first-aid education."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors seizure diary trends and medication levels with AI-powered pattern recognition to detect loss of seizure control. Provides triage with 91% first-call resolution for breakthrough seizures, medication side effects, and caregiver emergencies, escalating cluster seizures and status risk immediately."
      }
    ]
  },
  {
    "slug": "functional-gi-disorders",
    "specialty": "Functional GI Disorders",
    "tagline": "Automate the functional GI patient journey — from referral through multidisciplinary treatment and symptom resolution",
    "heroDescription": "Configural orchestrates functional GI disorder care where the patient journey spans multiple modalities — dietary interventions, behavioral therapy, medication management, and neurogastroenterology evaluation. Our AI automates intake, coordinates multidisciplinary treatment plans, and maintains engagement through lengthy treatment trials that traditionally suffer from high attrition.",
    "description": "Functional GI disorder patients endure fragmented care — referrals arrive after years of testing with no compiled history, scheduling across GI, psychology, and nutrition is uncoordinated, dietary elimination protocols are unsupported between visits, and patients lose faith and drop out before treatments can take effect.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting prior workup history, Rome IV criteria symptom data, dietary trials attempted, and psychological comorbidity screening",
      "AI-driven scheduling matching patients to optimal slots based on symptom severity, multidisciplinary team availability for GI-psychology-nutrition bundling, and dietary trial phase timing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with severe symptom burden, weight loss, or failed multiple treatment trials",
      "Pre-treatment prep automation — symptom diary delivery, food-symptom log setup, Bristol stool chart education, prior workup compilation, and low-FODMAP elimination guide with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including daily food-symptom diary prompts and gut-brain therapy homework reminders",
      "Real-time symptom pattern monitoring with AI severity assessment and escalation — tracking food-symptom correlations, treatment response trajectories, and quality-of-life scores",
      "Post-treatment AI triage with 91% first-call resolution — addressing dietary reintroduction questions, medication side effects, flare management, and anxiety about symptom recurrence",
      "Automated functional GI follow-up surveillance — zero patients lost to follow-up with scheduled symptom reassessments and dietary progression check-ins at protocol-defined intervals"
    ],
    "results": [
      {
        "value": "75%",
        "label": "Improvement in treatment adherence across modalities"
      },
      {
        "value": "90%",
        "label": "Food-symptom diary completion rate"
      },
      {
        "value": "58%",
        "label": "Reduction in unnecessary repeat diagnostic testing"
      },
      {
        "value": "2.3x",
        "label": "Increase in patient-reported symptom improvement"
      }
    ],
    "challenges": [
      "Referrals arrive with years of negative workup results scattered across systems, and no compiled summary for the provider to review",
      "Multidisciplinary treatment — GI, psychology, nutrition — requires coordinated scheduling that current systems cannot manage",
      "Low-FODMAP and elimination diet protocols need daily support that clinic visits cannot provide",
      "Treatment trials span weeks to months, and patient dropout exceeds 45% without proactive engagement",
      "Food-symptom correlations are invisible without structured diary data that is actually completed and analyzed",
      "Patients with functional diagnoses feel dismissed, requiring communication that validates their experience and builds trust"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes functional GI referrals by extracting prior negative workups, Rome IV symptom profiles, dietary trial history, and psychological screening results. Compiles a comprehensive journey timeline to prevent duplicative testing and validates insurance for multidisciplinary treatment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Bundles multidisciplinary appointments — gastroenterology, GI psychology, nutrition counseling — into coordinated visit days. Manages dietary trial phase scheduling and fills cancellations by matching waitlisted patients based on symptom severity and treatment urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Supports daily food-symptom diary completion with automated prompts, delivers dietary phase transition instructions, and sends gut-brain therapy homework reminders via SMS, voice, and portal. Uses validating, empathetic messaging designed for patients who feel dismissed by prior providers."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Analyzes food-symptom diary data and treatment response patterns with AI correlation detection. Provides triage with 91% first-call resolution for dietary questions, flare management, and medication concerns, escalating red flag symptoms like unintended weight loss or GI bleeding immediately."
      }
    ]
  },
  {
    "slug": "geriatric-medicine",
    "specialty": "Geriatric Medicine",
    "tagline": "Orchestrate age-sensitive care from referral through comprehensive assessment, treatment, and sustained wellbeing",
    "heroDescription": "Configural transforms geriatric medicine with patient journey orchestration designed for the complexity of older adults. From processing referrals with fall risk and polypharmacy data to coordinating comprehensive geriatric assessments and caregiver communication, our AI ensures every elderly patient receives coordinated, dignified care without falling through gaps.",
    "description": "Geriatric medicine faces unique journey challenges — referrals lack functional assessment data, comprehensive geriatric assessments require multi-hour coordination, polypharmacy review demands cross-specialty communication, caregiver burnout goes unaddressed, and post-hospitalization transitions fail at alarming rates for older adults.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting functional status, fall history, medication count and anticholinergic burden, cognitive screening scores, and caregiver contact information",
      "AI-driven scheduling matching patients to optimal slots based on functional mobility limitations, comprehensive geriatric assessment component bundling, caregiver transportation availability, and time-of-day energy patterns",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — contacting caregivers alongside patients and prioritizing post-hospitalization, recurrent fallers, and rapid functional decline",
      "Pre-treatment prep automation — medication list compilation from all pharmacies, functional assessment questionnaire delivery, advance directive status check, caregiver burden screening, and transportation arrangement with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — with large-text options, caregiver-duplicated communications, and phone call preferences for non-digital patients",
      "Real-time functional status and fall risk monitoring with AI severity assessment and escalation — tracking ADL changes, medication-related adverse events, and caregiver distress signals",
      "Post-treatment AI triage with 91% first-call resolution — addressing polypharmacy concerns, fall prevention questions, caregiver support needs, and post-hospitalization symptom management",
      "Automated geriatric surveillance and follow-up — zero patients lost to follow-up with scheduled functional reassessments, medication reviews, and caregiver wellbeing check-ins"
    ],
    "results": [
      {
        "value": "66%",
        "label": "Reduction in 30-day hospital readmission rates"
      },
      {
        "value": "88%",
        "label": "Comprehensive geriatric assessment completion rate"
      },
      {
        "value": "53%",
        "label": "Decrease in polypharmacy-related adverse events"
      },
      {
        "value": "2.4x",
        "label": "Improvement in caregiver satisfaction scores"
      }
    ],
    "challenges": [
      "Referrals arrive without functional assessments, fall history, or complete medication lists from multiple prescribers and pharmacies",
      "Comprehensive geriatric assessments require 2-3 hours of coordinated evaluation that standard scheduling cannot accommodate",
      "Polypharmacy with 10+ medications from multiple providers creates dangerous interactions that no one is tracking holistically",
      "Caregiver communication preferences vary widely — some need phone calls, others text — and their schedules must be coordinated",
      "Post-hospitalization transitions fail because discharge instructions are too complex for patients and caregivers to follow",
      "Advance directive conversations and documentation are inconsistently initiated and tracked"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes geriatric referrals by extracting functional status, fall history, complete medication lists from all pharmacies, cognitive screening scores, and caregiver details. Calculates anticholinergic burden scores and flags high-risk transitions for expedited assessment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates comprehensive geriatric assessment scheduling — bundling medical, functional, cognitive, and social evaluations into manageable sessions. Coordinates with caregiver availability and transportation services, filling cancellations by prioritizing post-hospital and high-fall-risk patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Adapts communication to elderly patient preferences — large-text messages, phone calls for non-digital users, and caregiver-copied communications. Delivers simplified medication reminders, fall prevention tips, and appointment logistics including transportation confirmation via preferred channels."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors functional trajectories, fall events, and medication adverse effects with AI-powered geriatric risk scoring. Provides triage with 91% first-call resolution for polypharmacy concerns, fall anxiety, and caregiver distress, escalating acute functional decline and post-fall assessments immediately."
      }
    ]
  },
  {
    "slug": "headache-medicine",
    "specialty": "Headache Medicine",
    "tagline": "Automate the headache patient journey — from referral and diagnosis through preventive optimization and acute management",
    "heroDescription": "Configural orchestrates the headache medicine journey where patients cycle through diagnostic evaluation, acute treatment optimization, preventive medication titration, and procedural interventions. Our AI automates intake with headache diary data extraction, coordinates multi-modal treatment plans, and monitors treatment response to accelerate time to headache freedom.",
    "description": "Headache medicine patients face long delays — referrals lack headache diaries and medication overuse history, appointment waitlists stretch for months, treatment response tracking between visits is nonexistent, and patients bounce between acute and preventive strategies without coordinated oversight.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting headache frequency, prior preventive trials, acute medication usage patterns, and red flag symptom screening",
      "AI-driven scheduling matching patients to optimal slots based on headache frequency urgency, medication overuse risk, CGRP infusion timing, and Botox injection cycle coordination",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with chronic daily headache, medication overuse, or new-onset concerning features",
      "Pre-treatment prep automation — headache diary delivery and monitoring, prior treatment failure compilation, medication overuse assessment, and imaging coordination for red flag cases with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including daily headache diary prompts, trigger tracking, and infusion/injection appointment reminders",
      "Real-time headache frequency and treatment response monitoring with AI severity assessment and escalation — tracking diary patterns, acute medication overuse, and preventive titration response",
      "Post-treatment AI triage with 91% first-call resolution — addressing acute headache management, preventive medication side effects, injection site concerns, and status migrainosus guidance",
      "Automated headache surveillance and follow-up — zero patients lost to follow-up with monthly headache day tracking, quarterly preventive efficacy reviews, and procedure scheduling"
    ],
    "results": [
      {
        "value": "71%",
        "label": "Reduction in time to effective preventive therapy"
      },
      {
        "value": "93%",
        "label": "Headache diary compliance rate"
      },
      {
        "value": "56%",
        "label": "Decrease in medication overuse headache rates"
      },
      {
        "value": "2.5x",
        "label": "Improvement in 50% headache frequency reduction rates"
      }
    ],
    "challenges": [
      "Referrals arrive without headache frequency data, prior preventive medication trials, or acute medication usage patterns",
      "Waitlists for headache specialists stretch months while patients self-medicate with increasing acute medication overuse",
      "Treatment response tracking relies on patient recall at visits, missing the granular daily data needed for medication decisions",
      "CGRP therapy authorization, Botox cycle scheduling, and nerve block procedures require separate coordination workflows",
      "Medication overuse headache goes undetected without automated tracking of acute medication consumption patterns",
      "Patients attempting multiple preventive strategies need 2-3 month trials each, requiring sustained engagement over many months"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes headache referrals by extracting headache frequency, character, prior preventive trials with reasons for discontinuation, acute medication usage patterns, and red flag symptoms. Flags medication overuse and chronic daily headache for prioritized scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Manages headache treatment scheduling across office visits, CGRP infusions, Botox cycles, and nerve block procedures. Coordinates preventive trial follow-up timing and fills cancellations by matching waitlisted patients based on headache burden and medication overuse severity."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Drives daily headache diary completion with automated morning prompts, delivers trigger tracking tools, and sends treatment-phase-specific reminders via SMS, voice, and portal. Tracks acute medication usage and provides gentle overuse awareness notifications."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Analyzes headache diary patterns and acute medication usage with AI trend detection. Provides triage with 91% first-call resolution for acute headache management and medication side effects, escalating status migrainosus, thunderclap headache, and new neurological symptoms immediately."
      }
    ]
  },
  {
    "slug": "hematology-oncology",
    "specialty": "Hematology-Oncology",
    "tagline": "Orchestrate the cancer care journey — from diagnosis through treatment, survivorship, and lifelong surveillance",
    "heroDescription": "Configural transforms hematology-oncology with comprehensive patient journey orchestration. From processing complex referrals with pathology and staging data to coordinating chemotherapy cycles, managing treatment toxicities in real time, and ensuring survivorship care compliance, our AI ensures no cancer patient experiences preventable delays or care gaps.",
    "description": "Cancer care is among the most complex patient journeys in medicine — referrals with incomplete pathology delay treatment initiation by weeks, chemotherapy scheduling across infusion centers is fraught with gaps, treatment toxicities go undetected between cycles, and survivorship follow-up loses over 40% of patients within two years.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting pathology reports, staging data, genomic profiles, and prior treatment history",
      "AI-driven scheduling matching patients to optimal slots based on treatment protocol timing, infusion chair availability, lab-before-chemo sequencing, and tumor board coordination",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with aggressive histologies, treatment delays, or protocol-mandated timing windows",
      "Pre-treatment prep automation — pre-chemo lab orders, antiemetic prescriptions, consent documentation, port access instructions, and treatment protocol education with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including cycle-specific side effect anticipatory guidance and emergency contact instructions",
      "Real-time treatment toxicity monitoring with AI severity assessment and escalation — tracking patient-reported symptoms between cycles using validated PRO-CTCAE instruments",
      "Post-treatment AI triage with 91% first-call resolution — addressing chemotherapy side effects, fever and neutropenia screening, pain management, and emotional distress support",
      "Automated survivorship surveillance and follow-up — zero patients lost to follow-up with protocol-defined imaging, lab, and clinical visit schedules extending years post-treatment"
    ],
    "results": [
      {
        "value": "78%",
        "label": "Reduction in time from diagnosis to treatment initiation"
      },
      {
        "value": "94%",
        "label": "Chemotherapy cycle adherence to protocol timing"
      },
      {
        "value": "65%",
        "label": "Decrease in unplanned ER visits during treatment"
      },
      {
        "value": "3.2x",
        "label": "Improvement in survivorship care plan compliance"
      }
    ],
    "challenges": [
      "Pathology reports, genomic data, and imaging arrive from multiple institutions in inconsistent formats, delaying tumor board review",
      "Chemotherapy scheduling requires sequential lab-infusion coordination across infusion centers with limited chair availability",
      "Treatment toxicities develop between cycles and go unreported until they become emergencies requiring hospitalization",
      "Tumor board case preparation is manual, requiring hours of data compilation that delays treatment decisions",
      "Survivorship care plan delivery and long-term surveillance scheduling are inconsistently implemented",
      "Patients undergoing treatment need intensive emotional and logistical support that practice workflows cannot sustain"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes hematology-oncology referrals by extracting pathology, staging, genomic profiles, and prior treatment data from multiple sources. Compiles tumor board-ready case summaries, flags aggressive histologies for urgent evaluation, and validates treatment authorization requirements."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates chemotherapy cycle scheduling with pre-treatment lab sequencing, infusion chair allocation, and protocol-mandated timing adherence. Coordinates tumor board scheduling and fills infusion cancellations by matching waitlisted patients based on treatment urgency and protocol windows."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers cycle-specific anticipatory guidance, pre-chemo preparation reminders, and symptom reporting prompts via SMS, voice, and portal. Provides emotional support resources, clinical trial information, and survivorship care plan education matched to treatment phase."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors inter-cycle symptom reports using PRO-CTCAE instruments with AI toxicity grading. Provides 24/7 triage with 91% first-call resolution for treatment side effects, performing fever and neutropenia screening and escalating grade 3+ toxicities for immediate clinical intervention."
      }
    ]
  },
  {
    "slug": "infectious-disease",
    "specialty": "Infectious Disease",
    "tagline": "Automate the infection management journey — from consult through antimicrobial optimization and treatment completion",
    "heroDescription": "Configural orchestrates infectious disease care where time-to-appropriate-therapy directly impacts survival. Our AI automates consult processing with culture and sensitivity extraction, coordinates antimicrobial stewardship workflows, monitors treatment response in real time, and ensures patients complete complex antibiotic courses including outpatient parenteral therapy.",
    "description": "Infectious disease consults arrive with incomplete microbiological data, antibiotic selection delays worsen outcomes, antimicrobial stewardship review is reactive rather than proactive, and OPAT patients are lost to monitoring during weeks-long IV antibiotic courses. Every hour of delay in appropriate therapy increases mortality risk.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting culture results, sensitivities, current antibiotics, allergy history, and source of infection data",
      "AI-driven scheduling matching patients to optimal slots based on infection acuity, antimicrobial review urgency, OPAT coordination needs, and post-treatment surveillance timing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with resistant organisms, failing therapy, or OPAT complications",
      "Pre-treatment prep automation — culture result compilation, antibiogram matching, allergy verification, PICC line scheduling, and OPAT education materials with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including OPAT infusion scheduling, lab draw reminders, and symptom monitoring instructions",
      "Real-time infection response monitoring with AI severity assessment and escalation — tracking temperature trends, inflammatory markers, culture clearance, and antibiotic level results",
      "Post-treatment AI triage with 91% first-call resolution — addressing OPAT line complications, antibiotic side effects, symptom recurrence, and lab result interpretation",
      "Automated infection surveillance and follow-up — zero patients lost to follow-up with treatment completion verification, test-of-cure scheduling, and relapse monitoring"
    ],
    "results": [
      {
        "value": "81%",
        "label": "Reduction in time to appropriate antimicrobial therapy"
      },
      {
        "value": "96%",
        "label": "OPAT treatment completion rate"
      },
      {
        "value": "59%",
        "label": "Decrease in antimicrobial-related adverse events"
      },
      {
        "value": "2.8x",
        "label": "Improvement in antimicrobial stewardship compliance"
      }
    ],
    "challenges": [
      "Consult requests arrive without current cultures, sensitivities, antibiotic history, or allergy documentation, delaying recommendations",
      "Antimicrobial stewardship reviews are reactive, catching suboptimal therapy days after initiation",
      "OPAT patients receive weeks of IV antibiotics at home with minimal monitoring for complications and adherence",
      "Culture result tracking across multiple specimens and timepoints is manual and error-prone",
      "Antibiotic level monitoring and dose adjustments require lab-pharmacy-ID coordination that breaks down regularly",
      "Post-treatment surveillance for relapse is inconsistently scheduled, particularly for osteomyelitis and endocarditis"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes infectious disease consults by extracting culture results, sensitivities, current antimicrobial regimens, allergy history, and infection source data. Matches organisms against facility antibiogram and flags resistant infections for urgent ID evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates infection management timelines including antimicrobial review windows, PICC line placement scheduling, OPAT setup, and lab monitoring appointments. Fills cancellations prioritizing patients with resistant organisms or failing initial therapy."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Manages OPAT patient communication including infusion scheduling, lab draw reminders, symptom monitoring prompts, and line care education via SMS, voice, and portal. Tracks antibiotic course completion and provides treatment timeline visualization for patients."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors treatment response through inflammatory marker trends, culture clearance data, and antibiotic levels with AI-powered response prediction. Provides triage with 91% first-call resolution for OPAT complications and medication side effects, escalating line infections, treatment failure, and Clostridioides difficile symptoms immediately."
      }
    ]
  },
  {
    "slug": "interstitial-lung-disease",
    "specialty": "Interstitial Lung Disease",
    "tagline": "Orchestrate the ILD journey — from referral through multidisciplinary diagnosis, antifibrotic therapy, and lung health surveillance",
    "heroDescription": "Configural transforms interstitial lung disease care with patient journey orchestration that addresses the diagnostic complexity and treatment monitoring intensity this specialty demands. From processing referrals with HRCT and PFT data to coordinating multidisciplinary discussion, antifibrotic therapy monitoring, and transplant evaluation, our AI ensures patients progress through care without delays.",
    "description": "ILD patients face one of medicine's most complex diagnostic pathways — referrals lack pulmonary function and imaging data, multidisciplinary discussion scheduling delays diagnosis by months, antifibrotic therapy requires close monitoring for hepatotoxicity and GI intolerance, and transplant evaluation coordination is entirely manual.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting HRCT patterns, pulmonary function trends, autoimmune serologies, and occupational/environmental exposure history",
      "AI-driven scheduling matching patients to optimal slots based on disease progression urgency, multidisciplinary discussion coordination, PFT lab availability, and antifibrotic monitoring intervals",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with rapidly declining FVC, acute exacerbations, or pending transplant evaluations",
      "Pre-treatment prep automation — PFT scheduling, HRCT coordination, autoimmune panel ordering, medication hepatotoxicity consent, and occupational exposure questionnaire delivery with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including supplemental oxygen education, antifibrotic side effect monitoring, and pulmonary rehab coordination",
      "Real-time pulmonary function trend monitoring with AI severity assessment and escalation — tracking FVC decline rate, DLCO trends, 6-minute walk test results, and oxygen requirement changes",
      "Post-treatment AI triage with 91% first-call resolution — addressing antifibrotic GI side effects, oxygen titration questions, dyspnea management, and acute exacerbation symptom screening",
      "Automated ILD surveillance and follow-up — zero patients lost to follow-up with scheduled PFTs, imaging, liver function monitoring, and transplant readiness assessments at protocol-defined intervals"
    ],
    "results": [
      {
        "value": "74%",
        "label": "Reduction in time from referral to multidisciplinary diagnosis"
      },
      {
        "value": "91%",
        "label": "Antifibrotic therapy monitoring compliance"
      },
      {
        "value": "62%",
        "label": "Decrease in diagnostic lung biopsy rates via improved HRCT-clinical correlation"
      },
      {
        "value": "2.6x",
        "label": "Improvement in early transplant referral rates"
      }
    ],
    "challenges": [
      "Referrals arrive without HRCT images, PFT reports, or exposure history — requiring weeks of data gathering before evaluation",
      "Multidisciplinary discussion requires coordination of pulmonology, radiology, pathology, and rheumatology schedules",
      "Antifibrotic medications cause GI side effects and hepatotoxicity requiring frequent monitoring that is inconsistently tracked",
      "PFT decline trends are only visible when serial data is compiled and analyzed — which rarely happens proactively",
      "Transplant evaluation involves coordination across 10+ subspecialties with no automated workflow management",
      "Patients with progressive fibrosis need escalating oxygen support that is not monitored between visits"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes ILD referrals by extracting HRCT patterns (UIP, NSIP, etc.), PFT trends, autoimmune serologies, and environmental exposure history. Compiles multidisciplinary discussion-ready case summaries and flags rapidly progressive cases for urgent evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates complex diagnostic pathways including PFT scheduling, HRCT timing, multidisciplinary discussion slots, and bronchoscopy if needed. Manages antifibrotic monitoring visit cadence and fills cancellations prioritizing patients with accelerated FVC decline."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers ILD-specific education including supplemental oxygen training, antifibrotic medication guidance, and pulmonary rehabilitation coordination via SMS, voice, and portal. Tracks medication adherence, side effect reporting, and oxygen usage to maintain engagement between visits."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors PFT trajectories and functional status trends with AI-powered FVC decline prediction. Provides triage with 91% first-call resolution for dyspnea management, antifibrotic side effects, and oxygen concerns, escalating acute exacerbations and critical FVC decline for immediate intervention."
      }
    ]
  },
  {
    "slug": "lipid-metabolic-disorders",
    "specialty": "Lipid & Metabolic Disorders",
    "tagline": "Automate the lipid management journey — from cardiovascular risk referral through therapy optimization and lifelong monitoring",
    "heroDescription": "Configural orchestrates lipid and metabolic disorder care where patient journeys span decades of cardiovascular risk reduction. From processing referrals with lipid panel history to coordinating statin titration, PCSK9 inhibitor authorization, and long-term atherosclerotic risk monitoring, our AI ensures patients achieve and maintain lipid targets without care gaps.",
    "description": "Lipid management patients are undertreated at every stage — referrals lack cardiovascular risk data, statin titration follow-up is delayed, specialty lipid therapy authorization takes weeks, patients discontinue medications due to unaddressed side effects, and long-term monitoring compliance drops steadily without proactive engagement.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting lipid panel history, ASCVD risk score data, statin trial history, familial hyperlipidemia indicators, and cardiovascular event history",
      "AI-driven scheduling matching patients to optimal slots based on cardiovascular risk urgency, fasting lab timing requirements, PCSK9 inhibitor injection training needs, and lipid panel monitoring intervals",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with recent cardiovascular events, severely elevated LDL, or familial hyperlipidemia",
      "Pre-treatment prep automation — fasting lipid panel orders, cardiovascular risk calculator completion, prior statin tolerance documentation, Lp(a) and apoB testing, and dietary history questionnaire with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including fasting reminders before labs, statin adherence check-ins, and heart-healthy diet resources",
      "Real-time lipid level and cardiovascular risk monitoring with AI severity assessment and escalation — tracking LDL trends relative to targets, statin side effect reports, and medication adherence patterns",
      "Post-treatment AI triage with 91% first-call resolution — addressing statin myalgia concerns, injection technique questions for PCSK9 inhibitors, dietary counseling, and medication interaction queries",
      "Automated cardiovascular risk surveillance and follow-up — zero patients lost to follow-up with scheduled lipid panels, liver function tests, and ASCVD risk reassessments at guideline-defined intervals"
    ],
    "results": [
      {
        "value": "77%",
        "label": "Improvement in LDL target achievement rates"
      },
      {
        "value": "89%",
        "label": "Statin therapy continuation at 12 months"
      },
      {
        "value": "64%",
        "label": "Reduction in PCSK9 inhibitor authorization delays"
      },
      {
        "value": "2.7x",
        "label": "Increase in appropriate Lp(a) screening completion"
      }
    ],
    "challenges": [
      "Referrals arrive without complete lipid history, prior statin trials and reasons for discontinuation, or cardiovascular risk stratification",
      "Statin titration follow-up labs are ordered but patients fail to complete them, leaving dose optimization stalled",
      "PCSK9 inhibitor prior authorization requires extensive documentation of statin failure that is scattered across records",
      "Muscle-related side effects cause statin discontinuation without structured rechallenge or alternative therapy protocols",
      "Long-term lipid monitoring adherence drops below 50% after the first year without proactive scheduling",
      "Familial hyperlipidemia cascade screening of family members is rarely initiated or tracked"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes lipid disorder referrals by extracting lipid panel trends, ASCVD risk scores, statin trial history with tolerability data, and familial hyperlipidemia indicators. Compiles prior authorization documentation for specialty therapies and flags high-risk patients for expedited evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates fasting lab scheduling with follow-up appointment timing, PCSK9 inhibitor injection training sessions, and guideline-based monitoring intervals. Fills cancellations prioritizing post-cardiac-event patients and those with severely elevated LDL awaiting therapy initiation."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers fasting reminders before lipid panels, statin adherence check-ins, and heart-healthy nutrition resources via SMS, voice, and portal. Tracks medication side effect reports to enable proactive rechallenge protocols and supports PCSK9 self-injection education."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors LDL trends against targets and medication adherence patterns with AI-powered risk scoring. Provides triage with 91% first-call resolution for statin myalgia, injection concerns, and dietary questions, escalating rhabdomyolysis symptoms and acute cardiovascular events immediately."
      }
    ]
  },
  {
    "slug": "movement-disorders",
    "specialty": "Movement Disorders",
    "tagline": "Orchestrate movement disorder care from referral through diagnosis, medication optimization, and DBS management",
    "heroDescription": "Configural transforms movement disorder care with patient journey orchestration designed for the progressive, medication-intensive nature of conditions like Parkinson disease, essential tremor, and dystonia. Our AI automates referral processing with motor assessment data, coordinates complex medication timing, manages DBS programming schedules, and ensures longitudinal monitoring catches progression before function is lost.",
    "description": "Movement disorder patients face care gaps that accelerate disability — referrals lack motor assessment scores, medication timing optimization requires granular data providers never receive, DBS programming follow-up is poorly coordinated, and progressive functional decline between visits goes undetected until patients present with falls and injuries.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting motor examination findings, UPDRS scores, medication regimen with dosing times, DBS implant history, and functional status",
      "AI-driven scheduling matching patients to optimal slots based on disease progression rate, medication adjustment urgency, DBS programming needs, and optimal evaluation timing relative to medication \"on/off\" states",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with rapid motor decline, falls, medication wearing-off patterns, or DBS complications",
      "Pre-treatment prep automation — motor diary delivery, medication timing log setup, DBS settings documentation, pre-visit rating scale completion (UPDRS, tremor rating), and video recording instructions with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including medication timing reminders, exercise program prompts, and fall prevention education",
      "Real-time motor symptom and medication response monitoring with AI severity assessment and escalation — tracking wearing-off patterns, dyskinesia episodes, fall frequency, and functional status changes",
      "Post-treatment AI triage with 91% first-call resolution — addressing medication timing questions, DBS setting concerns, fall events, swallowing difficulties, and freezing episode management",
      "Automated movement disorder surveillance and follow-up — zero patients lost to follow-up with scheduled motor assessments, medication reviews, DBS checks, and functional evaluations at progression-adjusted intervals"
    ],
    "results": [
      {
        "value": "73%",
        "label": "Improvement in \"on\" time for Parkinson patients"
      },
      {
        "value": "92%",
        "label": "Motor diary completion rate"
      },
      {
        "value": "58%",
        "label": "Reduction in fall-related ER visits"
      },
      {
        "value": "2.9x",
        "label": "Faster identification of wearing-off patterns"
      }
    ],
    "challenges": [
      "Referrals arrive without standardized motor assessment scores, current medication timing schedules, or functional status data",
      "Medication timing optimization requires motor diary data that is almost never completed without automated reminders",
      "DBS programming follow-up requires coordination between neurology, neurosurgery, and device representatives",
      "Progressive motor decline between visits goes undetected until patients present with fall injuries or aspiration events",
      "Wearing-off and dyskinesia patterns are invisible without granular symptom tracking relative to medication doses",
      "Caregiver burden escalates silently as patients lose independence, with no systematic support or monitoring"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes movement disorder referrals by extracting motor examination findings, rating scale scores, medication regimens with precise timing, DBS implant details, and functional status. Routes rapidly progressing cases for expedited evaluation and validates DBS-related authorization."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates movement disorder visits optimized for medication \"on\" state evaluation timing, DBS programming appointments with device representatives, and multidisciplinary assessments. Fills cancellations by matching waitlisted patients based on motor decline rate and fall risk."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers medication timing reminders aligned to individualized dosing schedules, motor diary prompts, exercise program encouragement, and fall prevention tips via SMS, voice, and portal. Provides video recording instructions for capturing motor episodes between visits."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Analyzes motor diary patterns relative to medication timing with AI-powered wearing-off and dyskinesia detection. Provides triage with 91% first-call resolution for medication timing questions, DBS concerns, and fall events, escalating freezing-related falls, swallowing crises, and DBS hardware issues immediately."
      }
    ]
  },
  {
    "slug": "multiple-sclerosis-neuroimmunology",
    "specialty": "Multiple Sclerosis & Neuroimmunology",
    "tagline": "Automate the MS journey — from first demyelinating event through disease-modifying therapy and relapse surveillance",
    "heroDescription": "Configural orchestrates multiple sclerosis and neuroimmunology care where early treatment decisions define decades of outcomes. Our AI automates referral processing with MRI lesion and CSF data, coordinates disease-modifying therapy initiation and monitoring, manages infusion scheduling, and ensures relapse detection happens in days rather than months.",
    "description": "MS patients face critical journey gaps — referrals lack MRI and CSF data, DMT initiation is delayed by authorization, infusion scheduling is fragmented, treatment monitoring for PML and other risks is inconsistent, and relapses go unreported between visits because patients normalize their symptoms.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting MRI lesion burden, CSF results including oligoclonal bands, prior DMT history, and relapse timeline",
      "AI-driven scheduling matching patients to optimal slots based on disease activity urgency, DMT infusion timing cycles, MRI monitoring intervals, and JCV antibody testing schedules",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with active relapses, high lesion burden, or pending DMT initiation",
      "Pre-treatment prep automation — pre-infusion lab panels (CBC, LFTs, JCV), MRI scheduling coordination, vaccination completion before immunosuppression, and DMT consent education with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including symptom tracking prompts, infusion reminders, and new symptom reporting channels",
      "Real-time relapse detection and disease activity monitoring with AI severity assessment and escalation — tracking patient-reported symptoms, MRI progression, disability scale changes, and infusion tolerance",
      "Post-treatment AI triage with 91% first-call resolution — addressing new neurological symptoms, infusion reactions, injection site issues, fatigue management, and DMT side effect concerns",
      "Automated MS surveillance and follow-up — zero patients lost to follow-up with scheduled MRIs, disability assessments, JCV monitoring, and DMT efficacy reviews at protocol-defined intervals"
    ],
    "results": [
      {
        "value": "76%",
        "label": "Reduction in time to disease-modifying therapy initiation"
      },
      {
        "value": "93%",
        "label": "DMT infusion adherence rate"
      },
      {
        "value": "61%",
        "label": "Faster relapse detection through symptom monitoring"
      },
      {
        "value": "3.1x",
        "label": "Improvement in MRI surveillance compliance"
      }
    ],
    "challenges": [
      "Referrals for demyelinating events arrive without MRI images, radiology reports, or CSF analysis requiring weeks of data collection",
      "DMT prior authorization requires extensive documentation and delays treatment initiation during a critical early window",
      "Infusion scheduling across multi-week and multi-month cycles with pre-infusion lab requirements is unmanageable manually",
      "JCV antibody monitoring for PML risk is inconsistently tracked, creating dangerous gaps in patient safety surveillance",
      "Relapses develop gradually and patients normalize symptoms, going unreported for weeks until disability is established",
      "Vaccination schedules must be completed before immunosuppressive DMTs, adding another coordination layer"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes MS and neuroimmunology referrals by extracting MRI lesion data, CSF results, prior DMT history, and relapse timelines. Compiles DMT authorization documentation, flags high-activity disease for urgent treatment initiation, and coordinates vaccination status assessment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Manages cyclical DMT infusion scheduling with pre-infusion lab coordination, MRI surveillance timing, and JCV monitoring intervals. Fills infusion cancellations by matching waitlisted patients based on disease activity and treatment urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers MS-specific symptom tracking prompts, infusion preparation reminders, and new symptom reporting channels via SMS, voice, and portal. Provides educational resources matched to disease stage and DMT type, and supports injection training for self-administered therapies."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors patient-reported symptoms for early relapse detection using AI pattern recognition against known MS relapse signatures. Provides triage with 91% first-call resolution for DMT side effects, fatigue management, and new symptoms, escalating suspected relapses and PML-concerning symptoms for immediate evaluation."
      }
    ]
  },
  {
    "slug": "nephrology",
    "specialty": "Nephrology",
    "tagline": "Orchestrate kidney care from early CKD detection through dialysis preparation, access creation, and transplant readiness",
    "heroDescription": "Configural transforms nephrology with patient journey orchestration that spans the entire CKD trajectory. From processing referrals with eGFR trend data to coordinating vascular access planning, dialysis education, and transplant evaluation, our AI ensures patients are never surprised by disease progression and are prepared for every transition in their kidney care journey.",
    "description": "Nephrology patients face dangerous care gaps — referrals arrive late with no eGFR trending, CKD education begins too late, vascular access is placed emergently rather than planned, dialysis starts on catheters instead of fistulas, and transplant evaluation is initiated after years of delay. Proactive orchestration can transform these outcomes.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting eGFR trends, proteinuria data, medication list with nephrotoxins flagged, and CKD staging",
      "AI-driven scheduling matching patients to optimal slots based on CKD stage progression rate, vascular access planning timelines, dialysis education readiness, and transplant evaluation sequencing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with rapidly declining eGFR, hyperkalemia risk, or approaching dialysis initiation",
      "Pre-treatment prep automation — renal panel orders, medication nephrotoxicity review, CKD stage-specific education delivery, vascular access referral at appropriate eGFR, and dietary counseling coordination with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including fluid and dietary restriction education, medication compliance tracking, and dialysis modality education",
      "Real-time eGFR trajectory and electrolyte monitoring with AI severity assessment and escalation — tracking kidney function decline rate, potassium trends, and fluid status indicators",
      "Post-treatment AI triage with 91% first-call resolution — addressing dietary questions, medication concerns, fluid management, dialysis access complications, and transplant process navigation",
      "Automated CKD surveillance and follow-up — zero patients lost to follow-up with scheduled renal panels, eGFR trending, access maturation monitoring, and transplant readiness milestones"
    ],
    "results": [
      {
        "value": "79%",
        "label": "Reduction in emergent dialysis catheter starts"
      },
      {
        "value": "90%",
        "label": "Patients with functioning fistula at dialysis initiation"
      },
      {
        "value": "67%",
        "label": "Improvement in early transplant referral rates"
      },
      {
        "value": "2.8x",
        "label": "Increase in pre-dialysis education completion"
      }
    ],
    "challenges": [
      "Referrals arrive with a single creatinine value and no eGFR trending, making progression assessment impossible at first visit",
      "Vascular access planning requires a 6-month lead time but is initiated too late because CKD progression is not tracked proactively",
      "Dialysis education should begin at CKD stage 4 but is rarely delivered systematically or confirmed for understanding",
      "Nephrotoxic medications prescribed by other providers go undetected without automated medication reconciliation",
      "Transplant evaluation involves 15+ subspecialty clearances and months of coordination with no automated workflow",
      "Dietary adherence for renal patients — potassium, phosphorus, sodium, fluid — requires sustained engagement that visit-based care cannot provide"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes nephrology referrals by extracting eGFR trends from available labs, proteinuria quantification, medication lists with nephrotoxin flagging, and CKD staging. Predicts time to dialysis using eGFR trajectory and flags patients needing urgent vascular access planning."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Manages CKD stage-appropriate visit cadence, coordinates vascular access surgical referral timing, and sequences transplant evaluation subspecialty clearances. Fills cancellations by matching waitlisted patients based on eGFR decline rate and dialysis proximity."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers CKD stage-specific education including dietary restrictions, medication compliance reminders, and dialysis modality decision support via SMS, voice, and portal. Tracks fluid intake, supports transplant process navigation, and provides renal diet recipes and resources."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors eGFR trajectories and electrolyte trends with AI-powered CKD progression prediction. Provides triage with 91% first-call resolution for dietary questions, medication concerns, and access site issues, escalating hyperkalemia risk, fluid overload symptoms, and access thrombosis immediately."
      }
    ]
  },
  {
    "slug": "neuropsychiatry",
    "specialty": "Neuropsychiatry",
    "tagline": "Bridge neurology and psychiatry — orchestrating the journey from complex referral through integrated diagnosis and treatment",
    "heroDescription": "Configural orchestrates neuropsychiatry care where patients fall between neurology and psychiatry with no clear home. Our AI automates processing of complex referrals with both neurological and psychiatric data, coordinates dual-specialty evaluations, manages psychotropic-neurological medication interactions, and ensures patients receive truly integrated longitudinal care.",
    "description": "Neuropsychiatry patients are medicine's most under-served — referrals bounce between neurology and psychiatry with incomplete data from both, evaluation requires combined neurological and psychiatric assessment expertise, medication management crosses specialty formularies, and follow-up responsibility falls to neither specialty.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting both neurological (EEG, MRI, exam findings) and psychiatric (diagnoses, psychotropics, hospitalizations) histories into a unified profile",
      "AI-driven scheduling matching patients to optimal slots based on symptom acuity, combined neuro-psychiatric evaluation time requirements, neuropsychological testing coordination, and medication review urgency",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with psychogenic non-epileptic episodes, post-stroke psychiatric symptoms, or autoimmune encephalitis behavioral changes",
      "Pre-treatment prep automation — dual-specialty history compilation, neuroimaging and EEG coordination, psychotropic medication interaction screening, and combined neuro-psychiatric symptom questionnaire delivery with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — with messaging that validates the real neurobiological nature of their symptoms and reduces stigma",
      "Real-time neuropsychiatric symptom monitoring with AI severity assessment and escalation — tracking seizure-like episodes, mood fluctuations, cognitive changes, and medication response across both domains",
      "Post-treatment AI triage with 91% first-call resolution — addressing medication interaction concerns, behavioral episode management, cognitive symptom fluctuations, and crisis de-escalation",
      "Automated neuropsychiatric surveillance and follow-up — zero patients lost to follow-up with integrated neuro-psychiatric reassessments, medication reviews, and functional outcome tracking"
    ],
    "results": [
      {
        "value": "72%",
        "label": "Reduction in time to integrated diagnosis"
      },
      {
        "value": "88%",
        "label": "Patient retention in longitudinal neuropsychiatric care"
      },
      {
        "value": "56%",
        "label": "Decrease in unnecessary neurology-psychiatry cross-referrals"
      },
      {
        "value": "2.4x",
        "label": "Improvement in medication optimization across specialties"
      }
    ],
    "challenges": [
      "Referrals arrive with either neurological or psychiatric data but rarely both, requiring extensive additional history gathering",
      "Combined neuro-psychiatric evaluations require longer appointments that standard scheduling templates cannot accommodate",
      "Medication management crossing neurology and psychiatry formularies creates interaction risks without integrated review",
      "Patients with functional neurological disorder need a specific communication approach that validates their symptoms",
      "No system tracks neuropsychiatric symptom complexes that span both domains in an integrated longitudinal view",
      "Follow-up responsibility falls between neurology and psychiatry departments, resulting in patients lost to both"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes neuropsychiatry referrals by extracting and unifying both neurological data (EEG, MRI, neurological exam) and psychiatric history (diagnoses, hospitalizations, psychotropics) into a single integrated profile. Flags cases requiring urgent combined evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates extended evaluation appointments that accommodate combined neuro-psychiatric assessment, neuropsychological testing, and neurodiagnostic studies. Fills cancellations by matching waitlisted patients based on symptom acuity across both neurological and psychiatric domains."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Communicates with validated, de-stigmatizing messaging that acknowledges the neurobiological basis of neuropsychiatric symptoms. Delivers combined symptom questionnaires, medication reminders spanning both formularies, and appointment preparation via SMS, voice, and portal."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors integrated neuropsychiatric symptom profiles with AI pattern recognition spanning both domains. Provides triage with 91% first-call resolution for medication interactions, behavioral episodes, and cognitive fluctuations, escalating acute psychiatric crises and new neurological deficits simultaneously."
      }
    ]
  },
  {
    "slug": "obesity-medicine",
    "specialty": "Obesity Medicine",
    "tagline": "Automate the weight management journey — from referral through behavioral, pharmacologic, and surgical intervention pathways",
    "heroDescription": "Configural orchestrates obesity medicine care where patient journeys span behavioral counseling, pharmacotherapy, and surgical evaluation pathways that require sustained multi-year engagement. Our AI automates intake with metabolic comorbidity profiling, coordinates multi-disciplinary treatment plans, tracks weight trajectories, and maintains the long-term engagement that determines permanent weight loss success.",
    "description": "Obesity medicine programs lose patients at alarming rates — referrals lack metabolic workup data, multi-disciplinary scheduling across nutrition, psychology, and medicine is fragmented, GLP-1 authorization takes weeks, surgical evaluation coordination is manual, and long-term weight maintenance follow-up retention drops below 30% at one year.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting BMI history, metabolic comorbidities, prior weight loss attempts, eating behavior screening, and current medications affecting weight",
      "AI-driven scheduling matching patients to optimal slots based on BMI severity, metabolic urgency, multi-disciplinary team availability for bundled visits, and GLP-1/surgical pathway positioning",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with BMI above 40, obesity hypoventilation, or pending bariatric surgical clearance",
      "Pre-treatment prep automation — metabolic panel and hormonal workup orders, eating behavior questionnaire delivery, food diary setup, prior weight loss program documentation, and insurance-required supervised weight loss visit tracking with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including food diary prompts, exercise tracking, behavioral goal check-ins, and medication adherence monitoring",
      "Real-time weight trajectory and metabolic marker monitoring with AI severity assessment and escalation — tracking weight trends, A1C changes, blood pressure improvements, and medication response",
      "Post-treatment AI triage with 91% first-call resolution — addressing GLP-1 medication side effects, dietary questions, exercise modification guidance, and post-bariatric surgical concerns",
      "Automated weight management surveillance and follow-up — zero patients lost to follow-up with monthly weight tracking, quarterly metabolic panels, and annual comprehensive reassessments extending for years"
    ],
    "results": [
      {
        "value": "78%",
        "label": "Improvement in 12-month program retention"
      },
      {
        "value": "91%",
        "label": "Insurance-required supervised visit completion rate"
      },
      {
        "value": "63%",
        "label": "Patients achieving greater than 10% body weight loss"
      },
      {
        "value": "3.0x",
        "label": "Increase in sustained weight loss maintenance at 2 years"
      }
    ],
    "challenges": [
      "Referrals arrive without metabolic workup, prior weight loss program history, or eating behavior screening — duplicating months of completed work",
      "Multi-disciplinary coordination — medicine, nutrition, psychology, exercise physiology — is managed by phone with constant scheduling conflicts",
      "GLP-1 agonist prior authorization requires documentation of prior interventions that is scattered across records",
      "Insurance-required 3-6 months of supervised weight loss visits before bariatric surgery need meticulous attendance tracking",
      "Long-term follow-up retention drops below 30% at one year, leading to weight regain without ongoing support",
      "Food diary and exercise tracking compliance drops without daily automated engagement and accountability"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes obesity medicine referrals by extracting BMI history, metabolic comorbidity profiles, prior weight loss interventions, eating behavior screening data, and weight-affecting medications. Compiles GLP-1 and bariatric surgery authorization documentation from historical records."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Bundles multi-disciplinary visits — medicine, nutrition, psychology, exercise physiology — into single visit days. Tracks insurance-required supervised weight loss visit counts for surgical candidates and fills cancellations prioritizing metabolically urgent patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Drives daily food diary and exercise tracking completion, delivers behavioral goal check-ins, and provides GLP-1 medication adherence reminders via SMS, voice, and portal. Maintains motivational engagement over multi-year treatment timelines with progress visualization and milestone celebrations."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors weight trajectories and metabolic marker improvements with AI-powered response prediction. Provides triage with 91% first-call resolution for medication side effects, dietary questions, and exercise modifications, escalating GLP-1 adverse reactions and post-surgical complications immediately."
      }
    ]
  },
  {
    "slug": "onco-nutrition",
    "specialty": "Onco-Nutrition",
    "tagline": "Orchestrate cancer nutrition care — from malnutrition screening through treatment-phase nutrition optimization and survivorship wellness",
    "heroDescription": "Configural transforms onco-nutrition with patient journey orchestration that integrates nutritional care into every phase of cancer treatment. From processing referrals with malnutrition screening data to coordinating nutrition interventions with chemotherapy cycles, managing treatment-related taste changes and GI toxicities, and ensuring nutritional rehabilitation through survivorship, our AI closes the gaps that leave cancer patients malnourished.",
    "description": "Cancer patients lose weight and muscle at rates that directly impact treatment tolerance and survival — yet nutrition referrals are delayed, malnutrition screening is inconsistent, dietary interventions are not synchronized with treatment cycles, and post-treatment nutritional rehabilitation is virtually nonexistent in most programs.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting malnutrition screening scores (MST, PG-SGA), current weight and BMI trends, cancer diagnosis and treatment phase, and dietary restriction information",
      "AI-driven scheduling matching patients to optimal slots based on malnutrition severity, treatment cycle timing for intervention synchronization, enteral nutrition management needs, and survivorship nutrition transition readiness",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with critical weight loss, pre-surgical nutrition optimization needs, or enteral feeding complications",
      "Pre-treatment prep automation — calorie count diary delivery, hydration tracking setup, supplement reconciliation, enteral formula instructions, and treatment-phase dietary guide delivery with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including meal planning support, calorie tracking prompts, hydration reminders, and taste change adaptation strategies",
      "Real-time weight trend and nutritional status monitoring with AI severity assessment and escalation — tracking caloric intake, weight trajectory, albumin/prealbumin trends, and treatment-related GI toxicity impact",
      "Post-treatment AI triage with 91% first-call resolution — addressing appetite management, nausea strategies, enteral feeding troubleshooting, supplement questions, and taste alteration coping techniques",
      "Automated nutritional surveillance and follow-up — zero patients lost to follow-up with weight monitoring, nutritional reassessments, and survivorship wellness nutrition planning at treatment milestones"
    ],
    "results": [
      {
        "value": "74%",
        "label": "Reduction in treatment delays due to malnutrition"
      },
      {
        "value": "89%",
        "label": "Calorie tracking compliance during treatment"
      },
      {
        "value": "61%",
        "label": "Decrease in unplanned weight loss during chemotherapy"
      },
      {
        "value": "2.6x",
        "label": "Improvement in nutritional rehabilitation post-treatment"
      }
    ],
    "challenges": [
      "Nutrition referrals are made after significant weight loss has already occurred, missing the early intervention window",
      "Malnutrition screening scores are not systematically captured or transmitted with oncology referrals",
      "Dietary interventions need to synchronize with chemotherapy cycles but scheduling systems do not link these workflows",
      "Treatment-related taste changes, nausea, and mucositis require real-time dietary adaptation that visit-based care cannot provide",
      "Enteral nutrition patients need daily troubleshooting support for tube feeding complications between clinic visits",
      "Post-treatment nutritional rehabilitation and cancer survivorship wellness nutrition are rarely addressed"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes onco-nutrition referrals by extracting malnutrition screening scores, weight and BMI trends, cancer diagnosis with treatment phase, and current dietary intake data. Flags critical malnutrition for urgent intervention and coordinates with oncology treatment timelines."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Synchronizes nutrition appointments with chemotherapy and radiation cycles, coordinates enteral nutrition follow-up timing, and manages pre-surgical nutrition optimization scheduling. Fills cancellations prioritizing critically malnourished patients and those approaching treatment initiation."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers treatment-phase-specific meal planning support, calorie and hydration tracking prompts, taste change adaptation strategies, and supplement reminders via SMS, voice, and portal. Provides recipe resources adapted to treatment side effects and cultural dietary preferences."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors weight trajectories and caloric intake trends with AI-powered malnutrition risk prediction. Provides triage with 91% first-call resolution for appetite management, nausea strategies, and enteral feeding troubleshooting, escalating critical weight loss and dehydration risk for immediate nutritional intervention."
      }
    ]
  },
  {
    "slug": "pain-medicine",
    "specialty": "Pain Medicine",
    "tagline": "Orchestrate the chronic pain journey — from referral through multimodal treatment, opioid stewardship, and functional restoration",
    "heroDescription": "Configural transforms pain medicine with patient journey orchestration that supports multimodal treatment across interventional procedures, medication management, physical therapy, and behavioral approaches. Our AI automates intake with pain assessment data, coordinates multi-disciplinary treatment plans, monitors opioid stewardship compliance, and tracks functional outcomes rather than just pain scores.",
    "description": "Pain medicine patients navigate a fragmented landscape — referrals lack pain assessments and treatment history, procedural scheduling is disconnected from medication management, opioid stewardship monitoring is inconsistent, physical therapy coordination breaks down, and functional outcome tracking is absent. Patients cycle through ineffective treatments without coordinated oversight.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting pain location and severity scores, prior interventional procedures, medication history including opioid use, PDMP data, and functional status assessments",
      "AI-driven scheduling matching patients to optimal slots based on pain acuity, procedure sequencing, opioid agreement renewal timing, physical therapy coordination, and multi-disciplinary conference scheduling",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with acute pain exacerbations, pending opioid tapers, or failed prior interventions requiring escalation",
      "Pre-treatment prep automation — pain assessment questionnaire delivery (BPI, PCS, PROMIS), PDMP check coordination, pre-procedure instructions including anticoagulation management, and opioid agreement documentation with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including functional goal tracking, physical therapy adherence check-ins, and mindfulness/pain coping resource delivery",
      "Real-time pain and functional status monitoring with AI severity assessment and escalation — tracking pain scores, opioid usage patterns, functional milestones, and aberrant medication behavior indicators",
      "Post-treatment AI triage with 91% first-call resolution — addressing post-procedure pain management, medication side effects, opioid taper support, flare management strategies, and physical therapy questions",
      "Automated pain management surveillance and follow-up — zero patients lost to follow-up with scheduled functional reassessments, procedure follow-ups, opioid agreement renewals, and PDMP monitoring"
    ],
    "results": [
      {
        "value": "75%",
        "label": "Improvement in multimodal treatment plan adherence"
      },
      {
        "value": "92%",
        "label": "Opioid stewardship documentation compliance"
      },
      {
        "value": "59%",
        "label": "Increase in functional outcome improvements"
      },
      {
        "value": "2.7x",
        "label": "Reduction in opioid dose escalation through multimodal optimization"
      }
    ],
    "challenges": [
      "Referrals arrive without standardized pain assessments, complete treatment history, or PDMP data, duplicating months of failed interventions",
      "Multi-disciplinary treatment — interventional, pharmacologic, physical therapy, psychological — requires coordination across separate practices",
      "Opioid stewardship compliance including agreements, PDMP checks, and urine drug screens is tracked manually with frequent lapses",
      "Procedural scheduling is disconnected from medication management and physical therapy, preventing coordinated multimodal care",
      "Functional outcome tracking is absent, leaving pain scores as the sole and misleading measure of treatment effectiveness",
      "Patients on opioid tapers need frequent check-ins and support that visit-based care cannot provide"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes pain medicine referrals by extracting pain assessments, complete treatment history including procedures and medications, PDMP data, and functional status. Identifies opioid stewardship requirements and flags aberrant medication patterns for immediate provider review."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates multimodal treatment scheduling — interventional procedures, medication management visits, physical therapy sessions, and psychological support — as a unified plan. Manages opioid agreement renewal timing and fills cancellations prioritizing acute exacerbations and taper support needs."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Tracks functional goals alongside pain scores, delivers physical therapy adherence check-ins, and provides pain coping resources via SMS, voice, and portal. Supports opioid taper patients with frequent automated check-ins and mindfulness program engagement."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors pain and functional status trends with AI-powered treatment response analysis and aberrant opioid behavior detection. Provides triage with 91% first-call resolution for post-procedure concerns, flare management, and taper support, escalating concerning medication patterns and acute functional decline immediately."
      }
    ]
  },
  {
    "slug": "preventive-cardiology",
    "specialty": "Preventive Cardiology",
    "tagline": "Automate the cardiovascular prevention journey — from risk identification through lifestyle optimization and lifelong risk reduction",
    "heroDescription": "Configural orchestrates preventive cardiology where patient journeys span decades of cardiovascular risk reduction across lifestyle modification, pharmacotherapy, and advanced imaging surveillance. Our AI automates intake with comprehensive risk profiling, coordinates multi-modal prevention programs, tracks risk factor trajectories, and maintains the sustained engagement that determines whether heart disease is prevented or merely delayed.",
    "description": "Preventive cardiology programs fail to sustain the long-term engagement their patients need — referrals lack comprehensive risk data, cardiac CT and advanced imaging scheduling is fragmented, lifestyle modification programs have high attrition, medication titration follow-up is delayed, and patients disengage from prevention once acute fear subsides.",
    "workflows": [
      "Referral intake with OCR extraction, patient matching, and insurance verification in under 3 minutes — extracting Framingham/ASCVD risk scores, family history of premature CAD, coronary calcium scores, lipid and inflammatory marker history, and lifestyle risk factors",
      "AI-driven scheduling matching patients to optimal slots based on cardiovascular risk level, coronary calcium scoring coordination, exercise stress test timing, and multi-disciplinary prevention team availability",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach — prioritizing patients with high calcium scores, family history of early MI, or multiple uncontrolled risk factors",
      "Pre-treatment prep automation — fasting lab panels, coronary calcium score scheduling, exercise readiness questionnaire, dietary assessment delivery, and cardiac rehab enrollment coordination with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions via SMS, voice, and portal — including exercise program adherence tracking, dietary goal check-ins, smoking cessation support, and medication reminders",
      "Real-time cardiovascular risk factor monitoring with AI severity assessment and escalation — tracking blood pressure trends, lipid levels, inflammatory markers, exercise capacity, and weight trajectories",
      "Post-treatment AI triage with 91% first-call resolution — addressing medication side effects, exercise safety questions, dietary counseling, chest pain evaluation guidance, and lifestyle modification support",
      "Automated cardiovascular prevention surveillance and follow-up — zero patients lost to follow-up with annual comprehensive risk reassessments, serial calcium scoring, and decade-long risk factor tracking"
    ],
    "results": [
      {
        "value": "81%",
        "label": "Improvement in lifestyle modification program retention"
      },
      {
        "value": "93%",
        "label": "Cardiovascular risk factor monitoring compliance"
      },
      {
        "value": "66%",
        "label": "Patients achieving multi-risk-factor target attainment"
      },
      {
        "value": "3.3x",
        "label": "Reduction in 10-year cardiovascular event rates"
      }
    ],
    "challenges": [
      "Referrals arrive without comprehensive cardiovascular risk profiling, family history details, or prior imaging and lab data",
      "Advanced imaging scheduling — coronary calcium scoring, CT angiography, carotid IMT — is fragmented and uncoordinated",
      "Lifestyle modification programs — exercise, diet, smoking cessation — suffer over 60% attrition within six months",
      "Medication titration for lipids, blood pressure, and diabetes requires frequent follow-up that scheduling gaps delay",
      "Long-term prevention engagement fades as patients lose urgency once initial risk counseling shock subsides",
      "Multi-risk-factor management across cardiology, endocrinology, and primary care lacks coordinated treatment target tracking"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Processes preventive cardiology referrals by extracting ASCVD risk scores, family history of premature CAD, coronary calcium scores, lipid panels, inflammatory markers, and lifestyle risk factors. Generates comprehensive cardiovascular risk profiles and identifies missing data for complete risk stratification."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates advanced cardiac imaging, exercise testing, and multi-disciplinary prevention team visits. Manages annual comprehensive reassessment scheduling and fills cancellations prioritizing patients with high risk scores, multiple uncontrolled factors, or family history of early cardiac events."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Sustains multi-year prevention engagement through exercise tracking, dietary goal monitoring, smoking cessation support, and medication adherence reminders via SMS, voice, and portal. Delivers personalized risk reduction progress reports that maintain motivation over decades of prevention."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors cardiovascular risk factor trajectories with AI-powered multi-factor risk modeling. Provides triage with 91% first-call resolution for medication side effects, exercise safety, and lifestyle questions, escalating new chest pain, concerning blood pressure trends, and acute risk factor deterioration for immediate evaluation."
      }
    ]
  },
  {
    "slug": "psychopharmacology",
    "specialty": "Psychopharmacology",
    "tagline": "AI-orchestrated medication management from referral to remission tracking",
    "heroDescription": "Transform psychopharmacology patient journeys with intelligent automation that guides patients from initial psychiatric referral through medication optimization, side-effect monitoring, and long-term adherence tracking — ensuring no patient falls through the cracks during critical titration periods.",
    "description": "Psychopharmacology practices lose patients during the complex medication management cycle. Referrals arrive without complete medication histories, prior authorization delays stall treatment initiation, patients discontinue medications without notification, and side-effect monitoring depends on patients self-reporting. The result: delayed stabilization, preventable psychiatric crises, and patients lost between titration visits.",
    "workflows": [
      "Referral intake with OCR extraction of medication histories, pharmacy records, and prior psychiatric evaluations — patient matching and insurance verification completed in under 3 minutes",
      "AI-driven scheduling matching patients to optimal appointment slots based on medication urgency, psychiatric acuity level, and titration timeline requirements",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach, prioritizing patients in active titration or experiencing breakthrough symptoms",
      "Pre-appointment prep automation — current medication list reconciliation, PHQ-9/GAD-7 screening completion, and pharmacy benefit verification with compliance confirmation before visit",
      "Multi-channel patient engagement: medication reminders, appointment confirmations, lab work instructions, and side-effect check-ins via SMS, voice, and patient portal",
      "Real-time medication adherence and side-effect monitoring with AI severity assessment and automatic escalation for dangerous reactions or suicidal ideation signals",
      "Post-appointment AI triage with 91% first-call resolution — handling medication refill requests, side-effect questions, dosage clarifications, and pharmacy coordination",
      "Automated treatment response surveillance with scheduled symptom assessments — zero patients lost to follow-up during critical stabilization periods"
    ],
    "results": [
      {
        "value": "74%",
        "label": "Reduction in medication non-adherence rates"
      },
      {
        "value": "2.8min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for medication inquiries"
      },
      {
        "value": "99.2%",
        "label": "Follow-up compliance during titration periods"
      }
    ],
    "challenges": [
      "Referrals arrive without complete medication histories or prior treatment records, delaying initial consultations by days",
      "Prior authorization for psychiatric medications creates 5-7 day treatment gaps during acute episodes",
      "Patients discontinue medications silently, with practices unaware until the next scheduled visit weeks later",
      "Side-effect monitoring relies entirely on patient self-reporting, missing early warning signs of serious reactions",
      "Titration schedules require frequent follow-ups that patients frequently miss, disrupting stabilization timelines",
      "Coordination between therapists, primary care, and psychopharmacologists fragments the treatment plan"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts medication histories, psychiatric evaluations, and pharmacy records from referral documents using OCR. Matches patients, verifies insurance coverage for psychiatric medications, and flags prior authorization requirements before the first appointment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Optimizes appointment scheduling based on psychiatric acuity, titration timelines, and medication urgency. Manages smart waitlists that prioritize patients in active medication changes and fills cancellations within minutes."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers medication reminders, appointment confirmations, and side-effect check-ins across SMS, voice, and portal. Automates PHQ-9/GAD-7 screening distribution and collects pre-visit medication reconciliation data."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors medication adherence patterns and side-effect reports with AI severity scoring. Triages refill requests, dosage questions, and adverse reaction reports — escalating dangerous symptoms and suicidal ideation signals immediately."
      }
    ]
  },
  {
    "slug": "pulmonary-hypertension",
    "specialty": "Pulmonary Hypertension",
    "tagline": "AI-powered care orchestration from right heart catheterization referral to lifelong therapy management",
    "heroDescription": "Orchestrate the complex pulmonary hypertension patient journey with AI automation spanning referral intake, specialized diagnostic scheduling, prostacyclin therapy coordination, and long-term hemodynamic surveillance — keeping every patient on their critical treatment pathway.",
    "description": "Pulmonary hypertension centers struggle with the complexity of patient management. Referrals lack right heart catheterization data, specialty medication programs require extensive documentation, patients on continuous infusion pumps need 24/7 support, and WHO functional class deterioration goes undetected between visits. The result: delayed diagnoses, therapy interruptions, and preventable hospitalizations.",
    "workflows": [
      "Referral intake with OCR extraction of echocardiograms, right heart catheterization reports, and pulmonary function tests — patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on WHO functional class severity, diagnostic workup stage, and infusion pump service requirements",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach, prioritizing patients with worsening functional status or pending diagnostic studies",
      "Pre-treatment prep automation — six-minute walk test scheduling, lab panels, specialty pharmacy enrollment, and REMS program documentation with compliance confirmation",
      "Multi-channel patient engagement: infusion pump reminders, appointment confirmations, medication delivery coordination, and symptom diaries via SMS, voice, and portal",
      "Real-time functional status and hemodynamic monitoring with AI severity assessment and escalation for signs of right heart failure progression",
      "Post-visit AI triage with 91% first-call resolution — handling pump alarms, medication delivery issues, symptom changes, and specialty pharmacy coordination",
      "Automated hemodynamic and functional surveillance with scheduled six-minute walk tests and right heart catheterization tracking — zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "68%",
        "label": "Reduction in time from referral to definitive diagnosis"
      },
      {
        "value": "2.4min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for therapy management inquiries"
      },
      {
        "value": "99.5%",
        "label": "Follow-up compliance for hemodynamic surveillance"
      }
    ],
    "challenges": [
      "Referrals arrive without right heart catheterization data, requiring repeat testing and delaying WHO group classification",
      "Specialty pharmacy enrollment for prostacyclin therapies requires extensive documentation taking weeks to complete",
      "Patients on continuous IV or subcutaneous infusion pumps need rapid-response support that phone trees cannot provide",
      "WHO functional class deterioration between quarterly visits leads to preventable hospitalizations",
      "REMS program compliance for endothelin receptor antagonists creates administrative bottlenecks delaying treatment starts",
      "Coordination between PH centers, local cardiologists, and specialty pharmacies fragments care continuity"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts echocardiogram measurements, right heart catheterization hemodynamics, and pulmonary function data from referral packets using OCR. Verifies insurance coverage for specialty PH medications and identifies REMS program requirements."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates diagnostic workup sequencing, right heart catheterization scheduling, and follow-up visits based on WHO functional class and treatment phase. Fills cancellations prioritizing patients with worsening hemodynamics."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Manages infusion pump check-in reminders, specialty pharmacy delivery coordination, and six-minute walk test scheduling via SMS, voice, and portal. Distributes symptom diaries and collects functional status updates between visits."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages pump alarm calls, medication delivery emergencies, and symptom escalations with AI severity assessment. Achieves 91% first-call resolution while immediately routing right heart failure signs to the clinical team."
      }
    ]
  },
  {
    "slug": "reproductive-endocrinology",
    "specialty": "Reproductive Endocrinology",
    "tagline": "AI-orchestrated fertility care from initial consultation through cycle monitoring to pregnancy confirmation",
    "heroDescription": "Automate the time-sensitive reproductive endocrinology journey with intelligent systems coordinating referral processing, cycle-synchronized scheduling, medication protocol adherence, and outcome tracking — ensuring every patient receives precisely timed care throughout their fertility treatment.",
    "description": "Reproductive endocrinology clinics face extreme time sensitivity. Referrals arrive mid-cycle requiring immediate action, monitoring appointments must align with hormonal windows measured in hours, medication protocols demand precise timing, and emotional patients need responsive communication. The result: missed cycle opportunities, medication timing errors, and patients abandoning treatment due to coordination failures.",
    "workflows": [
      "Referral intake with OCR extraction of hormonal panels, HSG reports, and semen analyses — patient matching and insurance/fertility benefit verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal monitoring slots based on cycle day, stimulation protocol phase, and ultrasound/lab timing requirements",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach, prioritizing patients in active stimulation cycles or time-sensitive monitoring windows",
      "Pre-cycle prep automation — baseline lab orders, consent documentation, medication teaching scheduling, and pharmacy benefit coordination with compliance confirmation",
      "Multi-channel patient engagement: medication injection reminders, monitoring appointment confirmations, trigger shot timing alerts, and result notifications via SMS, voice, and portal",
      "Real-time follicular development and hormonal monitoring with AI assessment of stimulation response and escalation for ovarian hyperstimulation warning signs",
      "Post-procedure AI triage with 91% first-call resolution — handling injection technique questions, side-effect concerns, beta-hCG result inquiries, and early pregnancy symptoms",
      "Automated outcome surveillance with pregnancy monitoring, early ultrasound scheduling, and OB transition coordination — zero patients lost to follow-up after positive results"
    ],
    "results": [
      {
        "value": "82%",
        "label": "Reduction in missed cycle monitoring appointments"
      },
      {
        "value": "2.1min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for cycle-related inquiries"
      },
      {
        "value": "99.7%",
        "label": "Medication timing compliance during stimulation cycles"
      }
    ],
    "challenges": [
      "Referrals arrive mid-cycle and require same-day or next-day baseline appointments that standard scheduling cannot accommodate",
      "Monitoring appointments must be scheduled within narrow hormonal windows — a missed morning slot can derail an entire treatment cycle",
      "Medication injection timing errors measured in hours can compromise follicular development and cycle outcomes",
      "Fertility benefit verification is extraordinarily complex, with lifetime maximums, cycle limits, and medication carve-outs",
      "Emotionally distressed patients during two-week waits need responsive communication that voicemail systems fail to provide",
      "Transfer of care to obstetric providers after positive outcomes lacks standardized handoff processes"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts hormonal panels, HSG reports, semen analyses, and AMH levels from referral documents using OCR. Navigates complex fertility benefit verification including lifetime maximums, cycle limits, and medication coverage."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Synchronizes appointments with cycle days, stimulation protocol phases, and time-sensitive monitoring windows. Dynamically adjusts schedules based on follicular response and fills cancellations prioritizing active cycle patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers precisely timed injection reminders, trigger shot alerts, and monitoring appointment confirmations across SMS, voice, and portal. Manages two-week wait communication and beta-hCG result notification workflows."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages injection technique questions, ovarian hyperstimulation symptoms, and post-retrieval concerns with AI severity scoring. Resolves 91% of calls at first contact while escalating OHSS warning signs and abnormal bleeding immediately."
      }
    ]
  },
  {
    "slug": "sleep-disordered-breathing",
    "specialty": "Sleep-Disordered Breathing",
    "tagline": "AI-driven patient orchestration from sleep study referral through CPAP optimization to long-term adherence",
    "heroDescription": "Transform sleep-disordered breathing care with intelligent automation guiding patients from referral through diagnostic polysomnography, device titration, mask fitting, and continuous adherence monitoring — ensuring every patient achieves therapeutic compliance.",
    "description": "Sleep medicine practices face a chronic adherence crisis. Referrals pile up waiting for sleep study slots, patients abandon CPAP therapy within weeks, mask fitting issues go unresolved, and CMS compliance windows pass without intervention. The result: untreated obstructive sleep apnea, cardiovascular risk escalation, and DME revenue loss from non-compliant patients.",
    "workflows": [
      "Referral intake with OCR extraction of Epworth Sleepiness Scale scores, BMI data, and prior sleep study results — patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal sleep study slots based on clinical urgency, AHI severity indicators, and home vs. in-lab testing appropriateness",
      "Smart waitlist that fills sleep study cancellations within minutes via automated SMS and voice outreach, prioritizing patients with high pre-test probability scores",
      "Pre-study prep automation — sleep diary distribution, medication hold instructions, sleep hygiene guidelines, and equipment orientation with compliance confirmation",
      "Multi-channel patient engagement: study night reminders, CPAP usage encouragement, mask troubleshooting tips, and compliance milestone celebrations via SMS, voice, and portal",
      "Real-time CPAP adherence and efficacy monitoring with AI assessment of usage patterns, leak rates, and residual AHI — escalation for non-compliance before CMS deadlines",
      "Post-titration AI triage with 91% first-call resolution — handling mask discomfort, pressure adjustment requests, humidity settings, and machine troubleshooting",
      "Automated long-term adherence surveillance with CMS compliance tracking and annual reassessment scheduling — zero patients lost to follow-up after device initiation"
    ],
    "results": [
      {
        "value": "71%",
        "label": "Improvement in 90-day CPAP adherence rates"
      },
      {
        "value": "2.6min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for CPAP troubleshooting"
      },
      {
        "value": "98.8%",
        "label": "CMS compliance window monitoring coverage"
      }
    ],
    "challenges": [
      "Sleep study scheduling backlogs of 4-8 weeks cause patients to disengage before ever receiving a diagnosis",
      "CPAP abandonment rates exceed 40% within the first month, often due to unresolved mask fit or pressure comfort issues",
      "CMS requires documented CPAP usage of 4+ hours on 70% of nights within the first 90 days — practices miss intervention windows",
      "Mask fitting issues create a cascade of complaints that overwhelm clinical staff with repetitive troubleshooting calls",
      "Home sleep test data arrives in varied formats requiring manual interpretation and re-entry into practice systems",
      "Coordination between sleep labs, DME suppliers, and insurance companies delays therapy initiation by weeks"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts Epworth scores, BMI data, comorbidity profiles, and prior sleep study results from referrals using OCR. Determines home vs. in-lab study appropriateness and verifies insurance coverage for diagnostic and therapeutic pathways."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Optimizes sleep study scheduling based on clinical urgency and pre-test probability. Manages DME fitting appointments and follow-up titration visits. Fills cancellations within minutes, prioritizing high-AHI patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers study prep instructions, CPAP usage encouragement, and mask troubleshooting guidance across SMS, voice, and portal. Sends proactive compliance nudges aligned with CMS adherence milestones."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages mask discomfort complaints, pressure adjustment requests, and machine errors with AI-driven troubleshooting. Monitors CPAP cloud data for adherence drops and escalates non-compliance before CMS deadline windows close."
      }
    ]
  },
  {
    "slug": "stroke-vascular-neurology",
    "specialty": "Stroke & Vascular Neurology",
    "tagline": "AI-powered stroke care coordination from acute referral through rehabilitation to secondary prevention",
    "heroDescription": "Orchestrate time-critical stroke and vascular neurology care with AI automation spanning hyperacute referral processing, rapid diagnostic scheduling, rehabilitation coordination, and lifelong secondary prevention surveillance — where every minute saved protects brain tissue.",
    "description": "Stroke programs face life-or-death time constraints. Referrals for TIA workups arrive without urgency stratification, post-stroke follow-up scheduling falls through the cracks during care transitions, rehabilitation coordination requires multi-disciplinary alignment, and secondary prevention medication adherence drops precipitously after discharge. The result: delayed evaluations, recurrent strokes, and fragmented post-acute care.",
    "workflows": [
      "Referral intake with OCR extraction of imaging reports, NIHSS scores, and vascular studies — patient matching and insurance verification in under 3 minutes with ABCD2 risk stratification",
      "AI-driven scheduling matching patients to optimal slots based on ABCD2 score for TIA urgency, days since event, and required diagnostic workup sequencing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach, prioritizing patients with high recurrent stroke risk scores",
      "Pre-visit prep automation — medication reconciliation, recent imaging compilation, vascular risk factor assessment forms, and lab requisitions with compliance confirmation",
      "Multi-channel patient engagement: anticoagulation reminders, blood pressure monitoring prompts, rehabilitation session confirmations, and lifestyle modification coaching via SMS, voice, and portal",
      "Real-time neurological status and vascular risk factor monitoring with AI severity assessment and escalation for new neurological symptoms or uncontrolled risk factors",
      "Post-discharge AI triage with 91% first-call resolution — handling anticoagulation questions, blood pressure concerns, new symptom evaluation, and rehabilitation scheduling",
      "Automated secondary prevention surveillance with vascular imaging scheduling, risk factor tracking, and medication adherence monitoring — zero patients lost to follow-up after cerebrovascular events"
    ],
    "results": [
      {
        "value": "76%",
        "label": "Reduction in TIA-to-evaluation time"
      },
      {
        "value": "2.2min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-stroke inquiries"
      },
      {
        "value": "99.3%",
        "label": "Secondary prevention follow-up compliance"
      }
    ],
    "challenges": [
      "TIA referrals arrive without ABCD2 risk stratification, making it impossible to prioritize the highest-risk patients for urgent evaluation",
      "Post-stroke care transitions between acute, rehabilitation, and outpatient settings create dangerous gaps in medication continuity",
      "Secondary prevention medication adherence drops 35% within six months of discharge, dramatically increasing recurrent stroke risk",
      "Rehabilitation coordination across PT, OT, speech therapy, and neuropsychology requires manual scheduling across multiple providers",
      "Vascular imaging follow-up for carotid stenosis and intracranial atherosclerosis is tracked inconsistently across systems",
      "Patients discharged on anticoagulation lack accessible support for INR monitoring questions and dosage adjustments"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts NIHSS scores, imaging findings, vascular study results, and event timelines from referral documents using OCR. Calculates ABCD2 risk scores for TIA patients and verifies insurance coverage for diagnostic and preventive services."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Prioritizes scheduling based on recurrent stroke risk stratification and diagnostic workup urgency. Coordinates multi-disciplinary rehabilitation appointments and fills cancellations prioritizing high-risk vascular patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers anticoagulation reminders, blood pressure monitoring prompts, and rehabilitation session confirmations across SMS, voice, and portal. Distributes stroke warning sign education and lifestyle modification coaching."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages new neurological symptoms, anticoagulation management questions, and blood pressure concerns with AI severity scoring. Immediately escalates acute stroke warning signs while resolving 91% of routine post-stroke inquiries at first contact."
      }
    ]
  },
  {
    "slug": "substance-use-disorders",
    "specialty": "Substance Use Disorders",
    "tagline": "AI-orchestrated addiction treatment from intake screening through stabilization to sustained recovery",
    "heroDescription": "Transform substance use disorder treatment with intelligent automation guiding patients from crisis referral through medically assisted treatment initiation, behavioral health coordination, and long-term recovery monitoring — capturing every window of motivation before it closes.",
    "description": "Addiction treatment programs lose patients at every transition point. Referrals from emergency departments arrive when patients are motivated but slots are unavailable, MAT induction requires rapid scheduling that traditional systems cannot support, patients disappear during the critical first 90 days, and relapse signals go undetected until crisis. The result: missed treatment windows, medication discontinuation, and revolving-door utilization patterns.",
    "workflows": [
      "Referral intake with OCR extraction of SBIRT screenings, toxicology results, and psychiatric evaluations — patient matching and insurance/Medicaid verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal intake slots based on substance type, withdrawal risk level, and MAT induction urgency while motivation is present",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach, prioritizing patients in active withdrawal or with recent overdose events",
      "Pre-treatment prep automation — urine drug screen orders, COWS/CIWA assessment scheduling, consent documentation, and prescription drug monitoring program checks with compliance confirmation",
      "Multi-channel patient engagement: MAT dosing reminders, group therapy session confirmations, recovery milestone acknowledgments, and crisis resource delivery via SMS, voice, and portal",
      "Real-time treatment engagement and relapse risk monitoring with AI behavioral pattern assessment and escalation for missed doses, appointment no-shows, or crisis indicators",
      "Post-induction AI triage with 91% first-call resolution — handling medication side effects, dosing schedule questions, crisis support needs, and pharmacy coordination for buprenorphine",
      "Automated recovery surveillance with graduated follow-up scheduling, peer support connections, and relapse prevention tracking — zero patients lost to follow-up during the critical first year"
    ],
    "results": [
      {
        "value": "79%",
        "label": "Improvement in 90-day treatment retention rates"
      },
      {
        "value": "2.5min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for MAT-related inquiries"
      },
      {
        "value": "98.6%",
        "label": "Follow-up compliance during first-year recovery"
      }
    ],
    "challenges": [
      "Emergency department referrals arrive during narrow motivation windows that close within hours — traditional intake processes take days",
      "MAT induction for buprenorphine requires same-day or next-day scheduling that standard appointment systems cannot accommodate",
      "Patient attrition in the first 30 days of treatment exceeds 50%, with most dropouts occurring silently between visits",
      "PDMP checks, prior authorizations, and X-waiver verification create administrative bottlenecks delaying treatment starts",
      "Coordinating behavioral health, MAT, and social services across fragmented systems leaves patients navigating alone",
      "Relapse warning signs — missed appointments, unfilled prescriptions, isolation patterns — are only visible in retrospect"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts SBIRT screenings, toxicology panels, and psychiatric evaluations from referral documents using OCR. Verifies Medicaid/insurance coverage for MAT programs, checks PDMP records, and fast-tracks intake for patients in active motivation windows."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Enables same-day and next-day MAT induction scheduling based on withdrawal severity and substance type. Manages waitlists prioritizing patients with recent overdose events and fills cancellations within minutes to capture treatment windows."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers MAT dosing reminders, group therapy confirmations, and recovery milestone celebrations across SMS, voice, and portal. Provides 24/7 crisis resource access and distributes relapse prevention content during high-risk periods."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors treatment engagement patterns, prescription fill rates, and appointment attendance with AI relapse risk scoring. Triages medication side effects and crisis calls while escalating missed doses and behavioral disengagement signals immediately."
      }
    ]
  },
  {
    "slug": "transplant-medicine",
    "specialty": "Transplant Medicine",
    "tagline": "AI-powered transplant orchestration from evaluation through listing, surgery, and lifelong immunosuppression management",
    "heroDescription": "Coordinate the extraordinarily complex transplant medicine journey with intelligent automation spanning multidisciplinary evaluation, UNOS listing management, organ offer response, and post-transplant immunosuppression surveillance — ensuring every patient navigates the system without a single missed step.",
    "description": "Transplant programs manage the most complex patient journeys in medicine. Evaluations require coordination across 10+ specialties, UNOS listing demands meticulous documentation, organ offers arrive at any hour requiring instant response, and post-transplant immunosuppression monitoring is lifelong. The result: evaluation delays, listing errors, missed organ offers, and rejection episodes from medication non-adherence.",
    "workflows": [
      "Referral intake with OCR extraction of organ function panels, imaging studies, and specialist clearances — patient matching and insurance verification for transplant coverage in under 3 minutes",
      "AI-driven scheduling matching patients to optimal evaluation slots coordinating cardiology, pulmonology, nephrology, social work, and surgical consultations in efficient sequences",
      "Smart waitlist that fills evaluation cancellations within minutes via automated SMS and voice outreach, prioritizing patients with deteriorating organ function or MELD/EPTS score changes",
      "Pre-evaluation prep automation — comprehensive lab panel orders, cardiac clearance scheduling, psychosocial assessment coordination, and financial counseling with compliance confirmation",
      "Multi-channel patient engagement: evaluation milestone tracking, UNOS listing status updates, immunosuppression reminders, and lab monitoring prompts via SMS, voice, and portal",
      "Real-time graft function and immunosuppression level monitoring with AI assessment of rejection risk and escalation for concerning lab trends or medication non-adherence",
      "Post-transplant AI triage with 91% first-call resolution — handling immunosuppression side effects, lab result inquiries, infection concerns, and medication interaction questions",
      "Automated lifelong graft surveillance with protocol biopsy scheduling, donor-specific antibody monitoring, and immunosuppression optimization — zero patients lost to follow-up post-transplant"
    ],
    "results": [
      {
        "value": "65%",
        "label": "Reduction in transplant evaluation completion time"
      },
      {
        "value": "2.9min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-transplant inquiries"
      },
      {
        "value": "99.8%",
        "label": "Lifelong surveillance follow-up compliance"
      }
    ],
    "challenges": [
      "Transplant evaluations require 10+ specialty consultations, creating scheduling puzzles that delay listing by months",
      "UNOS listing documentation demands are immense, and errors or omissions can remove patients from the waitlist",
      "Organ offers arrive at unpredictable hours requiring immediate clinical response — communication failures waste viable organs",
      "Post-transplant immunosuppression adherence requires precision that medication reminders alone cannot achieve",
      "Protocol biopsies, donor-specific antibody monitoring, and drug level tracking across decades overwhelm manual tracking systems",
      "Care coordination between transplant centers, local nephrologists/hepatologists, and community providers fragments long-term management"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts organ function panels, cross-match results, imaging findings, and specialist clearances from referral packets using OCR. Verifies transplant-specific insurance coverage and identifies evaluation prerequisites to streamline workup initiation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-specialty evaluation scheduling to minimize patient visits while completing all required clearances. Tracks MELD/EPTS score changes and prioritizes waitlist patients with deteriorating organ function for expedited slots."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Guides patients through evaluation milestones, UNOS listing updates, and post-transplant protocols across SMS, voice, and portal. Delivers immunosuppression reminders, lab monitoring prompts, and protocol biopsy scheduling notifications."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors drug levels, graft function labs, and rejection markers with AI risk assessment. Triages immunosuppression side effects, infection concerns, and medication interactions while immediately escalating acute rejection signals and graft dysfunction."
      }
    ]
  },
  {
    "slug": "womens-mental-health",
    "specialty": "Women's Mental Health",
    "tagline": "AI-orchestrated perinatal and reproductive mental health care from screening through treatment to postpartum recovery",
    "heroDescription": "Transform women's mental health care with intelligent automation navigating patients from perinatal screening through medication safety evaluation, therapy coordination, and postpartum monitoring — ensuring no woman is left untreated during vulnerable reproductive life stages.",
    "description": "Women's mental health programs face unique timing pressures. Perinatal depression screenings identify patients who need immediate intervention, medication safety during pregnancy requires rapid specialist consultation, postpartum mood disorders have narrow treatment windows, and hormonal transitions create recurring vulnerability periods. The result: untreated perinatal depression, medication discontinuation during pregnancy without alternatives, and postpartum crises that endanger mothers and infants.",
    "workflows": [
      "Referral intake with OCR extraction of Edinburgh Postnatal Depression Scale scores, obstetric records, and medication histories — patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal appointment slots based on gestational age, symptom severity, trimester-specific medication safety windows, and postpartum timing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach, prioritizing patients with severe perinatal depression or postpartum psychosis risk factors",
      "Pre-appointment prep automation — EPDS screening completion, current medication safety review, obstetric provider coordination, and lactation compatibility assessment with compliance confirmation",
      "Multi-channel patient engagement: mood tracking reminders, therapy session confirmations, medication safety updates, and postpartum wellness check-ins via SMS, voice, and portal",
      "Real-time perinatal mood and anxiety monitoring with AI severity assessment and escalation for suicidal ideation, infant harm concerns, or postpartum psychosis warning signs",
      "Post-appointment AI triage with 91% first-call resolution — handling medication safety questions during pregnancy, breastfeeding compatibility concerns, mood changes, and crisis support",
      "Automated postpartum surveillance with graduated mood assessments through the first year — zero patients lost to follow-up during the critical perinatal period"
    ],
    "results": [
      {
        "value": "77%",
        "label": "Reduction in time from screening to first specialist visit"
      },
      {
        "value": "2.3min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for perinatal mental health inquiries"
      },
      {
        "value": "99.4%",
        "label": "Postpartum follow-up compliance through first year"
      }
    ],
    "challenges": [
      "Positive perinatal depression screens require specialist follow-up within days, but appointment availability creates weeks-long gaps",
      "Medication decisions during pregnancy demand rapid risk-benefit analysis that general psychiatrists may not feel equipped to provide",
      "Postpartum mood disorder onset is unpredictable, and patients rarely self-identify symptoms during the most dangerous early weeks",
      "Breastfeeding medication compatibility questions flood phone lines with urgent but resolvable inquiries",
      "Coordination between OB/GYN, psychiatry, pediatrics, and therapy providers fragments care during the most vulnerable period",
      "Women experiencing perinatal loss, infertility grief, or menopausal depression have no standardized care pathways"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts EPDS scores, obstetric histories, medication records, and risk factor assessments from referral documents using OCR. Verifies insurance coverage for perinatal mental health services and identifies postpartum psychosis risk factors at intake."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Schedules appointments aligned with gestational age, trimester-specific medication windows, and postpartum timing urgency. Prioritizes waitlist patients with severe EPDS scores and fills cancellations within minutes for high-risk perinatal patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers mood tracking prompts, therapy confirmations, and medication safety updates across SMS, voice, and portal. Distributes postpartum wellness assessments and connects patients to peer support resources during vulnerable transition periods."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages medication safety questions, breastfeeding compatibility concerns, and mood changes with AI severity assessment. Immediately escalates suicidal ideation, infant harm concerns, and postpartum psychosis signals while resolving 91% of routine inquiries."
      }
    ]
  },
  {
    "slug": "bariatric-metabolic-surgery",
    "specialty": "Bariatric & Metabolic Surgery",
    "tagline": "AI-driven surgical weight loss orchestration from insurance-mandated preparation through lifelong nutritional surveillance",
    "heroDescription": "Automate the extended bariatric surgery patient journey with intelligent systems managing insurance-mandated pre-surgical programs, multidisciplinary clearances, surgical scheduling, and decades of postoperative nutritional and metabolic monitoring — ensuring every patient completes their transformation.",
    "description": "Bariatric surgery programs lose patients throughout lengthy preoperative requirements. Insurance mandates 3-6 months of supervised weight management before approval, patients must complete nutritional counseling, psychological evaluations, and medical clearances, and postoperative follow-up requires lifelong monitoring. The result: 40% of patients abandon the process before surgery, nutritional deficiencies go undetected, and weight regain occurs without intervention.",
    "workflows": [
      "Referral intake with OCR extraction of BMI histories, comorbidity documentation, and prior weight management records — patient matching and insurance preauthorization pathway verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical dates based on insurance-mandated milestone completion, clearance status, and operating room availability",
      "Smart waitlist that fills surgical and preoperative cancellations within minutes via automated SMS and voice outreach, prioritizing patients with completed insurance milestones",
      "Pre-surgical prep automation — supervised weight management visit tracking, psychological evaluation scheduling, nutritional counseling completion, and cardiac clearance with compliance confirmation",
      "Multi-channel patient engagement: diet progression reminders, supplement compliance prompts, support group notifications, and milestone celebrations via SMS, voice, and portal",
      "Real-time nutritional status and metabolic marker monitoring with AI assessment of deficiency risk and escalation for rapid weight regain or surgical complication signs",
      "Post-surgical AI triage with 91% first-call resolution — handling diet progression questions, supplement dosing, nausea management, wound care concerns, and exercise guidance",
      "Automated lifelong metabolic surveillance with annual lab panels, nutritional deficiency screening, and weight trend monitoring — zero patients lost to follow-up after surgery"
    ],
    "results": [
      {
        "value": "63%",
        "label": "Reduction in preoperative program abandonment rates"
      },
      {
        "value": "2.7min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for postoperative dietary inquiries"
      },
      {
        "value": "98.9%",
        "label": "Lifelong follow-up compliance for metabolic monitoring"
      }
    ],
    "challenges": [
      "Insurance-mandated 3-6 month supervised weight management programs have 40% abandonment rates due to engagement failures",
      "Multidisciplinary clearance coordination across nutrition, psychology, cardiology, and pulmonology delays surgical scheduling by months",
      "Postoperative diet progression through liquid, pureed, soft, and regular phases generates overwhelming call volumes",
      "Nutritional deficiency monitoring (B12, iron, calcium, vitamin D) requires lifelong lab tracking that patients neglect after the first year",
      "Weight regain signals emerge gradually between annual visits, and practices lack real-time monitoring to intervene early",
      "Support group attendance and behavioral health follow-up — critical for long-term success — drops precipitously after surgery"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts BMI histories, comorbidity documentation, and prior weight management records from referrals using OCR. Maps insurance-mandated preoperative requirements and creates personalized milestone checklists for surgical qualification."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Tracks insurance milestone completion across supervised visits, clearances, and evaluations to trigger surgical scheduling at the earliest eligible date. Fills cancellations prioritizing patients with completed preoperative pathways."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers preoperative milestone reminders, postoperative diet progression guidance, and supplement compliance prompts across SMS, voice, and portal. Facilitates support group participation and celebrates program milestones to sustain engagement."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages diet progression questions, supplement dosing inquiries, and surgical complication concerns with AI severity assessment. Monitors nutritional labs and weight trends, escalating rapid regain or deficiency signals before they become clinical problems."
      }
    ]
  },
  {
    "slug": "breast-surgical-oncology",
    "specialty": "Breast Surgical Oncology",
    "tagline": "AI-orchestrated breast cancer surgical care from biopsy referral through reconstruction to survivorship",
    "heroDescription": "Transform breast surgical oncology care with intelligent automation coordinating biopsy result processing, multidisciplinary tumor board preparation, surgical scheduling, and long-term survivorship surveillance — ensuring every patient receives timely, coordinated care during their cancer journey.",
    "description": "Breast surgical oncology programs face intense time pressure and emotional stakes. Referrals arrive with pathology requiring rapid surgical consultation, genetic testing results affect surgical planning, reconstruction coordination adds scheduling complexity, and survivorship surveillance spans decades. The result: delayed surgical consultations after cancer diagnosis, fragmented multidisciplinary planning, and patients lost during the transition from active treatment to survivorship.",
    "workflows": [
      "Referral intake with OCR extraction of biopsy pathology, imaging reports, and genetic testing results — patient matching and insurance verification in under 3 minutes with surgical urgency flagging",
      "AI-driven scheduling matching patients to optimal surgical consultation and OR slots based on tumor biology, staging urgency, neoadjuvant therapy timelines, and reconstruction coordination",
      "Smart waitlist that fills surgical consultation cancellations within minutes via automated SMS and voice outreach, prioritizing patients with aggressive tumor biology or pending treatment decisions",
      "Pre-surgical prep automation — additional imaging orders, genetic counseling referrals, tumor board presentation preparation, and reconstruction consultation scheduling with compliance confirmation",
      "Multi-channel patient engagement: surgical preparation instructions, drain care education, lymphedema prevention guidance, and emotional support resources via SMS, voice, and portal",
      "Real-time surgical recovery and wound monitoring with AI assessment of complication risk and escalation for infection signs, seroma development, or reconstruction concerns",
      "Post-surgical AI triage with 91% first-call resolution — handling drain management questions, wound care concerns, pathology result timing, and adjuvant therapy coordination",
      "Automated survivorship surveillance with mammographic and clinical follow-up scheduling, genetic risk monitoring, and recurrence screening — zero patients lost to follow-up after breast cancer surgery"
    ],
    "results": [
      {
        "value": "72%",
        "label": "Reduction in time from biopsy to surgical consultation"
      },
      {
        "value": "2.4min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical inquiries"
      },
      {
        "value": "99.6%",
        "label": "Survivorship surveillance compliance"
      }
    ],
    "challenges": [
      "Patients diagnosed with breast cancer wait an average of 2-3 weeks for surgical consultation — an agonizing delay during peak anxiety",
      "Tumor board preparation requires compiling pathology, imaging, and genetic data from multiple sources manually before each case",
      "Reconstruction timing decisions must align with oncologic surgery, radiation planning, and patient preference — a complex scheduling puzzle",
      "Post-surgical drain management generates high volumes of calls from anxious patients unsure about output thresholds",
      "Transition from active surgical care to survivorship surveillance creates a dangerous gap in patient monitoring",
      "Genetic testing results that affect surgical planning (BRCA, etc.) arrive asynchronously and may change the operative approach"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts biopsy pathology, receptor status, imaging findings, and genetic testing results from referral documents using OCR. Flags surgical urgency based on tumor biology and verifies insurance coverage for surgical and reconstructive procedures."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates surgical consultation, OR scheduling, and reconstruction timing based on tumor biology urgency and neoadjuvant therapy windows. Manages tumor board scheduling and fills cancellations prioritizing patients with aggressive disease."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers surgical preparation instructions, drain care education, and emotional support resources across SMS, voice, and portal. Guides patients through reconstruction decision-making and connects them with peer support networks."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages drain output concerns, wound care questions, and surgical recovery issues with AI severity assessment. Monitors for infection and complication signs while coordinating adjuvant therapy transitions and survivorship care initiation."
      }
    ]
  },
  {
    "slug": "cardiac-electrophysiology",
    "specialty": "Cardiac Electrophysiology",
    "tagline": "AI-powered arrhythmia management from referral through ablation to lifelong device monitoring",
    "heroDescription": "Orchestrate cardiac electrophysiology care with intelligent automation spanning arrhythmia referral processing, diagnostic study coordination, ablation procedure scheduling, and continuous cardiac device monitoring — ensuring every arrhythmia patient receives timely intervention and lifelong surveillance.",
    "description": "Electrophysiology practices manage patients across a spectrum of urgency and complexity. Referrals arrive with incomplete rhythm documentation, device clinic volumes overwhelm staff with remote monitoring alerts, ablation scheduling requires careful anticoagulation management, and long-term device patients need decades of follow-up. The result: delayed arrhythmia diagnosis, missed actionable device alerts, and patients lost between acute intervention and chronic management.",
    "workflows": [
      "Referral intake with OCR extraction of ECGs, Holter monitor reports, and echocardiogram data — patient matching and insurance verification in under 3 minutes with arrhythmia urgency stratification",
      "AI-driven scheduling matching patients to optimal EP study and ablation slots based on arrhythmia type, symptom burden, stroke risk score, and anticoagulation bridge timing",
      "Smart waitlist that fills EP lab cancellations within minutes via automated SMS and voice outreach, prioritizing patients with high-risk arrhythmias or symptomatic device malfunction",
      "Pre-procedure prep automation — anticoagulation bridge protocols, transesophageal echo scheduling, medication hold instructions, and device interrogation scheduling with compliance confirmation",
      "Multi-channel patient engagement: anticoagulation reminders, device check appointment confirmations, post-ablation activity restrictions, and symptom diary collection via SMS, voice, and portal",
      "Real-time cardiac rhythm and device alert monitoring with AI severity assessment and escalation for sustained arrhythmias, lead integrity alerts, or generator end-of-life warnings",
      "Post-procedure AI triage with 91% first-call resolution — handling post-ablation chest discomfort, anticoagulation management, device sensation concerns, and activity restriction questions",
      "Automated lifelong device surveillance with remote monitoring alert management, generator replacement scheduling, and arrhythmia recurrence tracking — zero patients lost to follow-up in device clinic"
    ],
    "results": [
      {
        "value": "69%",
        "label": "Reduction in actionable device alert response time"
      },
      {
        "value": "2.5min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-procedure inquiries"
      },
      {
        "value": "99.4%",
        "label": "Device monitoring follow-up compliance"
      }
    ],
    "challenges": [
      "Referrals arrive with incomplete rhythm documentation — single ECGs without prolonged monitoring leave arrhythmia burden unquantified",
      "Remote device monitoring generates thousands of alerts monthly, overwhelming clinical staff and delaying response to actionable findings",
      "Anticoagulation bridge management before ablation procedures requires precise timing coordination that fax-based communication fails",
      "Post-ablation blanking period monitoring requires patient engagement during a confusing recovery phase with expected arrhythmia recurrences",
      "Device patients require lifelong follow-up spanning decades, with generator replacements, lead integrity monitoring, and programming optimizations",
      "Coordinating between referring cardiologists, EP labs, anticoagulation clinics, and device manufacturers fragments patient communication"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts ECG tracings, Holter data, echocardiogram findings, and prior EP study results from referral documents using OCR. Calculates CHA2DS2-VASc scores, stratifies arrhythmia urgency, and verifies insurance coverage for EP procedures and devices."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates EP study, ablation, and device implant scheduling based on arrhythmia urgency and anticoagulation bridge timing. Manages device clinic appointment volumes and fills EP lab cancellations prioritizing high-risk arrhythmia patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers anticoagulation bridge instructions, device check reminders, and post-ablation recovery guidance across SMS, voice, and portal. Collects symptom diary data and facilitates blanking period education to reduce unnecessary emergency visits."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Processes remote device monitoring alerts with AI severity scoring, triaging actionable findings from noise. Handles post-ablation recovery questions and device sensation concerns while immediately escalating sustained arrhythmias and lead integrity alerts."
      }
    ]
  },
  {
    "slug": "complex-spine-surgery",
    "specialty": "Complex Spine Surgery",
    "tagline": "AI-orchestrated spine surgery care from multidisciplinary evaluation through surgical planning to rehabilitation",
    "heroDescription": "Transform complex spine surgery patient journeys with intelligent automation coordinating multi-imaging review, surgical planning, pre-surgical optimization, and postoperative rehabilitation — ensuring every patient is thoroughly prepared and continuously supported through their spinal reconstruction recovery.",
    "description": "Complex spine surgery practices manage patients requiring extensive preoperative evaluation and prolonged recovery. Referrals arrive with incomplete imaging series, surgical planning requires integration of CT, MRI, and biomechanical data, patients need medical optimization before major procedures, and postoperative rehabilitation spans months. The result: delayed surgical consultations, incomplete preoperative workups, and fragmented postoperative rehabilitation coordination.",
    "workflows": [
      "Referral intake with OCR extraction of MRI reports, CT scans, myelogram findings, and prior surgical records — patient matching and insurance preauthorization in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical consultation and OR slots based on neurological deficit severity, deformity progression, and medical optimization readiness",
      "Smart waitlist that fills surgical consultation cancellations within minutes via automated SMS and voice outreach, prioritizing patients with progressive neurological deficits or spinal instability",
      "Pre-surgical prep automation — advanced imaging orders, bone density testing, nutritional optimization, smoking cessation documentation, and medical clearances with compliance confirmation",
      "Multi-channel patient engagement: pre-surgical exercise programs, spinal precaution education, post-surgical brace instructions, and rehabilitation milestones via SMS, voice, and portal",
      "Real-time neurological status and wound healing monitoring with AI severity assessment and escalation for new deficits, infection signs, or hardware complication indicators",
      "Post-surgical AI triage with 91% first-call resolution — handling pain management questions, activity restriction clarifications, brace wear concerns, and wound care guidance",
      "Automated surgical outcome surveillance with fusion assessment imaging, functional outcome tracking, and adjacent segment monitoring — zero patients lost to follow-up after complex spine procedures"
    ],
    "results": [
      {
        "value": "67%",
        "label": "Reduction in preoperative workup completion time"
      },
      {
        "value": "2.8min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical spine inquiries"
      },
      {
        "value": "99.1%",
        "label": "Fusion assessment follow-up compliance"
      }
    ],
    "challenges": [
      "Referrals arrive with incomplete imaging series — patients often need additional CT, MRI, or flexion-extension films before surgical planning can begin",
      "Complex deformity cases require integration of multiple imaging modalities with biomechanical analysis that manual workflows cannot efficiently coordinate",
      "Medical optimization for major spine surgery (nutrition, smoking cessation, diabetes control) requires months of preparation tracking",
      "Post-surgical pain management inquiries flood phone lines, with patients unable to distinguish expected discomfort from concerning symptoms",
      "Rehabilitation coordination across physical therapy, occupational therapy, and pain management requires multi-provider scheduling alignment",
      "Long-term hardware surveillance for adjacent segment disease and fusion assessment requires imaging at specific postoperative intervals"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts MRI findings, CT measurements, myelogram results, and prior surgical records from referral packets using OCR. Identifies missing imaging, verifies insurance preauthorization requirements, and flags cases with progressive neurological deficits for urgent review."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates surgical consultation, advanced imaging, medical optimization visits, and OR scheduling based on neurological urgency and preoperative readiness. Fills cancellations prioritizing patients with progressive deficits or instability."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers prehabilitation exercise programs, smoking cessation support, and post-surgical brace instructions across SMS, voice, and portal. Tracks medical optimization milestones and coordinates rehabilitation scheduling for postoperative recovery."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages post-surgical pain concerns, activity restriction questions, and wound care issues with AI severity assessment. Monitors for neurological changes, infection indicators, and hardware complications while resolving 91% of routine recovery inquiries at first contact."
      }
    ]
  },
  {
    "slug": "cosmetic-dermatologic-surgery",
    "specialty": "Cosmetic Dermatologic Surgery",
    "tagline": "AI-driven aesthetic practice management from consultation through procedure to satisfaction tracking",
    "heroDescription": "Optimize cosmetic dermatologic surgery practices with intelligent automation managing consultation requests, procedure scheduling, pre-treatment skin preparation, and post-procedure follow-up — ensuring every patient receives personalized aesthetic care with exceptional satisfaction outcomes.",
    "description": "Cosmetic dermatology practices balance clinical precision with consumer-grade service expectations. Consultation requests arrive through multiple channels without qualification, procedure scheduling must account for skin preparation timelines, patients require detailed pre and post-procedure protocols, and satisfaction tracking drives referrals. The result: unqualified leads consuming consultation time, protocol non-compliance affecting outcomes, and lost revenue from poor follow-up communication.",
    "workflows": [
      "Referral intake with OCR extraction of medical histories, medication lists, and prior treatment records — patient matching and eligibility verification in under 3 minutes with Fitzpatrick skin type documentation",
      "AI-driven scheduling matching patients to optimal procedure slots based on skin type, treatment plan complexity, seasonal UV considerations, and required preparation timelines",
      "Smart waitlist that fills procedure cancellations within minutes via automated SMS and voice outreach, prioritizing patients with completed skin preparation protocols",
      "Pre-procedure prep automation — topical retinoid initiation timelines, sun avoidance documentation, antiviral prophylaxis for resurfacing, and consent photography with compliance confirmation",
      "Multi-channel patient engagement: skincare regimen reminders, procedure preparation countdowns, post-procedure care instructions, and recovery milestone tracking via SMS, voice, and portal",
      "Real-time healing progress and complication monitoring with AI assessment of expected vs. abnormal recovery patterns and escalation for infection, scarring, or pigmentation changes",
      "Post-procedure AI triage with 91% first-call resolution — handling wound care questions, expected downtime concerns, product usage timing, and touch-up scheduling inquiries",
      "Automated outcome surveillance with satisfaction surveys, photography comparison scheduling, and maintenance treatment reminders — zero patients lost to follow-up after aesthetic procedures"
    ],
    "results": [
      {
        "value": "58%",
        "label": "Improvement in consultation-to-procedure conversion"
      },
      {
        "value": "2.2min",
        "label": "Average intake-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-procedure care inquiries"
      },
      {
        "value": "97.5%",
        "label": "Patient satisfaction survey completion rate"
      }
    ],
    "challenges": [
      "Consultation requests arrive through social media, website forms, and phone without medical qualification, consuming clinical time with non-candidates",
      "Skin preparation protocols (retinoids, sun avoidance, hydroquinone) require weeks of patient compliance before procedures can proceed",
      "Post-procedure recovery generates high anxiety and frequent calls, as patients cannot distinguish normal healing from complications",
      "Seasonal UV considerations affect laser and resurfacing scheduling, requiring dynamic calendar management",
      "Before-and-after photography documentation is inconsistent, undermining outcome assessment and marketing capabilities",
      "Maintenance treatment scheduling (neurotoxin, fillers, laser) relies on patient self-initiation rather than proactive recall"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Qualifies consultation requests by extracting medical histories, medication contraindications, and treatment goals using OCR. Documents Fitzpatrick skin types, verifies consultation eligibility, and identifies patients requiring additional medical clearance."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Schedules procedures accounting for skin preparation completion timelines, seasonal UV risk, and treatment plan sequencing. Fills cancellations prioritizing patients with completed prep protocols and manages maintenance treatment recall scheduling."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers skincare preparation regimen reminders, procedure day instructions, and post-procedure recovery guidance across SMS, voice, and portal. Manages photography scheduling and distributes satisfaction surveys at optimal recovery milestones."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages post-procedure healing concerns, product usage questions, and recovery timeline inquiries with AI assessment of normal vs. abnormal healing patterns. Escalates infection, scarring, and pigmentation changes while resolving 91% of recovery questions at first contact."
      }
    ]
  },
  {
    "slug": "endovascular-surgery",
    "specialty": "Endovascular Surgery",
    "tagline": "AI-orchestrated vascular intervention from diagnostic imaging through catheter-based treatment to graft surveillance",
    "heroDescription": "Transform endovascular surgery care with intelligent automation coordinating vascular imaging review, procedure planning, anticoagulation management, and long-term graft surveillance — ensuring every patient with peripheral vascular disease or aortic pathology receives timely, minimally invasive treatment.",
    "description": "Endovascular surgery programs manage patients across a spectrum from elective aneurysm repair to limb-threatening ischemia. Referrals arrive with varied imaging quality, anticoagulation management requires precise periprocedural coordination, and endograft surveillance mandates lifelong imaging follow-up. The result: delayed intervention for critical limb ischemia, anticoagulation errors during transitions, and endoleak detection failures from missed surveillance imaging.",
    "workflows": [
      "Referral intake with OCR extraction of CTA/MRA imaging, ankle-brachial indices, and duplex ultrasound reports — patient matching and insurance verification in under 3 minutes with vascular urgency classification",
      "AI-driven scheduling matching patients to optimal procedure slots based on limb threat severity, aneurysm growth rate, and anticoagulation bridge timing requirements",
      "Smart waitlist that fills endovascular suite cancellations within minutes via automated SMS and voice outreach, prioritizing patients with critical limb ischemia or rapidly expanding aneurysms",
      "Pre-procedure prep automation — renal function assessment, contrast allergy protocols, anticoagulation bridge management, and device sizing confirmation with compliance confirmation",
      "Multi-channel patient engagement: anticoagulation instructions, access site care education, activity restriction guidance, and surveillance imaging reminders via SMS, voice, and portal",
      "Real-time vascular access site and graft function monitoring with AI assessment of complication risk and escalation for limb ischemia signs, endoleak suspicion, or access site hematoma",
      "Post-procedure AI triage with 91% first-call resolution — handling access site concerns, anticoagulation resumption questions, activity restrictions, and symptom changes in treated extremities",
      "Automated lifelong graft surveillance with CTA/duplex scheduling at protocol intervals, aneurysm sac measurement tracking, and endoleak monitoring — zero patients lost to endograft follow-up"
    ],
    "results": [
      {
        "value": "73%",
        "label": "Reduction in critical limb ischemia intervention delays"
      },
      {
        "value": "2.6min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-procedure vascular inquiries"
      },
      {
        "value": "99.3%",
        "label": "Endograft surveillance compliance"
      }
    ],
    "challenges": [
      "Critical limb ischemia referrals require urgent intervention but arrive through the same queue as elective cases, delaying limb salvage",
      "Anticoagulation bridge management across referring physicians, surgeons, and anticoagulation clinics creates dangerous communication gaps",
      "Endograft surveillance requires lifelong imaging at specific intervals — CTA at 1, 6, and 12 months, then annually — that patients frequently miss",
      "Contrast-induced nephropathy risk assessment requires renal function labs that are often outdated by the time of procedure scheduling",
      "Access site complications after femoral artery puncture generate high-volume calls from anxious patients unable to assess bruising severity",
      "Coordination between endovascular surgeons, interventional radiologists, and wound care teams fragments care for complex vascular patients"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts CTA/MRA imaging findings, ankle-brachial indices, and duplex ultrasound results from referral documents using OCR. Classifies vascular urgency, assesses renal function for contrast risk, and verifies insurance preauthorization for endovascular procedures."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Prioritizes endovascular suite scheduling based on limb threat severity and aneurysm growth rate. Manages anticoagulation bridge timing and fills cancellations prioritizing critical limb ischemia and symptomatic aneurysm patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers anticoagulation instructions, access site care education, and graft surveillance imaging reminders across SMS, voice, and portal. Coordinates contrast allergy premedication protocols and renal function lab scheduling before procedures."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages access site concerns, anticoagulation questions, and limb symptom changes with AI severity assessment. Monitors endograft surveillance compliance and escalates endoleak suspicion, access site hematoma, and limb ischemia signals immediately."
      }
    ]
  },
  {
    "slug": "foot-ankle-surgery",
    "specialty": "Foot & Ankle Surgery",
    "tagline": "AI-powered orthopedic foot and ankle care from injury referral through surgical reconstruction to functional recovery",
    "heroDescription": "Orchestrate foot and ankle surgery patient journeys with intelligent automation managing referral processing, diagnostic workup coordination, surgical scheduling, and rehabilitation monitoring — ensuring every patient progresses from injury through reconstruction to full functional recovery.",
    "description": "Foot and ankle surgery practices manage a diverse patient population from acute fractures to complex reconstructions. Referrals arrive with incomplete imaging, weight-bearing status affects scheduling urgency, patients require extended non-weight-bearing periods they struggle to comply with, and functional recovery spans months. The result: delayed fracture management, non-compliance with weight-bearing restrictions, and patients lost during prolonged rehabilitation timelines.",
    "workflows": [
      "Referral intake with OCR extraction of X-ray reports, MRI findings, and injury mechanism documentation — patient matching and insurance verification in under 3 minutes with acuity classification",
      "AI-driven scheduling matching patients to optimal consultation and OR slots based on fracture acuity, deformity severity, weight-bearing status, and hardware availability requirements",
      "Smart waitlist that fills surgical cancellations within minutes via automated SMS and voice outreach, prioritizing patients with acute fractures, progressive deformity, or failed conservative management",
      "Pre-surgical prep automation — advanced imaging orders, diabetes optimization for neuropathic patients, smoking cessation documentation, and DVT prophylaxis planning with compliance confirmation",
      "Multi-channel patient engagement: weight-bearing restriction reminders, boot/cast care instructions, physical therapy scheduling, and recovery milestone tracking via SMS, voice, and portal",
      "Real-time healing progress and complication monitoring with AI assessment of expected recovery trajectory and escalation for infection, non-union, or hardware complication indicators",
      "Post-surgical AI triage with 91% first-call resolution — handling weight-bearing progression questions, swelling concerns, boot/cast issues, and return-to-activity timelines",
      "Automated functional recovery surveillance with imaging-based healing assessment, physical therapy milestone tracking, and long-term outcome scoring — zero patients lost to follow-up during rehabilitation"
    ],
    "results": [
      {
        "value": "70%",
        "label": "Reduction in acute fracture consultation delays"
      },
      {
        "value": "2.3min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical recovery inquiries"
      },
      {
        "value": "98.7%",
        "label": "Rehabilitation follow-up compliance"
      }
    ],
    "challenges": [
      "Acute fracture referrals and chronic deformity consultations arrive in the same queue without urgency differentiation",
      "Weight-bearing restriction compliance is notoriously poor, with patients bearing weight prematurely and compromising surgical outcomes",
      "Diabetic and neuropathic foot patients require specialized preoperative optimization that standard protocols do not address",
      "Post-surgical swelling is expected but generates high call volumes from patients unable to distinguish normal from concerning edema",
      "Physical therapy coordination for foot and ankle rehabilitation requires specific protocols that generic PT referrals fail to communicate",
      "Hardware removal decisions require imaging at specific postoperative intervals that patients frequently miss"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts X-ray and MRI findings, injury mechanism details, and prior treatment records from referral documents using OCR. Classifies acuity for urgent fracture management vs. elective reconstruction and verifies insurance preauthorization."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Prioritizes scheduling based on fracture acuity and deformity progression while coordinating hardware availability and OR resources. Fills cancellations prioritizing acute injuries and manages preoperative optimization timelines for diabetic patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers weight-bearing restriction reminders, boot/cast care instructions, and physical therapy scheduling across SMS, voice, and portal. Tracks rehabilitation milestones and provides return-to-activity guidance at each recovery phase."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages swelling concerns, weight-bearing progression questions, and wound healing issues with AI severity assessment. Monitors for non-union, infection, and hardware complications while resolving 91% of routine recovery inquiries at first contact."
      }
    ]
  },
  {
    "slug": "gynecologic-oncology",
    "specialty": "Gynecologic Oncology",
    "tagline": "AI-orchestrated gynecologic cancer care from diagnosis through multimodal treatment to survivorship surveillance",
    "heroDescription": "Transform gynecologic oncology patient journeys with intelligent automation coordinating cancer diagnosis processing, surgical staging, chemotherapy scheduling, and long-term survivorship monitoring — ensuring every patient receives comprehensive, timely care through every phase of their cancer treatment.",
    "description": "Gynecologic oncology programs manage patients through lengthy, multimodal treatment courses. Referrals arrive with pathology requiring urgent surgical consultation, treatment plans span surgery, chemotherapy, and radiation over months, patients experience significant side effects requiring active management, and survivorship surveillance extends for years. The result: delayed surgical staging, chemotherapy scheduling gaps, unmanaged treatment toxicity, and patients lost during survivorship transition.",
    "workflows": [
      "Referral intake with OCR extraction of pathology reports, imaging findings, and tumor marker levels — patient matching and insurance verification in under 3 minutes with cancer staging urgency assessment",
      "AI-driven scheduling matching patients to optimal surgical and chemotherapy slots based on cancer type, staging urgency, treatment protocol timelines, and infusion center capacity",
      "Smart waitlist that fills surgical and chemotherapy cancellations within minutes via automated SMS and voice outreach, prioritizing patients with aggressive histology or delayed treatment initiation",
      "Pre-treatment prep automation — staging workup imaging, tumor marker baselines, genetic counseling referrals, and fertility preservation consultation with compliance confirmation",
      "Multi-channel patient engagement: chemotherapy preparation instructions, side-effect management guides, appointment reminders, and emotional support resources via SMS, voice, and portal",
      "Real-time treatment toxicity and tumor marker monitoring with AI severity assessment and escalation for neutropenic fever, bowel obstruction signs, or disease progression signals",
      "Post-treatment AI triage with 91% first-call resolution — handling chemotherapy side effects, wound care questions, CA-125 result inquiries, and symptom management during treatment",
      "Automated survivorship surveillance with tumor marker tracking, imaging protocols, and physical examination scheduling — zero patients lost to follow-up after completing gynecologic cancer treatment"
    ],
    "results": [
      {
        "value": "75%",
        "label": "Reduction in time from diagnosis to treatment initiation"
      },
      {
        "value": "2.4min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for treatment-related inquiries"
      },
      {
        "value": "99.5%",
        "label": "Survivorship surveillance follow-up compliance"
      }
    ],
    "challenges": [
      "Cancer diagnosis referrals require surgical consultation within days, but scheduling processes designed for routine care create unacceptable delays",
      "Multimodal treatment plans spanning surgery, chemotherapy, and radiation require coordination across departments that operates by phone and fax",
      "Chemotherapy toxicity monitoring between infusion cycles depends on patients reporting symptoms that they may normalize or ignore",
      "Genetic testing results that affect treatment planning arrive asynchronously and may alter surgical approach or chemotherapy selection",
      "Transition from active treatment to survivorship surveillance is poorly defined, with patients feeling abandoned after completing therapy",
      "Fertility preservation discussions must happen before treatment initiation but add time pressure to an already urgent timeline"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts pathology reports, imaging findings, tumor markers, and genetic testing results from referral documents using OCR. Assesses staging urgency, identifies genetic counseling needs, and verifies insurance coverage for multimodal cancer treatment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates surgical staging, chemotherapy infusion scheduling, and radiation planning based on cancer urgency and treatment protocol timelines. Fills cancellations prioritizing aggressive histology and manages fertility preservation consultation timing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers chemotherapy preparation instructions, side-effect management guidance, and emotional support resources across SMS, voice, and portal. Manages survivorship transition communication and distributes tumor marker result notifications."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages chemotherapy side effects, post-surgical concerns, and symptom reports with AI toxicity scoring. Monitors tumor markers and imaging results for disease progression while immediately escalating neutropenic fever and bowel obstruction signs."
      }
    ]
  },
  {
    "slug": "hand-upper-extremity-surgery",
    "specialty": "Hand & Upper Extremity Surgery",
    "tagline": "AI-driven hand surgery care from acute injury referral through microsurgical repair to functional rehabilitation",
    "heroDescription": "Orchestrate hand and upper extremity surgery patient journeys with intelligent automation managing urgent injury referrals, microsurgical scheduling, splinting protocol adherence, and hand therapy coordination — ensuring every patient achieves maximum functional recovery.",
    "description": "Hand surgery practices manage both time-critical acute injuries and complex reconstructive cases. Urgent referrals for tendon lacerations and fractures arrive requiring same-day evaluation, microsurgical procedures demand specialized OR setup, patients must adhere to strict splinting and therapy protocols, and functional outcomes depend on early rehabilitation initiation. The result: delayed acute injury evaluation, therapy protocol non-compliance, and suboptimal functional recovery from coordination failures.",
    "workflows": [
      "Referral intake with OCR extraction of X-ray reports, injury mechanism details, and neurovascular examination findings — patient matching and insurance verification in under 3 minutes with surgical urgency classification",
      "AI-driven scheduling matching patients to optimal consultation and OR slots based on injury acuity, tendon repair timing windows, microsurgical resource requirements, and hand therapy coordination",
      "Smart waitlist that fills surgical cancellations within minutes via automated SMS and voice outreach, prioritizing patients with acute tendon injuries, digital replantation candidates, or nerve compression progression",
      "Pre-surgical prep automation — advanced imaging orders, nerve conduction study scheduling, splint fabrication coordination, and hand therapy initiation planning with compliance confirmation",
      "Multi-channel patient engagement: splinting protocol reminders, hand therapy appointment confirmations, home exercise programs, and edema management instructions via SMS, voice, and portal",
      "Real-time healing and functional progress monitoring with AI assessment of range-of-motion recovery trajectory and escalation for tendon rupture, infection, or complex regional pain syndrome signs",
      "Post-surgical AI triage with 91% first-call resolution — handling splint concerns, therapy progression questions, edema management, and return-to-work timeline inquiries",
      "Automated functional recovery surveillance with grip strength tracking, range-of-motion milestones, and outcome scoring — zero patients lost to follow-up during critical hand therapy windows"
    ],
    "results": [
      {
        "value": "78%",
        "label": "Reduction in acute hand injury evaluation delays"
      },
      {
        "value": "2.1min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical hand inquiries"
      },
      {
        "value": "99.2%",
        "label": "Hand therapy protocol compliance"
      }
    ],
    "challenges": [
      "Acute tendon and nerve injuries have narrow surgical repair windows measured in days — standard scheduling processes cause timing failures",
      "Microsurgical procedures require specialized OR setup, instrumentation, and extended block times that conflict with standard scheduling",
      "Splinting protocol adherence is critical for tendon repair outcomes but patients frequently remove or modify splints prematurely",
      "Hand therapy must begin within specific postoperative windows, and delays of even a week can permanently compromise range of motion",
      "Workers compensation and occupational injury cases require additional documentation that delays treatment authorization",
      "Complex regional pain syndrome detection requires monitoring subtle symptom patterns that routine follow-up visits may miss"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts X-ray findings, injury mechanism, neurovascular status, and tendon examination results from referral documents using OCR. Classifies surgical urgency based on repair timing windows and verifies insurance including workers compensation authorization."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates urgent surgical scheduling within tendon repair windows while managing microsurgical OR resource requirements. Synchronizes hand therapy initiation timing with surgical protocols and fills cancellations prioritizing acute injuries."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers splinting protocol reminders, hand therapy appointment confirmations, and home exercise programs across SMS, voice, and portal. Tracks edema management compliance and provides return-to-work guidance aligned with recovery milestones."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages splint concerns, therapy progression questions, and functional recovery issues with AI assessment. Monitors for tendon rupture, infection, and complex regional pain syndrome indicators while resolving 91% of post-surgical inquiries at first contact."
      }
    ]
  },
  {
    "slug": "head-neck-surgery",
    "specialty": "Head & Neck Surgery",
    "tagline": "AI-orchestrated head and neck cancer care from biopsy through multimodal treatment to speech and swallowing rehabilitation",
    "heroDescription": "Transform head and neck surgery patient journeys with intelligent automation coordinating cancer diagnosis processing, multidisciplinary treatment planning, surgical scheduling, and functional rehabilitation for speech and swallowing — ensuring every patient navigates complex treatment pathways without delay.",
    "description": "Head and neck surgery programs manage patients through some of the most complex treatment algorithms in oncology. Referrals arrive with biopsy results requiring rapid multidisciplinary review, treatment decisions must balance cure with functional preservation of speech and swallowing, free flap reconstruction adds surgical complexity, and rehabilitation requires speech-language pathology coordination. The result: delayed treatment initiation, fragmented multidisciplinary planning, and inadequate functional rehabilitation after surgery.",
    "workflows": [
      "Referral intake with OCR extraction of biopsy pathology, CT/MRI imaging, and PET scan results — patient matching and insurance verification in under 3 minutes with tumor staging and treatment urgency assessment",
      "AI-driven scheduling matching patients to optimal surgical and treatment slots based on tumor stage, airway compromise risk, free flap team availability, and radiation oncology coordination",
      "Smart waitlist that fills surgical cancellations within minutes via automated SMS and voice outreach, prioritizing patients with airway-compromising tumors or rapidly progressing disease",
      "Pre-treatment prep automation — dental evaluation scheduling, nutritional assessment, speech baseline documentation, tracheostomy and feeding tube counseling with compliance confirmation",
      "Multi-channel patient engagement: treatment preparation instructions, swallowing exercise protocols, nutritional support guidance, and speech therapy scheduling via SMS, voice, and portal",
      "Real-time surgical recovery and functional status monitoring with AI assessment of airway, wound healing, and nutritional adequacy — escalation for flap compromise, fistula, or airway emergency signs",
      "Post-treatment AI triage with 91% first-call resolution — handling wound care questions, feeding tube management, tracheostomy concerns, and speech-swallowing rehabilitation coordination",
      "Automated survivorship surveillance with imaging protocols, thyroid function monitoring, and functional outcome tracking — zero patients lost to follow-up after head and neck cancer treatment"
    ],
    "results": [
      {
        "value": "71%",
        "label": "Reduction in time from biopsy to treatment initiation"
      },
      {
        "value": "2.5min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-treatment inquiries"
      },
      {
        "value": "99.4%",
        "label": "Survivorship surveillance compliance"
      }
    ],
    "challenges": [
      "Head and neck cancer treatment decisions require multidisciplinary tumor board input from surgery, radiation, medical oncology, and speech pathology — coordination delays treatment",
      "Free flap reconstruction requires simultaneous OR availability of head and neck and microvascular surgery teams, creating scheduling bottlenecks",
      "Pre-treatment dental evaluation and extraction must be completed before radiation begins, adding time pressure to an urgent timeline",
      "Feeding tube and tracheostomy management after surgery generates high-volume calls from patients managing complex home care",
      "Speech and swallowing rehabilitation requires specialized pathologists and protocols that generic referrals fail to communicate",
      "Hypothyroidism surveillance after radiation therapy is tracked inconsistently, with many patients developing undiagnosed thyroid failure"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts biopsy pathology, cross-sectional imaging, and PET scan results from referral documents using OCR. Performs tumor staging assessment, identifies airway compromise risk, and verifies insurance coverage for complex multimodal cancer treatment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates multidisciplinary treatment scheduling including tumor board, surgery, radiation, and rehabilitation. Manages free flap team availability and OR coordination while filling cancellations prioritizing airway-compromising tumors."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers pre-treatment dental and nutritional preparation instructions, post-surgical swallowing exercises, and rehabilitation scheduling across SMS, voice, and portal. Manages feeding tube and tracheostomy education materials for home care."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages wound care concerns, feeding tube issues, and tracheostomy questions with AI severity assessment. Monitors for flap compromise, fistula development, and airway emergencies while coordinating speech and swallowing rehabilitation milestones."
      }
    ]
  },
  {
    "slug": "hepatobiliary-surgery",
    "specialty": "Hepatobiliary Surgery",
    "tagline": "AI-powered liver and biliary surgical care from complex referral through resection to hepatic function surveillance",
    "heroDescription": "Orchestrate hepatobiliary surgery patient journeys with intelligent automation coordinating complex case review, hepatic function assessment, surgical planning, and post-resection liver function monitoring — ensuring every patient with liver, bile duct, or pancreatic pathology receives timely surgical evaluation.",
    "description": "Hepatobiliary surgery programs manage some of the most complex surgical cases in medicine. Referrals arrive with extensive imaging and multidisciplinary input requirements, hepatic reserve assessment determines surgical candidacy, operative planning requires 3D volumetric analysis, and post-resection liver function monitoring is critical. The result: delayed surgical consultation for resectable cancers, inadequate pre-surgical hepatic assessment, and post-operative liver failure from insufficient monitoring.",
    "workflows": [
      "Referral intake with OCR extraction of CT/MRI imaging, tumor marker levels, and hepatic function panels — patient matching and insurance verification in under 3 minutes with surgical candidacy screening",
      "AI-driven scheduling matching patients to optimal consultation and OR slots based on tumor resectability window, hepatic reserve adequacy, neoadjuvant therapy coordination, and ICU bed availability",
      "Smart waitlist that fills surgical cancellations within minutes via automated SMS and voice outreach, prioritizing patients with resectable tumors at risk of becoming unresectable or biliary obstruction requiring intervention",
      "Pre-surgical prep automation — volumetric liver analysis coordination, portal vein embolization scheduling, biliary drainage management, and nutritional optimization with compliance confirmation",
      "Multi-channel patient engagement: pre-surgical nutrition protocols, drain management education, hepatic recovery expectations, and lab monitoring schedules via SMS, voice, and portal",
      "Real-time hepatic function and surgical drain output monitoring with AI assessment of liver recovery trajectory and escalation for hepatic insufficiency, bile leak, or hemorrhage signs",
      "Post-surgical AI triage with 91% first-call resolution — handling drain care questions, dietary restrictions, lab result inquiries, and symptom management during hepatic regeneration",
      "Automated hepatic surveillance with tumor marker tracking, cross-sectional imaging scheduling, and liver function monitoring — zero patients lost to follow-up after hepatobiliary resection"
    ],
    "results": [
      {
        "value": "66%",
        "label": "Reduction in time from referral to surgical candidacy determination"
      },
      {
        "value": "2.7min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-resection inquiries"
      },
      {
        "value": "99.3%",
        "label": "Post-resection surveillance compliance"
      }
    ],
    "challenges": [
      "Hepatobiliary cancer referrals require rapid multidisciplinary review — delays of weeks can render initially resectable tumors unresectable",
      "Hepatic reserve assessment through volumetric analysis and functional testing adds complexity that delays surgical decision-making",
      "Portal vein embolization for future liver remnant augmentation requires multi-step coordination across interventional radiology and surgery",
      "Post-resection drain management generates significant call volumes from patients managing complex drain care at home",
      "Liver regeneration monitoring requires frequent lab draws and imaging that patients find burdensome during recovery",
      "Biliary reconstruction complications (strictures, leaks) may present weeks after surgery with subtle symptoms patients may not report"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts CT/MRI imaging, tumor markers, hepatic function panels, and biopsy results from referral documents using OCR. Screens surgical candidacy based on tumor characteristics and liver function, verifying insurance for complex hepatobiliary procedures."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates surgical consultation, volumetric analysis, portal vein embolization, and OR scheduling based on resectability window urgency. Manages ICU bed coordination and fills cancellations prioritizing patients at risk of losing surgical candidacy."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers pre-surgical nutritional optimization protocols, drain management education, and hepatic recovery guidance across SMS, voice, and portal. Coordinates lab monitoring schedules and distributes post-resection dietary restriction information."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages drain output concerns, dietary questions, and recovery symptoms with AI hepatic function assessment. Monitors liver function trends and escalates hepatic insufficiency, bile leak, and hemorrhage signs while resolving 91% of recovery inquiries at first contact."
      }
    ]
  },
  {
    "slug": "interventional-cardiology",
    "specialty": "Interventional Cardiology",
    "tagline": "AI-orchestrated cardiac intervention from catheterization referral through PCI to post-stent surveillance",
    "heroDescription": "Transform interventional cardiology patient journeys with intelligent automation spanning cardiac catheterization referral processing, antiplatelet management, procedure scheduling, and long-term post-stent surveillance — ensuring every patient with coronary artery disease receives timely, guideline-directed intervention.",
    "description": "Interventional cardiology programs balance urgent and elective catheterization demands. Referrals for chest pain workup require rapid triage, dual antiplatelet therapy management is error-prone during transitions, catheterization lab scheduling must accommodate emergencies, and post-PCI surveillance requires years of medication adherence monitoring. The result: delayed stress testing, antiplatelet therapy gaps during care transitions, and stent thrombosis from unmonitored medication discontinuation.",
    "workflows": [
      "Referral intake with OCR extraction of stress test results, echocardiograms, and coronary CTA findings — patient matching and insurance verification in under 3 minutes with ischemia risk stratification",
      "AI-driven scheduling matching patients to optimal catheterization lab slots based on ischemia burden, symptom acuity, troponin trends, and antiplatelet therapy initiation timing",
      "Smart waitlist that fills cath lab cancellations within minutes via automated SMS and voice outreach, prioritizing patients with positive stress tests, unstable angina, or NSTEMI presentations",
      "Pre-procedure prep automation — renal function assessment, antiplatelet loading protocols, contrast allergy premedication, and informed consent documentation with compliance confirmation",
      "Multi-channel patient engagement: dual antiplatelet therapy reminders, access site care instructions, cardiac rehabilitation enrollment, and lifestyle modification coaching via SMS, voice, and portal",
      "Real-time antiplatelet adherence and cardiac symptom monitoring with AI risk assessment and escalation for medication discontinuation, recurrent chest pain, or access site complications",
      "Post-PCI AI triage with 91% first-call resolution — handling access site concerns, antiplatelet therapy questions, chest pain evaluation, and cardiac rehabilitation scheduling",
      "Automated post-stent surveillance with dual antiplatelet therapy duration tracking, stress testing scheduling, and lipid management monitoring — zero patients lost to follow-up after coronary intervention"
    ],
    "results": [
      {
        "value": "74%",
        "label": "Reduction in diagnostic catheterization wait times"
      },
      {
        "value": "2.3min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-PCI inquiries"
      },
      {
        "value": "99.6%",
        "label": "Dual antiplatelet therapy adherence monitoring"
      }
    ],
    "challenges": [
      "Stress test referrals and urgent chest pain evaluations compete for the same catheterization lab slots without intelligent prioritization",
      "Dual antiplatelet therapy management during care transitions between interventional cardiologists, PCPs, and surgeons creates dangerous medication gaps",
      "Post-PCI access site complications generate high-volume calls from patients unable to assess bruising and hematoma severity",
      "Cardiac rehabilitation enrollment after PCI drops below 30% due to lack of proactive referral and patient engagement",
      "Premature antiplatelet discontinuation for elective procedures by uninformed providers creates stent thrombosis risk",
      "Long-term lipid management and risk factor modification after PCI receives inadequate attention during brief follow-up visits"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts stress test results, echocardiogram findings, and coronary CTA data from referral documents using OCR. Stratifies ischemia risk, assesses renal function for contrast safety, and verifies insurance preauthorization for catheterization procedures."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Prioritizes catheterization lab scheduling based on ischemia burden and symptom acuity while managing antiplatelet therapy initiation timing. Fills cath lab cancellations prioritizing high-risk patients and coordinates stress testing sequences."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers dual antiplatelet therapy reminders, access site care instructions, and cardiac rehabilitation enrollment across SMS, voice, and portal. Provides lifestyle modification coaching and coordinates lipid management follow-up."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages chest pain recurrence, access site concerns, and antiplatelet therapy questions with AI cardiac risk assessment. Monitors medication adherence patterns and escalates therapy discontinuation and recurrent ischemic symptoms immediately."
      }
    ]
  },
  {
    "slug": "interventional-radiology",
    "specialty": "Interventional Radiology",
    "tagline": "AI-powered image-guided intervention from procedure referral through catheter-based treatment to post-procedural surveillance",
    "heroDescription": "Orchestrate interventional radiology patient journeys with intelligent automation managing diverse procedure referrals, imaging review, sedation planning, and post-procedural monitoring — ensuring every patient requiring image-guided intervention receives timely, coordinated care across the full spectrum of IR procedures.",
    "description": "Interventional radiology departments manage an extraordinarily diverse procedural volume. Referrals arrive from every specialty for procedures ranging from biopsies to tumor embolization, each requiring different preparation protocols, imaging review, and post-procedural monitoring. Scheduling must balance urgency with IR suite availability, and patients often receive little education about minimally invasive alternatives. The result: delayed procedures, preparation errors from protocol confusion, and inadequate post-procedural monitoring.",
    "workflows": [
      "Referral intake with OCR extraction of imaging studies, lab results, and procedure indication documentation — patient matching and insurance preauthorization in under 3 minutes with procedure urgency classification",
      "AI-driven scheduling matching patients to optimal IR suite slots based on procedure complexity, sedation requirements, imaging modality needs, and post-procedural bed availability",
      "Smart waitlist that fills IR suite cancellations within minutes via automated SMS and voice outreach, prioritizing patients with infected collections, acute hemorrhage, or malignant biliary obstruction",
      "Pre-procedure prep automation — procedure-specific lab requirements, anticoagulation hold protocols, NPO instructions, and sedation screening with compliance confirmation",
      "Multi-channel patient engagement: procedure-specific preparation instructions, sedation guidelines, post-procedural activity restrictions, and drain care education via SMS, voice, and portal",
      "Real-time post-procedural monitoring with AI assessment of expected recovery patterns and escalation for hemorrhage, infection, non-target embolization, or access site complications",
      "Post-procedure AI triage with 91% first-call resolution — handling drain management questions, access site concerns, pain management, and imaging follow-up scheduling",
      "Automated procedural outcome surveillance with imaging follow-up scheduling, drain removal planning, and re-intervention tracking — zero patients lost to follow-up after interventional procedures"
    ],
    "results": [
      {
        "value": "69%",
        "label": "Reduction in urgent IR procedure scheduling delays"
      },
      {
        "value": "2.4min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-procedural inquiries"
      },
      {
        "value": "99.1%",
        "label": "Post-procedural imaging follow-up compliance"
      }
    ],
    "challenges": [
      "IR receives referrals from dozens of specialties, each with different urgency levels and preparation requirements that a single triage system cannot efficiently manage",
      "Procedure preparation protocols vary dramatically — anticoagulation holds, contrast allergy premedication, and NPO requirements differ for each procedure type",
      "Post-procedural drain management generates continuous call volumes from patients and referring services managing catheters outside the IR department",
      "Referring physicians often lack awareness of IR treatment options, resulting in delayed referrals for conditions amenable to minimally invasive intervention",
      "Anticoagulation management across diverse patient populations and procedure types creates error-prone communication chains with multiple providers",
      "Follow-up imaging to assess procedural success (tumor response, abscess resolution) is tracked inconsistently across referring services"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts imaging studies, lab results, and procedure indications from referral documents across dozens of specialties using OCR. Classifies procedure urgency, identifies preparation requirements, and verifies insurance preauthorization for IR procedures."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Manages IR suite scheduling across the full spectrum of procedure types, balancing complexity, sedation needs, and post-procedural monitoring requirements. Fills cancellations prioritizing urgent drainage, embolization, and biliary intervention cases."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers procedure-specific preparation instructions, anticoagulation hold reminders, and post-procedural drain care education across SMS, voice, and portal. Coordinates sedation screening and NPO compliance for diverse procedure types."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages drain management questions, access site concerns, and post-procedural symptoms with AI severity assessment tailored to procedure type. Monitors for hemorrhage, infection, and non-target complications while scheduling follow-up imaging for outcome assessment."
      }
    ]
  },
  {
    "slug": "joint-reconstruction",
    "specialty": "Joint Reconstruction",
    "tagline": "AI-orchestrated joint replacement care from orthopedic referral through surgery to functional independence",
    "heroDescription": "Transform joint reconstruction patient journeys with intelligent automation managing referral processing, pre-surgical optimization, surgical scheduling, and postoperative rehabilitation coordination — ensuring every patient achieves optimal functional outcomes after hip, knee, or shoulder replacement.",
    "description": "Joint reconstruction programs manage high-volume surgical practices with complex perioperative pathways. Referrals require conservative treatment documentation before surgical authorization, patients need medical optimization for elective surgery, same-day discharge protocols demand precise coordination, and rehabilitation compliance determines functional outcomes. The result: insurance denials from incomplete documentation, surgical complications from inadequate optimization, and suboptimal outcomes from poor rehabilitation adherence.",
    "workflows": [
      "Referral intake with OCR extraction of X-ray reports, conservative treatment documentation, and functional limitation assessments — patient matching and insurance preauthorization in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical dates based on medical optimization readiness, implant availability, anesthesia clearance, and discharge disposition planning",
      "Smart waitlist that fills OR cancellations within minutes via automated SMS and voice outreach, prioritizing patients with completed preoperative optimization and insurance authorization",
      "Pre-surgical prep automation — joint class enrollment, medical optimization milestone tracking, home preparation checklist, and pre-surgical physical therapy initiation with compliance confirmation",
      "Multi-channel patient engagement: prehabilitation exercise programs, surgical preparation countdowns, pain management expectations, and recovery milestone tracking via SMS, voice, and portal",
      "Real-time post-surgical recovery and complication monitoring with AI assessment of functional progress trajectory and escalation for infection, DVT, dislocation, or prosthetic complication signs",
      "Post-surgical AI triage with 91% first-call resolution — handling pain management questions, wound care concerns, activity progression guidance, and physical therapy coordination",
      "Automated functional recovery surveillance with patient-reported outcome measure collection, implant longevity tracking, and contralateral joint monitoring — zero patients lost to follow-up after joint replacement"
    ],
    "results": [
      {
        "value": "81%",
        "label": "Reduction in insurance preauthorization denials"
      },
      {
        "value": "2.5min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical inquiries"
      },
      {
        "value": "99.0%",
        "label": "Rehabilitation follow-up compliance"
      }
    ],
    "challenges": [
      "Insurance preauthorization for joint replacement requires extensive documentation of failed conservative treatment — incomplete records cause denials",
      "Medical optimization for elective surgery (diabetes control, BMI targets, smoking cessation) requires months of tracking across multiple providers",
      "Same-day discharge protocols demand precise coordination of anesthesia, physical therapy, home health, and transportation",
      "Post-surgical pain management expectations are poorly set, generating call volumes that overwhelm staff during recovery periods",
      "Physical therapy adherence after joint replacement directly correlates with functional outcomes but drops significantly after the first month",
      "Patient-reported outcome collection for quality reporting and implant registry participation requires sustained engagement over years"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts imaging findings, conservative treatment history, and functional assessments from referral documents using OCR. Compiles preauthorization documentation packages, verifies insurance requirements, and identifies medical optimization prerequisites."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates surgical scheduling based on medical optimization completion, implant availability, and discharge disposition planning. Manages same-day discharge protocol coordination and fills OR cancellations prioritizing fully optimized patients."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers prehabilitation programs, joint class enrollment, and surgical preparation countdowns across SMS, voice, and portal. Tracks medical optimization milestones and coordinates home preparation checklists for safe discharge planning."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages pain management concerns, wound care questions, and mobility progression inquiries with AI recovery trajectory assessment. Monitors for infection, DVT, and prosthetic complications while tracking patient-reported outcomes for quality reporting."
      }
    ]
  },
  {
    "slug": "minimally-invasive-gynecologic-surgery",
    "specialty": "Minimally Invasive Gynecologic Surgery",
    "tagline": "AI-driven minimally invasive GYN surgical care from referral through laparoscopic/robotic surgery to rapid recovery",
    "heroDescription": "Orchestrate minimally invasive gynecologic surgery patient journeys with intelligent automation managing referral processing, surgical candidacy assessment, robotic/laparoscopic scheduling, and enhanced recovery protocol adherence — ensuring every patient benefits from the fastest path to minimally invasive treatment.",
    "description": "Minimally invasive GYN surgery practices face growing demand with limited robotic and laparoscopic OR time. Referrals arrive without adequate imaging to determine surgical approach, patients are not always aware of minimally invasive options, robotic OR scheduling is highly competitive, and enhanced recovery protocols require precise coordination. The result: patients undergoing open procedures that could be minimally invasive, OR scheduling inefficiencies, and slower recovery from poor ERAS compliance.",
    "workflows": [
      "Referral intake with OCR extraction of pelvic imaging, pathology reports, and symptom severity documentation — patient matching and insurance verification in under 3 minutes with MIS candidacy screening",
      "AI-driven scheduling matching patients to optimal OR slots based on procedure complexity, robotic platform availability, surgeon case volume requirements, and enhanced recovery protocol timing",
      "Smart waitlist that fills robotic OR cancellations within minutes via automated SMS and voice outreach, prioritizing patients with severe symptoms, large fibroids, or suspected endometriosis with organ involvement",
      "Pre-surgical prep automation — bowel preparation protocols, enhanced recovery carbohydrate loading instructions, pre-surgical imaging verification, and uterine sizing confirmation with compliance confirmation",
      "Multi-channel patient engagement: enhanced recovery protocol instructions, bowel prep reminders, post-surgical activity guidance, and recovery milestone tracking via SMS, voice, and portal",
      "Real-time post-surgical recovery monitoring with AI assessment of enhanced recovery milestones and escalation for port site infection, trocar hernia, or urinary tract injury signs",
      "Post-surgical AI triage with 91% first-call resolution — handling port site concerns, activity progression questions, bowel function recovery, and return-to-work guidance",
      "Automated surgical outcome surveillance with pathology follow-up, symptom resolution tracking, and quality-of-life outcome collection — zero patients lost to follow-up after minimally invasive GYN procedures"
    ],
    "results": [
      {
        "value": "64%",
        "label": "Increase in robotic OR utilization efficiency"
      },
      {
        "value": "2.3min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical inquiries"
      },
      {
        "value": "98.8%",
        "label": "Enhanced recovery protocol compliance"
      }
    ],
    "challenges": [
      "Referrals arrive without adequate pelvic imaging, delaying surgical approach determination and potentially defaulting to open surgery unnecessarily",
      "Robotic OR time is limited and highly competitive — scheduling inefficiencies result in underutilization of minimally invasive capability",
      "Enhanced recovery after surgery protocols require patient compliance with pre-surgical carbohydrate loading, multimodal analgesia, and early ambulation",
      "Patients are often unaware that minimally invasive options exist for complex conditions like deep endometriosis or large fibroid uteri",
      "Post-surgical bowel function recovery inquiries overwhelm phone lines as patients cannot distinguish normal from concerning delayed return of function",
      "Port site complications, while uncommon, generate disproportionate anxiety and call volumes from patients unfamiliar with laparoscopic recovery"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts pelvic imaging, pathology reports, and symptom documentation from referral documents using OCR. Screens minimally invasive surgical candidacy based on uterine sizing, pathology, and surgical history. Verifies insurance coverage for robotic procedures."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Optimizes robotic and laparoscopic OR scheduling based on procedure complexity, platform availability, and surgeon requirements. Fills robotic OR cancellations within minutes and coordinates enhanced recovery protocol timing with surgical dates."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers enhanced recovery protocol instructions, bowel preparation reminders, and post-surgical activity guidance across SMS, voice, and portal. Educates patients about minimally invasive options and tracks recovery milestones for ERAS compliance."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages port site concerns, bowel function recovery questions, and activity progression inquiries with AI recovery assessment. Monitors for trocar complications, urinary tract injury, and infection signs while resolving 91% of post-surgical inquiries at first contact."
      }
    ]
  },
  {
    "slug": "neuro-oncology-surgery",
    "specialty": "Neuro-Oncology Surgery",
    "tagline": "AI-orchestrated brain tumor surgical care from diagnosis through craniotomy to neuro-rehabilitation and surveillance",
    "heroDescription": "Transform neuro-oncology surgical patient journeys with intelligent automation coordinating brain tumor diagnosis processing, surgical planning with neuronavigation, perioperative neurological monitoring, and long-term tumor surveillance — ensuring every patient receives timely neurosurgical intervention with maximum functional preservation.",
    "description": "Neuro-oncology surgery programs manage the highest-stakes surgical cases in medicine. Referrals arrive with brain imaging requiring urgent neurosurgical evaluation, surgical planning demands integration of functional MRI and tractography, patients and families face devastating diagnoses needing intensive support, and tumor recurrence surveillance continues for years. The result: delayed surgical consultation for brain tumors, suboptimal functional preservation from incomplete surgical planning, and recurrence detection failures from surveillance gaps.",
    "workflows": [
      "Referral intake with OCR extraction of brain MRI reports, biopsy pathology, and neurological examination findings — patient matching and insurance verification in under 3 minutes with tumor urgency and surgical candidacy assessment",
      "AI-driven scheduling matching patients to optimal surgical dates based on tumor growth rate, mass effect severity, eloquent cortex proximity, and neuronavigation imaging coordination",
      "Smart waitlist that fills craniotomy cancellations within minutes via automated SMS and voice outreach, prioritizing patients with rapid tumor growth, increasing mass effect, or new neurological deficits",
      "Pre-surgical prep automation — functional MRI and DTI tractography scheduling, antiepileptic medication initiation, steroid protocols, and neuro-navigation image acquisition with compliance confirmation",
      "Multi-channel patient engagement: steroid taper instructions, seizure precaution education, neuro-rehabilitation scheduling, and caregiver support resources via SMS, voice, and portal",
      "Real-time neurological status and wound healing monitoring with AI severity assessment and escalation for new neurological deficits, seizure activity, CSF leak, or infection signs",
      "Post-craniotomy AI triage with 91% first-call resolution — handling steroid management questions, seizure concerns, wound care, headache evaluation, and adjuvant therapy coordination",
      "Automated tumor surveillance with serial MRI scheduling, response assessment tracking, and recurrence detection — zero patients lost to follow-up after brain tumor surgery"
    ],
    "results": [
      {
        "value": "73%",
        "label": "Reduction in time from brain tumor diagnosis to surgical consultation"
      },
      {
        "value": "2.6min",
        "label": "Average referral-to-verification processing time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-craniotomy inquiries"
      },
      {
        "value": "99.7%",
        "label": "Tumor surveillance MRI compliance"
      }
    ],
    "challenges": [
      "Brain tumor diagnosis creates extreme urgency — patients and families expect immediate neurosurgical consultation that scheduling processes cannot accommodate",
      "Surgical planning requires integration of structural MRI, functional MRI, and DTI tractography with neuronavigation — multi-step imaging coordination delays surgery",
      "Steroid management during the perioperative period generates continuous dose adjustment questions that overwhelm clinical communication",
      "Seizure management and antiepileptic medication initiation create anxiety and frequent calls from patients and caregivers unfamiliar with neurological recovery",
      "Transition from surgical care to adjuvant radiation and chemotherapy involves multiple handoffs where patients feel abandoned between teams",
      "Tumor surveillance MRI interpretation anxiety — patients waiting for serial imaging results experience extreme distress during recurrence monitoring"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts brain MRI findings, biopsy pathology, and neurological examination data from referral documents using OCR. Assesses tumor urgency based on growth rate and mass effect, determines surgical candidacy, and verifies insurance for neurosurgical procedures."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates surgical planning imaging (fMRI, DTI), neuronavigation sessions, and craniotomy scheduling based on tumor urgency and eloquent cortex proximity. Fills OR cancellations prioritizing patients with rapid growth or progressive neurological deficits."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers steroid taper protocols, seizure precaution education, and neuro-rehabilitation scheduling across SMS, voice, and portal. Provides caregiver support resources and manages the emotional journey from diagnosis through adjuvant therapy transition."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Triages steroid management questions, seizure concerns, and post-craniotomy headaches with AI neurological severity assessment. Monitors for CSF leak, infection, and new deficits while coordinating tumor surveillance MRI scheduling and result communication."
      }
    ]
  },
  {
    "slug": "neurosurgical-spine",
    "specialty": "Neurosurgical Spine",
    "tagline": "Orchestrate complex spine surgery journeys from referral through recovery with zero patients lost to follow-up.",
    "heroDescription": "Configural transforms neurosurgical spine practices by orchestrating the entire patient journey — from the moment a referral arrives with imaging studies through post-operative neurological monitoring and long-term fusion surveillance. Our AI agents coordinate MRI review, surgical scheduling, pre-operative clearances, and post-surgical rehabilitation tracking so your team focuses on surgical excellence.",
    "description": "Neurosurgical spine practices lose patients at every journey stage. Referrals arrive with incomplete imaging, surgical candidates wait weeks for authorization, pre-operative workups stall without coordination, and post-operative patients miss critical follow-up windows — leading to undetected hardware complications, progressive neurological deficits, and preventable readmissions.",
    "workflows": [
      "Referral intake with OCR extraction of MRI/CT reports, patient matching, and insurance verification for spine procedures in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical slots based on acuity level, neurological deficit progression, and OR equipment requirements",
      "Smart waitlist that fills surgical cancellations within minutes via automated SMS and voice outreach to pre-cleared candidates",
      "Pre-treatment prep automation — pre-operative labs, cardiac clearance, medication adjustments (anticoagulant bridging), and NPO compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, pre-op confirmations, and post-operative activity restriction instructions via SMS, voice, and portal",
      "Real-time post-operative neurological status monitoring with AI severity assessment and escalation for new deficits or wound complications",
      "Post-treatment AI triage with 91% first-call resolution — addressing wound care concerns, pain management, activity restrictions, and emergency red flags",
      "Automated fusion surveillance and long-term follow-up — zero patients lost to follow-up for hardware assessment and neurological outcome tracking"
    ],
    "results": [
      {
        "value": "74%",
        "label": "Reduction in referral-to-surgery time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-op concerns"
      },
      {
        "value": "3x",
        "label": "Faster pre-operative clearance completion"
      },
      {
        "value": "0",
        "label": "Patients lost to fusion surveillance follow-up"
      }
    ],
    "challenges": [
      "Referrals arrive without MRI or CT imaging, forcing staff to chase records and delaying surgical evaluation by weeks",
      "Complex insurance authorizations for spine procedures create bottlenecks that lose patients to competing practices",
      "Surgical cancellations go unfilled because backup candidates lack completed pre-operative clearances",
      "Post-operative patients miss critical 2-week and 6-week wound check windows, risking hardware infection",
      "Neurological deficit progression during wait times goes unmonitored, turning elective cases into emergencies",
      "Long-term fusion patients disappear from follow-up, missing adjacent segment disease and hardware failure detection"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts imaging findings, diagnosis codes, and neurological exam details from spine referral packets using OCR. Matches patients, verifies insurance coverage for neurosurgical procedures, and flags incomplete imaging studies for immediate follow-up with referring providers."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches surgical candidates to optimal OR slots based on procedure complexity, neurological urgency, equipment needs, and surgeon preference. Maintains a pre-cleared waitlist to fill cancellations within minutes, ensuring no OR time goes unused."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers pre-operative prep sequences including medication adjustments, NPO instructions, and clearance reminders via SMS, voice, and portal. Sends post-operative activity restriction guides and wound care instructions at clinically appropriate intervals."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative recovery using patient-reported neurological symptoms with AI severity scoring. Triages wound concerns, new weakness, and pain escalation with 91% first-call resolution. Automates long-term fusion surveillance scheduling to ensure zero patients are lost to follow-up."
      }
    ]
  },
  {
    "slug": "oculoplastics",
    "specialty": "Oculoplastics",
    "tagline": "Streamline oculoplastic surgical journeys from referral imaging to post-operative healing with intelligent care coordination.",
    "heroDescription": "Configural orchestrates oculoplastic patient journeys end-to-end — from referral with clinical photography through pre-operative planning, surgical scheduling, and post-operative wound healing surveillance. Our AI agents manage insurance documentation for functional vs. cosmetic determinations, coordinate imaging review, and ensure every patient completes their full recovery pathway.",
    "description": "Oculoplastic practices face unique journey disruptions. Referrals lack clinical photographs needed for surgical planning, insurance denials for functional procedures delay necessary surgeries, pre-operative photography and measurements fall through the cracks, and post-operative patients miss critical healing assessments — risking complications like exposure keratopathy and graft failure.",
    "workflows": [
      "Referral intake with OCR extraction of ophthalmology notes, clinical photography, and visual field results with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical slots based on procedure type, anesthesia requirements, and functional vs. cosmetic urgency classification",
      "Smart waitlist that fills OR cancellations within minutes via automated SMS and voice outreach to pre-authorized oculoplastic candidates",
      "Pre-treatment prep automation — pre-operative photography, visual field testing, medication holds, and functional necessity documentation with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, photography appointment confirmations, and post-operative cold compress and wound care instructions via SMS, voice, and portal",
      "Real-time post-operative healing monitoring with AI severity assessment and escalation for swelling abnormalities, infection signs, or graft concerns",
      "Post-treatment AI triage with 91% first-call resolution — addressing bruising timelines, suture care, activity restrictions, and vision change concerns",
      "Automated long-term follow-up surveillance for ptosis recurrence, lid position, and functional outcome tracking — zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "68%",
        "label": "Reduction in authorization denial rates for functional procedures"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-op healing concerns"
      },
      {
        "value": "2.5x",
        "label": "Faster referral-to-consultation scheduling"
      },
      {
        "value": "0",
        "label": "Patients lost to post-operative follow-up"
      }
    ],
    "challenges": [
      "Referrals arrive without clinical photography or visual field data, delaying surgical planning and insurance submissions",
      "Insurance denials for functional blepharoplasty and ptosis repair require extensive documentation that overwhelms staff",
      "Pre-operative photography sessions and measurements are missed, pushing back surgical dates by weeks",
      "Post-operative patients skip early healing checks, risking undetected infection or graft complications",
      "Cosmetic and functional case mix creates scheduling complexity that leads to OR underutilization",
      "Long-term ptosis recurrence and lid malposition go undetected when patients drift from follow-up schedules"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts clinical findings, photography references, and visual field data from oculoplastic referral packets using OCR. Verifies insurance coverage, flags functional necessity documentation gaps, and routes incomplete referrals for immediate follow-up."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal surgical slots based on procedure type, anesthesia needs, and clinical urgency. Manages a pre-authorized waitlist to instantly fill cancellations, maximizing OR utilization across functional and cosmetic case types."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Coordinates pre-operative photography appointments, medication hold reminders, and surgical prep instructions via SMS, voice, and portal. Delivers post-operative wound care and activity restriction guidance at clinically timed intervals."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative healing through patient-reported symptoms with AI severity assessment for swelling, bruising, and vision changes. Resolves 91% of concerns on first contact and automates long-term surveillance for recurrence and functional outcomes."
      }
    ]
  },
  {
    "slug": "ophthalmic-retina",
    "specialty": "Ophthalmic Retina",
    "tagline": "Orchestrate retinal care journeys from urgent referral to ongoing injection therapy with zero patients lost between visits.",
    "heroDescription": "Configural transforms retinal practices by managing the complete patient journey — from urgent referral triage with OCT imaging through injection scheduling optimization, treatment compliance tracking, and long-term vision preservation surveillance. Our AI agents ensure no patient misses a critical treatment window while maximizing clinic throughput for high-volume injection practices.",
    "description": "Retinal practices struggle with journey fragmentation at massive scale. Urgent referrals for retinal detachments compete with routine injection patients, OCT and imaging results arrive disconnected from referral packets, injection schedules slip as patients miss narrow treatment windows, and chronic patients silently disappear from anti-VEGF protocols — leading to irreversible vision loss.",
    "workflows": [
      "Referral intake with OCR extraction of OCT scans, fundus photography, and visual acuity data with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on injection protocol timing, disease acuity, and treatment-naive vs. maintenance status",
      "Smart waitlist that fills injection appointment cancellations within minutes via automated SMS and voice outreach to maintain treatment windows",
      "Pre-treatment prep automation — dilation scheduling, OCT imaging coordination, informed consent, and anti-VEGF protocol compliance confirmation",
      "Multi-channel patient engagement: injection reminders, dilation prep instructions, and post-injection monitoring guidance via SMS, voice, and portal",
      "Real-time post-injection monitoring with AI severity assessment and escalation for endophthalmitis symptoms, floaters, and acute vision changes",
      "Post-treatment AI triage with 91% first-call resolution — addressing post-injection discomfort, floater concerns, vision fluctuations, and emergency symptoms",
      "Automated anti-VEGF surveillance and treat-and-extend protocol management — zero patients lost to follow-up during ongoing injection therapy"
    ],
    "results": [
      {
        "value": "82%",
        "label": "Reduction in missed injection treatment windows"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-injection concerns"
      },
      {
        "value": "40%",
        "label": "Increase in daily injection clinic throughput"
      },
      {
        "value": "0",
        "label": "Patients lost to anti-VEGF follow-up protocols"
      }
    ],
    "challenges": [
      "Urgent retinal detachment referrals get buried among routine injection scheduling requests, delaying sight-saving interventions",
      "OCT and imaging results arrive separately from referral notes, forcing staff to manually reconstruct clinical pictures",
      "Patients on anti-VEGF protocols miss narrow injection windows, accelerating macular degeneration and diabetic retinopathy progression",
      "High-volume injection clinics suffer from cancellation cascades that waste costly medication and OR/clinic time",
      "Post-injection endophthalmitis symptoms go unreported because patients lack clear escalation guidance",
      "Chronic retinal patients silently drop from treat-and-extend protocols, resulting in preventable irreversible vision loss"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts OCT findings, visual acuity data, and diagnosis details from retinal referral packets using OCR. Triages urgent detachment cases from routine referrals, verifies insurance for injection therapies, and flags imaging gaps for immediate follow-up."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Optimizes injection scheduling across treat-and-extend protocols, matching patients to slots based on treatment timing, disease severity, and medication preparation requirements. Fills cancellations instantly to preserve treatment windows and minimize drug waste."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers injection appointment reminders, pre-dilation instructions, and post-injection monitoring guidance via SMS, voice, and portal. Tracks treatment compliance across multi-month anti-VEGF protocols and re-engages patients who miss scheduled windows."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-injection symptoms using patient-reported outcomes with AI severity scoring for endophthalmitis, retinal detachment signs, and vision changes. Achieves 91% first-call resolution and ensures zero patients are lost from ongoing treatment surveillance."
      }
    ]
  },
  {
    "slug": "orthopedic-sports-surgery",
    "specialty": "Orthopedic Sports Surgery",
    "tagline": "Accelerate return-to-play journeys from injury referral through surgical reconstruction and rehabilitation milestones.",
    "heroDescription": "Configural orchestrates orthopedic sports surgery patient journeys from acute injury referral through MRI-guided surgical planning, arthroscopic scheduling, and milestone-based rehabilitation tracking. Our AI agents coordinate the complex web of imaging, insurance authorization, physical therapy, and return-to-play protocols that define modern sports medicine.",
    "description": "Sports surgery practices lose critical time at every journey touchpoint. MRI referrals arrive without prior imaging for comparison, athletic patients demand rapid scheduling that conflicts with authorization timelines, post-operative rehabilitation compliance drops without active monitoring, and return-to-play decision-making suffers when milestone data is scattered across PT notes and clinic records.",
    "workflows": [
      "Referral intake with OCR extraction of MRI reports, injury mechanism details, and prior surgical history with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical slots based on injury acuity, sport season timing, and arthroscopic vs. open procedure requirements",
      "Smart waitlist that fills arthroscopic OR cancellations within minutes via automated SMS and voice outreach to pre-cleared athletes",
      "Pre-treatment prep automation — MRI review coordination, pre-operative physical therapy, medication holds, and surgical site preparation with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, pre-hab exercise instructions, and post-operative rehabilitation protocols via SMS, voice, and portal",
      "Real-time post-operative rehabilitation monitoring with AI severity assessment and escalation for excessive swelling, instability, or range-of-motion plateau",
      "Post-treatment AI triage with 91% first-call resolution — addressing swelling management, brace questions, weight-bearing progression, and complication red flags",
      "Automated return-to-play surveillance with milestone tracking and functional testing coordination — zero athletes lost to rehabilitation follow-up"
    ],
    "results": [
      {
        "value": "65%",
        "label": "Reduction in referral-to-surgery timeline"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-op rehab concerns"
      },
      {
        "value": "3.2x",
        "label": "Higher rehabilitation protocol compliance rate"
      },
      {
        "value": "0",
        "label": "Athletes lost to return-to-play follow-up"
      }
    ],
    "challenges": [
      "MRI referrals arrive without mechanism of injury details, forcing surgeons to request additional history before surgical planning",
      "Athletic season pressures demand rapid surgical scheduling that conflicts with insurance authorization timelines",
      "Post-operative rehabilitation compliance drops dramatically after week 6 when patients feel improved but remain at reinjury risk",
      "Arthroscopic OR cancellations waste valuable block time because backup candidates lack completed pre-operative workups",
      "Return-to-play data is fragmented across physical therapy notes, clinic visits, and functional testing results",
      "Young athletes transition between pediatric and adult protocols without coordinated handoff, creating care gaps"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts MRI findings, injury mechanism, sport and position details, and prior surgical history from referral packets using OCR. Verifies insurance coverage for arthroscopic and reconstructive procedures and flags missing imaging for rapid follow-up."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches athletes to optimal surgical slots based on injury severity, season timing, procedure type, and equipment needs. Maintains a pre-cleared waitlist to fill OR cancellations instantly, preserving surgical block utilization."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers pre-hab exercise protocols, surgical prep instructions, and post-operative rehabilitation milestones via SMS, voice, and portal. Tracks rehab compliance and re-engages athletes who fall behind on protocol milestones."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative recovery through patient-reported outcomes and rehabilitation milestones with AI severity assessment. Triages swelling, instability, and ROM concerns with 91% first-call resolution and coordinates return-to-play functional testing."
      }
    ]
  },
  {
    "slug": "neurotology",
    "specialty": "Neurotology",
    "tagline": "Navigate complex hearing and balance disorder journeys from audiometric referral to cochlear implant activation and beyond.",
    "heroDescription": "Configural transforms neurotology practices by orchestrating the entire patient journey — from referral with audiometric data through vestibular testing, surgical planning for cochlear implants or acoustic neuroma resection, and long-term hearing rehabilitation. Our AI agents coordinate the intricate audiologic, imaging, and surgical workflows unique to disorders of the ear and skull base.",
    "description": "Neurotology practices face unique journey disruptions where referrals arrive without complete audiometric data, vestibular testing bottlenecks delay diagnosis, cochlear implant candidates endure months-long authorization processes, and post-surgical patients miss critical device programming appointments — all leading to suboptimal hearing outcomes and patient attrition.",
    "workflows": [
      "Referral intake with OCR extraction of audiograms, ABR results, and imaging reports with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on vestibular symptom severity, cochlear implant candidacy status, and testing equipment availability",
      "Smart waitlist that fills surgical and testing cancellations within minutes via automated SMS and voice outreach to pre-authorized neurotology patients",
      "Pre-treatment prep automation — vestibular testing coordination, cochlear implant evaluation prerequisites, and pre-operative clearance with compliance confirmation",
      "Multi-channel patient engagement: testing prep reminders, surgical confirmations, and post-operative device care instructions via SMS, voice, and portal",
      "Real-time post-surgical hearing and balance monitoring with AI severity assessment and escalation for vertigo episodes, device malfunction, or facial nerve concerns",
      "Post-treatment AI triage with 91% first-call resolution — addressing dizziness episodes, hearing fluctuations, device troubleshooting, and wound care concerns",
      "Automated cochlear implant programming and hearing rehabilitation surveillance — zero patients lost to follow-up through activation and long-term audiologic care"
    ],
    "results": [
      {
        "value": "70%",
        "label": "Reduction in cochlear implant authorization timeline"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-op and device concerns"
      },
      {
        "value": "2.8x",
        "label": "Faster vestibular testing-to-diagnosis completion"
      },
      {
        "value": "0",
        "label": "Patients lost to cochlear implant programming follow-up"
      }
    ],
    "challenges": [
      "Referrals arrive without audiograms or ABR data, delaying cochlear implant candidacy evaluation by weeks",
      "Vestibular testing requires specialized equipment with limited availability, creating scheduling bottlenecks",
      "Cochlear implant insurance authorizations are among the most complex in otology, with high initial denial rates",
      "Post-surgical patients miss critical device activation and programming appointments, undermining hearing outcomes",
      "Balance disorder patients require multi-session vestibular rehabilitation coordination that falls apart without active tracking",
      "Acoustic neuroma surveillance patients disappear from annual MRI monitoring, risking undetected tumor growth"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts audiometric data, imaging findings, and vestibular symptom histories from neurotology referral packets using OCR. Verifies insurance for implant evaluations and skull base procedures, and flags missing audiologic testing for immediate coordination."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal appointment slots based on symptom severity, testing equipment availability, and surgical urgency. Manages waitlists for vestibular testing and OR time, filling cancellations to minimize diagnostic and surgical delays."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers vestibular testing prep instructions, surgical reminders, and cochlear implant device care guides via SMS, voice, and portal. Coordinates multi-appointment evaluation sequences and rehabilitation therapy scheduling."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-surgical recovery and device performance through patient-reported hearing and balance outcomes with AI severity scoring. Resolves 91% of concerns on first contact and ensures zero patients miss implant programming or tumor surveillance follow-up."
      }
    ]
  },
  {
    "slug": "pediatric-cardiology",
    "specialty": "Pediatric Cardiology",
    "tagline": "Protect young hearts from referral through intervention and lifelong cardiac surveillance with family-centered AI coordination.",
    "heroDescription": "Configural orchestrates pediatric cardiology journeys from the first murmur referral through echocardiographic evaluation, catheterization or surgical intervention, and long-term congenital heart disease surveillance. Our AI agents navigate the unique complexities of pediatric insurance, family-centered communication, and growth-adjusted monitoring protocols that define pediatric cardiac care.",
    "description": "Pediatric cardiology practices face critical journey gaps where newborn screening referrals compete with routine murmur evaluations, echocardiogram scheduling bottlenecks delay diagnosis, families struggle with complex pre-procedure preparations for anxious children, and adolescent patients transition out of care without structured adult cardiology handoffs — risking catastrophic outcomes for congenital heart disease patients.",
    "workflows": [
      "Referral intake with OCR extraction of newborn screening results, echocardiogram reports, and pediatrician notes with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on age-appropriate sedation needs, echocardiogram urgency, and catheterization lab availability",
      "Smart waitlist that fills echocardiogram and catheterization cancellations within minutes via automated SMS and voice outreach to pre-cleared families",
      "Pre-treatment prep automation — sedation protocols, NPO instructions for age group, medication adjustments, and child-friendly preparation with family compliance confirmation",
      "Multi-channel family engagement: appointment reminders, child preparation guides, and post-procedure monitoring instructions via SMS, voice, and portal",
      "Real-time post-procedure cardiac monitoring with AI severity assessment and escalation for arrhythmias, catheterization site complications, or hemodynamic changes",
      "Post-treatment AI triage with 91% first-call resolution — addressing feeding difficulties, activity restrictions, medication questions, and emergency cardiac symptoms",
      "Automated congenital heart disease surveillance and adolescent-to-adult transition coordination — zero patients lost to lifelong cardiac follow-up"
    ],
    "results": [
      {
        "value": "78%",
        "label": "Reduction in time from referral to echocardiographic diagnosis"
      },
      {
        "value": "91%",
        "label": "First-call resolution for family post-procedure concerns"
      },
      {
        "value": "95%",
        "label": "Sedation prep compliance with family-centered automation"
      },
      {
        "value": "0",
        "label": "Patients lost to congenital heart disease surveillance"
      }
    ],
    "challenges": [
      "Urgent newborn referrals get delayed when mixed with routine murmur evaluations due to undifferentiated referral intake",
      "Echocardiogram scheduling for infants requiring sedation creates complex coordination bottlenecks across cardiology and anesthesia",
      "Families fail to complete NPO and sedation prep instructions correctly, causing same-day cancellations for young children",
      "Post-catheterization families panic at normal bruising and swelling, overwhelming call lines with non-urgent concerns",
      "Congenital heart disease patients age out of pediatric care without structured transition to adult cardiology programs",
      "Growth-adjusted medication dosing changes are missed when patients skip interval cardiology follow-up appointments"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts newborn screening data, echocardiogram findings, and murmur characterizations from pediatric cardiology referral packets using OCR. Triages urgent congenital cases from routine evaluations, verifies pediatric insurance coverage, and flags incomplete diagnostic data."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches pediatric patients to optimal slots based on sedation requirements, age-specific protocols, and diagnostic urgency. Coordinates echocardiogram, catheterization lab, and anesthesia availability while maintaining a pre-cleared family waitlist for cancellation fills."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers age-appropriate preparation guides, NPO instructions, and sedation prep checklists to families via SMS, voice, and portal. Provides child-friendly preparation materials and post-procedure monitoring instructions tailored to developmental stage."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-procedure recovery through family-reported symptoms with AI severity scoring for cardiac and catheterization complications. Achieves 91% first-call resolution for anxious families and coordinates lifelong congenital heart disease surveillance with zero patients lost to follow-up."
      }
    ]
  },
  {
    "slug": "pediatric-ent",
    "specialty": "Pediatric ENT",
    "tagline": "Guide children from ENT referral through surgical treatment and recovery with family-centered journey orchestration.",
    "heroDescription": "Configural transforms pediatric ENT practices by managing the complete family journey — from referral for recurrent ear infections or sleep-disordered breathing through audiometric evaluation, tympanostomy or adenotonsillectomy scheduling, and post-operative recovery monitoring. Our AI agents handle the high-volume, family-centered workflows that define pediatric otolaryngology.",
    "description": "Pediatric ENT practices manage enormous patient volumes with complex family dynamics. Referrals flood in for ear tubes and tonsillectomies without supporting audiograms or sleep studies, surgical scheduling requires pediatric anesthesia coordination, anxious families generate high call volumes for normal post-operative symptoms, and children requiring speech or hearing follow-up drift from surveillance protocols.",
    "workflows": [
      "Referral intake with OCR extraction of audiograms, sleep study results, and pediatrician notes with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical slots based on child age, anesthesia requirements, procedure type, and school schedule considerations",
      "Smart waitlist that fills tympanostomy and adenotonsillectomy cancellations within minutes via automated SMS and voice outreach to pre-cleared families",
      "Pre-treatment prep automation — NPO instructions by age, medication holds, sleep study coordination, and child-friendly preparation with family compliance confirmation",
      "Multi-channel family engagement: surgical prep reminders, child preparation tips, and post-operative diet and activity instructions via SMS, voice, and portal",
      "Real-time post-operative recovery monitoring with AI severity assessment and escalation for bleeding, fever, dehydration, or airway concerns",
      "Post-treatment AI triage with 91% first-call resolution — addressing pain management, dietary progression, bleeding concerns, and return-to-school timing",
      "Automated hearing and speech development surveillance post-tube placement — zero children lost to audiologic follow-up"
    ],
    "results": [
      {
        "value": "72%",
        "label": "Reduction in same-day surgical cancellations from prep failures"
      },
      {
        "value": "91%",
        "label": "First-call resolution for family post-op concerns"
      },
      {
        "value": "4x",
        "label": "Higher audiologic follow-up compliance post-tubes"
      },
      {
        "value": "0",
        "label": "Children lost to hearing surveillance after tube placement"
      }
    ],
    "challenges": [
      "Referrals for ear tubes arrive without audiograms, requiring additional appointments that delay surgical evaluation by weeks",
      "Pediatric anesthesia coordination for young children creates scheduling complexity that leads to long surgical wait times",
      "Families fail to follow NPO instructions correctly for toddlers, causing preventable same-day surgical cancellations",
      "Post-tonsillectomy bleeding concerns generate overwhelming call volumes, most of which are normal healing",
      "Children with ear tubes miss critical post-operative audiograms that confirm hearing improvement and guide speech therapy",
      "Sleep-disordered breathing patients lack pre-operative sleep study documentation, stalling insurance authorization"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts audiometric data, sleep study results, and infection history from pediatric ENT referral packets using OCR. Verifies pediatric insurance coverage, flags missing audiograms or sleep studies, and triages urgent airway cases from routine referrals."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches children to optimal surgical slots based on age, anesthesia requirements, and procedure type. Coordinates with pediatric anesthesia availability and maintains a pre-cleared family waitlist to fill cancellations and maximize OR utilization."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers age-specific NPO instructions, child preparation guides, and post-operative care protocols to families via SMS, voice, and portal. Provides dietary progression timelines and pain management guidance calibrated to the child developmental stage."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative recovery through family-reported symptoms with AI severity scoring for bleeding, dehydration, and airway issues. Resolves 91% of family concerns on first contact and automates hearing surveillance scheduling to ensure zero children are lost to audiologic follow-up."
      }
    ]
  },
  {
    "slug": "pediatric-orthopedics",
    "specialty": "Pediatric Orthopedics",
    "tagline": "Coordinate growing bone and joint journeys from fracture referral through growth plate surveillance with family-first automation.",
    "heroDescription": "Configural orchestrates pediatric orthopedic journeys from acute fracture referral through casting, surgical intervention for complex deformities, and long-term growth plate monitoring. Our AI agents manage the unique demands of treating growing skeletons — coordinating imaging review, growth-adjusted treatment planning, family communication, and serial monitoring through skeletal maturity.",
    "description": "Pediatric orthopedic practices navigate the dual challenge of high-volume fracture care and complex deformity management. Referrals arrive with inadequate imaging, families struggle to maintain casting and bracing compliance, surgical planning must account for remaining growth, and adolescents undergoing scoliosis or limb deformity correction disappear from critical growth surveillance — risking progressive deformity and missed intervention windows.",
    "workflows": [
      "Referral intake with OCR extraction of radiographs, fracture details, and growth plate status with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on fracture acuity, growth plate involvement, surgical complexity, and pediatric anesthesia availability",
      "Smart waitlist that fills surgical and casting cancellations within minutes via automated SMS and voice outreach to pre-cleared families",
      "Pre-treatment prep automation — pre-operative imaging, growth assessment coordination, bracing compliance tracking, and NPO instructions with family compliance confirmation",
      "Multi-channel family engagement: appointment reminders, casting care guides, bracing wear-time instructions, and post-operative activity restrictions via SMS, voice, and portal",
      "Real-time post-treatment monitoring with AI severity assessment and escalation for compartment syndrome signs, cast complications, or hardware-related concerns",
      "Post-treatment AI triage with 91% first-call resolution — addressing cast care, swelling management, pain control, and activity restriction questions for families",
      "Automated growth plate surveillance and skeletal maturity monitoring — zero patients lost to follow-up through final growth assessment"
    ],
    "results": [
      {
        "value": "76%",
        "label": "Reduction in referral-to-treatment time for fractures"
      },
      {
        "value": "91%",
        "label": "First-call resolution for family post-treatment concerns"
      },
      {
        "value": "3.5x",
        "label": "Higher bracing compliance with automated tracking"
      },
      {
        "value": "0",
        "label": "Patients lost to growth plate surveillance follow-up"
      }
    ],
    "challenges": [
      "Fracture referrals arrive without adequate imaging or growth plate assessment, requiring repeat studies and delaying treatment",
      "Families struggle with casting care and bracing compliance, leading to treatment failures that require additional interventions",
      "Pediatric anesthesia availability constrains surgical scheduling for complex deformity corrections in young children",
      "Post-operative families generate high call volumes for normal swelling and cast discomfort, overwhelming clinic staff",
      "Scoliosis and limb deformity patients miss serial growth monitoring, allowing progressive deformity during growth spurts",
      "Adolescent patients transition out of pediatric care without coordinated handoff for ongoing skeletal concerns"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts fracture details, imaging findings, and growth plate status from pediatric orthopedic referral packets using OCR. Verifies insurance coverage, triages acute fractures from routine deformity referrals, and flags missing imaging for immediate follow-up."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches pediatric patients to optimal slots based on fracture urgency, growth considerations, and anesthesia availability. Maintains a pre-cleared family waitlist to fill cancellations for both surgical and casting appointments."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers casting care instructions, bracing wear-time reminders, and post-operative activity guides to families via SMS, voice, and portal. Tracks bracing compliance and sends growth milestone appointment reminders calibrated to skeletal age."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-treatment recovery through family-reported symptoms with AI severity scoring for compartment syndrome, cast complications, and growth disturbances. Achieves 91% first-call resolution and automates growth plate surveillance to ensure zero patients are lost to follow-up."
      }
    ]
  },
  {
    "slug": "pediatric-urology",
    "specialty": "Pediatric Urology",
    "tagline": "Guide pediatric urologic journeys from prenatal diagnosis through surgical correction and long-term renal surveillance.",
    "heroDescription": "Configural transforms pediatric urology practices by orchestrating patient journeys from prenatal hydronephrosis detection through postnatal evaluation, surgical correction, and long-term renal function monitoring. Our AI agents coordinate the sensitive family communication, age-specific surgical planning, and multi-year surveillance protocols that define pediatric urologic care.",
    "description": "Pediatric urology practices face unique journey challenges where prenatal diagnoses create anxious families before the child is born, neonatal evaluations have narrow timing windows, surgical procedures require complex pediatric anesthesia coordination, and multi-year post-operative surveillance for conditions like vesicoureteral reflux and hypospadias is lost when families move or change providers.",
    "workflows": [
      "Referral intake with OCR extraction of prenatal ultrasound findings, voiding cystourethrograms, and renal scan results with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on neonatal timing windows, surgical age requirements, and pediatric anesthesia coordination",
      "Smart waitlist that fills surgical cancellations within minutes via automated SMS and voice outreach to pre-cleared families awaiting urologic procedures",
      "Pre-treatment prep automation — renal imaging coordination, bowel prep for applicable procedures, NPO instructions by age, and antibiotic prophylaxis with family compliance confirmation",
      "Multi-channel family engagement: appointment reminders, surgical prep guides, catheter care instructions, and post-operative monitoring guidance via SMS, voice, and portal",
      "Real-time post-operative monitoring with AI severity assessment and escalation for urinary retention, infection signs, or surgical site complications",
      "Post-treatment AI triage with 91% first-call resolution — addressing catheter care, toilet training concerns, medication questions, and urinary symptom assessment",
      "Automated renal function surveillance and VUR resolution monitoring — zero patients lost to long-term urologic follow-up"
    ],
    "results": [
      {
        "value": "80%",
        "label": "Reduction in neonatal evaluation scheduling delays"
      },
      {
        "value": "91%",
        "label": "First-call resolution for family post-surgical concerns"
      },
      {
        "value": "2.5x",
        "label": "Higher compliance with renal surveillance protocols"
      },
      {
        "value": "0",
        "label": "Patients lost to long-term urologic surveillance"
      }
    ],
    "challenges": [
      "Prenatal referrals create anxious families who need immediate consultation scheduling even before the child is born",
      "Neonatal urologic evaluations have narrow timing windows that are missed when referral processing is delayed",
      "Complex insurance authorizations for pediatric surgical procedures create weeks-long delays",
      "Catheter and stent care instructions overwhelm families of very young children, increasing complication rates",
      "Vesicoureteral reflux patients require multi-year surveillance that families abandon after initial symptom improvement",
      "Hypospadias repair patients miss staged procedure follow-up, compromising long-term surgical outcomes"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts prenatal imaging findings, voiding study results, and renal function data from pediatric urology referral packets using OCR. Verifies insurance coverage, flags neonatal timing urgency, and coordinates prenatal consultation scheduling for anxious families."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches pediatric patients to optimal slots based on age-specific surgical windows, anesthesia requirements, and procedure staging needs. Maintains a pre-cleared family waitlist to fill surgical cancellations with minimal delay."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers age-appropriate surgical prep instructions, catheter care guides, and antibiotic prophylaxis reminders to families via SMS, voice, and portal. Provides sensitive communication for conditions like hypospadias and undescended testes."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-surgical recovery through family-reported symptoms with AI severity scoring for retention, infection, and surgical site concerns. Resolves 91% of family concerns on first contact and automates multi-year renal surveillance to ensure zero patients are lost to follow-up."
      }
    ]
  },
  {
    "slug": "peripheral-vascular-surgery",
    "specialty": "Peripheral Vascular Surgery",
    "tagline": "Orchestrate limb-saving vascular journeys from critical referral through revascularization and lifelong surveillance.",
    "heroDescription": "Configural transforms peripheral vascular surgery practices by managing the complete patient journey — from urgent limb ischemia referral through non-invasive vascular lab testing, revascularization surgery, and long-term graft surveillance. Our AI agents coordinate the time-sensitive workflows of vascular surgery where delays directly translate to limb loss and where ongoing surveillance prevents graft failure.",
    "description": "Peripheral vascular surgery practices face life-and-limb stakes at every journey stage. Critical limb ischemia referrals get delayed by incomplete vascular studies, surgical scheduling conflicts with wound care coordination, post-operative graft surveillance requires lifelong compliance, and patients with peripheral arterial disease silently progress to critical ischemia when they fall out of monitoring protocols.",
    "workflows": [
      "Referral intake with OCR extraction of ankle-brachial indices, duplex ultrasound results, and angiography findings with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on limb ischemia severity, wound status, vascular lab availability, and OR requirements",
      "Smart waitlist that fills vascular surgery cancellations within minutes via automated SMS and voice outreach to pre-cleared candidates with current vascular studies",
      "Pre-treatment prep automation — vascular lab coordination, cardiac risk stratification, anticoagulation bridging, and wound care optimization with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, wound care instructions, and post-operative graft monitoring guidance via SMS, voice, and portal",
      "Real-time post-operative graft monitoring with AI severity assessment and escalation for graft thrombosis symptoms, wound dehiscence, or new ischemic signs",
      "Post-treatment AI triage with 91% first-call resolution — addressing wound care, anticoagulation concerns, activity progression, and circulation symptom assessment",
      "Automated lifelong graft surveillance and PAD progression monitoring — zero patients lost to vascular follow-up"
    ],
    "results": [
      {
        "value": "71%",
        "label": "Reduction in time from critical limb ischemia referral to intervention"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-operative vascular concerns"
      },
      {
        "value": "85%",
        "label": "Graft surveillance compliance with automated scheduling"
      },
      {
        "value": "0",
        "label": "Patients lost to lifelong graft surveillance follow-up"
      }
    ],
    "challenges": [
      "Critical limb ischemia referrals arrive without current vascular studies, delaying life-saving revascularization decisions",
      "Cardiac risk stratification requirements for vascular surgery patients create pre-operative bottlenecks",
      "Anticoagulation bridging for surgical patients is complex and errors lead to hemorrhagic or thrombotic complications",
      "Post-operative wound care coordination between vascular surgery and wound care teams falls through the cracks",
      "Graft surveillance requires lifelong duplex ultrasound monitoring that patients abandon after feeling improved",
      "PAD patients with claudication silently progress to critical ischemia when they miss vascular lab follow-up appointments"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts vascular study results, wound assessments, and ischemia severity classifications from peripheral vascular referral packets using OCR. Triages critical limb ischemia from claudication referrals, verifies insurance, and flags missing vascular lab data for urgent completion."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal slots based on ischemia severity, wound status, and vascular lab availability. Coordinates OR scheduling with cardiac clearance timelines and maintains a pre-cleared waitlist to fill cancellations for time-sensitive revascularizations."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers anticoagulation management instructions, wound care protocols, and post-operative activity progression guides via SMS, voice, and portal. Coordinates multi-provider wound care appointments and graft surveillance scheduling."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative graft function and wound healing through patient-reported symptoms with AI severity scoring for thrombosis, infection, and new ischemia. Achieves 91% first-call resolution and automates lifelong graft surveillance to ensure zero patients are lost to follow-up."
      }
    ]
  },
  {
    "slug": "plastic-reconstructive-surgery",
    "specialty": "Plastic & Reconstructive Surgery",
    "tagline": "Coordinate reconstructive and aesthetic journeys from consultation through staged procedures and long-term outcome tracking.",
    "heroDescription": "Configural orchestrates plastic and reconstructive surgery journeys from initial consultation through complex multi-stage procedures, insurance navigation for reconstructive cases, and long-term aesthetic and functional outcome surveillance. Our AI agents manage the distinct workflows of reconstructive necessity and aesthetic elective cases while ensuring consistent patient engagement and outcome tracking.",
    "description": "Plastic and reconstructive surgery practices navigate a dual-track challenge where reconstructive cases require extensive insurance documentation while aesthetic cases demand premium patient experience. Referrals for post-cancer reconstruction arrive incomplete, staged procedures lose patients between stages, pre-operative preparation varies dramatically by procedure, and outcome tracking — essential for both clinical and patient satisfaction purposes — rarely happens systematically.",
    "workflows": [
      "Referral intake with OCR extraction of surgical pathology, oncologic notes, and clinical photography with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical slots based on reconstruction staging, flap procedure complexity, and coordination with oncologic treatment timelines",
      "Smart waitlist that fills OR cancellations within minutes via automated SMS and voice outreach to pre-cleared reconstructive and aesthetic candidates",
      "Pre-treatment prep automation — clinical photography, lab coordination, compression garment sizing, and procedure-specific prep instructions with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, compression and drain care instructions, and staged procedure timeline updates via SMS, voice, and portal",
      "Real-time post-operative monitoring with AI severity assessment and escalation for flap compromise, hematoma, infection, or wound healing complications",
      "Post-treatment AI triage with 91% first-call resolution — addressing drain management, swelling timelines, activity restrictions, and surgical site concern assessment",
      "Automated staged procedure coordination and long-term outcome surveillance — zero patients lost between reconstruction stages or aesthetic follow-up"
    ],
    "results": [
      {
        "value": "66%",
        "label": "Reduction in insurance denial rates for reconstructive cases"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical concerns"
      },
      {
        "value": "98%",
        "label": "Staged procedure completion rate with automated coordination"
      },
      {
        "value": "0",
        "label": "Patients lost between reconstruction stages"
      }
    ],
    "challenges": [
      "Post-mastectomy reconstruction referrals arrive without complete oncologic staging, delaying surgical planning coordination",
      "Insurance documentation for reconstructive necessity is extensive and denials are common without thorough initial submission",
      "Patients undergoing staged reconstruction drop out between stages due to scheduling complexity and fatigue",
      "Post-operative drain management and compression compliance issues generate high call volumes",
      "Flap procedures require immediate post-operative monitoring that is difficult to maintain after discharge",
      "Long-term aesthetic and functional outcome tracking is inconsistent, limiting quality improvement and patient satisfaction data"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts pathology reports, oncologic treatment timelines, and clinical photography from reconstructive referral packets using OCR. Verifies insurance coverage, compiles reconstructive necessity documentation, and coordinates timing with oncologic treatment schedules."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal surgical slots based on reconstruction staging, flap complexity, and oncologic timeline coordination. Manages multi-stage procedure scheduling and maintains a pre-cleared waitlist to fill OR cancellations across case types."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers procedure-specific prep instructions, drain care guides, and compression garment reminders via SMS, voice, and portal. Maintains staged procedure timelines and re-engages patients approaching their next reconstruction stage."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative healing through patient-reported symptoms and clinical photography with AI severity scoring for flap viability, hematoma, and wound complications. Resolves 91% of concerns on first contact and ensures zero patients are lost between staged procedures."
      }
    ]
  },
  {
    "slug": "rhinology-skull-base-surgery",
    "specialty": "Rhinology & Skull Base Surgery",
    "tagline": "Navigate complex sinus and skull base journeys from CT-guided referral through endoscopic surgery and mucosal healing surveillance.",
    "heroDescription": "Configural transforms rhinology and skull base surgery practices by managing the complete patient journey — from referral with CT imaging through endoscopic surgical planning, complex skull base tumor coordination with neurosurgery, and post-operative mucosal healing and sinus surveillance. Our AI agents orchestrate the multi-disciplinary workflows and long-term monitoring unique to advanced rhinologic care.",
    "description": "Rhinology and skull base practices manage a spectrum from chronic sinusitis to life-threatening skull base tumors. CT scans arrive without proper sinus protocol formatting, multi-disciplinary skull base cases require complex scheduling across surgical teams, post-operative debridement compliance determines surgical outcomes, and patients on biologic therapies for chronic rhinosinusitis need ongoing monitoring that falls apart without systematic follow-up.",
    "workflows": [
      "Referral intake with OCR extraction of sinus CT reports, endoscopy findings, and allergy testing results with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on disease severity, skull base tumor urgency, multi-disciplinary team availability, and endoscopic suite requirements",
      "Smart waitlist that fills endoscopic surgery cancellations within minutes via automated SMS and voice outreach to pre-cleared sinus and skull base candidates",
      "Pre-treatment prep automation — sinus CT protocol coordination, pre-operative steroid courses, nasal irrigations, and multi-team surgical planning with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, irrigation technique instructions, and post-operative debridement scheduling via SMS, voice, and portal",
      "Real-time post-operative sinus and skull base monitoring with AI severity assessment and escalation for CSF leak, epistaxis, or orbital complications",
      "Post-treatment AI triage with 91% first-call resolution — addressing nasal congestion, bleeding concerns, irrigation questions, and crusting management",
      "Automated mucosal healing surveillance and biologic therapy monitoring — zero patients lost to rhinologic follow-up"
    ],
    "results": [
      {
        "value": "73%",
        "label": "Reduction in skull base case coordination time"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-endoscopic surgery concerns"
      },
      {
        "value": "3x",
        "label": "Higher post-operative debridement compliance"
      },
      {
        "value": "0",
        "label": "Patients lost to sinus surveillance follow-up"
      }
    ],
    "challenges": [
      "Sinus CT scans arrive in non-standard protocols that lack the coronal and sagittal reformats surgeons need for planning",
      "Skull base tumor cases require multi-disciplinary scheduling across rhinology, neurosurgery, and radiation oncology",
      "Post-operative debridement compliance is critical for endoscopic outcomes but patients avoid uncomfortable cleaning visits",
      "Biologic therapy patients on dupilumab or omalizumab need ongoing monitoring that is lost without systematic tracking",
      "CSF leak symptoms after skull base surgery are subtle and patients delay reporting, risking meningitis",
      "Chronic rhinosinusitis patients cycle between medical and surgical management without coordinated longitudinal tracking"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts sinus CT findings, endoscopy results, and allergy testing data from rhinology referral packets using OCR. Flags skull base tumor cases for multi-disciplinary coordination, verifies insurance, and identifies missing sinus-protocol imaging."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal slots based on disease severity, skull base team availability, and endoscopic suite requirements. Coordinates multi-disciplinary surgical scheduling and maintains a pre-cleared waitlist to fill cancellations."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers pre-operative steroid and irrigation protocols, surgical prep reminders, and post-operative debridement scheduling via SMS, voice, and portal. Tracks biologic therapy compliance and nasal irrigation adherence."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative mucosal healing and skull base recovery through patient-reported symptoms with AI severity scoring for CSF leak, bleeding, and orbital complications. Resolves 91% of concerns on first contact and ensures zero patients are lost to long-term sinus surveillance."
      }
    ]
  },
  {
    "slug": "robotic-urology",
    "specialty": "Robotic Urology",
    "tagline": "Streamline robotic urologic surgery journeys from diagnosis through minimally invasive intervention and oncologic surveillance.",
    "heroDescription": "Configural orchestrates robotic urology patient journeys from cancer diagnosis referral through robotic-assisted surgical planning, OR scheduling optimization, and long-term oncologic and functional surveillance. Our AI agents manage the complex workflows of high-volume robotic surgery programs — from maximizing robotic OR utilization to tracking PSA surveillance and continence recovery milestones.",
    "description": "Robotic urology practices face journey gaps at the intersection of oncologic urgency and surgical technology constraints. Prostate cancer referrals arrive without complete staging, robotic OR block time is wasted when patients lack pre-operative clearance, post-prostatectomy patients struggle with catheter management and continence recovery, and PSA surveillance patients silently disappear from cancer monitoring protocols.",
    "workflows": [
      "Referral intake with OCR extraction of biopsy pathology, PSA trends, and staging imaging with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal robotic OR slots based on oncologic urgency, Gleason score, robot availability, and surgeon case load",
      "Smart waitlist that fills robotic OR cancellations within minutes via automated SMS and voice outreach to pre-cleared surgical candidates",
      "Pre-treatment prep automation — bowel prep, pre-operative labs, cardiac clearance, and robotic surgery-specific patient education with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, catheter care instructions, and continence recovery exercise guides via SMS, voice, and portal",
      "Real-time post-operative monitoring with AI severity assessment and escalation for urinary retention, anastomotic leak, or port-site complications",
      "Post-treatment AI triage with 91% first-call resolution — addressing catheter management, continence concerns, erectile function questions, and wound care",
      "Automated PSA surveillance and oncologic follow-up coordination — zero patients lost to post-prostatectomy cancer monitoring"
    ],
    "results": [
      {
        "value": "88%",
        "label": "Robotic OR utilization with AI-driven scheduling"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-robotic surgery concerns"
      },
      {
        "value": "67%",
        "label": "Reduction in referral-to-surgery timeline"
      },
      {
        "value": "0",
        "label": "Patients lost to PSA surveillance follow-up"
      }
    ],
    "challenges": [
      "Prostate cancer referrals arrive without complete Gleason scoring, staging MRI, or bone scan data, delaying treatment planning",
      "Robotic OR block time is the most expensive resource in urology and cancellations from incomplete pre-op workups waste capacity",
      "Post-prostatectomy catheter management generates high anxiety and call volumes from patients unfamiliar with home catheter care",
      "Continence recovery milestones are poorly tracked, leaving patients without guidance during the critical 3-12 month window",
      "PSA surveillance after radical prostatectomy requires lifelong monitoring that patients abandon after initial undetectable results",
      "Erectile function recovery counseling and treatment coordination falls outside standard surgical follow-up workflows"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts biopsy pathology, PSA levels, Gleason scores, and staging imaging from robotic urology referral packets using OCR. Verifies insurance for robotic procedures, flags incomplete staging, and prioritizes cases by oncologic urgency."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Maximizes robotic OR utilization by matching patients to slots based on oncologic urgency, procedure complexity, and robot availability. Maintains a pre-cleared waitlist to instantly fill cancellations, protecting high-value robotic block time."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers bowel prep instructions, robotic surgery education, and post-operative catheter care guides via SMS, voice, and portal. Tracks continence recovery milestones and provides pelvic floor exercise reminders throughout the recovery timeline."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative recovery through patient-reported symptoms with AI severity scoring for retention, leak, and infection. Resolves 91% of catheter and continence concerns on first contact and automates lifelong PSA surveillance to ensure zero patients are lost to oncologic follow-up."
      }
    ]
  },
  {
    "slug": "shoulder-elbow-surgery",
    "specialty": "Shoulder & Elbow Surgery",
    "tagline": "Coordinate upper extremity surgical journeys from imaging referral through arthroplasty and rehabilitation milestones.",
    "heroDescription": "Configural transforms shoulder and elbow surgery practices by managing the complete patient journey — from referral with MRI and X-ray through surgical planning for rotator cuff repair, arthroplasty, or fracture fixation, and long-term rehabilitation milestone tracking. Our AI agents coordinate imaging review, implant authorization, post-operative therapy protocols, and range-of-motion surveillance unique to upper extremity surgery.",
    "description": "Shoulder and elbow surgery practices face journey gaps where MRI referrals arrive without correlating physical exam findings, shoulder arthroplasty authorizations are lengthy and documentation-heavy, post-operative rehabilitation compliance determines functional outcomes, and patients undergoing reverse total shoulder or complex elbow reconstruction miss critical therapy windows that compromise long-term function.",
    "workflows": [
      "Referral intake with OCR extraction of MRI reports, X-rays, and physical exam findings with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal surgical slots based on procedure type, implant availability, rotator cuff tear size, and fracture acuity",
      "Smart waitlist that fills shoulder and elbow surgery cancellations within minutes via automated SMS and voice outreach to pre-cleared candidates",
      "Pre-treatment prep automation — advanced imaging coordination, implant sizing, pre-operative therapy, and sling/immobilizer preparation with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, sling wear instructions, and post-operative exercise progression guides via SMS, voice, and portal",
      "Real-time post-operative range-of-motion monitoring with AI severity assessment and escalation for stiffness, nerve symptoms, or implant concerns",
      "Post-treatment AI triage with 91% first-call resolution — addressing sling management, pain control, exercise progression, and therapy milestone questions",
      "Automated rehabilitation milestone tracking and long-term implant surveillance — zero patients lost to shoulder or elbow surgery follow-up"
    ],
    "results": [
      {
        "value": "69%",
        "label": "Reduction in arthroplasty authorization delays"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-surgical rehab concerns"
      },
      {
        "value": "3x",
        "label": "Higher therapy protocol compliance with milestone tracking"
      },
      {
        "value": "0",
        "label": "Patients lost to implant surveillance follow-up"
      }
    ],
    "challenges": [
      "MRI referrals arrive without physical exam findings, making it impossible to correlate imaging with clinical presentation",
      "Shoulder arthroplasty insurance authorizations require extensive documentation including failed conservative treatment proof",
      "Post-rotator cuff repair patients fail to comply with sling immobilization and early motion restrictions, risking re-tear",
      "Therapy milestone tracking is fragmented between surgeon and physical therapist notes, obscuring recovery trajectory",
      "Reverse total shoulder patients require specific rehabilitation protocols that differ from standard arthroplasty and are often confused",
      "Complex elbow reconstruction patients miss critical early motion windows, leading to contracture and permanent stiffness"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts MRI findings, X-ray assessments, and physical exam data from shoulder and elbow referral packets using OCR. Verifies insurance for arthroplasty and reconstruction procedures, flags missing imaging, and documents failed conservative treatment history."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal surgical slots based on procedure type, implant availability, and clinical urgency. Coordinates with implant vendors for sizing and maintains a pre-cleared waitlist to fill cancellations for both arthroplasty and arthroscopic cases."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers procedure-specific immobilization instructions, exercise progression protocols, and therapy scheduling reminders via SMS, voice, and portal. Differentiates between rotator cuff, arthroplasty, and fracture rehabilitation pathways for accurate patient guidance."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative recovery through patient-reported range-of-motion and pain scores with AI severity assessment for stiffness, nerve injury, and implant complications. Resolves 91% of concerns on first contact and ensures zero patients are lost to rehabilitation and implant surveillance."
      }
    ]
  },
  {
    "slug": "thoracic-surgery",
    "specialty": "Thoracic Surgery",
    "tagline": "Accelerate lung and chest surgery journeys from nodule detection through thoracoscopic intervention and oncologic surveillance.",
    "heroDescription": "Configural orchestrates thoracic surgery patient journeys from lung nodule referral through pulmonary function testing, minimally invasive thoracoscopic surgery, and long-term oncologic or post-surgical surveillance. Our AI agents manage the time-sensitive workflows of thoracic oncology, coordinate multi-disciplinary tumor boards, and ensure no patient falls through the cracks between nodule detection and definitive treatment.",
    "description": "Thoracic surgery practices face critical journey failures where lung nodules detected on incidental CT scans are lost to follow-up, pulmonary function testing bottlenecks delay surgical clearance, multi-disciplinary tumor board coordination is manual and error-prone, and post-lobectomy patients miss surveillance imaging that detects recurrence at treatable stages.",
    "workflows": [
      "Referral intake with OCR extraction of CT chest reports, PET scan results, and biopsy pathology with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on lung nodule growth rate, oncologic staging, PFT requirements, and VATS vs. thoracotomy approach",
      "Smart waitlist that fills thoracic surgery cancellations within minutes via automated SMS and voice outreach to pre-cleared candidates with current PFTs",
      "Pre-treatment prep automation — pulmonary function testing, cardiac clearance, smoking cessation coordination, and incentive spirometry training with compliance confirmation",
      "Multi-channel patient engagement: surgical prep reminders, breathing exercise instructions, and post-operative chest tube and pain management guidance via SMS, voice, and portal",
      "Real-time post-operative pulmonary monitoring with AI severity assessment and escalation for air leak, pneumothorax, or respiratory decompensation",
      "Post-treatment AI triage with 91% first-call resolution — addressing chest tube concerns, pain management, breathing difficulty, and activity progression questions",
      "Automated oncologic surveillance and nodule tracking coordination — zero patients lost to post-thoracic surgery follow-up"
    ],
    "results": [
      {
        "value": "77%",
        "label": "Reduction in nodule-to-treatment time for lung cancer"
      },
      {
        "value": "91%",
        "label": "First-call resolution for post-thoracic surgery concerns"
      },
      {
        "value": "2x",
        "label": "Faster PFT and surgical clearance completion"
      },
      {
        "value": "0",
        "label": "Patients lost to oncologic surveillance follow-up"
      }
    ],
    "challenges": [
      "Incidentally detected lung nodules are referred but lost to follow-up when tracking relies on manual processes",
      "Pulmonary function testing availability creates bottlenecks that delay surgical clearance for weeks",
      "Multi-disciplinary tumor board scheduling across thoracic surgery, oncology, and radiation is manual and error-prone",
      "Post-lobectomy patients struggle with chest tube management and pain control, generating high call volumes",
      "Smoking cessation before thoracic surgery is critical but rarely coordinated systematically within surgical practices",
      "Surveillance CT imaging for lung cancer recurrence requires lifelong compliance that patients abandon after year two"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts CT chest findings, PET results, and biopsy pathology from thoracic surgery referral packets using OCR. Triages urgent malignancies from stable nodules, verifies insurance, and flags missing staging studies for immediate coordination."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal slots based on oncologic urgency, PFT clearance status, and surgical approach. Coordinates tumor board scheduling and maintains a pre-cleared waitlist to fill thoracic OR cancellations with minimal delay."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers incentive spirometry training, smoking cessation resources, and surgical prep instructions via SMS, voice, and portal. Provides post-operative chest tube care guides and pain management protocols tailored to VATS vs. open thoracotomy recovery."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors post-operative pulmonary recovery through patient-reported symptoms with AI severity scoring for air leak, pneumothorax, and respiratory distress. Resolves 91% of concerns on first contact and automates lifelong oncologic surveillance to ensure zero patients are lost to follow-up."
      }
    ]
  },
  {
    "slug": "vascular-access-wound-care",
    "specialty": "Vascular Access & Wound Care",
    "tagline": "Coordinate chronic wound and vascular access journeys from referral through healing milestones with zero patients lost to follow-up.",
    "heroDescription": "Configural transforms vascular access and wound care practices by orchestrating patient journeys from referral through access creation or wound assessment, multi-visit treatment protocols, and healing milestone surveillance. Our AI agents manage the high-frequency visit scheduling, wound measurement tracking, and insurance documentation demands that define comprehensive wound care programs.",
    "description": "Vascular access and wound care practices manage chronically ill patients who require sustained engagement across dozens of visits. Referrals arrive without wound measurements or vascular access history, insurance reauthorization is needed for ongoing treatments, wound healing stalls when patients miss visits, and dialysis access maturation monitoring falls apart when patients transfer between facilities.",
    "workflows": [
      "Referral intake with OCR extraction of wound measurements, vascular access history, and comorbidity data with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on wound severity, access maturation status, treatment frequency requirements, and hyperbaric chamber availability",
      "Smart waitlist that fills wound care and vascular access cancellations within minutes via automated SMS and voice outreach to patients due for treatment",
      "Pre-treatment prep automation — wound photography coordination, compression supply verification, lab draws, and treatment-specific preparation with compliance confirmation",
      "Multi-channel patient engagement: visit reminders, wound care at-home instructions, and compression therapy compliance guidance via SMS, voice, and portal",
      "Real-time wound healing monitoring with AI severity assessment and escalation for infection signs, wound deterioration, or access complications",
      "Post-treatment AI triage with 91% first-call resolution — addressing wound care between visits, compression issues, access site concerns, and infection symptom assessment",
      "Automated wound healing milestone tracking and vascular access maturation surveillance — zero patients lost to follow-up"
    ],
    "results": [
      {
        "value": "58%",
        "label": "Improvement in wound healing rates with visit compliance"
      },
      {
        "value": "91%",
        "label": "First-call resolution for between-visit wound concerns"
      },
      {
        "value": "3x",
        "label": "Faster insurance reauthorization for ongoing wound care"
      },
      {
        "value": "0",
        "label": "Patients lost to wound care or access surveillance"
      }
    ],
    "challenges": [
      "Wound care referrals arrive without standardized wound measurements or photographs, delaying baseline assessment",
      "Multi-visit wound care protocols require repeated insurance reauthorization that disrupts treatment continuity",
      "Chronic wound patients miss visits due to transportation barriers and comorbidity complications, stalling healing",
      "Dialysis access maturation monitoring falls apart when patients transfer between vascular and dialysis facilities",
      "Home wound care compliance between visits is poor without structured education and follow-up",
      "Hyperbaric oxygen therapy scheduling requires coordination with wound care visits that overwhelms manual scheduling"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts wound measurements, vascular access history, and comorbidity data from wound care referral packets using OCR. Verifies insurance for multi-visit treatment protocols, flags missing wound photography, and coordinates baseline assessment scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal slots based on wound severity, treatment frequency, and resource availability including hyperbaric chambers. Manages high-frequency visit scheduling and fills cancellations to maintain healing momentum."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers between-visit wound care instructions, compression therapy reminders, and supply management guidance via SMS, voice, and portal. Tracks treatment compliance across multi-week protocols and coordinates transportation assistance for mobility-limited patients."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors wound healing trajectory through patient-reported symptoms and wound photography with AI severity scoring for infection, deterioration, and access complications. Resolves 91% of concerns on first contact and ensures zero patients are lost to healing surveillance."
      }
    ]
  },
  {
    "slug": "clinical-nutrition-dietetics",
    "specialty": "Clinical Nutrition & Dietetics",
    "tagline": "Orchestrate nutrition therapy journeys from referral assessment through dietary intervention and metabolic outcome tracking.",
    "heroDescription": "Configural transforms clinical nutrition and dietetics practices by managing the complete patient journey — from physician referral with lab data through nutritional assessment, meal plan customization, and long-term metabolic outcome surveillance. Our AI agents coordinate lab review, insurance documentation for medical nutrition therapy, dietary compliance tracking, and outcome monitoring that drives sustained health improvement.",
    "description": "Clinical nutrition practices face journey fragmentation where referrals arrive without current lab work, insurance coverage for medical nutrition therapy varies dramatically, patients disengage between visits when dietary changes feel overwhelming, and metabolic outcome tracking relies on sporadic lab draws rather than systematic surveillance — making it impossible to demonstrate intervention effectiveness.",
    "workflows": [
      "Referral intake with OCR extraction of lab results, diagnosis codes, and dietary history with patient matching and insurance verification for medical nutrition therapy in under 3 minutes",
      "AI-driven scheduling matching patients to optimal consultation slots based on metabolic urgency, diagnosis complexity, and dietitian specialization",
      "Smart waitlist that fills nutrition consultation cancellations within minutes via automated SMS and voice outreach to patients awaiting dietary intervention",
      "Pre-treatment prep automation — food diary completion, current medication list, lab draw coordination, and dietary history questionnaire with compliance confirmation",
      "Multi-channel patient engagement: appointment reminders, meal planning resources, and dietary adherence check-ins via SMS, voice, and portal",
      "Real-time dietary compliance monitoring with AI severity assessment and escalation for dangerous nutritional deficiencies or metabolic deterioration",
      "Post-treatment AI triage with 91% first-call resolution — addressing meal planning questions, supplement guidance, food interaction concerns, and symptom management",
      "Automated metabolic outcome surveillance with lab tracking and dietary plan adjustment coordination — zero patients lost to nutrition therapy follow-up"
    ],
    "results": [
      {
        "value": "64%",
        "label": "Improvement in dietary adherence with automated engagement"
      },
      {
        "value": "91%",
        "label": "First-call resolution for nutrition therapy questions"
      },
      {
        "value": "2.5x",
        "label": "Higher medical nutrition therapy session completion rate"
      },
      {
        "value": "0",
        "label": "Patients lost to metabolic outcome surveillance"
      }
    ],
    "challenges": [
      "Referrals arrive without current A1C, lipid panels, or metabolic panels, requiring additional lab visits before assessment",
      "Medical nutrition therapy insurance coverage varies by state and diagnosis, creating authorization complexity for every patient",
      "Patients disengage between nutrition sessions when dietary changes feel overwhelming without ongoing support",
      "Food diary completion rates are low, limiting the effectiveness of subsequent nutrition consultations",
      "Metabolic outcome tracking depends on sporadic lab draws that patients skip, making intervention impact unmeasurable",
      "Complex medical nutrition cases involving enteral feeding, TPN, or eating disorders require multi-provider coordination that fragments care"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts lab results, diagnosis codes, medication lists, and dietary history from nutrition referral packets using OCR. Verifies medical nutrition therapy insurance coverage by diagnosis and state, and flags missing lab work for pre-consultation completion."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to dietitians based on condition specialty, metabolic urgency, and session type. Manages multi-session MNT scheduling within insurance-covered visit limits and fills cancellations to maximize provider productivity."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers food diary reminders, meal planning resources, and dietary adherence check-ins via SMS, voice, and portal. Tracks between-session compliance and provides recipe suggestions and educational content tailored to the patient dietary plan."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors metabolic markers and dietary compliance through patient-reported data with AI severity scoring for nutritional deficiencies and metabolic decompensation. Resolves 91% of nutrition questions on first contact and automates lab surveillance to ensure zero patients are lost to outcome tracking."
      }
    ]
  },
  {
    "slug": "corporate-wellness-medicine",
    "specialty": "Corporate Wellness Medicine",
    "tagline": "Scale employee wellness journeys from health risk assessment through intervention programs and population health outcomes.",
    "heroDescription": "Configural orchestrates corporate wellness programs by managing employee health journeys at scale — from biometric screening enrollment through risk stratification, targeted intervention programs, and population-level outcome tracking. Our AI agents coordinate the complex logistics of multi-site wellness programs, individual health coaching engagement, and aggregate reporting that demonstrates ROI to corporate clients.",
    "description": "Corporate wellness practices struggle with scale and engagement challenges. Employee enrollment in biometric screenings is inconsistent, health risk assessment data sits unused without systematic intervention routing, individual coaching sessions suffer from high no-show rates, and demonstrating measurable health outcomes to corporate clients requires population-level analytics that manual tracking cannot support.",
    "workflows": [
      "Referral intake with OCR extraction of biometric screening results, health risk assessments, and employer benefit data with employee matching and eligibility verification in under 3 minutes",
      "AI-driven scheduling matching employees to optimal wellness slots based on risk stratification, intervention urgency, site location, and coach specialization",
      "Smart waitlist that fills wellness coaching and screening cancellations within minutes via automated SMS and voice outreach to enrolled employees",
      "Pre-treatment prep automation — biometric screening preparation, health questionnaire completion, fasting requirements, and wellness program enrollment with compliance confirmation",
      "Multi-channel employee engagement: screening reminders, wellness challenge updates, and coaching session confirmations via SMS, voice, and portal",
      "Real-time health risk monitoring with AI severity assessment and escalation for critical biometric findings requiring immediate clinical referral",
      "Post-treatment AI triage with 91% first-call resolution — addressing wellness program questions, nutrition guidance, fitness concerns, and clinical referral coordination",
      "Automated population health outcome tracking and annual wellness cycle management — zero employees lost to wellness program follow-up"
    ],
    "results": [
      {
        "value": "85%",
        "label": "Employee biometric screening completion rate"
      },
      {
        "value": "91%",
        "label": "First-call resolution for wellness program questions"
      },
      {
        "value": "3x",
        "label": "Higher coaching session attendance with AI engagement"
      },
      {
        "value": "0",
        "label": "Employees lost to wellness program follow-up cycles"
      }
    ],
    "challenges": [
      "Multi-site biometric screening enrollment is logistically complex and completion rates drop without persistent outreach",
      "Health risk assessment data is collected but rarely translated into targeted intervention routing for high-risk employees",
      "Wellness coaching sessions have high no-show rates because employees lack ongoing engagement between sessions",
      "Corporate clients demand ROI data that requires population-level analytics manual tracking cannot provide",
      "Employees at highest health risk are least likely to engage with voluntary wellness programs without tailored outreach",
      "Annual wellness program cycles lose momentum between enrollment periods, resetting engagement progress"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts biometric screening results, health risk assessment scores, and employer benefit details using OCR. Verifies employee eligibility, risk-stratifies populations, and routes high-risk individuals to targeted intervention programs automatically."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches employees to optimal wellness appointment slots based on risk level, site location, and coach specialization. Manages multi-site screening logistics and fills coaching cancellations to maximize program capacity and engagement."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers screening reminders, wellness challenge updates, and coaching session confirmations via SMS, voice, and portal. Maintains year-round engagement between program cycles and targets high-risk employees with tailored outreach."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors biometric trends and program compliance with AI severity scoring for critical health findings requiring clinical escalation. Resolves 91% of wellness questions on first contact and generates population health outcome reports for corporate clients."
      }
    ]
  },
  {
    "slug": "functional-medicine",
    "specialty": "Functional Medicine",
    "tagline": "Orchestrate root-cause investigation journeys from comprehensive intake through advanced testing and personalized protocol tracking.",
    "heroDescription": "Configural transforms functional medicine practices by managing the complex patient journey — from detailed intake and root-cause investigation through advanced laboratory coordination, multi-system treatment protocols, and long-term health outcome monitoring. Our AI agents coordinate the extensive testing panels, supplement protocols, dietary interventions, and follow-up cadences that define personalized functional medicine care.",
    "description": "Functional medicine practices face unique journey complexity where comprehensive intakes require extensive patient history gathering, advanced lab panels involve multiple specialty laboratories with varying turnaround times, multi-system treatment protocols overwhelm patients without structured follow-up, and long-term outcomes are difficult to track when interventions span nutrition, supplementation, lifestyle, and conventional therapies.",
    "workflows": [
      "Referral intake with OCR extraction of prior lab results, medical history, and medication/supplement lists with patient matching and insurance or self-pay verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal consultation slots based on case complexity, testing sequence requirements, and practitioner specialization",
      "Smart waitlist that fills functional medicine consultation cancellations within minutes via automated SMS and voice outreach to patients awaiting initial or follow-up visits",
      "Pre-treatment prep automation — comprehensive health questionnaire completion, food diary, sleep tracking, and prior record gathering with compliance confirmation",
      "Multi-channel patient engagement: appointment reminders, supplement protocol instructions, and dietary intervention check-ins via SMS, voice, and portal",
      "Real-time lab result monitoring with AI severity assessment and escalation for critical findings, hormonal imbalances, or toxic exposures requiring immediate intervention",
      "Post-treatment AI triage with 91% first-call resolution — addressing supplement questions, dietary protocol adjustments, detox reactions, and symptom progression concerns",
      "Automated treatment protocol surveillance and long-term health outcome tracking — zero patients lost to functional medicine follow-up"
    ],
    "results": [
      {
        "value": "72%",
        "label": "Reduction in time from intake to complete lab panel results"
      },
      {
        "value": "91%",
        "label": "First-call resolution for protocol and supplement questions"
      },
      {
        "value": "3.5x",
        "label": "Higher treatment protocol adherence with automated tracking"
      },
      {
        "value": "0",
        "label": "Patients lost to functional medicine follow-up protocols"
      }
    ],
    "challenges": [
      "Comprehensive intakes require 20+ pages of health history that patients fail to complete before their first visit",
      "Advanced lab panels involve multiple specialty laboratories with varying specimen requirements and turnaround times",
      "Multi-system treatment protocols spanning supplements, diet, and lifestyle overwhelm patients without structured guidance",
      "Insurance coverage for functional medicine testing is unpredictable, creating billing surprises that erode patient trust",
      "Long-term outcome tracking across nutritional, hormonal, and metabolic markers requires systematic lab surveillance",
      "Detoxification and elimination diet protocols generate high patient anxiety and questions between visits"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts prior lab results, medication lists, supplement regimens, and detailed health histories from functional medicine referral packets using OCR. Verifies insurance or self-pay status, identifies missing baseline labs, and pre-populates intake questionnaires."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to practitioners based on case complexity and specialization. Sequences multi-lab testing appointments to optimize specimen collection efficiency and fills consultation cancellations to maintain practice throughput."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers health questionnaire reminders, supplement protocol guides, and dietary intervention instructions via SMS, voice, and portal. Tracks food diary completion, sleep data, and lifestyle modification adherence between consultations."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors lab result trends and protocol compliance with AI severity scoring for critical findings and adverse reactions. Resolves 91% of supplement and dietary protocol questions on first contact and automates long-term outcome surveillance to ensure zero patients are lost to follow-up."
      }
    ]
  },
  {
    "slug": "gut-health-microbiome",
    "specialty": "Gut Health & Microbiome",
    "tagline": "Navigate digestive health journeys from microbiome assessment through personalized gut restoration and long-term GI wellness.",
    "heroDescription": "Configural orchestrates gut health and microbiome patient journeys from initial symptom assessment through advanced stool testing, personalized microbiome restoration protocols, and long-term digestive health monitoring. Our AI agents coordinate the specialized testing logistics, multi-phase dietary interventions, probiotic protocols, and symptom tracking that define evidence-based gut health programs.",
    "description": "Gut health practices manage patients with complex, multi-system symptoms that require systematic investigation. Stool testing and microbiome analysis involve specialty lab coordination with strict specimen handling, multi-phase elimination and reintroduction diets require sustained patient guidance, probiotic and prebiotic protocols need adjustment based on symptom response, and patients lose motivation during lengthy gut restoration timelines without visible progress tracking.",
    "workflows": [
      "Referral intake with OCR extraction of prior GI workup results, food sensitivity panels, and stool testing with patient matching and insurance or self-pay verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal consultation slots based on symptom severity, testing sequence requirements, and practitioner gut health specialization",
      "Smart waitlist that fills gut health consultation cancellations within minutes via automated SMS and voice outreach to symptomatic patients awaiting evaluation",
      "Pre-treatment prep automation — stool collection kit coordination, dietary diary completion, symptom questionnaire, and specimen handling instructions with compliance confirmation",
      "Multi-channel patient engagement: appointment reminders, elimination diet phase instructions, and probiotic protocol guidance via SMS, voice, and portal",
      "Real-time GI symptom monitoring with AI severity assessment and escalation for concerning symptoms like blood in stool, severe pain, or rapid weight loss",
      "Post-treatment AI triage with 91% first-call resolution — addressing dietary reaction questions, probiotic side effects, bloating management, and protocol adjustment guidance",
      "Automated gut restoration milestone tracking and long-term microbiome health surveillance — zero patients lost to digestive wellness follow-up"
    ],
    "results": [
      {
        "value": "75%",
        "label": "Improvement in elimination diet protocol completion rates"
      },
      {
        "value": "91%",
        "label": "First-call resolution for gut health protocol questions"
      },
      {
        "value": "2.8x",
        "label": "Higher stool testing compliance with prep automation"
      },
      {
        "value": "0",
        "label": "Patients lost to gut restoration follow-up protocols"
      }
    ],
    "challenges": [
      "Specialty stool testing requires precise specimen collection and cold-chain handling that patients frequently perform incorrectly",
      "Multi-phase elimination and reintroduction diets span weeks and patients abandon protocols without ongoing guidance and support",
      "Probiotic and prebiotic protocol adjustments depend on symptom response data that is rarely collected systematically",
      "Patients with chronic GI symptoms experience treatment fatigue during lengthy restoration protocols without visible progress metrics",
      "Insurance coverage for functional GI testing and microbiome analysis varies dramatically, creating access barriers",
      "Coordinating gut health interventions with existing GI specialist care requires communication that manual workflows cannot sustain"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts prior GI workup results, food sensitivity data, and stool testing reports from gut health referral packets using OCR. Verifies insurance or self-pay status, flags missing baseline testing, and coordinates specimen collection kit delivery."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to practitioners based on GI specialization and case complexity. Sequences multi-phase testing and consultation appointments and fills cancellations to minimize delays in symptom investigation."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers stool collection instructions, elimination diet phase guidance, and probiotic protocol updates via SMS, voice, and portal. Tracks dietary diary completion, symptom logs, and protocol adherence throughout multi-week gut restoration programs."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors GI symptoms and dietary response through patient-reported data with AI severity scoring for alarming symptoms requiring clinical escalation. Resolves 91% of protocol questions on first contact and ensures zero patients are lost to long-term microbiome health surveillance."
      }
    ]
  },
  {
    "slug": "health-optimization-longevity",
    "specialty": "Health Optimization / Longevity",
    "tagline": "Engineer proactive longevity journeys from comprehensive biomarker assessment through personalized optimization and lifelong tracking.",
    "heroDescription": "Configural transforms health optimization and longevity practices by orchestrating proactive wellness journeys — from comprehensive biomarker panels through AI-driven risk stratification, personalized intervention protocols, and lifelong health trajectory tracking. Our AI agents coordinate the extensive testing, supplement regimens, fitness protocols, and serial biomarker monitoring that define evidence-based longevity medicine.",
    "description": "Longevity practices serve highly engaged patients who expect premium, data-driven care. Comprehensive biomarker panels involve dozens of tests across multiple labs, personalized optimization protocols span nutrition, exercise, sleep, and supplementation, serial testing requires precise timing for trend analysis, and patients invest significantly in their health journey only to lose continuity when follow-up coordination fails.",
    "workflows": [
      "Referral intake with OCR extraction of prior lab panels, genetic testing, and health history with patient matching and concierge or self-pay verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal assessment slots based on biomarker panel complexity, testing sequence, and practitioner longevity specialization",
      "Smart waitlist that fills longevity consultation cancellations within minutes via automated SMS and voice outreach to patients awaiting comprehensive assessment",
      "Pre-treatment prep automation — fasting protocols, specimen collection timing, wearable device data sync, and health questionnaire completion with compliance confirmation",
      "Multi-channel patient engagement: assessment reminders, optimization protocol updates, and biohacking resource delivery via SMS, voice, and portal",
      "Real-time biomarker trend monitoring with AI severity assessment and escalation for concerning trajectories in metabolic, hormonal, or cardiovascular markers",
      "Post-treatment AI triage with 91% first-call resolution — addressing supplement protocol questions, testing preparation, wearable data interpretation, and protocol adjustment requests",
      "Automated serial biomarker surveillance and health trajectory optimization — zero patients lost to longevity program follow-up"
    ],
    "results": [
      {
        "value": "94%",
        "label": "Comprehensive biomarker panel completion rate"
      },
      {
        "value": "91%",
        "label": "First-call resolution for optimization protocol questions"
      },
      {
        "value": "4x",
        "label": "Higher serial testing compliance with automated scheduling"
      },
      {
        "value": "0",
        "label": "Patients lost to longevity surveillance follow-up"
      }
    ],
    "challenges": [
      "Comprehensive biomarker panels involve 50+ tests across multiple labs with varying fasting and timing requirements",
      "Personalized optimization protocols spanning supplements, diet, fitness, and sleep are complex and adherence drops without support",
      "Serial biomarker testing requires precisely timed intervals for trend analysis but scheduling drift corrupts data quality",
      "High-value longevity patients expect concierge-level coordination that manual workflows cannot scale",
      "Wearable device data integration with clinical biomarkers requires systematic aggregation that most practices lack",
      "Demonstrating quantifiable health trajectory improvement requires longitudinal data visualization that manual tracking cannot produce"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts prior lab panels, genetic testing results, and health histories from longevity program referral packets using OCR. Verifies concierge or self-pay status, identifies baseline testing gaps, and pre-configures comprehensive biomarker panel orders."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal assessment slots based on panel complexity and practitioner specialization. Manages precisely timed serial testing schedules and fills cancellations to maintain data integrity for trend analysis."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers fasting protocols, supplement regimen updates, and wearable device sync reminders via SMS, voice, and portal. Provides health optimization content, fitness protocol guidance, and biohacking resources between consultations."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors biomarker trends and optimization protocol compliance with AI severity scoring for concerning health trajectories. Resolves 91% of protocol questions on first contact and automates lifelong serial surveillance to ensure zero patients are lost to longevity program follow-up."
      }
    ]
  },
  {
    "slug": "hormone-balance-womens-health",
    "specialty": "Hormone Balance & Women's Health",
    "tagline": "Orchestrate women's hormonal health journeys from symptom assessment through personalized therapy and lifelong wellness tracking.",
    "heroDescription": "Configural transforms hormone balance and women's health practices by managing the complete patient journey — from hormonal symptom assessment through comprehensive lab evaluation, bioidentical or conventional hormone therapy, and long-term hormonal wellness monitoring. Our AI agents coordinate the sensitive patient communication, cyclical testing protocols, and multi-system symptom tracking that define personalized women's health care.",
    "description": "Women's hormone health practices navigate deeply personal patient journeys where symptom presentations vary dramatically, comprehensive hormonal panels require cycle-timed testing, treatment protocols need frequent adjustment based on symptom response, and patients experiencing perimenopause or menopause need sustained engagement through multi-year transitions — all while managing the emotional sensitivity these conditions demand.",
    "workflows": [
      "Referral intake with OCR extraction of prior hormonal labs, menstrual history, and symptom assessments with patient matching and insurance or self-pay verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal consultation slots based on menstrual cycle timing, symptom urgency, and practitioner women's health specialization",
      "Smart waitlist that fills hormone consultation cancellations within minutes via automated SMS and voice outreach to symptomatic patients awaiting evaluation",
      "Pre-treatment prep automation — cycle-timed lab coordination, symptom diary completion, medication history, and hormonal questionnaire with compliance confirmation",
      "Multi-channel patient engagement: appointment reminders, hormone therapy instructions, and symptom tracking prompts via SMS, voice, and portal",
      "Real-time hormonal symptom monitoring with AI severity assessment and escalation for breakthrough bleeding, mood crisis, or cardiovascular risk indicators",
      "Post-treatment AI triage with 91% first-call resolution — addressing therapy side effects, dosage timing questions, symptom fluctuations, and refill coordination",
      "Automated hormonal surveillance and women's wellness milestone tracking — zero patients lost to hormone therapy follow-up"
    ],
    "results": [
      {
        "value": "78%",
        "label": "Improvement in cycle-timed lab completion accuracy"
      },
      {
        "value": "91%",
        "label": "First-call resolution for hormone therapy concerns"
      },
      {
        "value": "3x",
        "label": "Higher therapy adherence with automated symptom tracking"
      },
      {
        "value": "0",
        "label": "Patients lost to hormonal wellness follow-up"
      }
    ],
    "challenges": [
      "Hormonal lab panels require cycle-specific timing that patients miss without precise scheduling coordination",
      "Symptom presentations for hormonal imbalance overlap with thyroid, adrenal, and metabolic conditions, requiring systematic evaluation",
      "Hormone therapy protocols need frequent adjustment based on symptom response data that is rarely collected systematically",
      "Perimenopause and menopause transitions span years, and patients disengage without ongoing support through symptom fluctuations",
      "Insurance coverage for bioidentical hormone therapy and advanced hormonal testing varies, creating access barriers",
      "Emotional sensitivity of hormonal health conditions requires communication approaches that generic patient engagement cannot provide"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts prior hormonal labs, menstrual history, and symptom patterns from women's health referral packets using OCR. Verifies insurance or self-pay status, flags cycle-timing requirements for lab scheduling, and identifies missing baseline hormonal panels."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to optimal consultation slots based on menstrual cycle timing, symptom urgency, and practitioner specialization. Coordinates cycle-timed lab appointments and fills cancellations to minimize delays in hormonal evaluation."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers cycle-timed lab reminders, hormone therapy instructions, and symptom diary prompts via SMS, voice, and portal. Provides sensitive, empathetic communication tailored to hormonal health conditions and tracks therapy adherence through multi-year transitions."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors hormonal symptoms and therapy response through patient-reported data with AI severity scoring for breakthrough bleeding, mood changes, and cardiovascular indicators. Resolves 91% of concerns on first contact and ensures zero patients are lost to long-term hormonal wellness surveillance."
      }
    ]
  },
  {
    "slug": "integrative-oncology",
    "specialty": "Integrative Oncology",
    "tagline": "Coordinate complementary cancer care journeys alongside conventional treatment with evidence-based integrative support.",
    "heroDescription": "Configural transforms integrative oncology practices by orchestrating complementary care journeys that work alongside conventional cancer treatment — from referral coordination with oncology teams through evidence-based integrative protocol design, treatment side effect management, and long-term survivorship wellness. Our AI agents navigate the complex coordination between oncologists, integrative practitioners, and patients navigating cancer treatment.",
    "description": "Integrative oncology practices operate at the intersection of conventional and complementary care where coordination failures have serious consequences. Referrals lack current oncologic treatment details, supplement-drug interactions require constant vigilance, patients struggle to manage integrative protocols alongside chemotherapy schedules, and survivorship care that could prevent recurrence and improve quality of life is lost when patients complete conventional treatment.",
    "workflows": [
      "Referral intake with OCR extraction of oncologic treatment plans, pathology reports, and current medication lists with patient matching and insurance or self-pay verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal integrative consultation slots based on chemotherapy cycle timing, treatment phase, and practitioner specialization",
      "Smart waitlist that fills integrative oncology cancellations within minutes via automated SMS and voice outreach to patients in active treatment",
      "Pre-treatment prep automation — current medication reconciliation, supplement interaction screening, oncologist communication, and symptom questionnaire with compliance confirmation",
      "Multi-channel patient engagement: appointment reminders, integrative protocol instructions, and treatment side effect management guidance via SMS, voice, and portal",
      "Real-time treatment side effect monitoring with AI severity assessment and escalation for severe nausea, neuropathy, immune suppression, or supplement adverse reactions",
      "Post-treatment AI triage with 91% first-call resolution — addressing supplement timing questions, side effect management, dietary guidance, and oncologist coordination needs",
      "Automated survivorship wellness programming and long-term integrative follow-up — zero patients lost to post-cancer integrative care"
    ],
    "results": [
      {
        "value": "73%",
        "label": "Improvement in integrative protocol adherence during active treatment"
      },
      {
        "value": "91%",
        "label": "First-call resolution for side effect and supplement concerns"
      },
      {
        "value": "2x",
        "label": "Faster oncologist-integrative practitioner communication"
      },
      {
        "value": "0",
        "label": "Patients lost to survivorship integrative follow-up"
      }
    ],
    "challenges": [
      "Referrals lack current chemotherapy regimens and radiation schedules, risking dangerous supplement-drug interactions",
      "Supplement and herbal therapy interactions with oncologic drugs require constant vigilance and pharmacologic expertise",
      "Patients struggle to schedule integrative sessions around chemotherapy infusion schedules and recovery periods",
      "Communication between oncologists and integrative practitioners is fragmented, creating safety gaps",
      "Insurance coverage for integrative oncology services is inconsistent and documentation requirements are burdensome",
      "Cancer survivors who would benefit from long-term integrative wellness programs are lost when conventional treatment ends"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts oncologic treatment plans, pathology data, and medication lists from integrative oncology referral packets using OCR. Screens for supplement-drug interactions, verifies insurance or self-pay status, and coordinates treatment timeline alignment with conventional oncology."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Matches patients to integrative consultation slots synchronized with chemotherapy cycles and treatment phases. Coordinates scheduling around infusion appointments and fills cancellations to maintain supportive care continuity during active treatment."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers integrative protocol instructions, supplement timing guides, and side effect management resources via SMS, voice, and portal. Coordinates between oncology and integrative treatment schedules and tracks protocol adherence through treatment phases."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors treatment side effects and integrative protocol response with AI severity scoring for drug interactions, adverse reactions, and concerning symptoms. Resolves 91% of concerns on first contact and automates survivorship wellness programming to ensure zero patients are lost to post-cancer integrative care."
      }
    ]
  },
  {
    "slug": "integrative-pain-management",
    "specialty": "Integrative Pain Management",
    "tagline": "Orchestrate multimodal pain care journeys from comprehensive assessment through personalized treatment and functional restoration.",
    "heroDescription": "Configural transforms integrative pain management practices by orchestrating multimodal pain care journeys — from comprehensive pain assessment through personalized treatment combining conventional interventions, physical therapy, mind-body techniques, and functional restoration tracking. Our AI agents coordinate the complex multi-provider workflows, treatment response monitoring, and opioid reduction protocols that define modern integrative pain care.",
    "description": "Integrative pain management practices coordinate the most complex patient journeys in medicine — where chronic pain patients see multiple providers, treatments span pharmaceuticals to acupuncture to cognitive behavioral therapy, opioid stewardship requires meticulous tracking, and functional outcomes improve only with sustained multi-modal engagement that manual coordination cannot maintain.",
    "workflows": [
      "Referral intake with OCR extraction of pain assessments, imaging results, medication history, and prior treatment records with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on pain severity, multi-modal treatment plan sequencing, and provider specialization across conventional and integrative modalities",
      "Smart waitlist that fills pain management cancellations within minutes via automated SMS and voice outreach to patients awaiting treatment across all modalities",
      "Pre-treatment prep automation — pain questionnaire completion, medication reconciliation, treatment history compilation, and modality-specific preparation with compliance confirmation",
      "Multi-channel patient engagement: appointment reminders, home exercise instructions, mindfulness resources, and pain management tips via SMS, voice, and portal",
      "Real-time pain and function monitoring with AI severity assessment and escalation for pain crises, medication misuse indicators, or functional deterioration",
      "Post-treatment AI triage with 91% first-call resolution — addressing pain flare management, medication timing, exercise modification, and modality-specific questions",
      "Automated functional restoration tracking and multi-modal treatment optimization — zero patients lost to integrative pain management follow-up"
    ],
    "results": [
      {
        "value": "67%",
        "label": "Improvement in multimodal treatment plan adherence"
      },
      {
        "value": "91%",
        "label": "First-call resolution for pain management concerns"
      },
      {
        "value": "45%",
        "label": "Reduction in opioid utilization with integrative protocols"
      },
      {
        "value": "0",
        "label": "Patients lost to pain management follow-up"
      }
    ],
    "challenges": [
      "Chronic pain referrals arrive with years of fragmented treatment history across multiple providers and facilities",
      "Multi-modal treatment plans spanning medications, injections, PT, acupuncture, and CBT require complex scheduling coordination",
      "Opioid stewardship tracking across prescribers and pharmacies is critical but manually unmanageable at scale",
      "Pain patients experiencing flares disengage from treatment programs, abandoning modalities that require sustained engagement",
      "Functional outcome measurement requires longitudinal data that is fragmented across physical therapy, psychology, and pain medicine",
      "Insurance authorization for integrative pain modalities varies by carrier and requires distinct documentation for each treatment type"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts pain assessments, imaging findings, medication histories, and prior treatment records from integrative pain referral packets using OCR. Verifies insurance for multi-modal treatments, compiles comprehensive treatment history, and flags opioid utilization data for stewardship tracking."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Coordinates multi-modal treatment scheduling across conventional and integrative providers based on pain severity and treatment plan sequencing. Fills cancellations across all modalities to maintain treatment momentum and manages concurrent provider schedules."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers home exercise programs, mindfulness resources, and pain management strategies via SMS, voice, and portal. Tracks multi-modal treatment adherence and re-engages patients during pain flares with appropriate coping resources and appointment access."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors pain levels, functional status, and medication utilization with AI severity scoring for pain crises, misuse indicators, and functional decline. Resolves 91% of pain management concerns on first contact and automates functional restoration tracking to ensure zero patients are lost to integrative pain follow-up."
      }
    ]
  },
  {
    "slug": "lifestyle-preventive-medicine",
    "specialty": "Lifestyle & Preventive Medicine",
    "tagline": "Orchestrate every lifestyle medicine patient journey from health risk referral to sustained behavior change with zero patients lost to follow-up",
    "heroDescription": "Configural transforms lifestyle and preventive medicine practices by automating referral intake, coordinating multi-domain lifestyle interventions, tracking biometric milestones, and ensuring every patient remains engaged across nutrition, exercise, sleep, and stress management programs — from initial risk assessment to long-term wellness maintenance.",
    "description": "Lifestyle and preventive medicine practices struggle with coordinating multi-domain behavior change programs across nutrition, exercise, sleep, and stress management. Patients drop off long-term lifestyle modification plans, biometric tracking falls behind, and health risk assessments go unactioned as manual follow-up systems fail to keep pace with growing patient panels.",
    "workflows": [
      "Referral intake with OCR extraction of health risk assessments, biometric data, and lifestyle questionnaires with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on lifestyle modification readiness scores, provider specialization in nutrition or exercise coaching, and multi-domain program sequencing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by health risk severity and program enrollment deadlines",
      "Pre-treatment prep automation — baseline biometric collection kits, food diary templates, activity tracker setup instructions, and lifestyle assessment completion with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for lifestyle coaching sessions, group classes, and biometric check-ins via SMS, voice, and portal",
      "Real-time biometric and lifestyle adherence monitoring with AI severity assessment and escalation for patients showing declining engagement or worsening metabolic markers",
      "Post-treatment AI triage with 91% first-call resolution — addressing nutrition plan questions, exercise modification concerns, and supplement interaction inquiries",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across annual wellness exams, quarterly biometric reviews, and ongoing lifestyle program milestones"
    ],
    "results": [
      {
        "value": "87%",
        "label": "Lifestyle program completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "64%",
        "label": "Reduction in program dropout rates"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in prevention programs"
      }
    ],
    "challenges": [
      "Patients enrolled in multi-domain lifestyle programs disengage when manual reminder systems fail to sustain long-term motivation",
      "Health risk assessment referrals sit unprocessed while at-risk patients remain unaware of available preventive interventions",
      "Cancelled group coaching and individual counseling slots go unfilled for days, reducing program capacity utilization",
      "Biometric tracking across weight, blood pressure, glucose, and lipid panels lacks automated surveillance, causing missed milestones",
      "Post-session questions about nutrition plans, exercise modifications, and supplement safety overwhelm staff without structured triage",
      "No-shows to quarterly wellness reviews and annual prevention screenings create gaps in longitudinal health tracking"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts lifestyle medicine referral data via OCR, processes health risk assessments and biometric baselines, matches patients across systems, verifies insurance eligibility, and flags high-risk metabolic profiles for expedited enrollment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-domain program scheduling across nutrition counseling, exercise coaching, group classes, and biometric check-ins while filling cancellations within minutes through AI-driven waitlist prioritization based on health risk scores."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for program session reminders, biometric check-in prompts, and wellness milestone celebrations via SMS, voice, and portal — reducing dropout with predictive engagement modeling and motivational nudges."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors biometric trends and lifestyle adherence in real time, triages patient inquiries about nutrition plans and exercise safety with AI severity assessment, and achieves 91% first-call resolution for lifestyle medicine concerns."
      }
    ]
  },
  {
    "slug": "medical-weight-management",
    "specialty": "Medical Weight Management",
    "tagline": "Automate every weight management patient journey from bariatric referral to lifelong metabolic surveillance with zero patients lost to follow-up",
    "heroDescription": "Configural powers medical weight management programs by automating referral intake, coordinating GLP-1 medication titration schedules, tracking body composition milestones, and ensuring every patient remains engaged across dietary counseling, pharmacotherapy, and surgical pathways — from initial BMI assessment to long-term weight maintenance.",
    "description": "Medical weight management practices face complex coordination across GLP-1 medication titration, dietary counseling series, bariatric surgery pathways, and long-term metabolic monitoring. Patients fall off medication titration schedules, dietary counseling series break down, and post-bariatric surveillance lapses put patients at risk for nutritional deficiencies and weight regain.",
    "workflows": [
      "Referral intake with OCR extraction of BMI data, metabolic panels, comorbidity histories, and prior authorization documents with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on medication titration stage, dietary counseling sequence, body composition assessment timing, and provider specialization in pharmacotherapy versus surgical pathways",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by medication titration urgency and surgical clearance timelines",
      "Pre-treatment prep automation — fasting lab orders, food diary completion, medication reconciliation for GLP-1 interactions, and bariatric pre-op requirements with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for titration check-ins, nutrition sessions, and body composition scans via SMS, voice, and portal",
      "Real-time weight trajectory and metabolic marker monitoring with AI severity assessment and escalation for patients showing medication side effects or rapid weight regain",
      "Post-treatment AI triage with 91% first-call resolution — addressing GLP-1 side effect management, post-bariatric dietary concerns, and supplement dosing questions",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across medication titration milestones, quarterly metabolic panels, and annual bariatric anniversaries"
    ],
    "results": [
      {
        "value": "91%",
        "label": "GLP-1 titration schedule adherence"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "58%",
        "label": "Reduction in weight management program attrition"
      },
      {
        "value": "0",
        "label": "Patients lost to post-bariatric surveillance"
      }
    ],
    "challenges": [
      "GLP-1 medication titration schedules break down when patients miss dose escalation appointments and manual tracking fails",
      "Bariatric surgery coordination across nutritionist, psychologist, surgeon, and insurance requires multi-step workflows with no unified view",
      "Cancelled dietary counseling and titration check-in slots go unfilled while waitlisted patients delay treatment progression",
      "Post-bariatric nutritional deficiency screening lapses when manual surveillance systems cannot track annual lab requirements",
      "High-volume patient calls about GLP-1 side effects like nausea and injection technique overwhelm staff without structured triage",
      "Referrals for complex multi-comorbidity weight management cases sit unprocessed, delaying time-sensitive medication starts"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts weight management referral data via OCR, processes BMI histories and metabolic panels, matches patients across systems, verifies insurance and prior authorization for GLP-1 medications, and flags urgent cases like BMI over 40 with comorbidities for expedited intake."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates medication titration sequences, dietary counseling series, body composition assessments, and bariatric surgery timelines while filling cancellations within minutes through AI-driven waitlist prioritization based on titration urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for titration check-in reminders, nutrition session prep, and metabolic milestone tracking via SMS, voice, and portal — reducing attrition with predictive no-show modeling and motivational weight-loss progress updates."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors weight trajectories and metabolic markers in real time, triages GLP-1 side effect calls and post-bariatric concerns with AI severity assessment, and achieves 91% first-call resolution for weight management post-treatment inquiries."
      }
    ]
  },
  {
    "slug": "mens-health-hormone-therapy",
    "specialty": "Men's Health & Hormone Therapy",
    "tagline": "Streamline every hormone therapy patient journey from testosterone referral to lifelong endocrine surveillance with zero patients lost to follow-up",
    "heroDescription": "Configural transforms men's health and hormone therapy practices by automating referral intake, coordinating testosterone replacement titration, tracking PSA and hematocrit levels, and ensuring every patient remains engaged across hormone optimization, fertility preservation, and cardiovascular risk monitoring pathways.",
    "description": "Men's health hormone therapy practices face complex coordination across testosterone replacement titration, PSA surveillance, hematocrit monitoring, fertility preservation counseling, and cardiovascular risk assessment. Patients miss critical lab windows during titration, PSA monitoring lapses create safety gaps, and fertility counseling falls through the cracks for younger patients.",
    "workflows": [
      "Referral intake with OCR extraction of testosterone levels, PSA results, metabolic panels, and symptom questionnaires with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on testosterone titration phase, lab draw timing requirements, hematocrit monitoring intervals, and provider specialization in TRT versus fertility preservation",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by titration urgency and overdue lab monitoring flags",
      "Pre-treatment prep automation — fasting lab orders for testosterone and metabolic panels, medication interaction reviews, fertility preservation counseling materials, and consent documentation with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for titration visits, lab draws, and PSA screenings via SMS, voice, and portal",
      "Real-time testosterone level, hematocrit, and PSA monitoring with AI severity assessment and escalation for patients showing polycythemia risk or PSA elevation trends",
      "Post-treatment AI triage with 91% first-call resolution — addressing injection technique questions, side effect management, and libido or mood concern inquiries",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across quarterly labs, semi-annual PSA checks, and annual cardiovascular risk assessments"
    ],
    "results": [
      {
        "value": "94%",
        "label": "Testosterone titration lab compliance rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "67%",
        "label": "Reduction in overdue PSA monitoring gaps"
      },
      {
        "value": "0",
        "label": "Patients lost to hematocrit surveillance"
      }
    ],
    "challenges": [
      "Testosterone titration requires precisely timed lab draws that patients miss when manual reminder systems fail",
      "PSA surveillance during TRT demands strict monitoring intervals that lapse without automated tracking",
      "Hematocrit elevation risk goes undetected when quarterly labs are not enforced through automated scheduling",
      "Fertility preservation counseling for younger TRT patients falls through the cracks without structured intake workflows",
      "High-volume calls about injection technique, dosing adjustments, and mood changes overwhelm staff without AI-assisted triage",
      "Referrals with complex endocrine panels and prior authorization requirements sit unprocessed, delaying treatment initiation"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts men's health referral data via OCR, processes testosterone panels and PSA results, matches patients across systems, verifies insurance eligibility, and flags urgent cases like severely symptomatic hypogonadism for expedited scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates testosterone titration visit sequences, lab draw timing, PSA surveillance intervals, and fertility preservation consultations while filling cancellations within minutes through AI-driven waitlist prioritization based on monitoring urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for titration visit reminders, fasting lab prep instructions, and PSA screening recalls via SMS, voice, and portal — reducing missed labs with predictive modeling and automated escalation for overdue monitoring."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors testosterone levels, hematocrit trends, and PSA trajectories in real time, triages side effect and technique calls with AI severity assessment, and achieves 91% first-call resolution for hormone therapy post-treatment concerns."
      }
    ]
  },
  {
    "slug": "mind-body-medicine",
    "specialty": "Mind-Body Medicine",
    "tagline": "Orchestrate every mind-body medicine patient journey from integrative referral to sustained psychophysiological wellness with zero patients lost to follow-up",
    "heroDescription": "Configural transforms mind-body medicine practices by automating referral intake, coordinating multi-modality treatment plans across meditation, biofeedback, and cognitive behavioral sessions, tracking psychophysiological outcomes, and ensuring every patient remains engaged across stress reduction, pain management, and emotional regulation pathways.",
    "description": "Mind-body medicine practices struggle with coordinating multi-modality treatment plans that span meditation training, biofeedback sessions, guided imagery, and cognitive behavioral interventions. Patients disengage from progressive skill-building programs, biofeedback session sequencing breaks down, and outcome tracking across physiological and psychological domains falls behind.",
    "workflows": [
      "Referral intake with OCR extraction of psychological assessments, stress inventories, pain scales, and medical histories with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on treatment modality sequence, biofeedback equipment availability, group session capacity, and provider specialization in meditation versus biofeedback training",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by symptom severity scores and treatment phase progression needs",
      "Pre-treatment prep automation — stress assessment questionnaires, meditation practice logs, biofeedback baseline measurement instructions, and relaxation environment guidelines with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for biofeedback sessions, group meditation, and individual therapy via SMS, voice, and portal",
      "Real-time psychophysiological outcome monitoring with AI severity assessment and escalation for patients showing worsening stress biomarkers, pain scores, or anxiety levels",
      "Post-treatment AI triage with 91% first-call resolution — addressing meditation technique questions, biofeedback equipment concerns, and symptom flare management during practice",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across progressive skill-building milestones, quarterly outcome assessments, and maintenance program transitions"
    ],
    "results": [
      {
        "value": "83%",
        "label": "Mind-body program completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "59%",
        "label": "Reduction in biofeedback session no-shows"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in skill-building programs"
      }
    ],
    "challenges": [
      "Multi-modality treatment plans spanning meditation, biofeedback, and CBT require precise sequencing that breaks down without automated coordination",
      "Biofeedback equipment scheduling conflicts cause session delays and patient frustration when managed manually",
      "Patients disengage from progressive skill-building programs when gaps between sessions disrupt momentum and learning curves",
      "Outcome tracking across stress biomarkers, pain scales, and psychological inventories falls behind without integrated monitoring",
      "Post-session questions about meditation technique, home practice, and symptom management overwhelm staff without structured triage",
      "Referrals from primary care and pain management with complex psychosomatic presentations sit unprocessed, delaying integrative evaluations"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts mind-body medicine referral data via OCR, processes stress inventories and pain assessments, matches patients across systems, verifies insurance eligibility, and flags high-acuity cases with severe psychosomatic symptoms for expedited intake."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-modality treatment sequences across biofeedback, meditation, and CBT sessions while managing equipment availability and filling cancellations within minutes through AI-driven waitlist prioritization based on treatment phase needs."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for session reminders, home practice prompts, and outcome assessment completions via SMS, voice, and portal — reducing disengagement with predictive modeling and motivational progress updates on psychophysiological improvements."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors psychophysiological outcomes and practice adherence in real time, triages technique and symptom management calls with AI severity assessment, and achieves 91% first-call resolution for mind-body medicine post-session concerns."
      }
    ]
  },
  {
    "slug": "naturopathic-integration",
    "specialty": "Naturopathic Integration",
    "tagline": "Coordinate every naturopathic integration patient journey from holistic referral to sustained therapeutic outcomes with zero patients lost to follow-up",
    "heroDescription": "Configural powers naturopathic integration practices by automating referral intake, coordinating treatment plans across botanical medicine, clinical nutrition, hydrotherapy, and lifestyle counseling, tracking laboratory and functional medicine markers, and ensuring every patient remains engaged from initial assessment through long-term wellness maintenance.",
    "description": "Naturopathic integration practices face coordination complexity across botanical prescriptions, clinical nutrition protocols, hydrotherapy series, and functional medicine testing. Patients fall off multi-visit treatment plans, supplement compliance tracking lacks automation, and coordination between naturopathic and conventional providers creates communication gaps.",
    "workflows": [
      "Referral intake with OCR extraction of conventional medical records, functional medicine labs, supplement histories, and treatment goals with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on treatment protocol phase, hydrotherapy suite availability, lab draw timing, and provider specialization in botanical versus nutritional medicine",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by treatment protocol urgency and lab result follow-up timelines",
      "Pre-treatment prep automation — food elimination diary templates, supplement interaction checklists, hydrotherapy preparation instructions, and fasting lab requirements with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for naturopathic visits, hydrotherapy sessions, and functional medicine lab draws via SMS, voice, and portal",
      "Real-time functional medicine marker and supplement adherence monitoring with AI severity assessment and escalation for patients showing adverse reactions or declining therapeutic markers",
      "Post-treatment AI triage with 91% first-call resolution — addressing supplement interaction concerns, detoxification reaction management, and dietary protocol modification questions",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across treatment protocol milestones, quarterly functional medicine labs, and annual integrative health assessments"
    ],
    "results": [
      {
        "value": "86%",
        "label": "Treatment protocol adherence rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "61%",
        "label": "Reduction in supplement compliance gaps"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up across treatment protocols"
      }
    ],
    "challenges": [
      "Multi-visit naturopathic treatment plans involving botanical medicine, nutrition, and hydrotherapy require coordination that breaks down without automation",
      "Supplement and botanical prescription adherence tracking lacks systematic monitoring, reducing treatment efficacy",
      "Hydrotherapy suite scheduling conflicts and underutilization persist when managed through manual booking systems",
      "Functional medicine lab results require timely follow-up that lapses when conventional and naturopathic records are siloed",
      "Patient calls about supplement interactions, detox reactions, and dietary modifications overwhelm staff without structured triage protocols",
      "Referrals from conventional providers with complex integrative needs sit unprocessed, delaying holistic treatment initiation"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts naturopathic referral data via OCR, processes functional medicine labs and supplement histories, matches patients across conventional and integrative systems, verifies insurance eligibility, and flags complex multi-system cases for expedited naturopathic evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-modality treatment scheduling across botanical medicine consultations, hydrotherapy suites, nutrition counseling, and lab draws while filling cancellations within minutes through AI-driven waitlist prioritization based on protocol phase urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for treatment visit reminders, supplement adherence prompts, and lab preparation instructions via SMS, voice, and portal — reducing protocol dropout with predictive engagement modeling and therapeutic milestone notifications."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors functional medicine markers and supplement adherence in real time, triages detox reaction and interaction concerns with AI severity assessment, and achieves 91% first-call resolution for naturopathic post-treatment inquiries."
      }
    ]
  },
  {
    "slug": "occupational-environmental-medicine",
    "specialty": "Occupational & Environmental Medicine",
    "tagline": "Streamline every occupational medicine patient journey from workplace injury referral to return-to-work clearance with zero patients lost to follow-up",
    "heroDescription": "Configural transforms occupational and environmental medicine practices by automating referral intake, coordinating workers compensation workflows, tracking exposure monitoring schedules, and ensuring every patient progresses seamlessly from injury evaluation through functional capacity assessment to return-to-work clearance.",
    "description": "Occupational and environmental medicine practices manage complex workflows across workers compensation claims, workplace injury evaluations, hazardous exposure monitoring, respiratory surveillance, and return-to-work assessments. Claims coordination delays care, exposure monitoring schedules lapse, and return-to-work timelines extend when manual systems cannot track multi-party workflows.",
    "workflows": [
      "Referral intake with OCR extraction of workers compensation claim forms, injury reports, exposure histories, and employer documentation with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on injury acuity, functional capacity evaluation timing, surveillance exam due dates, and provider specialization in toxicology versus musculoskeletal injury",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by return-to-work timeline urgency and exposure monitoring deadlines",
      "Pre-treatment prep automation — employer authorization forms, exposure questionnaires, respiratory fit-test instructions, and prior medical record requests with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for injury follow-ups, surveillance exams, and functional capacity evaluations via SMS, voice, and portal",
      "Real-time injury recovery and exposure biomarker monitoring with AI severity assessment and escalation for patients showing delayed recovery or concerning exposure levels",
      "Post-treatment AI triage with 91% first-call resolution — addressing return-to-work restriction questions, work modification concerns, and exposure symptom management inquiries",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across annual exposure screenings, periodic respiratory surveillance, and injury recovery milestones"
    ],
    "results": [
      {
        "value": "41%",
        "label": "Faster average return-to-work timelines"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "93%",
        "label": "Exposure surveillance schedule compliance"
      },
      {
        "value": "0",
        "label": "Workers lost to follow-up in recovery programs"
      }
    ],
    "challenges": [
      "Workers compensation claim coordination across employers, insurers, and providers delays care when managed through manual multi-party workflows",
      "Hazardous exposure monitoring schedules lapse without automated surveillance, creating OSHA compliance gaps",
      "Return-to-work assessments extend unnecessarily when functional capacity evaluation scheduling depends on manual coordination",
      "Respiratory surveillance programs for asbestos, silica, and chemical exposure lack automated tracking across annual cycles",
      "Post-injury calls about work restrictions, modified duty, and symptom progression overwhelm staff without structured triage",
      "Referrals from employers and emergency departments with incomplete injury documentation sit unprocessed, delaying evaluations"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts occupational medicine referral data via OCR, processes workers compensation forms and injury reports, matches patients across employer and clinical systems, verifies insurance eligibility, and flags acute workplace injuries for same-day scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates injury follow-up sequences, functional capacity evaluations, exposure surveillance exams, and respiratory fit-tests while filling cancellations within minutes through AI-driven waitlist prioritization based on return-to-work urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for injury follow-up reminders, surveillance exam notifications, and return-to-work assessment prep via SMS, voice, and portal — reducing missed appointments with predictive modeling and employer coordination notifications."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors injury recovery trajectories and exposure biomarkers in real time, triages work restriction and symptom progression calls with AI severity assessment, and achieves 91% first-call resolution for occupational medicine post-treatment concerns."
      }
    ]
  },
  {
    "slug": "oncology-survivorship-medicine",
    "specialty": "Oncology Survivorship Medicine",
    "tagline": "Orchestrate every oncology survivorship patient journey from treatment completion to lifelong cancer surveillance with zero patients lost to follow-up",
    "heroDescription": "Configural transforms oncology survivorship practices by automating referral intake from oncology teams, coordinating surveillance imaging and lab schedules, tracking late-effect symptom management, and ensuring every cancer survivor remains engaged across cardiovascular monitoring, secondary cancer screening, and psychosocial support pathways.",
    "description": "Oncology survivorship practices face the critical challenge of tracking cancer survivors across years of surveillance imaging, lab monitoring, late-effect management, and secondary cancer screening. Patients transition from active treatment and fall off surveillance schedules, late treatment effects go undetected, and psychosocial support referrals are missed during the survivorship transition.",
    "workflows": [
      "Referral intake with OCR extraction of treatment summaries, survivorship care plans, pathology reports, and oncology discharge documentation with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on surveillance imaging intervals, late-effect monitoring timelines, cardio-oncology assessment schedules, and provider specialization in specific cancer type survivorship",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by surveillance urgency and overdue screening flags",
      "Pre-treatment prep automation — survivorship care plan reviews, imaging prep instructions, fasting lab requirements, and psychosocial screening questionnaires with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for surveillance scans, cardio-oncology visits, and support group sessions via SMS, voice, and portal",
      "Real-time late-effect symptom and surveillance marker monitoring with AI severity assessment and escalation for patients showing potential recurrence indicators or emerging secondary cancers",
      "Post-treatment AI triage with 91% first-call resolution — addressing survivorship symptom concerns, scan anxiety management, and late-effect medication questions",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across 5-year and 10-year surveillance protocols, annual cardio-oncology assessments, and secondary cancer screening schedules"
    ],
    "results": [
      {
        "value": "97%",
        "label": "Surveillance imaging schedule adherence"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "72%",
        "label": "Reduction in patients lost during survivorship transition"
      },
      {
        "value": "0",
        "label": "Survivors lost to long-term surveillance follow-up"
      }
    ],
    "challenges": [
      "Cancer survivors transitioning from active treatment fall off surveillance schedules when manual tracking systems cannot maintain multi-year monitoring protocols",
      "Late treatment effects including cardiotoxicity, neuropathy, and secondary cancers go undetected without automated symptom surveillance",
      "Surveillance imaging and lab coordination across oncology, radiology, and cardiology requires multi-department scheduling with no unified view",
      "Psychosocial support referrals for scanxiety, depression, and fear of recurrence are missed during the survivorship transition",
      "High-volume survivor calls about symptoms, scan results, and late-effect concerns overwhelm staff without AI-assisted triage and severity routing",
      "Survivorship care plans from treating oncologists arrive in varied formats that require manual data extraction and protocol mapping"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts survivorship referral data via OCR, processes treatment summaries and survivorship care plans, matches patients across oncology and primary care systems, verifies insurance eligibility, and flags overdue surveillance milestones for expedited scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-year surveillance imaging, cardio-oncology assessments, late-effect monitoring visits, and secondary cancer screenings while filling cancellations within minutes through AI-driven waitlist prioritization based on recurrence risk scores."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for surveillance scan reminders, late-effect screening prompts, and psychosocial support opportunities via SMS, voice, and portal — reducing surveillance dropout with predictive modeling and scanxiety-sensitive communication protocols."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors late-effect symptoms and surveillance markers in real time, triages recurrence concern calls and treatment side-effect inquiries with AI severity assessment, and achieves 91% first-call resolution for survivorship post-treatment concerns."
      }
    ]
  },
  {
    "slug": "pediatric-nutrition",
    "specialty": "Pediatric Nutrition",
    "tagline": "Coordinate every pediatric nutrition patient journey from growth concern referral to sustained dietary milestone achievement with zero patients lost to follow-up",
    "heroDescription": "Configural transforms pediatric nutrition practices by automating referral intake, coordinating multi-visit dietary intervention plans, tracking growth trajectories and nutritional biomarkers, and ensuring every child remains engaged across food allergy management, failure-to-thrive protocols, and obesity prevention pathways — with family-centered communication throughout.",
    "description": "Pediatric nutrition practices manage complex dietary interventions across food allergy elimination diets, failure-to-thrive feeding programs, childhood obesity management, and metabolic nutrition therapy. Families disengage from multi-visit dietary plans, growth trajectory monitoring falls behind, and food challenge scheduling for allergy reintroduction requires precise safety coordination.",
    "workflows": [
      "Referral intake with OCR extraction of growth charts, allergy testing results, metabolic panels, and pediatrician notes with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on dietary intervention phase, food challenge safety requirements, growth monitoring intervals, and provider specialization in allergy nutrition versus metabolic disorders",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach to families prioritized by growth trajectory severity and food challenge timing windows",
      "Pre-treatment prep automation — food diary templates, elimination diet guides, allergy-safe meal preparation instructions, and growth measurement preparation with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for nutrition consultations, food challenges, and growth monitoring visits via SMS, voice, and portal to parents and caregivers",
      "Real-time growth trajectory and nutritional biomarker monitoring with AI severity assessment and escalation for children showing failure-to-thrive indicators or micronutrient deficiency trends",
      "Post-treatment AI triage with 91% first-call resolution — addressing parent questions about elimination diets, feeding strategies, and allergic reaction management at home",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across growth monitoring milestones, food reintroduction timelines, and annual nutritional assessments"
    ],
    "results": [
      {
        "value": "89%",
        "label": "Dietary intervention plan adherence rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "55%",
        "label": "Reduction in growth monitoring gaps"
      },
      {
        "value": "0",
        "label": "Children lost to follow-up in nutrition programs"
      }
    ],
    "challenges": [
      "Families disengage from multi-visit dietary intervention plans when manual reminder systems fail to sustain caregiver participation",
      "Growth trajectory monitoring across weight, height, and head circumference percentiles falls behind without automated milestone tracking",
      "Food challenge scheduling requires supervised clinical settings with emergency equipment that demand precise coordination",
      "Elimination diet compliance tracking across multiple allergens lacks systematic monitoring, reducing diagnostic accuracy",
      "Parent calls about feeding difficulties, allergic reactions, and dietary modifications overwhelm staff without structured triage",
      "Referrals from pediatricians with complex growth and nutritional concerns sit unprocessed, delaying early intervention"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts pediatric nutrition referral data via OCR, processes growth charts and allergy testing results, matches patients across pediatric systems, verifies insurance eligibility, and flags failure-to-thrive cases and severe food allergies for expedited scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates dietary intervention sequences, supervised food challenges, growth monitoring visits, and metabolic nutrition sessions while filling cancellations within minutes through AI-driven waitlist prioritization based on growth severity and allergy reintroduction timing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach to parents and caregivers for nutrition visit reminders, food diary completion prompts, and growth milestone tracking via SMS, voice, and portal — reducing family disengagement with predictive modeling and age-appropriate dietary guidance."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors growth trajectories and nutritional biomarkers in real time, triages parent concerns about feeding, allergic reactions, and diet compliance with AI severity assessment, and achieves 91% first-call resolution for pediatric nutrition post-visit inquiries."
      }
    ]
  },
  {
    "slug": "perinatal-mental-health",
    "specialty": "Perinatal Mental Health",
    "tagline": "Streamline every perinatal mental health patient journey from pregnancy screening referral to postpartum recovery with zero patients lost to follow-up",
    "heroDescription": "Configural transforms perinatal mental health practices by automating referral intake, coordinating treatment across pregnancy and postpartum phases, tracking mood screening scores longitudinally, and ensuring every patient remains engaged across therapy, medication management, and peer support pathways — with time-sensitive escalation for perinatal psychiatric emergencies.",
    "description": "Perinatal mental health practices face urgent coordination challenges across prenatal depression screening, medication safety counseling during pregnancy, postpartum mood disorder management, and lactation-compatible pharmacotherapy. Patients fall between obstetric and psychiatric systems, screening scores go unactioned, and the narrow postpartum intervention window closes when manual follow-up delays care.",
    "workflows": [
      "Referral intake with OCR extraction of Edinburgh Postnatal Depression Scale scores, obstetric records, psychiatric histories, and medication lists with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on gestational timing, postpartum week, screening score severity, medication management urgency, and provider specialization in prenatal versus postpartum psychiatry",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by mood screening severity and gestational or postpartum timing criticality",
      "Pre-treatment prep automation — perinatal mood screening questionnaires, medication safety handouts for pregnancy and lactation, therapy goal worksheets, and partner support resources with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for therapy sessions, medication check-ins, and peer support groups via SMS, voice, and portal",
      "Real-time perinatal mood screening score and medication adherence monitoring with AI severity assessment and escalation for patients showing suicidal ideation or psychotic symptoms",
      "Post-treatment AI triage with 91% first-call resolution — addressing medication safety during breastfeeding concerns, mood crisis support, and therapy technique questions between sessions",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across trimester screening milestones, postpartum week check-ins, and year-one recovery assessments"
    ],
    "results": [
      {
        "value": "92%",
        "label": "Postpartum screening completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "68%",
        "label": "Reduction in lost-to-follow-up during postpartum transition"
      },
      {
        "value": "0",
        "label": "Patients lost between prenatal and postpartum care"
      }
    ],
    "challenges": [
      "Patients with elevated perinatal depression scores fall between obstetric and psychiatric systems when referral handoffs rely on manual processes",
      "The narrow postpartum intervention window closes when scheduling delays prevent timely access to psychiatric evaluation",
      "Medication safety counseling for pregnancy and lactation requires specialized knowledge that delays care when manually routed to wrong providers",
      "Mood screening scores collected during obstetric visits go unactioned without automated severity-based escalation to mental health teams",
      "Postpartum crisis calls about intrusive thoughts and bonding difficulties overwhelm staff without AI-assisted severity triage and safety assessment",
      "Referrals from obstetricians and midwives with incomplete psychiatric histories sit unprocessed during time-critical perinatal windows"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts perinatal mental health referral data via OCR, processes Edinburgh screening scores and obstetric records, matches patients across OB and psychiatric systems, verifies insurance eligibility, and flags high-severity mood scores and suicidal ideation for immediate psychiatric scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates therapy sessions, medication management visits, and peer support groups across pregnancy trimesters and postpartum weeks while filling cancellations within minutes through AI-driven waitlist prioritization based on screening severity and gestational timing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for therapy reminders, mood screening completion prompts, and postpartum check-in scheduling via SMS, voice, and portal — reducing dropout with predictive modeling and compassionate, stigma-reducing communication during vulnerable perinatal periods."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors perinatal mood scores and medication adherence in real time, triages crisis calls about intrusive thoughts and bonding concerns with AI safety assessment, and achieves 91% first-call resolution for perinatal mental health post-session inquiries."
      }
    ]
  },
  {
    "slug": "plant-based-nutrition",
    "specialty": "Plant-Based Nutrition",
    "tagline": "Coordinate every plant-based nutrition patient journey from dietary transition referral to sustained nutritional optimization with zero patients lost to follow-up",
    "heroDescription": "Configural powers plant-based nutrition practices by automating referral intake, coordinating dietary transition plans, tracking nutritional biomarkers for common deficiency risks, and ensuring every patient remains engaged across meal planning, supplement optimization, and long-term nutritional monitoring pathways.",
    "description": "Plant-based nutrition practices manage complex dietary transitions involving micronutrient deficiency prevention, B12 and iron monitoring, protein adequacy counseling, and phased elimination of animal products. Patients stall during dietary transitions, biomarker monitoring for B12, iron, and omega-3 status lapses, and supplement adherence tracking lacks systematic follow-up.",
    "workflows": [
      "Referral intake with OCR extraction of dietary histories, nutritional lab panels, supplement logs, and clinical indications with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on dietary transition phase, lab draw timing for nutritional biomarkers, group education session availability, and provider specialization in clinical nutrition versus culinary coaching",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by nutritional deficiency severity and dietary transition milestone timing",
      "Pre-treatment prep automation — food frequency questionnaires, 3-day dietary recalls, fasting lab requirements for B12 and iron panels, and plant-based pantry setup guides with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for nutrition consultations, cooking workshops, and lab draws via SMS, voice, and portal",
      "Real-time nutritional biomarker monitoring with AI severity assessment and escalation for patients showing B12 deficiency trends, declining iron stores, or inadequate protein intake patterns",
      "Post-treatment AI triage with 91% first-call resolution — addressing meal planning questions, supplement dosing concerns, and symptom management during dietary transitions",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across quarterly nutritional labs, semi-annual dietary assessments, and annual comprehensive nutritional reviews"
    ],
    "results": [
      {
        "value": "85%",
        "label": "Dietary transition program completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "71%",
        "label": "Reduction in nutritional deficiency detection gaps"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in nutritional monitoring"
      }
    ],
    "challenges": [
      "Patients stall during phased dietary transitions when manual follow-up fails to provide timely guidance and encouragement",
      "B12, iron, and omega-3 biomarker monitoring lapses without automated lab scheduling tied to dietary transition milestones",
      "Supplement adherence for critical nutrients like B12, vitamin D, and EPA/DHA lacks systematic tracking and compliance alerts",
      "Group cooking workshops and education sessions suffer from no-shows and underutilization when managed through manual booking",
      "Patient calls about meal planning, protein adequacy, and digestive adjustment symptoms overwhelm staff without structured triage",
      "Referrals from primary care for patients with nutritional deficiencies and chronic disease dietary management sit unprocessed"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts plant-based nutrition referral data via OCR, processes nutritional lab panels and dietary histories, matches patients across systems, verifies insurance eligibility, and flags severe deficiency cases like critically low B12 or iron for expedited scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates dietary transition visit sequences, nutritional lab draw timing, group education sessions, and cooking workshops while filling cancellations within minutes through AI-driven waitlist prioritization based on deficiency severity and transition phase needs."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for nutrition visit reminders, lab prep instructions, supplement adherence prompts, and workshop invitations via SMS, voice, and portal — reducing transition dropout with predictive modeling and motivational dietary milestone celebrations."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors nutritional biomarkers and supplement adherence in real time, triages meal planning and transition symptom concerns with AI severity assessment, and achieves 91% first-call resolution for plant-based nutrition post-consultation inquiries."
      }
    ]
  },
  {
    "slug": "precision-health-coaching",
    "specialty": "Precision Health Coaching",
    "tagline": "Orchestrate every precision health coaching patient journey from genomic assessment referral to personalized wellness optimization with zero patients lost to follow-up",
    "heroDescription": "Configural transforms precision health coaching practices by automating referral intake, coordinating genomic and biomarker-driven treatment plans, tracking personalized intervention outcomes, and ensuring every patient remains engaged across nutrigenomics, pharmacogenomics, and lifestyle optimization pathways tailored to their unique biological profile.",
    "description": "Precision health coaching practices face complex coordination across genomic testing, biomarker-driven interventions, nutrigenomic meal planning, pharmacogenomic medication optimization, and wearable data integration. Test result interpretation delays care, personalized protocol compliance tracking lacks automation, and patients disengage when the connection between their genomic data and daily actions is not reinforced.",
    "workflows": [
      "Referral intake with OCR extraction of genomic test results, biomarker panels, wearable device data summaries, and health risk assessments with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on genomic report complexity, biomarker review urgency, coaching session frequency requirements, and provider specialization in nutrigenomics versus pharmacogenomics",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by actionable genomic findings severity and biomarker intervention timing",
      "Pre-treatment prep automation — genomic test kit shipping and completion tracking, wearable device setup instructions, baseline biomarker collection requirements, and health goal questionnaires with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for coaching sessions, genomic counseling, and biomarker check-ins via SMS, voice, and portal",
      "Real-time biomarker trend and wearable data monitoring with AI severity assessment and escalation for patients showing genomic risk factor activation or declining personalized intervention outcomes",
      "Post-treatment AI triage with 91% first-call resolution — addressing genomic report interpretation questions, supplement protocol adjustments, and wearable data anomaly concerns",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across quarterly biomarker reviews, annual genomic reassessments, and ongoing personalized protocol optimization milestones"
    ],
    "results": [
      {
        "value": "88%",
        "label": "Personalized protocol adherence rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "63%",
        "label": "Reduction in genomic test-to-action delays"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in precision programs"
      }
    ],
    "challenges": [
      "Genomic test results arrive in varied formats requiring manual interpretation before personalized protocols can be created and initiated",
      "Wearable device data integration lacks automated pipelines, creating delays in correlating real-time metrics with genomic insights",
      "Personalized supplement and nutrition protocols based on nutrigenomic findings require ongoing compliance tracking that breaks down without automation",
      "Pharmacogenomic medication adjustments require coordination with prescribers that stalls when communication is manual",
      "Patient calls about genomic report interpretation, supplement interactions, and wearable data anomalies overwhelm staff without structured triage",
      "Referrals for complex multi-gene risk profiles with actionable findings sit unprocessed, delaying personalized intervention windows"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts precision health referral data via OCR, processes genomic test results and biomarker panels, matches patients across systems, verifies insurance eligibility, and flags high-risk genomic profiles with actionable pharmacogenomic or nutrigenomic findings for expedited coaching enrollment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates genomic counseling sessions, biomarker review appointments, coaching visit sequences, and pharmacogenomic consultation referrals while filling cancellations within minutes through AI-driven waitlist prioritization based on genomic finding actionability."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for coaching session reminders, genomic test kit completion prompts, and biomarker check-in scheduling via SMS, voice, and portal — reducing disengagement with predictive modeling and personalized genomic insight-driven motivational messaging."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors biomarker trends and wearable data patterns in real time, triages genomic interpretation and protocol adjustment calls with AI severity assessment, and achieves 91% first-call resolution for precision health coaching post-session inquiries."
      }
    ]
  },
  {
    "slug": "preventive-cardiology-coaching",
    "specialty": "Preventive Cardiology Coaching",
    "tagline": "Automate every preventive cardiology patient journey from cardiovascular risk referral to lifelong heart health maintenance with zero patients lost to follow-up",
    "heroDescription": "Configural powers preventive cardiology coaching practices by automating referral intake, coordinating lipid management protocols, tracking cardiovascular risk scores longitudinally, and ensuring every patient remains engaged across statin optimization, lifestyle modification, and cardiac imaging surveillance pathways.",
    "description": "Preventive cardiology coaching practices manage complex risk reduction programs across lipid panel optimization, coronary calcium scoring follow-up, blood pressure management, lifestyle coaching for diet and exercise, and statin therapy titration. Patients fall off lipid monitoring schedules, lifestyle modification programs lose momentum, and coronary calcium score follow-up imaging is missed.",
    "workflows": [
      "Referral intake with OCR extraction of lipid panels, coronary calcium scores, Framingham risk calculations, and cardiac imaging reports with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on cardiovascular risk tier, lipid panel timing requirements, cardiac imaging intervals, and provider specialization in pharmacotherapy versus lifestyle coaching",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by cardiovascular risk score severity and overdue lipid monitoring flags",
      "Pre-treatment prep automation — fasting lipid panel instructions, dietary recall questionnaires, exercise capacity assessments, and cardiac imaging preparation guidelines with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for lipid reviews, cardiac imaging, and coaching sessions via SMS, voice, and portal",
      "Real-time cardiovascular risk marker monitoring with AI severity assessment and escalation for patients showing LDL trajectory increases, blood pressure trends, or coronary calcium score progression",
      "Post-treatment AI triage with 91% first-call resolution — addressing statin side effect management, dietary modification questions, and exercise intensity guidance for cardiac patients",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across quarterly lipid panels, annual cardiac imaging, and ongoing cardiovascular risk reassessments"
    ],
    "results": [
      {
        "value": "93%",
        "label": "Lipid monitoring schedule adherence"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "56%",
        "label": "Reduction in cardiac imaging follow-up gaps"
      },
      {
        "value": "0",
        "label": "Patients lost to cardiovascular risk surveillance"
      }
    ],
    "challenges": [
      "Lipid panel monitoring schedules during statin titration break down when manual tracking cannot enforce quarterly lab draw timing",
      "Coronary calcium score follow-up imaging at 3-5 year intervals lapses without automated long-cycle surveillance scheduling",
      "Lifestyle modification programs for diet and exercise lose patient engagement without sustained multi-channel reinforcement",
      "Statin therapy side effect management requires timely provider follow-up that delays when calls are manually triaged",
      "Cardiovascular risk score recalculation requires aggregating lipid, imaging, and lifestyle data from multiple sources with no unified dashboard",
      "Referrals from primary care with complex multi-factor cardiovascular risk profiles sit unprocessed, delaying preventive intervention"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts preventive cardiology referral data via OCR, processes lipid panels and coronary calcium scores, matches patients across systems, verifies insurance eligibility, and flags high-risk cardiovascular profiles with LDL above target or progressive calcium scores for expedited evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates lipid monitoring sequences, cardiac imaging intervals, lifestyle coaching sessions, and medication management visits while filling cancellations within minutes through AI-driven waitlist prioritization based on cardiovascular risk tier and monitoring urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for fasting lab reminders, cardiac imaging prep, and lifestyle coaching session notifications via SMS, voice, and portal — reducing program attrition with predictive modeling and cardiovascular risk progress updates showing patient improvement trends."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors lipid trajectories, blood pressure trends, and cardiac imaging results in real time, triages statin side effect and lifestyle modification calls with AI severity assessment, and achieves 91% first-call resolution for preventive cardiology post-visit inquiries."
      }
    ]
  },
  {
    "slug": "sports-performance-medicine",
    "specialty": "Sports & Performance Medicine",
    "tagline": "Streamline every sports medicine patient journey from injury referral to full return-to-play clearance with zero athletes lost to follow-up",
    "heroDescription": "Configural transforms sports and performance medicine practices by automating referral intake, coordinating rehabilitation protocols across physical therapy and imaging, tracking return-to-play milestone progression, and ensuring every athlete remains engaged from acute injury evaluation through progressive loading to competition clearance.",
    "description": "Sports and performance medicine practices manage complex rehabilitation workflows across acute injury evaluation, advanced imaging coordination, physical therapy progression, concussion protocol management, and return-to-play clearance. Athletes miss critical rehabilitation milestones, concussion return-to-play protocols are not systematically tracked, and imaging coordination delays extend recovery timelines.",
    "workflows": [
      "Referral intake with OCR extraction of injury reports, MRI results, concussion assessments, and athletic training records with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on rehabilitation phase, imaging study requirements, concussion protocol stage, and provider specialization in orthopedic versus concussion management",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by competition timeline urgency and rehabilitation phase progression needs",
      "Pre-treatment prep automation — injury history questionnaires, functional movement screening forms, concussion symptom checklists, and imaging preparation instructions with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for rehabilitation visits, imaging studies, and return-to-play assessments via SMS, voice, and portal",
      "Real-time rehabilitation milestone and concussion symptom monitoring with AI severity assessment and escalation for athletes showing regression, persistent symptoms, or re-injury indicators",
      "Post-treatment AI triage with 91% first-call resolution — addressing rehabilitation exercise modifications, pain management during recovery, and activity restriction clarification",
      "Automated survivorship/follow-up surveillance — zero athletes lost to follow-up across rehabilitation milestones, return-to-play clearance stages, and post-clearance monitoring periods"
    ],
    "results": [
      {
        "value": "91%",
        "label": "Rehabilitation protocol completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "44%",
        "label": "Faster average return-to-play timelines"
      },
      {
        "value": "0",
        "label": "Athletes lost to follow-up during rehabilitation"
      }
    ],
    "challenges": [
      "Concussion return-to-play protocols require systematic stage-by-stage progression tracking that breaks down with manual management",
      "MRI and advanced imaging coordination between sports medicine, radiology, and orthopedic surgery delays diagnosis and treatment initiation",
      "Athletes miss rehabilitation milestones when progressive loading schedules are not reinforced through automated multi-channel outreach",
      "Return-to-play clearance requires aggregating rehabilitation data, imaging results, and functional assessments with no unified view",
      "Post-injury calls about exercise modifications, swelling management, and activity restrictions overwhelm staff without AI-assisted triage",
      "Referrals from athletic trainers and emergency departments with acute injury documentation sit unprocessed during competition season peaks"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts sports medicine referral data via OCR, processes injury reports and MRI results, matches athletes across training and clinical systems, verifies insurance eligibility, and flags acute injuries and concussions for same-day evaluation scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates rehabilitation visit sequences, imaging study coordination, concussion protocol stage assessments, and return-to-play evaluations while filling cancellations within minutes through AI-driven waitlist prioritization based on competition timeline urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for rehabilitation session reminders, home exercise program prompts, and return-to-play milestone tracking via SMS, voice, and portal — reducing rehabilitation dropout with predictive modeling and progressive loading achievement notifications."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors rehabilitation progress and concussion symptom trajectories in real time, triages exercise modification and pain management calls with AI severity assessment, and achieves 91% first-call resolution for sports medicine post-treatment inquiries."
      }
    ]
  },
  {
    "slug": "stress-burnout-medicine",
    "specialty": "Stress & Burnout Medicine",
    "tagline": "Orchestrate every stress and burnout patient journey from occupational health referral to sustained resilience recovery with zero patients lost to follow-up",
    "heroDescription": "Configural transforms stress and burnout medicine practices by automating referral intake, coordinating multi-modal recovery programs across cortisol management, cognitive behavioral therapy, and lifestyle restructuring, tracking burnout severity scores longitudinally, and ensuring every patient remains engaged from acute burnout assessment through resilience building to long-term wellness maintenance.",
    "description": "Stress and burnout medicine practices manage complex recovery programs spanning cortisol and HPA axis evaluation, cognitive behavioral interventions, sleep restoration, mindfulness training, and workplace reintegration counseling. Patients in acute burnout disengage from multi-week recovery protocols, cortisol monitoring lapses, and the transition from intensive treatment to maintenance resilience programs loses patients.",
    "workflows": [
      "Referral intake with OCR extraction of burnout inventories, cortisol panels, occupational health assessments, and psychological evaluations with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on burnout severity tier, recovery phase, cortisol testing timing requirements, and provider specialization in HPA axis management versus cognitive behavioral therapy",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by burnout severity scores and acute crisis indicators",
      "Pre-treatment prep automation — Maslach Burnout Inventory completion, sleep hygiene assessments, cortisol collection kit instructions, and workplace stressor documentation with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for therapy sessions, cortisol check-ins, and resilience workshops via SMS, voice, and portal",
      "Real-time burnout severity score and cortisol pattern monitoring with AI severity assessment and escalation for patients showing crisis indicators or worsening depersonalization symptoms",
      "Post-treatment AI triage with 91% first-call resolution — addressing stress management technique questions, sleep disruption concerns, and workplace reintegration anxieties",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across recovery milestones, quarterly resilience assessments, and long-term maintenance program check-ins"
    ],
    "results": [
      {
        "value": "84%",
        "label": "Burnout recovery program completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "66%",
        "label": "Reduction in recovery program dropout rates"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up during burnout recovery"
      }
    ],
    "challenges": [
      "Patients in acute burnout disengage from multi-week recovery protocols when manual follow-up cannot provide sustained, empathetic outreach",
      "Cortisol and HPA axis monitoring requires precisely timed specimen collection that patients miss without automated scheduling and reminders",
      "The transition from intensive burnout treatment to maintenance resilience programs loses patients without structured handoff workflows",
      "Workplace reintegration counseling requires coordination with occupational health that stalls when communication is manual",
      "Post-session calls about stress management techniques, sleep difficulties, and crisis support overwhelm staff without AI-assisted severity triage",
      "Referrals from primary care and employee assistance programs with complex psychosomatic burnout presentations sit unprocessed during high-demand periods"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts stress and burnout referral data via OCR, processes burnout inventories and cortisol panels, matches patients across occupational and clinical systems, verifies insurance eligibility, and flags severe burnout with crisis indicators for immediate scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates therapy session sequences, cortisol monitoring appointments, resilience workshops, and workplace reintegration consultations while filling cancellations within minutes through AI-driven waitlist prioritization based on burnout severity tier."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for therapy reminders, cortisol collection prompts, and resilience milestone tracking via SMS, voice, and portal — reducing recovery dropout with predictive modeling and compassionate, burnout-sensitive communication that avoids adding to patient overwhelm."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors burnout severity scores and cortisol patterns in real time, triages crisis and stress management calls with AI severity assessment, and achieves 91% first-call resolution for stress and burnout medicine post-session concerns."
      }
    ]
  },
  {
    "slug": "telepsychiatry-behavioral-coaching",
    "specialty": "Telepsychiatry & Behavioral Coaching",
    "tagline": "Automate every telepsychiatry patient journey from behavioral health referral to sustained medication stability with zero patients lost to follow-up",
    "heroDescription": "Configural transforms telepsychiatry and behavioral coaching practices by automating referral intake, coordinating virtual medication management and therapy sessions, tracking PHQ-9 and GAD-7 scores longitudinally, and ensuring every patient remains engaged across psychiatric evaluation, therapy, and medication stabilization pathways — all optimized for virtual care delivery.",
    "description": "Telepsychiatry and behavioral coaching practices face unique virtual care challenges across psychiatric medication titration, behavioral coaching session continuity, crisis management in remote settings, and outcome tracking when patients are seen entirely through video. No-show rates for virtual behavioral health exceed in-person rates, medication adherence monitoring lacks real-time visibility, and patients disengage from multi-session coaching programs.",
    "workflows": [
      "Referral intake with OCR extraction of psychiatric evaluations, PHQ-9 and GAD-7 scores, medication histories, and prior treatment records with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal virtual slots based on psychiatric acuity, medication management timing, coaching session frequency, and provider specialization in prescribing versus behavioral therapy modalities",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by psychiatric severity scores and medication management urgency",
      "Pre-treatment prep automation — validated screening questionnaire delivery, technology setup verification for video sessions, medication reconciliation forms, and therapy goal worksheets with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for virtual psychiatric visits, coaching sessions, and medication check-ins via SMS, voice, and portal",
      "Real-time PHQ-9, GAD-7, and medication adherence monitoring with AI severity assessment and escalation for patients showing worsening scores or missing critical medication doses",
      "Post-treatment AI triage with 91% first-call resolution — addressing medication side effect concerns, between-session crisis support, and technical troubleshooting for virtual visit issues",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across medication stabilization milestones, quarterly outcome assessments, and long-term behavioral coaching maintenance"
    ],
    "results": [
      {
        "value": "78%",
        "label": "Virtual session attendance rate improvement"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "52%",
        "label": "Reduction in medication management gaps"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in virtual behavioral programs"
      }
    ],
    "challenges": [
      "Virtual behavioral health no-show rates exceed in-person rates when automated engagement does not account for technology barriers and session fatigue",
      "Psychiatric medication titration monitoring lacks real-time adherence visibility when patients are managed entirely through virtual encounters",
      "Multi-session behavioral coaching programs lose patients when virtual session continuity is disrupted by scheduling gaps and manual re-engagement",
      "Crisis management in remote settings requires automated escalation pathways that connect virtual patients to local emergency resources",
      "Post-session calls about medication side effects, crisis support, and virtual platform technical issues overwhelm staff without structured triage",
      "Referrals from primary care with complex psychiatric presentations and multiple prior treatment failures sit unprocessed during virtual intake backlogs"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts telepsychiatry referral data via OCR, processes psychiatric evaluations and screening scores, matches patients across systems, verifies insurance and telehealth eligibility, and flags high-acuity cases with suicidal ideation or active psychosis for urgent virtual scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates virtual psychiatric evaluation sequences, medication management check-ins, behavioral coaching sessions, and group therapy slots while filling cancellations within minutes through AI-driven waitlist prioritization based on psychiatric severity and medication timing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for virtual session reminders with technology check prompts, screening questionnaire completion requests, and medication adherence nudges via SMS, voice, and portal — reducing virtual no-shows with predictive modeling and session prep automation."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors PHQ-9, GAD-7, and medication adherence patterns in real time, triages between-session crisis calls and medication concerns with AI severity assessment and local resource routing, and achieves 91% first-call resolution for telepsychiatry post-session inquiries."
      }
    ]
  },
  {
    "slug": "teleprimary-preventive-care",
    "specialty": "Teleprimary Preventive Care",
    "tagline": "Streamline every teleprimary care patient journey from virtual intake to comprehensive preventive health maintenance with zero patients lost to follow-up",
    "heroDescription": "Configural transforms teleprimary preventive care practices by automating referral intake, coordinating virtual wellness visits and preventive screenings, tracking age-appropriate screening schedules, and ensuring every patient remains engaged across chronic disease prevention, immunization tracking, and annual wellness pathways — all optimized for virtual-first primary care delivery.",
    "description": "Teleprimary preventive care practices manage high-volume virtual patient panels across annual wellness visits, age-appropriate cancer screenings, immunization schedules, chronic disease risk assessments, and lab ordering coordination. Preventive screening schedules lapse in virtual-first models, lab ordering requires coordination with local facilities, and patients disengage from comprehensive wellness programs when virtual visit continuity breaks down.",
    "workflows": [
      "Referral intake with OCR extraction of prior medical records, immunization histories, screening results, and health risk assessments with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal virtual slots based on annual wellness visit timing, age-appropriate screening due dates, chronic disease risk tiers, and provider panel capacity for longitudinal virtual primary care",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by overdue preventive screening urgency and chronic disease risk escalation flags",
      "Pre-treatment prep automation — health risk assessment questionnaires, local lab facility assignments for blood draws, immunization record verification, and age-appropriate screening preparation guides with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for virtual wellness visits, local lab appointments, and screening follow-ups via SMS, voice, and portal",
      "Real-time preventive screening compliance and chronic disease risk marker monitoring with AI severity assessment and escalation for patients with overdue screenings or emerging risk factors",
      "Post-treatment AI triage with 91% first-call resolution — addressing lab result interpretation questions, screening follow-up concerns, and medication management inquiries between virtual visits",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across annual wellness visits, age-appropriate screening schedules, and immunization series completions"
    ],
    "results": [
      {
        "value": "91%",
        "label": "Preventive screening schedule compliance"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "47%",
        "label": "Reduction in overdue cancer screening rates"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in preventive care programs"
      }
    ],
    "challenges": [
      "Age-appropriate cancer screening schedules lapse in virtual-first models when automated surveillance does not track USPSTF guideline intervals",
      "Lab ordering coordination between virtual providers and local draw facilities creates completion gaps when managed manually",
      "Immunization series tracking across multiple vaccines and boosters lacks automated scheduling tied to age and risk-based guidelines",
      "Chronic disease risk assessments require longitudinal data aggregation that is fragmented across virtual visit documentation",
      "Post-visit calls about lab results, screening recommendations, and medication questions overwhelm virtual care teams without structured triage",
      "New patient records from prior providers arrive in varied formats requiring manual extraction before virtual wellness visit histories are complete"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts teleprimary care referral data via OCR, processes prior medical records and screening histories, matches patients across systems, verifies insurance and telehealth eligibility, and flags patients with multiple overdue preventive screenings for expedited virtual wellness scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates annual wellness visit scheduling, local lab draw coordination, screening follow-up appointments, and immunization series timing while filling cancellations within minutes through AI-driven waitlist prioritization based on screening overdue status and chronic disease risk tier."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for virtual visit reminders with technology prep, lab draw scheduling at local facilities, and screening due date notifications via SMS, voice, and portal — reducing preventive care gaps with predictive modeling and guideline-driven automated scheduling."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors preventive screening compliance and chronic disease risk markers in real time, triages lab result questions and medication concerns with AI severity assessment, and achieves 91% first-call resolution for teleprimary care post-visit inquiries."
      }
    ]
  },
  {
    "slug": "virtual-rehabilitation-medicine",
    "specialty": "Virtual Rehabilitation Medicine",
    "tagline": "Coordinate every virtual rehabilitation patient journey from therapy referral to functional recovery milestone achievement with zero patients lost to follow-up",
    "heroDescription": "Configural transforms virtual rehabilitation medicine practices by automating referral intake, coordinating remote therapeutic exercise programs, tracking functional outcome measures, and ensuring every patient remains engaged across physical therapy, occupational therapy, and speech therapy pathways — all delivered through virtual care with remote monitoring integration.",
    "description": "Virtual rehabilitation medicine practices face unique challenges in delivering therapy through video sessions while maintaining clinical outcome tracking, exercise program adherence, and progressive loading protocols. Patients drop off multi-week virtual therapy programs, home exercise compliance lacks visibility, and functional outcome assessments are harder to standardize across remote encounters.",
    "workflows": [
      "Referral intake with OCR extraction of therapy prescriptions, functional assessments, surgical reports, and imaging results with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal virtual slots based on rehabilitation phase, session frequency requirements, therapist specialization in PT versus OT versus speech, and home exercise program progression timing",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by post-surgical rehabilitation timing urgency and functional decline indicators",
      "Pre-treatment prep automation — home exercise space setup guides, equipment requirement checklists, video platform testing instructions, and baseline functional self-assessment forms with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for virtual therapy sessions, home exercise check-ins, and functional reassessments via SMS, voice, and portal",
      "Real-time home exercise adherence and functional outcome monitoring with AI severity assessment and escalation for patients showing functional decline, pain escalation, or exercise non-compliance trends",
      "Post-treatment AI triage with 91% first-call resolution — addressing exercise modification requests, pain during home programs, and equipment setup troubleshooting",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across rehabilitation milestones, functional reassessment schedules, and maintenance exercise program transitions"
    ],
    "results": [
      {
        "value": "82%",
        "label": "Virtual therapy program completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "57%",
        "label": "Improvement in home exercise compliance visibility"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up during virtual rehabilitation"
      }
    ],
    "challenges": [
      "Multi-week virtual therapy programs suffer higher dropout rates than in-person when automated engagement does not sustain patient motivation remotely",
      "Home exercise program compliance lacks real-time visibility without integrated remote monitoring and automated adherence tracking",
      "Functional outcome assessment standardization is difficult across virtual encounters when measurement tools require manual adaptation",
      "Post-surgical rehabilitation timing windows are missed when virtual therapy scheduling does not enforce protocol-driven session frequency",
      "Patient calls about exercise modifications, pain during home programs, and video platform issues overwhelm staff without structured triage",
      "Therapy referrals with complex post-surgical and neurological rehabilitation needs require specialized virtual protocol matching that delays care when manual"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts virtual rehabilitation referral data via OCR, processes therapy prescriptions and surgical reports, matches patients across systems, verifies insurance and telehealth eligibility, and flags post-surgical cases with narrow rehabilitation windows for expedited virtual therapy scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates multi-week virtual therapy session sequences across PT, OT, and speech pathways, coordinates functional reassessment timing, and fills cancellations within minutes through AI-driven waitlist prioritization based on rehabilitation phase urgency and post-surgical timing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for virtual session reminders with technology check prompts, home exercise completion tracking, and functional milestone celebrations via SMS, voice, and portal — reducing virtual dropout with predictive modeling and progressive achievement notifications."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors home exercise adherence and functional outcomes in real time, triages pain escalation and exercise modification requests with AI severity assessment, and achieves 91% first-call resolution for virtual rehabilitation post-session inquiries."
      }
    ]
  },
  {
    "slug": "womens-integrative-health",
    "specialty": "Women's Integrative Health",
    "tagline": "Orchestrate every women's integrative health patient journey from hormonal assessment referral to lifelong wellness optimization with zero patients lost to follow-up",
    "heroDescription": "Configural transforms women's integrative health practices by automating referral intake, coordinating multi-modality treatment plans across hormonal balancing, pelvic health therapy, nutritional medicine, and stress management, tracking cycle-based and menopausal biomarkers, and ensuring every patient remains engaged across fertility optimization, perimenopause management, and post-menopausal wellness pathways.",
    "description": "Women's integrative health practices manage complex treatment coordination across hormonal assessment, bioidentical hormone therapy, pelvic floor rehabilitation, fertility optimization, and menopause management. Cycle-based treatment timing adds scheduling complexity, multi-modality protocols lose patients at transition points, and longitudinal hormonal monitoring across life stages requires systematic tracking.",
    "workflows": [
      "Referral intake with OCR extraction of hormonal panels, menstrual cycle data, pelvic health assessments, and prior treatment records with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on menstrual cycle timing for hormonal testing, treatment modality sequencing, pelvic floor therapy progression, and provider specialization in fertility versus menopause management",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by hormonal symptom severity and cycle-dependent testing window urgency",
      "Pre-treatment prep automation — cycle tracking instructions, hormonal panel fasting requirements, pelvic health questionnaires, and integrative therapy preparation guides with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for hormonal consultations, pelvic therapy sessions, and biomarker check-ins via SMS, voice, and portal",
      "Real-time hormonal biomarker and symptom tracking monitoring with AI severity assessment and escalation for patients showing concerning hormonal trends, abnormal bleeding patterns, or treatment non-response",
      "Post-treatment AI triage with 91% first-call resolution — addressing bioidentical hormone therapy questions, pelvic exercise technique concerns, and menopausal symptom management inquiries",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across cycle-based monitoring, quarterly hormonal panels, and life-stage transition assessments from fertility through post-menopause"
    ],
    "results": [
      {
        "value": "90%",
        "label": "Hormonal monitoring schedule adherence"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "62%",
        "label": "Reduction in cycle-dependent testing window misses"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up across hormonal life stages"
      }
    ],
    "challenges": [
      "Cycle-dependent hormonal testing requires precise scheduling within narrow windows that are missed without automated cycle tracking integration",
      "Multi-modality treatment plans spanning hormonal therapy, pelvic rehabilitation, and nutritional medicine lose patients at modality transition points",
      "Bioidentical hormone therapy monitoring requires systematic lab tracking that lapses when manual systems cannot enforce titration schedules",
      "Pelvic floor therapy progression across multi-week protocols suffers from high dropout without sustained engagement and milestone tracking",
      "Patient calls about hormone therapy side effects, pelvic exercise technique, and menopausal symptoms overwhelm staff without structured triage",
      "Referrals with complex multi-system hormonal presentations spanning thyroid, adrenal, and reproductive axes sit unprocessed during high-volume periods"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts women's integrative health referral data via OCR, processes hormonal panels and pelvic assessments, matches patients across systems, verifies insurance eligibility, and flags severe hormonal imbalances and acute pelvic symptoms for expedited evaluation scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates cycle-based hormonal testing, pelvic therapy progression, nutritional counseling, and hormone therapy monitoring sequences while filling cancellations within minutes through AI-driven waitlist prioritization based on cycle window timing and symptom severity."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for cycle-timed appointment reminders, fasting lab prep, pelvic therapy session notifications, and life-stage transition check-ins via SMS, voice, and portal — reducing dropout with predictive modeling and empathetic, women-centered communication."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors hormonal biomarkers and treatment response patterns in real time, triages hormone therapy and pelvic health concerns with AI severity assessment, and achieves 91% first-call resolution for women's integrative health post-treatment inquiries."
      }
    ]
  },
  {
    "slug": "yoga-movement-therapy",
    "specialty": "Yoga & Movement Therapy",
    "tagline": "Coordinate every movement therapy patient journey from rehabilitation referral to sustained functional mobility with zero patients lost to follow-up",
    "heroDescription": "Configural transforms yoga and movement therapy practices by automating referral intake, coordinating therapeutic movement programs across individual sessions and group classes, tracking functional mobility outcomes, and ensuring every patient remains engaged from initial assessment through progressive skill building to independent practice maintenance.",
    "description": "Yoga and movement therapy practices face coordination challenges across individual therapeutic sessions, group class management, progressive mobility protocols, and functional outcome tracking. Patients disengage from multi-week progressive programs, group class attendance fluctuates unpredictably, and functional mobility gains are lost when patients transition to independent practice without structured follow-up.",
    "workflows": [
      "Referral intake with OCR extraction of physical therapy notes, mobility assessments, pain evaluations, and medical clearance documentation with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on mobility level, therapeutic versus wellness class placement, group class capacity, and provider specialization in adaptive yoga versus performance-focused movement",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by pain severity, post-surgical rehabilitation timing, and progressive program enrollment deadlines",
      "Pre-treatment prep automation — mobility self-assessment forms, movement history questionnaires, class preparation guides with attire and equipment lists, and medical clearance verification with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for individual sessions, group classes, and functional reassessments via SMS, voice, and portal",
      "Real-time functional mobility and pain score monitoring with AI severity assessment and escalation for patients showing declining range of motion, increased pain reports, or movement regression",
      "Post-treatment AI triage with 91% first-call resolution — addressing movement modification questions, post-session soreness management, and home practice technique concerns",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across progressive mobility milestones, quarterly functional assessments, and independent practice transition check-ins"
    ],
    "results": [
      {
        "value": "81%",
        "label": "Movement therapy program completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "53%",
        "label": "Reduction in group class no-show rates"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in movement programs"
      }
    ],
    "challenges": [
      "Progressive movement therapy programs spanning multiple weeks lose patients when manual follow-up cannot sustain engagement across skill-building phases",
      "Group class capacity management fluctuates unpredictably without automated attendance tracking and waitlist backfilling",
      "Functional mobility outcome tracking across range of motion, balance, and pain metrics falls behind without systematic assessment scheduling",
      "The transition from supervised therapeutic sessions to independent practice loses patients without structured follow-up and home practice monitoring",
      "Post-session calls about movement modifications, soreness management, and technique questions overwhelm staff without structured triage",
      "Referrals from physical therapy, orthopedics, and pain management with specific movement contraindications require careful class placement that delays enrollment when manual"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts movement therapy referral data via OCR, processes mobility assessments and medical clearances, matches patients across rehabilitation and wellness systems, verifies insurance eligibility, and flags patients with specific contraindications for appropriate adaptive program placement."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates individual therapeutic session sequences, group class placements based on mobility level, functional reassessment timing, and independent practice transitions while filling cancellations within minutes through AI-driven waitlist prioritization based on rehabilitation urgency."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for session reminders, group class attendance prompts, home practice encouragement, and functional milestone celebrations via SMS, voice, and portal — reducing program dropout with predictive modeling and progressive achievement tracking."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors functional mobility outcomes and pain trajectories in real time, triages movement modification and soreness management calls with AI severity assessment, and achieves 91% first-call resolution for yoga and movement therapy post-session inquiries."
      }
    ]
  },
  {
    "slug": "sleep-coaching-recovery-medicine",
    "specialty": "Sleep Coaching & Recovery Medicine",
    "tagline": "Automate every sleep medicine patient journey from insomnia referral to sustained sleep quality optimization with zero patients lost to follow-up",
    "heroDescription": "Configural transforms sleep coaching and recovery medicine practices by automating referral intake, coordinating CBT-I protocols and sleep study logistics, tracking sleep quality metrics longitudinally, and ensuring every patient remains engaged across cognitive behavioral therapy for insomnia, CPAP titration, and circadian rhythm optimization pathways.",
    "description": "Sleep coaching and recovery medicine practices manage complex workflows across CBT-I multi-session protocols, sleep study coordination with external labs, CPAP titration and adherence monitoring, and circadian rhythm assessment. Patients drop off CBT-I protocols before completion, CPAP adherence declines without proactive monitoring, and sleep study coordination with external facilities creates referral leakage.",
    "workflows": [
      "Referral intake with OCR extraction of sleep questionnaires, Epworth Sleepiness Scale scores, polysomnography results, and CPAP adherence reports with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on CBT-I session sequence, sleep study facility availability, CPAP follow-up timing, and provider specialization in behavioral sleep medicine versus medical sleep disorders",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by sleep disorder severity, CPAP compliance urgency, and CBT-I protocol continuation needs",
      "Pre-treatment prep automation — sleep diary templates, sleep hygiene assessment questionnaires, sleep study preparation instructions, and CPAP equipment setup guides with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for CBT-I sessions, sleep studies, and CPAP check-ins via SMS, voice, and portal",
      "Real-time sleep quality metric and CPAP adherence monitoring with AI severity assessment and escalation for patients showing declining sleep efficiency, CPAP non-compliance, or excessive daytime sleepiness",
      "Post-treatment AI triage with 91% first-call resolution — addressing CPAP mask fit issues, sleep hygiene technique questions, and circadian rhythm adjustment concerns",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across CBT-I completion milestones, quarterly sleep quality assessments, and annual CPAP adherence reviews"
    ],
    "results": [
      {
        "value": "86%",
        "label": "CBT-I protocol completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "69%",
        "label": "Improvement in CPAP long-term adherence"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in sleep programs"
      }
    ],
    "challenges": [
      "CBT-I multi-session protocols have high dropout rates when manual scheduling cannot maintain consistent weekly session cadence",
      "Sleep study coordination with external polysomnography labs creates referral leakage when handoffs are managed manually",
      "CPAP adherence declines progressively without automated monitoring and proactive intervention for non-compliant patients",
      "Circadian rhythm assessment and treatment require timed interventions that break down without automated scheduling tied to sleep-wake cycles",
      "Patient calls about CPAP mask issues, sleep hygiene adjustments, and medication timing overwhelm staff without AI-assisted triage",
      "Referrals with complex sleep disorder presentations including comorbid insomnia and sleep apnea sit unprocessed during intake backlogs"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts sleep medicine referral data via OCR, processes Epworth scores and polysomnography results, matches patients across systems, verifies insurance eligibility, and flags severe sleep apnea and high-risk insomnia cases for expedited evaluation scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates CBT-I session sequences, sleep study facility coordination, CPAP follow-up timing, and circadian rhythm assessment appointments while filling cancellations within minutes through AI-driven waitlist prioritization based on sleep disorder severity and protocol continuity needs."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for CBT-I session reminders, sleep diary completion prompts, CPAP adherence check-ins, and sleep study preparation instructions via SMS, voice, and portal — reducing protocol dropout with predictive modeling and sleep quality improvement progress updates."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors sleep quality metrics and CPAP adherence data in real time, triages mask fit issues and sleep hygiene concerns with AI severity assessment, and achieves 91% first-call resolution for sleep coaching post-session inquiries."
      }
    ]
  },
  {
    "slug": "digital-wellness-medicine",
    "specialty": "Digital Wellness Medicine",
    "tagline": "Orchestrate every digital wellness patient journey from screen dependency referral to sustained healthy technology habits with zero patients lost to follow-up",
    "heroDescription": "Configural transforms digital wellness medicine practices by automating referral intake, coordinating digital detox protocols and behavioral modification programs, tracking screen time and digital dependency metrics, and ensuring every patient remains engaged across technology addiction assessment, cognitive behavioral interventions, and long-term digital hygiene maintenance.",
    "description": "Digital wellness medicine practices face emerging challenges in managing technology addiction assessments, screen time reduction protocols, digital eye strain treatment, gaming disorder interventions, and social media dependency programs. Patients struggle with digital detox compliance, behavioral modification programs lack longitudinal outcome tracking, and the irony of using digital tools to treat digital dependency requires thoughtful multi-channel engagement strategies.",
    "workflows": [
      "Referral intake with OCR extraction of screen time reports, digital dependency assessments, ophthalmologic evaluations, and psychological screens with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on digital dependency severity, behavioral modification phase, group program availability, and provider specialization in gaming disorder versus social media dependency versus digital eye strain",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by digital dependency severity scores and behavioral crisis indicators",
      "Pre-treatment prep automation — digital usage tracking app setup, screen time baseline documentation, digital environment assessment questionnaires, and device management preparation guides with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for therapy sessions, group programs, and digital detox milestones via SMS, voice, and portal with thoughtful timing to avoid contributing to screen overload",
      "Real-time screen time metrics and digital dependency score monitoring with AI severity assessment and escalation for patients showing usage rebound, withdrawal symptoms, or non-compliance with reduction protocols",
      "Post-treatment AI triage with 91% first-call resolution — addressing digital detox withdrawal management, alternative activity suggestions, and relapse prevention strategy questions",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across digital detox milestones, quarterly behavioral assessments, and long-term digital hygiene maintenance check-ins"
    ],
    "results": [
      {
        "value": "76%",
        "label": "Digital detox program completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "48%",
        "label": "Average reduction in problematic screen time"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in digital wellness programs"
      }
    ],
    "challenges": [
      "Digital detox compliance tracking is paradoxically challenging when the tools for monitoring rely on the same technology patients are trying to reduce",
      "Gaming disorder and social media dependency interventions require sustained behavioral modification that loses patients without automated multi-week engagement",
      "Digital eye strain treatment coordination across ophthalmology, ergonomic assessment, and behavioral counseling lacks unified scheduling",
      "Screen time reduction protocols lack longitudinal outcome tracking to demonstrate sustained behavioral change versus temporary compliance",
      "Post-session calls about withdrawal symptoms, relapse triggers, and alternative activity planning overwhelm staff without structured triage",
      "Referrals for complex digital dependency with comorbid anxiety, depression, and ADHD require multi-specialty coordination that delays care when manual"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts digital wellness referral data via OCR, processes screen time reports and dependency assessments, matches patients across systems, verifies insurance eligibility, and flags severe gaming disorder and social media dependency cases with comorbid psychiatric conditions for expedited evaluation."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates behavioral modification session sequences, group digital detox programs, ophthalmologic evaluations, and ergonomic assessments while filling cancellations within minutes through AI-driven waitlist prioritization based on dependency severity and intervention phase timing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for therapy reminders, detox milestone tracking, and group program notifications via SMS, voice, and portal — with thoughtful timing algorithms that minimize digital notification burden while maintaining therapeutic engagement through non-digital channel emphasis."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors screen time metrics and dependency scores in real time, triages withdrawal symptom and relapse prevention calls with AI severity assessment, and achieves 91% first-call resolution for digital wellness post-session inquiries."
      }
    ]
  },
  {
    "slug": "longevity-metabolic-health",
    "specialty": "Longevity & Metabolic Health",
    "tagline": "Automate every longevity medicine patient journey from metabolic assessment referral to sustained healthspan optimization with zero patients lost to follow-up",
    "heroDescription": "Configural transforms longevity and metabolic health practices by automating referral intake, coordinating advanced biomarker testing panels, tracking metabolic age and biological aging indicators, and ensuring every patient remains engaged across hormone optimization, mitochondrial support, senolytic protocols, and long-term healthspan surveillance pathways.",
    "description": "Longevity and metabolic health practices manage sophisticated protocols across advanced biomarker panels, biological age testing, hormone optimization, mitochondrial function assessment, body composition analysis, and interventional aging therapies. Multi-panel lab coordination creates scheduling complexity, personalized protocol adherence lapses without systematic tracking, and patients disengage from long-cycle optimization programs that span years.",
    "workflows": [
      "Referral intake with OCR extraction of comprehensive metabolic panels, biological age assessments, hormone panels, and body composition data with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on biomarker panel timing requirements, fasting protocol compliance windows, body composition assessment intervals, and provider specialization in hormonal versus metabolic versus interventional longevity approaches",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by metabolic dysfunction severity and intervention protocol timing requirements",
      "Pre-treatment prep automation — multi-day fasting protocols for advanced biomarker panels, specimen collection instructions, body composition scan preparation, and supplement washout requirements with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for advanced lab panels, body composition scans, and optimization consultations via SMS, voice, and portal",
      "Real-time metabolic biomarker and biological age indicator monitoring with AI severity assessment and escalation for patients showing accelerated aging markers, insulin resistance progression, or inflammatory biomarker elevation",
      "Post-treatment AI triage with 91% first-call resolution — addressing supplement protocol questions, fasting protocol concerns, and biomarker interpretation inquiries between optimization visits",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across quarterly biomarker panels, semi-annual body composition assessments, and annual comprehensive longevity evaluations"
    ],
    "results": [
      {
        "value": "89%",
        "label": "Advanced biomarker panel completion rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "73%",
        "label": "Reduction in protocol adherence gaps"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up in longevity programs"
      }
    ],
    "challenges": [
      "Multi-panel advanced biomarker testing requires precise fasting and timing coordination that patients miss without automated scheduling and preparation workflows",
      "Personalized longevity protocols spanning supplements, hormones, and lifestyle interventions lose patient adherence across multi-year optimization programs",
      "Biological age testing and body composition assessments require recurring scheduling at defined intervals that lapses without automated surveillance",
      "Hormone optimization titration requires systematic lab monitoring that breaks down when manual tracking cannot enforce testing intervals",
      "Patient calls about supplement interactions, fasting protocols, and biomarker interpretation overwhelm staff without AI-assisted triage",
      "Referrals for complex metabolic dysfunction with multiple abnormal biomarker panels require prioritized intake that delays care when processed manually"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts longevity medicine referral data via OCR, processes comprehensive metabolic panels and biological age assessments, matches patients across systems, verifies insurance eligibility, and flags severe metabolic dysfunction and accelerated aging profiles for expedited optimization enrollment."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates advanced biomarker panel timing, body composition assessment intervals, hormone optimization visits, and comprehensive longevity evaluations while filling cancellations within minutes through AI-driven waitlist prioritization based on metabolic urgency and protocol timing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for fasting protocol reminders, lab panel preparation instructions, and optimization milestone tracking via SMS, voice, and portal — reducing long-cycle program attrition with predictive modeling and biological age improvement progress visualization prompts."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors metabolic biomarkers and biological aging indicators in real time, triages supplement protocol and hormone optimization concerns with AI severity assessment, and achieves 91% first-call resolution for longevity medicine post-consultation inquiries."
      }
    ]
  },
  {
    "slug": "lifestyle-psychiatry",
    "specialty": "Lifestyle Psychiatry",
    "tagline": "Streamline every lifestyle psychiatry patient journey from mental health referral to sustained wellness through evidence-based lifestyle interventions with zero patients lost to follow-up",
    "heroDescription": "Configural transforms lifestyle psychiatry practices by automating referral intake, coordinating treatment plans that integrate exercise prescriptions, nutritional psychiatry, sleep optimization, and social connection interventions alongside traditional psychiatric care, tracking multi-domain lifestyle adherence, and ensuring every patient remains engaged across pharmacotherapy reduction and lifestyle medicine pathways.",
    "description": "Lifestyle psychiatry practices manage complex treatment protocols that combine traditional psychiatric medication management with evidence-based lifestyle interventions including therapeutic exercise prescriptions, anti-inflammatory nutrition plans, sleep hygiene protocols, and social prescribing. Patients struggle to maintain multi-domain lifestyle changes while managing psychiatric medications, intervention adherence tracking is fragmented, and the transition from pharmacotherapy-heavy to lifestyle-centered treatment loses patients.",
    "workflows": [
      "Referral intake with OCR extraction of psychiatric evaluations, PHQ-9 and GAD-7 scores, medication lists, and lifestyle assessment questionnaires with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on psychiatric stability, lifestyle intervention phase, exercise prescription timing, nutritional consultation needs, and provider specialization in pharmacotherapy tapering versus lifestyle intervention initiation",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by psychiatric severity scores and lifestyle intervention milestone timing",
      "Pre-treatment prep automation — multi-domain lifestyle assessment batteries, exercise readiness questionnaires, dietary recall forms, sleep diary templates, and medication reconciliation with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for psychiatric visits, exercise coaching, nutrition consultations, and sleep optimization sessions via SMS, voice, and portal",
      "Real-time multi-domain lifestyle adherence and psychiatric symptom monitoring with AI severity assessment and escalation for patients showing mood deterioration, exercise non-compliance, or dietary regression",
      "Post-treatment AI triage with 91% first-call resolution — addressing exercise prescription modifications, nutritional psychiatry questions, and medication tapering concern management",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across psychiatric medication reviews, quarterly lifestyle assessments, and long-term wellness maintenance milestones"
    ],
    "results": [
      {
        "value": "82%",
        "label": "Multi-domain lifestyle intervention adherence"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "54%",
        "label": "Reduction in psychiatric medication burden over 12 months"
      },
      {
        "value": "0",
        "label": "Patients lost during pharmacotherapy-to-lifestyle transitions"
      }
    ],
    "challenges": [
      "Multi-domain lifestyle change programs spanning exercise, nutrition, sleep, and social connection overwhelm patients without structured, phased implementation",
      "The transition from pharmacotherapy-heavy to lifestyle-centered treatment loses patients when tapering schedules are not coordinated with lifestyle intervention milestones",
      "Exercise prescription adherence for psychiatric conditions requires specialized monitoring that differs from general fitness tracking",
      "Nutritional psychiatry interventions involving anti-inflammatory diets and gut-brain axis optimization lack systematic compliance tracking",
      "Patient calls about medication tapering symptoms, exercise intensity concerns, and dietary changes overwhelm staff without AI-assisted severity triage",
      "Referrals for treatment-resistant psychiatric conditions with lifestyle intervention potential sit unprocessed during high-volume intake periods"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts lifestyle psychiatry referral data via OCR, processes psychiatric evaluations and lifestyle assessments, matches patients across systems, verifies insurance eligibility, and flags treatment-resistant cases with high lifestyle intervention potential for expedited multi-domain evaluation scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates psychiatric medication management visits, exercise coaching sessions, nutritional psychiatry consultations, and sleep optimization appointments while filling cancellations within minutes through AI-driven waitlist prioritization based on psychiatric severity and lifestyle intervention phasing."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for psychiatric visit reminders, exercise prescription prompts, nutrition session preparation, and sleep diary completion via SMS, voice, and portal — reducing multi-domain dropout with predictive modeling and integrated wellness progress dashboards."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors psychiatric symptom scores and multi-domain lifestyle adherence in real time, triages medication tapering and lifestyle intervention concerns with AI severity assessment, and achieves 91% first-call resolution for lifestyle psychiatry post-visit inquiries."
      }
    ]
  },
  {
    "slug": "whole-person-primary-care",
    "specialty": "Whole-Person Primary Care",
    "tagline": "Coordinate every whole-person primary care patient journey from comprehensive intake to lifelong integrated wellness with zero patients lost to follow-up",
    "heroDescription": "Configural transforms whole-person primary care practices by automating referral intake, coordinating care across physical, mental, social, and spiritual health domains, tracking multi-dimensional wellness metrics, and ensuring every patient remains engaged across chronic disease management, behavioral health integration, social determinant interventions, and preventive care pathways.",
    "description": "Whole-person primary care practices manage the most comprehensive patient relationships in medicine — spanning chronic disease management, behavioral health screening and treatment, social determinant of health interventions, preventive care compliance, and lifestyle counseling. Care fragmentation across physical, mental, and social domains causes patients to fall between services, screening gaps accumulate, and the breadth of whole-person care creates coordination complexity that overwhelms manual systems.",
    "workflows": [
      "Referral intake with OCR extraction of comprehensive medical histories, behavioral health screens, social determinant assessments, and prior care records with patient matching and insurance verification in under 3 minutes",
      "AI-driven scheduling matching patients to optimal slots based on multi-domain care needs, chronic disease acuity, behavioral health urgency, social service coordination timing, and provider specialization across integrated care team members",
      "Smart waitlist that fills cancellations within minutes via automated SMS and voice outreach prioritized by chronic disease exacerbation risk, behavioral health crisis indicators, and overdue preventive screening urgency",
      "Pre-treatment prep automation — comprehensive health questionnaires covering physical, mental, social, and spiritual domains, medication reconciliation, social needs screening forms, and preventive care gap analysis with compliance confirmation",
      "Multi-channel patient engagement: reminders, confirmations, and prep instructions for primary care visits, behavioral health sessions, social service referrals, and preventive screenings via SMS, voice, and portal",
      "Real-time multi-domain health metric monitoring with AI severity assessment and escalation for patients showing chronic disease decompensation, behavioral health deterioration, or social determinant crisis indicators",
      "Post-treatment AI triage with 91% first-call resolution — addressing chronic disease management questions, behavioral health concerns between visits, medication interactions, and social service navigation assistance",
      "Automated survivorship/follow-up surveillance — zero patients lost to follow-up across chronic disease monitoring, behavioral health check-ins, preventive screening schedules, and social determinant reassessments"
    ],
    "results": [
      {
        "value": "94%",
        "label": "Preventive screening gap closure rate"
      },
      {
        "value": "3 min",
        "label": "Average referral-to-verification time"
      },
      {
        "value": "61%",
        "label": "Reduction in care fragmentation across domains"
      },
      {
        "value": "0",
        "label": "Patients lost to follow-up across integrated care pathways"
      }
    ],
    "challenges": [
      "Care fragmentation across physical, mental, and social health domains causes patients to fall between services when handoffs are manual",
      "Behavioral health screening integrated into primary care visits requires automated scoring and escalation that overwhelms manual workflows",
      "Social determinant of health interventions involving housing, food security, and transportation require external service coordination without unified tracking",
      "Preventive care screening gaps accumulate across large patient panels when guideline-driven scheduling is not automated",
      "High-volume calls spanning chronic disease questions, behavioral health concerns, and social service navigation overwhelm staff without multi-domain AI triage",
      "Comprehensive intake documentation from prior providers arrives in varied formats requiring manual extraction before whole-person care plans can be established"
    ],
    "aiAgents": [
      {
        "name": "Referral Intake Agent",
        "description": "Extracts whole-person primary care referral data via OCR, processes comprehensive medical histories and social determinant screenings, matches patients across clinical and social service systems, verifies insurance eligibility, and flags multi-domain high-acuity patients for expedited integrated care team scheduling."
      },
      {
        "name": "Scheduling & Waitlist Agent",
        "description": "Orchestrates primary care visits, behavioral health sessions, social service referral follow-ups, and preventive screening appointments across integrated care teams while filling cancellations within minutes through AI-driven waitlist prioritization based on multi-domain acuity scoring."
      },
      {
        "name": "Patient Engagement Agent",
        "description": "Delivers multi-channel outreach for primary care reminders, behavioral health check-in prompts, social service coordination updates, and preventive screening notifications via SMS, voice, and portal — reducing care fragmentation with predictive modeling and whole-person wellness milestone tracking."
      },
      {
        "name": "Care & Triage Agent",
        "description": "Monitors multi-domain health metrics including chronic disease markers, behavioral health scores, and social determinant indicators in real time, triages across all care domains with AI severity assessment, and achieves 91% first-call resolution for whole-person primary care post-visit inquiries."
      }
    ]
  }
];

export default specialties;
