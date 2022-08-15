import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

import "./assets/main.css";
import "./index.css";

const browser_lang = navigator.language || navigator.userLanguage;
const app_langs = ["de", "en"];
const default_lang = app_langs.includes(browser_lang) ? browser_lang : "en";

const i18n = createI18n({
  locale: default_lang,
  fallbackLocale: "en",
  messages: {
    en: {
      message: {
        navbar: {
          services: {
            title: "Services",
            io: "Talent Assessments",
            psychometric: "Psychometric Services",
            consulting: "Consulting & Audits",
            software: "Software-Development",
            workshops: "Workshops & Training",
          },
          contact_us: "Contact us!",
        },
        sections: {
          io: {
            title: "Talent Assessments",
            leading:
              "We support forward-thinking companies in identifying, attracting and retaining qualified personnel. This is accomplished through a coordinated triad of the latest findings in industrial and organizational psychology, modern IT solutions, and the methods of psychological diagnostics. ",
            work_analysis: {
              title: "Competency models",
              subtitle: "making professional requirements measurable",
              text: "Organizations use competency models and work analyses to identify the specific skills, knowledge, and abilities that are needed to perform particular jobs. By identifying these key competencies, organizations can ensure that their employees have the skills and knowledge necessary to flourish in their roles.",
            },
            assessments: {
              title: "Assessments for Selection and Development",
              subtitle: "identifying high-potentials",
              text: "Psychometric testing can be used to identify the right candidates in personnel selection and development. By understanding an individual's personality, abilities and preferences, organisations can match them to the right roles, and development programmes can be tailored to their needs. This increases the chances of success and reduces the likelihood of mismatch and disengagement.",
            },
            performance: {
              title: "Performance appraisal",
              subtitle: "aligning expectations with results",
              text: "Standardized performance appraisal systems help to evaluate the individual productivity and development of employees in an unbiased and objective manner. They serve as an important reality check, mediating between the demands of the organization and the expectations of its workforce. This not only gives you a conclusion on the quality of your personnel selection, but also an instrument to counter dissatisfaction and fluctuation in an early stage.",
            },
          },
          psychometric: {
            title: "Psychometric Services",
            leading: {
              start: "There are some questions in life that are just too important to trust to gut-based decision making alone. To help you make these choices, our ",
              end: " certified experts use scientifically validated psychological assessments — providing legal certainty and an objective basis for your decision making.",
            },
            diagnostics: {
              title: "Individual and management diagnostics",
              text: "Psychological diagnostics refers to the assessment of an individual's psychological functioning. This can be done through a variety of means, including interviews, observation, and standardized tests. The goal of psychological diagnostics is often to provide a comprehensive picture of a person's psychological strengths and weaknesses in order to help them reach their full potential or to predict future behavioral patterns. In order to answer such questions, our diagnosticians support you through the holistic assessment in the context of individual, group or management diagnostics.",
            },
            test_dev: {
              title: "Psychometric test development",
              text: "There are plenty of cases that require tests to be tailored to specific audiences, measurement targets, or when proprietary use is desirable. For these purposes, we offer customized test constructions according to the scientific standards of classical test theory (CTT) and item response theory (IRT). The development of procedures in the categories of personality, performance, knowledge and interest tests takes place in cooperation with the University of Leipzig.",
            },
          },
          various: {
            title: "Additional Services",
            consulting: {
              title: "Consulting & Audits",
              text: "We assist you in strategic consulting and planning of human-centered HR processes. Upon request, certified psychological expert reports can be prepared with regard to explicit issues.",
            },
            software: {
              title: "Software-Development",
              text: "For data-driven insights into key performance indicators of your HR processes, we offer development of small-scale people analytics systems and dashboards where possible. Projects are carried out in cooperation with ",
            },
            workshops: {
              title: "Workshops & Training",
              text: "Currently we offer data science workshops, seminars and courses in R and Python in the following areas: Fundamentals of Data Science; foundations of descriptive, inductive and explorative statistics; psychometric item and scale analysis (CTT/IRT).",
            },
          },
          quote: {
            text: "We have not yet seen what man can make of man",
          },
          contact: {
            title: "Contact us!",
            phone: "Phone",
            email: "E-mail",
            form: {
              name: "First and last name",
              email: "E-mail address",
              company: "Company / Organization",
              text: "How can we help you?",
              button: "Get in touch now!",
            },
          },
          footer: {
            legal: {
              title: "Legal",
              imprint: "Imprint",
              privacy: "Data privacy",
              terms: "Terms and conditions",
            },
          },
        },
      },
    },
    de: {
      message: {
        navbar: {
          services: {
            title: "Dienstleistungen",
            io: "Personal- und Eignungsdiagnostik",
            psychometric: "Psychometrische Dienstleistungen",
            consulting: "Beratung & Audits",
            software: "Software-Entwicklung",
            workshops: "Workshops & Training",
          },
          contact_us: "Kostenloses Erstgespräch",
        },
        sections: {
          io: {
            title: "Personal- und Eignungsdiagnostik",
            leading:
              "Wir helfen zukunftsorientierten Unternehmen, qualifiziertes Personal zu identifizieren, zu gewinnen und an sich zu binden. Dies gelingt uns durch einen abgestimmten Dreiklang aus den neuesten Erkenntnissen der Arbeits- und Organisationspsychologie, modernen IT-Lösungen und den Methoden der psychologischen Diagnostik. ",
            work_analysis: {
              title: "Kompetenzmodelle",
              subtitle: "berufliche Anforderungen messbar gestalten",
              text: "Unternehmen nutzen Kompetenzmodelle und Anforderungsanalysen, um die spezifischen Fähigkeiten, Kenntnisse und Fertigkeiten zu ermitteln, die für die Ausübung bestimmter Tätigkeiten erforderlich sind. Durch die Ermittlung dieser Schlüsselkompetenzen können Organisationen sicherstellen, dass ihre Mitarbeiterinnen und Mitarbeiter über die erforderlichen Fähigkeiten und Kenntnisse verfügen, um sich in ihrer Rolle zu entfalten.",
            },
            assessments: {
              title: "Eignungs- und Potenzialanalyse",
              subtitle: "erfolgversprechende Talente identifizieren",
              text: "Eignungstests werden eingesetzt, um im Rahmen der Personalauswahl und -entwicklung die Passung zwischen einer beruflichen Rolle und Mitarbeiterinnen und Mitarbeiter zu maximieren. Erst wenn Organisationen die Fähigkeiten, Persönlichkeit und Präferenzen ihrer Belegschaft verstehen, können sie ihnen zu der Funktion verhelfen, in der sie ihr volles Potenzial erreichen. Dies erhöht nicht nur die individuellen Erfolgschancen, sondern verringert zudem die Wahrscheinlichkeit von Fehlbesetzungen und Unzufriedenheit.",
            },
            performance: {
              title: "Leistungsbeurteilung",
              subtitle: "Erwartungen mit Ergebnissen abgleichen",
              text: "Standardisierte Leistungsbeurteilungssysteme tragen dazu bei, die individuelle Produktivität und Entwicklung von Mitarbeiterinnen und Mitarbeiter unvoreingenommen und objektiv zu bewerten. Sie dienen als wichtiger Realitätscheck und vermittelt zwischen den Ansprüchen der Organisation und den Erwartungen ihrer Belegschaft. Hierdurch erhalten Sie nicht nur ein Fazit zu der Qualität Ihrer Personalauswahl, sondern auch ein Instrument, um Unzufriedenheit und Fluktuation rechtzeitig zu begegnen.",
            },
          },
          psychometric: {
            title: "Psychometrische Dienstleistungen",
            leading: {
              start: "Manche Entscheidungen sind einfach zu wichtig, um sie allein aus dem Bauch heraus zu treffen. Um Sie in diesen Fragen zu unterstützen, setzen unsere nach ",
              end: " zertifizierten Expertinnen und Experten auf wissenschaftlich abgesicherte Instrumente der psychologischen Diagnostik. Dies bietet nicht nur eine objektive Grundlage für ihre Urteilsfindung, sondern vor allem auch Rechtssicherheit.",
            },
            diagnostics: {
              title: "Individual- und Management-Diagnostik",
              text: "Unter psychologischer Diagnostik versteht man die Beurteilung der psychologischen Funktionsweise einer Person. Dies kann auf verschiedene Weise geschehen, z. B. durch Befragung, Beobachtung und standardisierte Tests. Ziel der psychologischen Diagnostik ist es oftmals, ein umfassendes Bild der psychologischen Stärken und Schwächen einer Person zu vermitteln, um ihr zu helfen, ihr volles Potenzial zu entfalten, oder um zukünftiges Verhalten vorherzusagen. Um solche Fragestellungen zu beantworten, unterstützen unsere Diagnostikerinnen und Diagnostiker Sie durch die ganzheitliche Begutachtung im Kontext der Einzel-, Gruppen- oder Managementdiagnostik.",
            },
            test_dev: {
              title: "Psychometrische Testentwicklung",
              text: "Es gibt zahlreiche Fälle, in denen Tests auf bestimmte Zielgruppen oder Messziele zugeschnitten werden müssen, oder in denen eine proprietäre Nutzung durch unsere Klienten ausdrücklich erwünscht ist. Zu diesen Zwecken bieten wir kundenspezifische Testkonstruktionen nach den wissenschaftlichen Standards der klassischen Testtheorie (CTT) und Item-Response Theorie (IRT). Die Entwicklung von Verfahren in den Kategorien Persönlichkeits-, Leistungs-, Wissens- und Interessentests findet hierbei in der Kooperation mit der Universität Leipzig statt.",
            },
          },
          various: {
            title: "",
            consulting: {
              title: "Beratung & Audits",
              text: "Wir begleiten Sie bei der strategischen Beratung und Planung von menschenzentrierten HR-Prozessen. Auf Wunsch können zertifizierte arbeitspsychologische Gutachten zu expliziten Fragestellungen bereitgestellt werden. ",
            },
            software: {
              title: "Software-Entwicklung",
              text: "Für datengetriebene Einblicke in Key Performance Indicators Ihrer Personalprozesse bieten wir Ihnen nach Möglichkeit eine Entwicklung kleinerer People-Analytics-Systeme und Dashboards an. Projekte erfolgen in Zusammenarbeit mit dem ",
            },
            workshops: {
              title: "Workshops & Training",
              text: "Aktuell bieten wir Data Science Workshops, Seminare und Kurse in R und Python in folgenden Bereichen an: Grundlagen der Datenverarbeitung; Grundlagen der deskriptiven, induktiven und explorativen Statistik; Psychometrische Item- und Skalenanalyse (CTT/IRT)",
            },
          },
          quote: {
            text: "Wir haben noch nicht gesehen, was der Mensch aus dem Menschen machen kann",
          },
          contact: {
            title: "Kontakt",
            phone: "Telefon",
            email: "E-Mail",
            form: {
              name: "Vor- und Nachname",
              email: "E-Mail Adresse",
              company: "ggf. Firma / Organisation",
              text: "Wie können wir Ihnen helfen?",
              button: "Jetzt Kontakt aufnehmen!",
            },
          },
          footer: {
            legal: {
              title: "Legales",
              imprint: "Impressum",
              privacy: "Datenschutz",
              terms: "AGBs",
            },
          },
        },
      },
    },
  },
});

const app = createApp(App);

app.use(i18n);
app.use(router);

app.mount("#app");
