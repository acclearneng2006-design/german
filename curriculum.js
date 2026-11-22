// بيانات المنهج واختبارات الوحدات (تُحمَّل قبل app.js)
const CURRICULUM = [
  {
    "unit": "الوحدة الأولى: الحروف والنطق والتعارف",
    "nodes": [
      {
        "id": "l16",
        "type": "lesson",
        "extra": [
          {
            "q": "كيف تُنطق ß؟",
            "opts": [
              "ss",
              "ش",
              "ف"
            ],
            "ans": 0
          },
          {
            "q": "كم عدد حروف الأبجدية اللاتينية الأساسية؟",
            "opts": [
              "26",
              "30",
              "24"
            ],
            "ans": 0
          }
        ],
        "icon": "🔤",
        "title": "الأبجدية الألمانية",
        "desc": "اسمع الحروف الألمانية منفردة، وتعلّم مثالين بسيطين على تهجئة الكلمات.",
        "xp": 35,
        "grammar": "الأبجدية الألمانية تستخدم 26 حرفاً أساسياً. ستسمع كل حرف منفرداً في شبكة الحروف، ثم ترى كلمات تبدأ بالحرف كأمثلة منفصلة. الحروف Ä وÖ وÜ وß لها درس مستقل.",
        "vocab": [
          {
            "de": "Apfel",
            "ar": "تفاحة — مثال على كلمة تبدأ بحرف A"
          },
          {
            "de": "Ball",
            "ar": "كرة — مثال على كلمة تبدأ بحرف B"
          }
        ],
        "quiz": {
          "q": "أي مجموعة تمثل حروف العلة الألمانية؟",
          "opts": [
            "A, E, I, O, U",
            "B, C, D, F, G",
            "K, L, M, N, P"
          ],
          "ans": 0
        }
      },
      {
        "id": "l17",
        "type": "lesson",
        "extra": [
          {
            "q": "كيف تُنطق ei في mein؟",
            "opts": [
              "آي",
              "إي",
              "أو"
            ],
            "ans": 0
          },
          {
            "q": "كيف تُنطق ie في sieben؟",
            "opts": [
              "إي طويلة",
              "آي",
              "أو"
            ],
            "ans": 0
          }
        ],
        "icon": "🗣️",
        "title": "الحروف الخاصة ومقاطع النطق",
        "desc": "تعلّم Ä وÖ وÜ وß كلّاً على حدة، ثم اسمع كلمة المثال في بطاقة مستقلة.",
        "xp": 35,
        "grammar": "Ä صوته قريب من e، وÖ وÜ صوتان أماميان يحتاجان تدوير الشفتين. ß اسمه Eszett ويُنطق مثل ss. كل حرف له بطاقة مستقلة، وكلمة المثال بطاقة أخرى حتى لا يندمج نطقهما. sch تُنطق ش، ei تُنطق آي، ie تُنطق إي طويلة، وch في ich أخف من ch في Bach.",
        "vocab": [
          {
            "de": "Ä",
            "ar": "الحرف Ä — صوته قريب من e",
            "speak": "Ä",
            "kind": "letter"
          },
          {
            "de": "Mädchen",
            "ar": "فتاة — مثال على ä"
          },
          {
            "de": "Ö",
            "ar": "الحرف Ö — صوت أمامي مع تدوير الشفتين",
            "speak": "Ö",
            "kind": "letter"
          },
          {
            "de": "schön",
            "ar": "جميل — مثال على ö"
          },
          {
            "de": "Ü",
            "ar": "الحرف Ü — صوت أمامي مع تدوير الشفتين",
            "speak": "Ü",
            "kind": "letter"
          },
          {
            "de": "fünf",
            "ar": "خمسة — مثال على ü"
          },
          {
            "de": "ß",
            "ar": "الحرف ß — اسمه Eszett ويُنطق مثل ss",
            "speak": "Eszett",
            "kind": "letter"
          },
          {
            "de": "Straße",
            "ar": "شارع — مثال على ß"
          },
          {
            "de": "Schule",
            "ar": "مدرسة — sch تُنطق ش"
          },
          {
            "de": "mein",
            "ar": "لي / خاصتي — ei تُنطق آي"
          },
          {
            "de": "sieben",
            "ar": "سبعة — ie تُنطق إي طويلة"
          },
          {
            "de": "Ich spreche Deutsch.",
            "ar": "أنا أتحدث الألمانية."
          }
        ],
        "quiz": {
          "q": "كيف يُنطق المقطع sch غالباً؟",
          "opts": [
            "ش",
            "ف",
            "ك"
          ],
          "ans": 0
        }
      },
      {
        "id": "l1",
        "type": "lesson",
        "extra": [
          {
            "q": "أي جملة تعني: اسمي علي؟",
            "opts": [
              "Ich heiße Ali.",
              "Ich wohne Ali.",
              "Ich komme Ali."
            ],
            "ans": 0
          },
          {
            "q": "أي صيغة رسمية للسؤال عن الحال؟",
            "opts": [
              "Wie geht es Ihnen?",
              "Wie geht es dir?",
              "Wie heißt du?"
            ],
            "ans": 0
          }
        ],
        "icon": "👋",
        "title": "التحية وتقديم النفس",
        "desc": "Hallo, Guten Tag, Ich heiße..., Wie geht's?",
        "xp": 20,
        "grammar": "للتعريف عن النفس نستخدم: Ich heiße أو Ich bin. للسؤال باحترام نستخدم Sie.",
        "vocab": [
          {
            "de": "Hallo",
            "ar": "مرحباً"
          },
          {
            "de": "Guten Tag",
            "ar": "نهارك سعيد"
          },
          {
            "de": "Ich heiße Ahmed.",
            "ar": "أنا اسمي أحمد."
          },
          {
            "de": "Wie heißen Sie?",
            "ar": "ما اسم حضرتك؟"
          },
          {
            "de": "Wie geht es dir?",
            "ar": "كيف حالك؟"
          },
          {
            "de": "Wie schreibt man Ihren Namen?",
            "ar": "كيف تتهجّى اسم حضرتك؟"
          },
          {
            "de": "Mein Name ist Sara.",
            "ar": "اسمي سارة."
          }
        ],
        "quiz": {
          "q": "كيف تسأل شخصاً عن اسمه باحترام؟",
          "opts": [
            "Wie heißen Sie?",
            "Wie heißt du?",
            "Woher kommst du?"
          ],
          "ans": 0
        }
      },
      {
        "id": "l2",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Ich komme ___ Ägypten.",
            "opts": [
              "aus",
              "in",
              "mit"
            ],
            "ans": 0,
            "e": "للبلد الأصل نستخدم aus."
          },
          {
            "q": "أكمل: Wir ___ in Kairo.",
            "opts": [
              "wohnen",
              "wohne",
              "wohnst"
            ],
            "ans": 0
          }
        ],
        "icon": "🌍",
        "title": "البلد واللغة والسكن",
        "desc": "kommen aus, wohnen in, sprechen",
        "xp": 20,
        "grammar": "الفعل دائماً في المركز الثاني: Ich komme aus Ägypten. Ich wohne in Mansoura.",
        "vocab": [
          {
            "de": "Woher kommen Sie?",
            "ar": "من أين حضرتك؟"
          },
          {
            "de": "Ich komme aus Ägypten.",
            "ar": "أنا من مصر."
          },
          {
            "de": "Wo wohnen Sie?",
            "ar": "أين تسكن حضرتك؟"
          }
        ],
        "quiz": {
          "q": "ما الترجمة الصحيحة لـ: أنا أسكن في مصر؟",
          "opts": [
            "Ich komme in Ägypten.",
            "Ich wohne in Ägypten.",
            "Ich spreche Ägypten."
          ],
          "ans": 1
        }
      },
      {
        "id": "cp1",
        "type": "checkpoint",
        "icon": "🤖",
        "title": "محطة محادثة AI #1: لقاء تعارف حقيقي",
        "desc": "طبق التحية والاسم والبلد والسكن مع المدرب",
        "xp": 40,
        "scenarioTitle": "تعارف في كورس اللغة بألمانيا",
        "scenarioGoal": "رحب بالمدرب، اذكر اسمك، بلدك، ومكان سكنك.",
        "starterDe": "Hallo! Ich bin Lukas. Wie heißt du und woher kommst du?",
        "starterAr": "مرحباً! أنا لوكاس. ما اسمك ومن أين أنت؟",
        "systemPrompt": "أنت لوكاس، زميل ألماني ودود في كورس A1. حاوره بجمل قصيرة جداً ومناسبة لمستوى A1 فقط."
      },
      {
        "id": "l88",
        "type": "lesson",
        "icon": "🌍",
        "title": "دول ولغات",
        "desc": "Deutschland, Österreich, Schweiz, Frankreich, Italien",
        "xp": 30,
        "grammar": "الدول بدون أداة غالباً: Ich komme aus Ägypten. بعض الدول مع أداة: die Schweiz، die Türkei.",
        "vocab": [
          {
            "de": "Deutschland",
            "ar": "ألمانيا"
          },
          {
            "de": "Österreich",
            "ar": "النمسا"
          },
          {
            "de": "die Schweiz",
            "ar": "سويسرا"
          },
          {
            "de": "Frankreich",
            "ar": "فرنسا"
          },
          {
            "de": "Italien",
            "ar": "إيطاليا"
          },
          {
            "de": "Spanien",
            "ar": "إسبانيا"
          },
          {
            "de": "England",
            "ar": "إنجلترا"
          },
          {
            "de": "die Türkei",
            "ar": "تركيا"
          },
          {
            "de": "Englisch",
            "ar": "الإنجليزية"
          },
          {
            "de": "Arabisch",
            "ar": "العربية"
          },
          {
            "de": "Französisch",
            "ar": "الفرنسية"
          },
          {
            "de": "Türkisch",
            "ar": "التركية"
          }
        ],
        "quiz": {
          "q": "ما معنى Deutschland؟",
          "opts": [
            "ألمانيا",
            "النمسا",
            "سويسرا"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Schweiz؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Türkei؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى England؟",
            "opts": [
              "إنجلترا",
              "ألمانيا",
              "النمسا"
            ],
            "ans": 0
          }
        ]
      }
    ]
  },
  {
    "unit": "الوحدة الثانية: التواصل والمواقف اليومية",
    "nodes": [
      {
        "id": "l38",
        "type": "lesson",
        "icon": "👋",
        "title": "تحيات وردود سريعة",
        "desc": "Guten Morgen, Gute Nacht, Tschüss, Ja, Nein",
        "xp": 30,
        "grammar": "Guten Morgen (صباحاً)، Guten Tag (نهاراً)، Gute Nacht (عند النوم)، Tschüss (وداعاً). للإجابة: Ja / Nein. وللوقت الحالي: jetzt.",
        "vocab": [
          {
            "de": "Guten Morgen, Frau Weber!",
            "ar": "صباح الخير يا سيدة فيبر!"
          },
          {
            "de": "Gute Nacht!",
            "ar": "تصبح على خير!"
          },
          {
            "de": "Tschüss, bis morgen!",
            "ar": "مع السلامة، إلى الغد!"
          },
          {
            "de": "Ja, das stimmt.",
            "ar": "نعم، هذا صحيح."
          },
          {
            "de": "Nein, danke.",
            "ar": "لا، شكراً."
          },
          {
            "de": "Ich lerne jetzt.",
            "ar": "أنا أتعلم الآن."
          }
        ],
        "quiz": {
          "q": "ماذا تقول قبل النوم؟",
          "opts": [
            "Gute Nacht",
            "Guten Morgen",
            "Guten Tag"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Tschüss؟",
            "opts": [
              "مع السلامة",
              "شكراً",
              "من فضلك"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى jetzt؟",
            "opts": [
              "الآن",
              "غداً",
              "أمس"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l43",
        "type": "lesson",
        "icon": "👨‍👩‍👧",
        "title": "العائلة الممتدة والعمل",
        "desc": "Opa, Oma, Onkel, Tante, Kollege",
        "xp": 30,
        "grammar": "الأسماء المؤنثة تنتهي غالباً بـ -in أو -e: die Tante, die Tochter. للجمع: die Eltern (الوالدان) بدون مفرد شائع.",
        "vocab": [
          {
            "de": "der Opa",
            "ar": "الجد"
          },
          {
            "de": "die Oma",
            "ar": "الجدة"
          },
          {
            "de": "der Onkel",
            "ar": "العم / الخال"
          },
          {
            "de": "die Tante",
            "ar": "العمة / الخالة"
          },
          {
            "de": "der Sohn",
            "ar": "الابن"
          },
          {
            "de": "die Tochter",
            "ar": "الابنة"
          },
          {
            "de": "der Kollege",
            "ar": "الزميل"
          },
          {
            "de": "der Chef",
            "ar": "المدير"
          },
          {
            "de": "Mein Opa ist alt.",
            "ar": "جدي كبير في السن."
          },
          {
            "de": "Meine Tante wohnt in Kairo.",
            "ar": "عمتي تسكن في القاهرة."
          }
        ],
        "quiz": {
          "q": "ما معنى Opa؟",
          "opts": [
            "الجد",
            "الجدة",
            "العم / الخال"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Opa؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Oma؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Chef؟",
            "opts": [
              "المدير",
              "الابنة",
              "الزميل"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l50",
        "type": "lesson",
        "icon": "🗣️",
        "title": "أفعال التواصل",
        "desc": "sagen, rufen, erklären, zeigen",
        "xp": 30,
        "grammar": "معظم الأفعال منتظمة: ich sage، du sagst، er sagt. rufen → er ruft، schicken → er schickt.",
        "vocab": [
          {
            "de": "sagen",
            "ar": "يقول"
          },
          {
            "de": "rufen",
            "ar": "ينادي"
          },
          {
            "de": "erklären",
            "ar": "يشرح"
          },
          {
            "de": "zeigen",
            "ar": "يُري"
          },
          {
            "de": "erzählen",
            "ar": "يحكي"
          },
          {
            "de": "schicken",
            "ar": "يرسل"
          },
          {
            "de": "bitten",
            "ar": "يرجو / يطلب"
          },
          {
            "de": "danken",
            "ar": "يشكر"
          },
          {
            "de": "Er sagt hallo.",
            "ar": "هو يقول مرحباً."
          },
          {
            "de": "Ich schicke eine E-Mail.",
            "ar": "أرسل بريداً إلكترونياً."
          }
        ],
        "quiz": {
          "q": "ما معنى sagen؟",
          "opts": [
            "يقول",
            "ينادي",
            "يشرح"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى erzählen؟",
            "opts": [
              "يحكي",
              "يقول",
              "ينادي"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى danken؟",
            "opts": [
              "يشكر",
              "ينادي",
              "يشرح"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l57",
        "type": "lesson",
        "icon": "💼",
        "title": "المهن",
        "desc": "Koch, Fahrer, Verkäufer, Student",
        "xp": 30,
        "grammar": "للمهنة لا نستخدم أداة: Er ist Koch. Sie ist Studentin. وللمؤنث نضيف غالباً -in: der Student → die Studentin.",
        "vocab": [
          {
            "de": "der Fahrer",
            "ar": "السائق"
          },
          {
            "de": "der Verkäufer",
            "ar": "البائع"
          },
          {
            "de": "der Koch",
            "ar": "الطباخ"
          },
          {
            "de": "der Student",
            "ar": "الطالب"
          },
          {
            "de": "die Studentin",
            "ar": "الطالبة"
          },
          {
            "de": "der Polizist",
            "ar": "الشرطي"
          },
          {
            "de": "der Bauer",
            "ar": "الفلاح"
          },
          {
            "de": "der Apotheker",
            "ar": "الصيدلي"
          },
          {
            "de": "Er ist Koch.",
            "ar": "هو طباخ."
          },
          {
            "de": "Sie ist Studentin.",
            "ar": "هي طالبة."
          }
        ],
        "quiz": {
          "q": "ما معنى Fahrer؟",
          "opts": [
            "السائق",
            "البائع",
            "الطباخ"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Fahrer؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Verkäufer؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Apotheker؟",
            "opts": [
              "الصيدلي",
              "البائع",
              "الطباخ"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l71",
        "type": "lesson",
        "icon": "↔️",
        "title": "صفات وأضدادها",
        "desc": "leicht/schwer, laut/leise, sauber/schmutzig",
        "xp": 30,
        "grammar": "الصفة بعد sein لا تتغير: Das Zimmer ist sauber. وتحفظ كأزواج أضداد: leicht ↔ schwer، laut ↔ leise، voll ↔ leer، offen ↔ geschlossen.",
        "vocab": [
          {
            "de": "jung",
            "ar": "شاب / صغير السن"
          },
          {
            "de": "hell",
            "ar": "فاتح / مضيء"
          },
          {
            "de": "dunkel",
            "ar": "مظلم / غامق"
          },
          {
            "de": "leicht",
            "ar": "سهل / خفيف"
          },
          {
            "de": "schwer",
            "ar": "صعب / ثقيل"
          },
          {
            "de": "laut",
            "ar": "عالٍ"
          },
          {
            "de": "leise",
            "ar": "هادئ"
          },
          {
            "de": "sauber",
            "ar": "نظيف"
          },
          {
            "de": "schmutzig",
            "ar": "متسخ"
          },
          {
            "de": "voll",
            "ar": "ممتلئ"
          },
          {
            "de": "leer",
            "ar": "فارغ"
          },
          {
            "de": "geschlossen",
            "ar": "مغلق"
          }
        ],
        "quiz": {
          "q": "ما معنى jung؟",
          "opts": [
            "شاب / صغير السن",
            "فاتح / مضيء",
            "مظلم / غامق"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى leise؟",
            "opts": [
              "هادئ",
              "شاب / صغير السن",
              "فاتح / مضيء"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى geschlossen؟",
            "opts": [
              "مغلق",
              "فاتح / مضيء",
              "مظلم / غامق"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l78",
        "type": "lesson",
        "icon": "😊",
        "title": "صفات الشخصية",
        "desc": "ehrlich, höflich, lustig, ruhig, stark",
        "xp": 30,
        "grammar": "الصفة بعد sein لا تتغير: Er ist ehrlich. Sie ist fleißig.",
        "vocab": [
          {
            "de": "ehrlich",
            "ar": "صادق"
          },
          {
            "de": "höflich",
            "ar": "مؤدب"
          },
          {
            "de": "lustig",
            "ar": "مرح"
          },
          {
            "de": "ruhig",
            "ar": "هادئ"
          },
          {
            "de": "stark",
            "ar": "قوي"
          },
          {
            "de": "schwach",
            "ar": "ضعيف"
          },
          {
            "de": "reich",
            "ar": "غني"
          },
          {
            "de": "arm",
            "ar": "فقير"
          },
          {
            "de": "klug",
            "ar": "ذكي"
          },
          {
            "de": "fleißig",
            "ar": "مجتهد"
          },
          {
            "de": "faul",
            "ar": "كسول"
          },
          {
            "de": "mutig",
            "ar": "شجاع"
          }
        ],
        "quiz": {
          "q": "ما معنى ehrlich؟",
          "opts": [
            "صادق",
            "مؤدب",
            "مرح"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى reich؟",
            "opts": [
              "غني",
              "صادق",
              "مؤدب"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى mutig؟",
            "opts": [
              "شجاع",
              "مؤدب",
              "مرح"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l85",
        "type": "lesson",
        "icon": "⚙️",
        "title": "أفعال الحياة والعواطف",
        "desc": "ändern, bauen, brechen, drücken, fallen",
        "xp": 30,
        "grammar": "الأفعال المنتظمة: ich + e، du + st، er + t. مثال: Er lacht. Sie weint.",
        "vocab": [
          {
            "de": "ändern",
            "ar": "يغيّر"
          },
          {
            "de": "bauen",
            "ar": "يبني"
          },
          {
            "de": "brechen",
            "ar": "يكسر"
          },
          {
            "de": "drücken",
            "ar": "يضغط"
          },
          {
            "de": "fallen",
            "ar": "يسقط"
          },
          {
            "de": "gewinnen",
            "ar": "يربح"
          },
          {
            "de": "heiraten",
            "ar": "يتزوج"
          },
          {
            "de": "leben",
            "ar": "يعيش"
          },
          {
            "de": "lachen",
            "ar": "يضحك"
          },
          {
            "de": "weinen",
            "ar": "يبكي"
          },
          {
            "de": "schenken",
            "ar": "يهدي"
          },
          {
            "de": "stören",
            "ar": "يزعج"
          }
        ],
        "quiz": {
          "q": "ما معنى ändern؟",
          "opts": [
            "يغيّر",
            "يبني",
            "يكسر"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى heiraten؟",
            "opts": [
              "يتزوج",
              "يغيّر",
              "يبني"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى stören؟",
            "opts": [
              "يزعج",
              "يبني",
              "يكسر"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l106",
        "type": "lesson",
        "icon": "✅",
        "title": "صفات متنوعة",
        "desc": "bequem, gefährlich, wichtig, richtig, falsch",
        "xp": 30,
        "grammar": "الصفة بعد sein: Das ist wichtig. Das ist richtig. Es ist kostenlos.",
        "vocab": [
          {
            "de": "bequem",
            "ar": "مريح"
          },
          {
            "de": "gefährlich",
            "ar": "خطير"
          },
          {
            "de": "wichtig",
            "ar": "مهم"
          },
          {
            "de": "richtig",
            "ar": "صحيح"
          },
          {
            "de": "falsch",
            "ar": "خطأ"
          },
          {
            "de": "interessant",
            "ar": "ممتع"
          },
          {
            "de": "langweilig",
            "ar": "ممل"
          },
          {
            "de": "einfach",
            "ar": "بسيط"
          },
          {
            "de": "schwierig",
            "ar": "صعب"
          },
          {
            "de": "bekannt",
            "ar": "مشهور"
          },
          {
            "de": "besonders",
            "ar": "خاص"
          },
          {
            "de": "kostenlos",
            "ar": "مجاني"
          },
          {
            "de": "frei",
            "ar": "حر / شاغر"
          },
          {
            "de": "fertig",
            "ar": "جاهز / منتهٍ"
          },
          {
            "de": "bereit",
            "ar": "مستعد"
          }
        ],
        "quiz": {
          "q": "ما معنى bequem؟",
          "opts": [
            "مريح",
            "خطير",
            "مهم"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى einfach؟",
            "opts": [
              "بسيط",
              "خطير",
              "مهم"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى bereit؟",
            "opts": [
              "مستعد",
              "مريح",
              "خطير"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l3",
        "type": "lesson",
        "extra": [
          {
            "q": "كيف تكتب 45؟",
            "opts": [
              "fünfundvierzig",
              "vierzigfünf",
              "fünfzigvier"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى siebzehn؟",
            "opts": [
              "17",
              "70",
              "7"
            ],
            "ans": 0
          }
        ],
        "icon": "🔢",
        "title": "الأرقام والعمر ورقم الهاتف",
        "desc": "0 bis 100, Wie alt bist du?",
        "xp": 20,
        "grammar": "للسؤال عن العمر نستخدم فعل sein: Wie alt bist du? -> Ich bin 20 Jahre alt.\n13–19: أضف zehn إلى الرقم (dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn). من 21 إلى 99: الآحاد أولاً ثم und ثم العشرات، وتُكتب ككلمة واحدة: einundzwanzig (21)، fünfundvierzig (45). تصبح eins → ein في المركّبات.",
        "vocab": [
          {
            "de": "eins",
            "ar": "واحد"
          },
          {
            "de": "zwei",
            "ar": "اثنان"
          },
          {
            "de": "drei",
            "ar": "ثلاثة"
          },
          {
            "de": "vier",
            "ar": "أربعة"
          },
          {
            "de": "fünf",
            "ar": "خمسة"
          },
          {
            "de": "sechs",
            "ar": "ستة"
          },
          {
            "de": "sieben",
            "ar": "سبعة"
          },
          {
            "de": "acht",
            "ar": "ثمانية"
          },
          {
            "de": "neun",
            "ar": "تسعة"
          },
          {
            "de": "zehn",
            "ar": "عشرة"
          },
          {
            "de": "Wie alt sind Sie?",
            "ar": "كم عمر حضرتك؟"
          },
          {
            "de": "elf",
            "ar": "أحد عشر"
          },
          {
            "de": "zwölf",
            "ar": "اثنا عشر"
          },
          {
            "de": "zwanzig",
            "ar": "عشرون"
          },
          {
            "de": "dreißig",
            "ar": "ثلاثون"
          },
          {
            "de": "hundert",
            "ar": "مئة"
          },
          {
            "de": "dreizehn",
            "ar": "ثلاثة عشر"
          },
          {
            "de": "fünfzehn",
            "ar": "خمسة عشر"
          },
          {
            "de": "vierzig",
            "ar": "أربعون"
          },
          {
            "de": "einundzwanzig",
            "ar": "واحد وعشرون (21)"
          },
          {
            "de": "fünfundvierzig",
            "ar": "خمسة وأربعون (45)"
          },
          {
            "de": "Das kostet neunundneunzig Euro.",
            "ar": "هذا يكلف 99 يورو."
          },
          {
            "de": "Meine Telefonnummer ist null eins sieben sechs.",
            "ar": "رقم هاتفي صفر واحد سبعة ستة."
          }
        ],
        "quiz": {
          "q": "أي فعل نستخدمه للتعبير عن العمر؟",
          "opts": [
            "haben",
            "sein",
            "wohnen"
          ],
          "ans": 1
        }
      },
      {
        "id": "l4",
        "type": "lesson",
        "extra": [
          {
            "q": "ما معنى: Was kostet das؟",
            "opts": [
              "كم يكلف هذا؟",
              "أين هذا؟",
              "من هذا؟"
            ],
            "ans": 0
          },
          {
            "q": "كيف تطلب ماء؟",
            "opts": [
              "Ein Wasser, bitte.",
              "Wasser ein bitte.",
              "Ein bitte Wasser."
            ],
            "ans": 0
          }
        ],
        "icon": "☕",
        "title": "في المقهى والطلبات",
        "desc": "Ich möchte..., Kaffee, Wasser",
        "xp": 20,
        "grammar": "للطلب المهذب نستخدم: Ich möchte einen Kaffee, bitte.",
        "vocab": [
          {
            "de": "Ich möchte einen Kaffee, bitte.",
            "ar": "أود فنجان قهوة من فضلك."
          },
          {
            "de": "Ein Wasser, bitte.",
            "ar": "مياه من فضلك."
          },
          {
            "de": "Was kostet das?",
            "ar": "كم يكلف هذا؟"
          }
        ],
        "quiz": {
          "q": "كيف تطلب قهوة بأسلوب مهذب؟",
          "opts": [
            "Ich möchte einen Kaffee, bitte.",
            "Ich bin Kaffee.",
            "Woher kommt Kaffee?"
          ],
          "ans": 0
        }
      },
      {
        "id": "cp2",
        "type": "checkpoint",
        "icon": "🤖",
        "title": "محطة محادثة AI #2: في المقهى والحساب",
        "desc": "اطلب مشروبك واسأل عن السعر والأرقام",
        "xp": 45,
        "scenarioTitle": "نادل في مقهى ببرلين",
        "scenarioGoal": "اطلب مشروبين واسأل عن الحساب.",
        "starterDe": "Guten Tag! Was möchten Sie bestellen?",
        "starterAr": "نهارك سعيد! ماذا تود أن تطلب؟",
        "systemPrompt": "أنت نادل في مقهى. خذ طلب الطالب واذكر الأسعار بأرقام واضحة وبسيطة."
      }
    ]
  },
  {
    "unit": "الوحدة الثالثة: القواعد خطوة خطوة",
    "nodes": [
      {
        "id": "l18",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Er ___ einen Hund.",
            "opts": [
              "hat",
              "habe",
              "hast"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Ihr ___ müde.",
            "opts": [
              "bist",
              "seid",
              "sind"
            ],
            "ans": 1
          }
        ],
        "icon": "🧩",
        "title": "الضمائر وتصريف sein و haben",
        "desc": "ich, du, er/sie/es, wir, ihr, sie/Sie",
        "xp": 35,
        "grammar": "ضمائر الفاعل: ich أنا، du أنت، er هو، sie هي، es هو/هي لغير العاقل، wir نحن، ihr أنتم، sie هم، Sie حضرتك/حضراتكم.\nsein (يكون): ich bin، du bist، er/sie/es ist، wir sind، ihr seid، sie/Sie sind.\nhaben (يملك/لديه): ich habe، du hast، er/sie/es hat، wir haben، ihr habt، sie/Sie haben.",
        "vocab": [
          {
            "de": "Ich bin müde.",
            "ar": "أنا متعب."
          },
          {
            "de": "Du bist freundlich.",
            "ar": "أنت ودود."
          },
          {
            "de": "Wir sind hier.",
            "ar": "نحن هنا."
          },
          {
            "de": "Ich habe Zeit.",
            "ar": "لدي وقت."
          },
          {
            "de": "Sie hat einen Termin.",
            "ar": "لديها موعد."
          }
        ],
        "quiz": {
          "q": "أكمل: Wir ___ in Berlin.",
          "opts": [
            "sind",
            "bin",
            "seid"
          ],
          "ans": 0
        }
      },
      {
        "id": "l19",
        "type": "lesson",
        "extra": [
          {
            "q": "أي جملة صحيحة؟",
            "opts": [
              "Heute lerne ich Deutsch.",
              "Heute ich lerne Deutsch.",
              "Ich heute Deutsch lerne."
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Er ___ in Berlin. (arbeiten)",
            "opts": [
              "arbeitet",
              "arbeite",
              "arbeiten"
            ],
            "ans": 0
          }
        ],
        "icon": "🧱",
        "title": "ترتيب الجملة وتصريف الأفعال",
        "desc": "الفعل في المركز الثاني والجمل البسيطة",
        "xp": 35,
        "grammar": "في الجملة الخبرية يأتي الفعل المصرف عادةً في المركز الثاني: Ich lerne heute Deutsch. إذا بدأت بظرف، يبقى الفعل ثانياً: Heute lerne ich Deutsch.\nتصريف lernen: ich lerne، du lernst، er lernt، wir lernen، ihr lernt، sie lernen.",
        "vocab": [
          {
            "de": "Ich lerne Deutsch.",
            "ar": "أنا أتعلم الألمانية."
          },
          {
            "de": "Heute arbeitet Ali.",
            "ar": "علي يعمل اليوم."
          },
          {
            "de": "Wir wohnen in Kairo.",
            "ar": "نحن نسكن في القاهرة."
          },
          {
            "de": "Ich kaufe im Supermarkt ein.",
            "ar": "أتسوق في السوبرماركت."
          }
        ],
        "quiz": {
          "q": "أين يأتي الفعل المصرف غالباً في الجملة الخبرية؟",
          "opts": [
            "المركز الثاني",
            "آخر الجملة دائماً",
            "أول الجملة دائماً"
          ],
          "ans": 0
        }
      },
      {
        "id": "l20",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: ___ wohnen Sie? (أين)",
            "opts": [
              "Wo",
              "Wer",
              "Wann"
            ],
            "ans": 0
          },
          {
            "q": "أي سؤال إجابته نعم أو لا؟",
            "opts": [
              "Haben Sie Zeit?",
              "Wann haben Sie Zeit?",
              "Wo haben Sie Zeit?"
            ],
            "ans": 0
          }
        ],
        "icon": "❓",
        "title": "تكوين الأسئلة: W والأسئلة بنعم أو لا",
        "desc": "wer, was, wo, woher, wohin, wann, wie",
        "xp": 35,
        "grammar": "أسئلة W تبدأ بأداة السؤال ثم الفعل ثم الفاعل: Wo wohnen Sie? / Wann kommt der Bus?\nأما سؤال نعم/لا فيبدأ بالفعل: Sprechen Sie Deutsch?",
        "vocab": [
          {
            "de": "Wer? Was? Wo?",
            "ar": "مَن؟ ماذا؟ أين؟"
          },
          {
            "de": "Woher kommen Sie?",
            "ar": "من أين حضرتك؟"
          },
          {
            "de": "Wohin fahren Sie?",
            "ar": "إلى أين تسافر؟"
          },
          {
            "de": "Wann beginnt der Film?",
            "ar": "متى يبدأ الفيلم؟"
          },
          {
            "de": "Haben Sie eine Frage?",
            "ar": "هل لديك سؤال؟"
          }
        ],
        "quiz": {
          "q": "أي سؤال يبدأ بالفعل وإجابته غالباً نعم أو لا؟",
          "opts": [
            "Sprechen Sie Deutsch?",
            "Wo wohnen Sie?",
            "Wie heißen Sie?"
          ],
          "ans": 0
        }
      },
      {
        "id": "l21",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Das ist ___ teuer.",
            "opts": [
              "nicht",
              "kein",
              "keine"
            ],
            "ans": 0,
            "e": "نفي الصفة بـ nicht."
          },
          {
            "q": "أكمل: Wir haben ___ Zeit.",
            "opts": [
              "nicht",
              "keine",
              "kein"
            ],
            "ans": 1,
            "e": "Zeit مؤنث: keine Zeit."
          }
        ],
        "icon": "🚫",
        "title": "النفي بـ nicht و kein",
        "desc": "كيف تقول لا أو ليس عندي",
        "xp": 35,
        "grammar": "نستخدم kein قبل الاسم النكرة أو الاسم بلا أداة: Ich habe kein Auto.\nنستخدم nicht لنفي فعل أو صفة أو اسم معرف: Ich komme heute nicht. / Das Essen ist nicht teuer.",
        "vocab": [
          {
            "de": "Ich spreche nicht schnell.",
            "ar": "أنا لا أتحدث بسرعة."
          },
          {
            "de": "Ich habe kein Auto.",
            "ar": "ليس لدي سيارة."
          },
          {
            "de": "Wir haben keine Kinder.",
            "ar": "ليس لدينا أطفال."
          },
          {
            "de": "Das Essen ist nicht teuer.",
            "ar": "الطعام ليس غاليًا."
          }
        ],
        "quiz": {
          "q": "أكمل: Ich habe ___ Schwester.",
          "opts": [
            "keine",
            "nicht",
            "kein"
          ],
          "ans": 0
        }
      },
      {
        "id": "l22",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Ich sehe ___ Frau. (die Frau)",
            "opts": [
              "einen",
              "eine",
              "ein"
            ],
            "ans": 1,
            "e": "المؤنث لا يتغير في Akkusativ."
          },
          {
            "q": "أكمل: Ich habe ___ Auto. (das Auto)",
            "opts": [
              "einen",
              "eine",
              "ein"
            ],
            "ans": 2,
            "e": "المحايد لا يتغير في Akkusativ."
          }
        ],
        "icon": "📦",
        "title": "أدوات التعريف والنكرة والجمع",
        "desc": "der, die, das / ein, eine / kein",
        "xp": 35,
        "grammar": "der مذكر، die مؤنث، das محايد. في المفعول المباشر Akkusativ يتغير المذكر: der/ein يصبح den/einen، بينما المؤنث والمحايد لا يتغيران.",
        "vocab": [
          {
            "de": "der Mann",
            "ar": "الرجل"
          },
          {
            "de": "die Männer",
            "ar": "الرجال"
          },
          {
            "de": "die Frau",
            "ar": "المرأة"
          },
          {
            "de": "die Frauen",
            "ar": "النساء"
          },
          {
            "de": "das Kind",
            "ar": "الطفل"
          },
          {
            "de": "die Kinder",
            "ar": "الأطفال"
          },
          {
            "de": "Ich kaufe einen Apfel.",
            "ar": "أشتري تفاحة."
          },
          {
            "de": "Ich sehe eine Tasche.",
            "ar": "أرى حقيبة."
          }
        ],
        "quiz": {
          "q": "اختر الصيغة الصحيحة: Ich kaufe ___ Stuhl. (der Stuhl)",
          "opts": [
            "einen",
            "eine",
            "ein"
          ],
          "ans": 0
        }
      },
      {
        "id": "cp_u3",
        "type": "checkpoint",
        "icon": "🤖",
        "title": "محطة محادثة AI: أسئلة ونفي وإجابات سريعة",
        "desc": "تدرّب على الأسئلة بـ W والنفي بـ kein و nicht مع المدرب",
        "xp": 45,
        "scenarioTitle": "حوار سريع لتثبيت القواعد",
        "scenarioGoal": "جاوب على أسئلة المدرب واستخدم kein و nicht في جمل بسيطة.",
        "starterDe": "Hallo! Hast du ein Auto oder ein Fahrrad? Und sprichst du schon gut Deutsch?",
        "starterAr": "مرحباً! هل لديك سيارة أم دراجة؟ وهل تتحدث الألمانية جيداً بالفعل؟",
        "systemPrompt": "أنت مدرب ألماني لمستوى A1. اسأل الطالب أسئلة بسيطة بنعم/لا وأسئلة W ليتدرب على استخدام kein و nicht وأدوات النكرة."
      },
      {
        "id": "l54",
        "type": "lesson",
        "icon": "🔗",
        "title": "حروف الجر الأساسية",
        "desc": "mit, ohne, für, von, zu, bei",
        "xp": 30,
        "grammar": "مع Dativ: mit, von, zu, bei, aus, nach. ومع Akkusativ: für, ohne, durch, gegen. مثال: Das ist für dich. Ich trinke Tee mit Milch.",
        "vocab": [
          {
            "de": "mit",
            "ar": "مع"
          },
          {
            "de": "ohne",
            "ar": "بدون"
          },
          {
            "de": "für",
            "ar": "لأجل"
          },
          {
            "de": "von",
            "ar": "من"
          },
          {
            "de": "zu",
            "ar": "إلى"
          },
          {
            "de": "bei",
            "ar": "عند"
          },
          {
            "de": "durch",
            "ar": "عبر"
          },
          {
            "de": "gegen",
            "ar": "ضد"
          },
          {
            "de": "Ich trinke Tee mit Milch.",
            "ar": "أشرب الشاي مع الحليب."
          },
          {
            "de": "Das Geschenk ist für dich.",
            "ar": "الهدية لك."
          }
        ],
        "quiz": {
          "q": "ما معنى mit؟",
          "opts": [
            "مع",
            "بدون",
            "لأجل"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى zu؟",
            "opts": [
              "إلى",
              "مع",
              "بدون"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى gegen؟",
            "opts": [
              "ضد",
              "بدون",
              "لأجل"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l55",
        "type": "lesson",
        "icon": "⏱️",
        "title": "أدوات الربط والظروف",
        "desc": "und, aber, oder, immer, nie, oft",
        "xp": 30,
        "grammar": "und, aber, oder, denn لا تغيّر ترتيب الجملة: Ich bin müde, aber glücklich. وتكرار الفعل: immer دائماً، oft غالباً، manchmal أحياناً، nie أبداً.",
        "vocab": [
          {
            "de": "und",
            "ar": "و"
          },
          {
            "de": "aber",
            "ar": "لكن"
          },
          {
            "de": "oder",
            "ar": "أو"
          },
          {
            "de": "denn",
            "ar": "لأن"
          },
          {
            "de": "auch",
            "ar": "أيضاً"
          },
          {
            "de": "sehr",
            "ar": "جداً"
          },
          {
            "de": "immer",
            "ar": "دائماً"
          },
          {
            "de": "oft",
            "ar": "غالباً"
          },
          {
            "de": "manchmal",
            "ar": "أحياناً"
          },
          {
            "de": "nie",
            "ar": "أبداً"
          },
          {
            "de": "Ich trinke immer Tee.",
            "ar": "أشرب الشاي دائماً."
          },
          {
            "de": "Ich bin müde, aber glücklich.",
            "ar": "أنا متعب لكن سعيد."
          }
        ],
        "quiz": {
          "q": "ما معنى und؟",
          "opts": [
            "و",
            "لكن",
            "أو"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى sehr؟",
            "opts": [
              "جداً",
              "لكن",
              "أو"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى nie؟",
            "opts": [
              "أبداً",
              "لكن",
              "أو"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l56",
        "type": "lesson",
        "icon": "❓",
        "title": "كلمات السؤال المتقدمة",
        "desc": "wohin, warum, wann, wie viele",
        "xp": 30,
        "grammar": "wie viel للكمية والسعر: Wie viel kostet das? وwie viele للعدد: Wie viele Kinder hast du?",
        "vocab": [
          {
            "de": "wohin",
            "ar": "إلى أين"
          },
          {
            "de": "warum",
            "ar": "لماذا"
          },
          {
            "de": "wann",
            "ar": "متى"
          },
          {
            "de": "wie viel",
            "ar": "كم (كمية / سعر)"
          },
          {
            "de": "wie viele",
            "ar": "كم (عدد)"
          },
          {
            "de": "wie lange",
            "ar": "كم من الوقت"
          },
          {
            "de": "wie oft",
            "ar": "كم مرة"
          },
          {
            "de": "welcher",
            "ar": "أي / ما"
          },
          {
            "de": "Wie viele Kinder hast du?",
            "ar": "كم طفلاً عندك؟"
          },
          {
            "de": "Wie lange bleibst du?",
            "ar": "كم تبقى؟"
          }
        ],
        "quiz": {
          "q": "ما معنى wohin؟",
          "opts": [
            "إلى أين",
            "لماذا",
            "متى"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى wie viele؟",
            "opts": [
              "كم (عدد)",
              "إلى أين",
              "لماذا"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى welcher؟",
            "opts": [
              "أي / ما",
              "لماذا",
              "متى"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l69",
        "type": "lesson",
        "icon": "🔄",
        "title": "أفعال ناقصة ومنفصلة",
        "desc": "können, müssen, wollen, aufstehen, umsteigen",
        "xp": 30,
        "grammar": "الأفعال الناقصة (können, müssen, wollen, dürfen, sollen) تأتي ثانياً والمصدر في الآخر: Ich muss früh aufstehen. والمنفصلة تفصل بادئتها: Wir steigen in Berlin um.",
        "vocab": [
          {
            "de": "können",
            "ar": "يستطيع"
          },
          {
            "de": "müssen",
            "ar": "يجب عليه"
          },
          {
            "de": "wollen",
            "ar": "يريد"
          },
          {
            "de": "dürfen",
            "ar": "يُسمح له"
          },
          {
            "de": "sollen",
            "ar": "ينبغي"
          },
          {
            "de": "aufstehen",
            "ar": "يستيقظ"
          },
          {
            "de": "einsteigen",
            "ar": "يركب"
          },
          {
            "de": "aussteigen",
            "ar": "ينزل"
          },
          {
            "de": "umsteigen",
            "ar": "يغيّر وسيلة النقل"
          },
          {
            "de": "anfangen",
            "ar": "يبدأ"
          },
          {
            "de": "Ich muss früh aufstehen.",
            "ar": "يجب أن أستيقظ مبكراً."
          },
          {
            "de": "Wir steigen in Berlin um.",
            "ar": "نغيّر القطار في برلين."
          }
        ],
        "quiz": {
          "q": "ما معنى können؟",
          "opts": [
            "يستطيع",
            "يجب عليه",
            "يريد"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى einsteigen؟",
            "opts": [
              "يركب",
              "يستطيع",
              "يجب عليه"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Wir steigen in Berlin um.؟",
            "opts": [
              "نغيّر القطار في برلين.",
              "يجب عليه",
              "يريد"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l86",
        "type": "lesson",
        "icon": "🔛",
        "title": "أفعال منفصلة 2",
        "desc": "anmachen, ausmachen, aufmachen, zumachen, mitkommen",
        "xp": 30,
        "grammar": "البادئة تذهب للآخر: Ich mache das Licht an. Wir laden dich ein.",
        "vocab": [
          {
            "de": "anmachen",
            "ar": "يشغّل"
          },
          {
            "de": "ausmachen",
            "ar": "يطفئ"
          },
          {
            "de": "aufmachen",
            "ar": "يفتح"
          },
          {
            "de": "zumachen",
            "ar": "يغلق"
          },
          {
            "de": "mitkommen",
            "ar": "يأتي معه"
          },
          {
            "de": "zurückkommen",
            "ar": "يرجع"
          },
          {
            "de": "ausgehen",
            "ar": "يخرج للتنزه"
          },
          {
            "de": "einladen",
            "ar": "يدعو"
          },
          {
            "de": "vorbereiten",
            "ar": "يحضّر"
          },
          {
            "de": "mitnehmen",
            "ar": "يأخذ معه"
          },
          {
            "de": "aufhören",
            "ar": "يتوقف"
          },
          {
            "de": "ausfüllen",
            "ar": "يملأ (استمارة)"
          },
          {
            "de": "unterschreiben",
            "ar": "يوقّع"
          }
        ],
        "quiz": {
          "q": "ما معنى anmachen؟",
          "opts": [
            "يشغّل",
            "يطفئ",
            "يفتح"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى ausgehen؟",
            "opts": [
              "يخرج للتنزه",
              "يشغّل",
              "يطفئ"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى unterschreiben؟",
            "opts": [
              "يوقّع",
              "يشغّل",
              "يطفئ"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l102",
        "type": "lesson",
        "icon": "⏩",
        "title": "ظروف الترتيب والاحتمال",
        "desc": "plötzlich, zuerst, danach, schließlich, vorher",
        "xp": 30,
        "grammar": "للترتيب: zuerst، dann، danach، schließlich. وللاحتمال: vielleicht، natürlich، leider.",
        "vocab": [
          {
            "de": "plötzlich",
            "ar": "فجأة"
          },
          {
            "de": "zuerst",
            "ar": "أولاً"
          },
          {
            "de": "danach",
            "ar": "بعد ذلك"
          },
          {
            "de": "schließlich",
            "ar": "أخيراً"
          },
          {
            "de": "vorher",
            "ar": "قبل ذلك"
          },
          {
            "de": "sofort",
            "ar": "فوراً"
          },
          {
            "de": "selten",
            "ar": "نادراً"
          },
          {
            "de": "meistens",
            "ar": "غالباً"
          },
          {
            "de": "normalerweise",
            "ar": "عادةً"
          },
          {
            "de": "endlich",
            "ar": "أخيراً"
          },
          {
            "de": "leider",
            "ar": "للأسف"
          },
          {
            "de": "vielleicht",
            "ar": "ربما"
          },
          {
            "de": "natürlich",
            "ar": "طبعاً"
          },
          {
            "de": "wirklich",
            "ar": "حقاً"
          }
        ],
        "quiz": {
          "q": "ما معنى plötzlich؟",
          "opts": [
            "فجأة",
            "أولاً",
            "بعد ذلك"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى meistens؟",
            "opts": [
              "غالباً",
              "أولاً",
              "بعد ذلك"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى wirklich؟",
            "opts": [
              "حقاً",
              "أولاً",
              "بعد ذلك"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l103",
        "type": "lesson",
        "icon": "📍",
        "title": "حروف جر المكان",
        "desc": "zwischen, neben, hinter, vor, unter",
        "xp": 30,
        "grammar": "مع Dativ للمكان: Das Buch liegt auf dem Tisch. zwischen، neben، hinter، vor، unter، über.",
        "vocab": [
          {
            "de": "zwischen",
            "ar": "بين"
          },
          {
            "de": "neben",
            "ar": "بجانب"
          },
          {
            "de": "hinter",
            "ar": "خلف"
          },
          {
            "de": "vor",
            "ar": "أمام"
          },
          {
            "de": "unter",
            "ar": "تحت"
          },
          {
            "de": "über",
            "ar": "فوق"
          },
          {
            "de": "gegenüber",
            "ar": "مقابل"
          },
          {
            "de": "entlang",
            "ar": "على طول"
          },
          {
            "de": "bis",
            "ar": "حتى"
          },
          {
            "de": "seit",
            "ar": "منذ"
          },
          {
            "de": "während",
            "ar": "خلال"
          }
        ],
        "quiz": {
          "q": "ما معنى zwischen؟",
          "opts": [
            "بين",
            "بجانب",
            "خلف"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى über؟",
            "opts": [
              "فوق",
              "بجانب",
              "خلف"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى während؟",
            "opts": [
              "خلال",
              "بين",
              "بجانب"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l104",
        "type": "lesson",
        "icon": "🔢",
        "title": "الترتيب والكسور",
        "desc": "erste, zweite, dritte, vierte, zehnte",
        "xp": 30,
        "grammar": "الأرقام الترتيبية: der erste، der zweite، der dritte، der vierte ... وتنتهي بـ -te حتى 19.",
        "vocab": [
          {
            "de": "erste",
            "ar": "الأول"
          },
          {
            "de": "zweite",
            "ar": "الثاني"
          },
          {
            "de": "dritte",
            "ar": "الثالث"
          },
          {
            "de": "vierte",
            "ar": "الرابع"
          },
          {
            "de": "zehnte",
            "ar": "العاشر"
          },
          {
            "de": "letzte",
            "ar": "الأخير"
          },
          {
            "de": "halb",
            "ar": "نصف"
          },
          {
            "de": "doppelt",
            "ar": "مضاعف"
          },
          {
            "de": "die Hälfte",
            "ar": "النصف"
          },
          {
            "de": "das Viertel",
            "ar": "الربع"
          },
          {
            "de": "die Mitte",
            "ar": "الوسط"
          },
          {
            "de": "das Mal",
            "ar": "المرة"
          },
          {
            "de": "die Summe",
            "ar": "المجموع"
          }
        ],
        "quiz": {
          "q": "ما معنى erste؟",
          "opts": [
            "الأول",
            "الثاني",
            "الثالث"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Hälfte؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Viertel؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى halb؟",
            "opts": [
              "نصف",
              "الأول",
              "الثاني"
            ],
            "ans": 0
          }
        ]
      }
    ]
  },
  {
    "unit": "الوحدة الرابعة: الأسرة والروتين والهوايات",
    "nodes": [
      {
        "id": "l11",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Das ist ___ Bruder. (أخي)",
            "opts": [
              "mein",
              "meine",
              "meinen"
            ],
            "ans": 0,
            "e": "Bruder مذكر: mein Bruder."
          },
          {
            "q": "أكمل: Das ist ___ Schwester. (أختي)",
            "opts": [
              "meine",
              "mein",
              "meinen"
            ],
            "ans": 0
          }
        ],
        "icon": "👨‍👩‍👧",
        "title": "الأسرة والأصدقاء",
        "desc": "Familie, Geschwister, verheiratet, allein",
        "xp": 30,
        "grammar": "للتحدث عن الملكية نستخدم mein / meine حسب الاسم: mein Bruder (أخي)، meine Schwester (أختي).",
        "vocab": [
          {
            "de": "Das ist meine Familie.",
            "ar": "هذه عائلتي."
          },
          {
            "de": "Ich habe einen Bruder und eine Schwester.",
            "ar": "لدي أخ وأخت."
          },
          {
            "de": "Bist du verheiratet?",
            "ar": "هل أنت متزوج؟"
          },
          {
            "de": "Meine Eltern wohnen in Ägypten.",
            "ar": "والداي يسكنان في مصر."
          }
        ],
        "quiz": {
          "q": "اختر الجملة الصحيحة: لدي أخت.",
          "opts": [
            "Ich habe eine Schwester.",
            "Ich bin eine Schwester.",
            "Ich wohne Schwester."
          ],
          "ans": 0
        }
      },
      {
        "id": "l12",
        "type": "lesson",
        "extra": [
          {
            "q": "ما معنى halb neun؟",
            "opts": [
              "8:30",
              "9:30",
              "9:15"
            ],
            "ans": 0,
            "e": "halb neun = نصف ساعة قبل التاسعة."
          },
          {
            "q": "أكمل: Der Kurs beginnt ___ neun Uhr.",
            "opts": [
              "um",
              "am",
              "im"
            ],
            "ans": 0
          }
        ],
        "icon": "⏰",
        "title": "الوقت وأيام الأسبوع",
        "desc": "Uhrzeit, Wochentage, Termine",
        "xp": 30,
        "grammar": "للسؤال عن الوقت نقول: Wie spät ist es? وللمواعيد نستخدم um مع الساعة: Der Kurs beginnt um neun Uhr.",
        "vocab": [
          {
            "de": "Wie spät ist es?",
            "ar": "كم الساعة؟"
          },
          {
            "de": "Es ist halb acht.",
            "ar": "الساعة السابعة والنصف."
          },
          {
            "de": "Am Montag habe ich einen Deutschkurs.",
            "ar": "لدي درس ألماني يوم الاثنين."
          },
          {
            "de": "Der Termin ist um 10 Uhr.",
            "ar": "الموعد الساعة العاشرة."
          }
        ],
        "quiz": {
          "q": "كيف تقول: الموعد الساعة الثالثة؟",
          "opts": [
            "Der Termin ist um drei Uhr.",
            "Der Termin ist drei Jahre.",
            "Ich bin um drei Uhr."
          ],
          "ans": 0
        }
      },
      {
        "id": "l13",
        "type": "lesson",
        "extra": [
          {
            "q": "أي جملة صحيحة؟",
            "opts": [
              "Ich stehe um sieben auf.",
              "Ich aufstehe um sieben.",
              "Ich stehe auf um sieben nicht."
            ],
            "ans": 0
          },
          {
            "q": "ما معنى fernsehen؟",
            "opts": [
              "يشاهد التلفاز",
              "يسمع الراديو",
              "يقرأ الجريدة"
            ],
            "ans": 0
          }
        ],
        "icon": "🏃",
        "title": "الروتين اليومي",
        "desc": "aufstehen, arbeiten, frühstücken, schlafen",
        "xp": 30,
        "grammar": "بعض الأفعال تنفصل في الجملة، مثل aufstehen: Ich stehe um sieben Uhr auf. البادئة تأتي في آخر الجملة.",
        "vocab": [
          {
            "de": "Ich stehe um sieben Uhr auf.",
            "ar": "أستيقظ الساعة السابعة."
          },
          {
            "de": "Dann frühstücke ich.",
            "ar": "بعد ذلك أتناول الإفطار."
          },
          {
            "de": "Ich gehe um acht Uhr zur Arbeit.",
            "ar": "أذهب إلى العمل الساعة الثامنة."
          },
          {
            "de": "Am Abend sehe ich fern.",
            "ar": "أشاهد التلفاز في المساء."
          }
        ],
        "quiz": {
          "q": "أين تأتي بادئة الفعل aufstehen؟",
          "opts": [
            "في نهاية الجملة: Ich stehe früh auf.",
            "قبل الفاعل دائماً.",
            "تحذف من الجملة."
          ],
          "ans": 0
        }
      },
      {
        "id": "l68",
        "type": "lesson",
        "icon": "⏰",
        "title": "الوقت والتكرار",
        "desc": "früh, spät, heute Abend, nächste Woche",
        "xp": 30,
        "grammar": "للوقت: heute Abend، morgen früh، am Wochenende، jeden Tag، nächste Woche.",
        "vocab": [
          {
            "de": "früh",
            "ar": "مبكراً"
          },
          {
            "de": "spät",
            "ar": "متأخراً"
          },
          {
            "de": "bald",
            "ar": "قريباً"
          },
          {
            "de": "vorgestern",
            "ar": "أول أمس"
          },
          {
            "de": "heute Abend",
            "ar": "هذا المساء"
          },
          {
            "de": "morgen früh",
            "ar": "غداً صباحاً"
          },
          {
            "de": "nächste Woche",
            "ar": "الأسبوع القادم"
          },
          {
            "de": "jeden Tag",
            "ar": "كل يوم"
          },
          {
            "de": "am Wochenende",
            "ar": "في عطلة نهاية الأسبوع"
          },
          {
            "de": "Bis bald!",
            "ar": "إلى اللقاء قريباً!"
          }
        ],
        "quiz": {
          "q": "ما معنى früh؟",
          "opts": [
            "مبكراً",
            "متأخراً",
            "قريباً"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى morgen früh؟",
            "opts": [
              "غداً صباحاً",
              "متأخراً",
              "قريباً"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Bis bald!؟",
            "opts": [
              "إلى اللقاء قريباً!",
              "متأخراً",
              "قريباً"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l36",
        "type": "lesson",
        "icon": "⚽",
        "title": "الهوايات والرياضة",
        "desc": "Hobby, Sport, gern",
        "xp": 30,
        "grammar": "gern تأتي بعد الفعل للتعبير عن الحب: Ich schwimme gern. Sie tanzt gern.\nمع الأسماء: Ich spiele gern Fußball. وللسؤال: Was ist dein Hobby?",
        "vocab": [
          {
            "de": "das Hobby",
            "ar": "هواية"
          },
          {
            "de": "der Fußball",
            "ar": "كرة القدم"
          },
          {
            "de": "die Musik",
            "ar": "موسيقى"
          },
          {
            "de": "der Sport",
            "ar": "رياضة"
          },
          {
            "de": "Ich schwimme gern.",
            "ar": "أحب السباحة."
          },
          {
            "de": "Sie tanzt gern.",
            "ar": "هي تحب الرقص."
          },
          {
            "de": "Ich spiele gern Fußball.",
            "ar": "أحب لعب كرة القدم."
          },
          {
            "de": "Was ist dein Hobby?",
            "ar": "ما هي هوايتك؟"
          }
        ],
        "quiz": {
          "q": "اختر الجملة الصحيحة: أحب الغناء",
          "opts": [
            "Ich singe gern.",
            "Gern ich singe.",
            "Ich gern singe."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى laufen؟",
            "opts": [
              "يجري",
              "يسبح",
              "يرقص"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Sie ___ gern. (tanzen)",
            "opts": [
              "tanzt",
              "tanze",
              "tanzen"
            ],
            "ans": 0,
            "e": "مع sie (هي) نضيف t: tanzt."
          }
        ]
      },
      {
        "id": "l37",
        "type": "lesson",
        "icon": "🙂",
        "title": "المشاعر والصفات",
        "desc": "glücklich, müde, schnell, langsam",
        "xp": 30,
        "grammar": "الصفة بعد sein لا تتغير: Der Zug ist schnell. Ich bin müde. Das Wasser ist kalt.",
        "vocab": [
          {
            "de": "glücklich",
            "ar": "سعيد"
          },
          {
            "de": "traurig",
            "ar": "حزين"
          },
          {
            "de": "müde",
            "ar": "متعب"
          },
          {
            "de": "freundlich",
            "ar": "لطيف"
          },
          {
            "de": "schnell",
            "ar": "سريع"
          },
          {
            "de": "langsam",
            "ar": "بطيء"
          },
          {
            "de": "Ich bin glücklich.",
            "ar": "أنا سعيد."
          },
          {
            "de": "Der Bus ist langsam.",
            "ar": "الحافلة بطيئة."
          },
          {
            "de": "Ich liebe meine Familie.",
            "ar": "أحب عائلتي."
          }
        ],
        "quiz": {
          "q": "ما عكس schnell؟",
          "opts": [
            "langsam",
            "warm",
            "traurig"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "أكمل: Das Wasser ist ___. (بارد)",
            "opts": [
              "kalt",
              "heiß",
              "müde"
            ],
            "ans": 0
          },
          {
            "q": "كيف تقول: أنا حزين؟",
            "opts": [
              "Ich bin traurig.",
              "Ich habe traurig.",
              "Ich traurig bin."
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l90",
        "type": "lesson",
        "icon": "😠",
        "title": "مشاعر أكثر",
        "desc": "wütend, nervös, ängstlich, überrascht, zufrieden",
        "xp": 30,
        "grammar": "الصفة بعد sein: Ich bin wütend. Er ist stolz. Sie ist zufrieden.",
        "vocab": [
          {
            "de": "wütend",
            "ar": "غاضب"
          },
          {
            "de": "nervös",
            "ar": "متوتر"
          },
          {
            "de": "ängstlich",
            "ar": "خائف"
          },
          {
            "de": "überrascht",
            "ar": "متفاجئ"
          },
          {
            "de": "zufrieden",
            "ar": "راضٍ"
          },
          {
            "de": "einsam",
            "ar": "وحيد"
          },
          {
            "de": "stolz",
            "ar": "فخور"
          },
          {
            "de": "fröhlich",
            "ar": "مبتهج"
          },
          {
            "de": "sicher",
            "ar": "متأكد"
          },
          {
            "de": "allein",
            "ar": "وحيد"
          }
        ],
        "quiz": {
          "q": "ما معنى wütend؟",
          "opts": [
            "غاضب",
            "متوتر",
            "خائف"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى einsam؟",
            "opts": [
              "وحيد",
              "متوتر",
              "خائف"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى allein؟",
            "opts": [
              "وحيد",
              "متوتر",
              "خائف"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l74",
        "type": "lesson",
        "icon": "🤲",
        "title": "أفعال شائعة أكثر",
        "desc": "nehmen, geben, bringen, sitzen, stehen",
        "xp": 30,
        "grammar": "أفعال غير منتظمة (e → i): nehmen → ich nehme، du nimmst، er nimmt. geben → ich gebe، du gibst، er gibt. sprechen → du sprichst، er spricht.",
        "vocab": [
          {
            "de": "kennen",
            "ar": "يعرف (شخصاً)"
          },
          {
            "de": "glauben",
            "ar": "يعتقد"
          },
          {
            "de": "hoffen",
            "ar": "يأمل"
          },
          {
            "de": "tragen",
            "ar": "يحمل / يرتدي"
          },
          {
            "de": "nehmen",
            "ar": "يأخذ"
          },
          {
            "de": "geben",
            "ar": "يعطي"
          },
          {
            "de": "bringen",
            "ar": "يحضر"
          },
          {
            "de": "holen",
            "ar": "يجلب"
          },
          {
            "de": "legen",
            "ar": "يضع (أفقياً)"
          },
          {
            "de": "stellen",
            "ar": "يضع (عمودياً)"
          },
          {
            "de": "sitzen",
            "ar": "يجلس"
          },
          {
            "de": "stehen",
            "ar": "يقف"
          },
          {
            "de": "Ich nehme den Bus.",
            "ar": "أركب الحافلة."
          },
          {
            "de": "Er gibt mir das Buch.",
            "ar": "هو يعطيني الكتاب."
          }
        ],
        "quiz": {
          "q": "ما معنى kennen؟",
          "opts": [
            "يعرف (شخصاً)",
            "يعتقد",
            "يأمل"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى holen؟",
            "opts": [
              "يجلب",
              "يعتقد",
              "يأمل"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Er gibt mir das Buch.؟",
            "opts": [
              "هو يعطيني الكتاب.",
              "يعتقد",
              "يأمل"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l101",
        "type": "lesson",
        "icon": "🧠",
        "title": "أفعال التفكير والتواصل",
        "desc": "entscheiden, erlauben, vorschlagen, vermissen, zählen",
        "xp": 30,
        "grammar": "بعض الأفعال لا تتغير بادئتها: bedeuten، besprechen، erlauben، entscheiden.",
        "vocab": [
          {
            "de": "entscheiden",
            "ar": "يقرر"
          },
          {
            "de": "erlauben",
            "ar": "يسمح"
          },
          {
            "de": "vorschlagen",
            "ar": "يقترح"
          },
          {
            "de": "vermissen",
            "ar": "يشتاق"
          },
          {
            "de": "zählen",
            "ar": "يعدّ"
          },
          {
            "de": "zeichnen",
            "ar": "يرسم"
          },
          {
            "de": "bedeuten",
            "ar": "يعني"
          },
          {
            "de": "buchstabieren",
            "ar": "يتهجّى"
          },
          {
            "de": "besprechen",
            "ar": "يناقش"
          }
        ],
        "quiz": {
          "q": "ما معنى entscheiden؟",
          "opts": [
            "يقرر",
            "يسمح",
            "يقترح"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى zählen؟",
            "opts": [
              "يعدّ",
              "يقرر",
              "يسمح"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى besprechen؟",
            "opts": [
              "يناقش",
              "يقرر",
              "يسمح"
            ],
            "ans": 0
          }
        ]
      }
    ]
  },
  {
    "unit": "الوحدة الخامسة: العمل والمهن والمدينة",
    "nodes": [
      {
        "id": "l14",
        "type": "lesson",
        "extra": [
          {
            "q": "كيف تقول: أنا مهندس؟",
            "opts": [
              "Ich bin Ingenieur.",
              "Ich habe Ingenieur.",
              "Ich wohne Ingenieur."
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Arbeit؟",
            "opts": [
              "عمل",
              "بيت",
              "مدرسة"
            ],
            "ans": 0
          }
        ],
        "icon": "💼",
        "title": "العمل والمهن",
        "desc": "Beruf, Arbeitsplatz, arbeiten, suchen",
        "xp": 30,
        "grammar": "للسؤال عن المهنة نقول: Was sind Sie von Beruf? وللإجابة: Ich bin Ingenieur / Programmierer.",
        "vocab": [
          {
            "de": "Was sind Sie von Beruf?",
            "ar": "ما مهنتك؟"
          },
          {
            "de": "Ich bin Ingenieur.",
            "ar": "أنا مهندس."
          },
          {
            "de": "Wo arbeiten Sie?",
            "ar": "أين تعمل؟"
          },
          {
            "de": "Ich suche eine Arbeit.",
            "ar": "أبحث عن عمل."
          }
        ],
        "quiz": {
          "q": "كيف تسأل شخصاً عن مهنته؟",
          "opts": [
            "Was sind Sie von Beruf?",
            "Wie alt sind Sie?",
            "Wo wohnen Sie?"
          ],
          "ans": 0
        }
      },
      {
        "id": "l53",
        "type": "lesson",
        "icon": "📝",
        "title": "أفعال الدراسة والعمل",
        "desc": "üben, wiederholen, suchen, finden",
        "xp": 30,
        "grammar": "الفعل الثاني في الجملة دائماً: Ich übe jeden Tag. للنفي بعد الفعل: Ich finde es nicht.",
        "vocab": [
          {
            "de": "üben",
            "ar": "يتمرّن"
          },
          {
            "de": "wiederholen",
            "ar": "يكرر"
          },
          {
            "de": "rechnen",
            "ar": "يحسب"
          },
          {
            "de": "benutzen",
            "ar": "يستخدم"
          },
          {
            "de": "suchen",
            "ar": "يبحث"
          },
          {
            "de": "finden",
            "ar": "يجد"
          },
          {
            "de": "vergessen",
            "ar": "ينسى"
          },
          {
            "de": "denken",
            "ar": "يفكر"
          },
          {
            "de": "Ich übe jeden Tag.",
            "ar": "أتمرّن كل يوم."
          },
          {
            "de": "Ich finde mein Handy nicht.",
            "ar": "لا أجد موبايلي."
          }
        ],
        "quiz": {
          "q": "ما معنى üben؟",
          "opts": [
            "يتمرّن",
            "يكرر",
            "يحسب"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى suchen؟",
            "opts": [
              "يبحث",
              "يتمرّن",
              "يكرر"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى denken؟",
            "opts": [
              "يفكر",
              "يكرر",
              "يحسب"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l81",
        "type": "lesson",
        "icon": "🎓",
        "title": "المدرسة والامتحان",
        "desc": "Klasse, Prüfung, Hausaufgabe, Frage, Antwort",
        "xp": 30,
        "grammar": "الأسماء التي تنتهي بـ -ung و-e غالباً مؤنثة: die Prüfung، die Aufgabe، die Frage.",
        "vocab": [
          {
            "de": "die Klasse",
            "ar": "الفصل"
          },
          {
            "de": "die Prüfung",
            "ar": "الامتحان"
          },
          {
            "de": "die Hausaufgabe",
            "ar": "الواجب"
          },
          {
            "de": "die Frage",
            "ar": "السؤال"
          },
          {
            "de": "die Antwort",
            "ar": "الإجابة"
          },
          {
            "de": "das Wort",
            "ar": "الكلمة"
          },
          {
            "de": "der Satz",
            "ar": "الجملة"
          },
          {
            "de": "die Aufgabe",
            "ar": "التمرين"
          },
          {
            "de": "die Note",
            "ar": "الدرجة"
          },
          {
            "de": "das Heft",
            "ar": "الكراس"
          },
          {
            "de": "die Tafel",
            "ar": "السبورة"
          },
          {
            "de": "der Unterricht",
            "ar": "الدرس"
          }
        ],
        "quiz": {
          "q": "ما معنى Klasse؟",
          "opts": [
            "الفصل",
            "الامتحان",
            "الواجب"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Klasse؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Prüfung؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Satz؟",
            "opts": [
              "الجملة",
              "الفصل",
              "الامتحان"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l96",
        "type": "lesson",
        "icon": "🧑‍🔧",
        "title": "مهن أخرى",
        "desc": "Pilot, Bäcker, Friseur, Maler, Anwalt",
        "xp": 30,
        "grammar": "للمؤنث نضيف -in: der Bäcker → die Bäckerin، der Anwalt → die Anwältin.",
        "vocab": [
          {
            "de": "der Pilot",
            "ar": "الطيار"
          },
          {
            "de": "der Bäcker",
            "ar": "الخباز"
          },
          {
            "de": "der Friseur",
            "ar": "الحلاق"
          },
          {
            "de": "der Maler",
            "ar": "الرسام"
          },
          {
            "de": "der Anwalt",
            "ar": "المحامي"
          },
          {
            "de": "der Richter",
            "ar": "القاضي"
          },
          {
            "de": "der Soldat",
            "ar": "الجندي"
          },
          {
            "de": "der Schüler",
            "ar": "التلميذ"
          },
          {
            "de": "der Techniker",
            "ar": "الفني"
          },
          {
            "de": "der Journalist",
            "ar": "الصحفي"
          },
          {
            "de": "der Musiker",
            "ar": "الموسيقي"
          }
        ],
        "quiz": {
          "q": "ما معنى Pilot؟",
          "opts": [
            "الطيار",
            "الخباز",
            "الحلاق"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Pilot؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Bäcker؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Richter؟",
            "opts": [
              "القاضي",
              "الخباز",
              "الحلاق"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l91",
        "type": "lesson",
        "icon": "📊",
        "title": "العمل والمشاكل",
        "desc": "Gehalt, Lohn, Vertrag, Steuer, Versicherung",
        "xp": 30,
        "grammar": "للمشكلة: Das ist ein Problem. Ich habe eine Idee. Das ist ein Fehler.",
        "vocab": [
          {
            "de": "das Gehalt",
            "ar": "الراتب"
          },
          {
            "de": "der Lohn",
            "ar": "الأجر"
          },
          {
            "de": "der Vertrag",
            "ar": "العقد"
          },
          {
            "de": "die Steuer",
            "ar": "الضريبة"
          },
          {
            "de": "die Versicherung",
            "ar": "التأمين"
          },
          {
            "de": "das Problem",
            "ar": "المشكلة"
          },
          {
            "de": "die Lösung",
            "ar": "الحل"
          },
          {
            "de": "der Fehler",
            "ar": "الخطأ"
          },
          {
            "de": "der Vorschlag",
            "ar": "الاقتراح"
          },
          {
            "de": "die Idee",
            "ar": "الفكرة"
          }
        ],
        "quiz": {
          "q": "ما معنى Gehalt؟",
          "opts": [
            "الراتب",
            "الأجر",
            "العقد"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Gehalt؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Lohn؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Problem؟",
            "opts": [
              "المشكلة",
              "الأجر",
              "العقد"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l15",
        "type": "lesson",
        "extra": [
          {
            "q": "ما معنى links؟",
            "opts": [
              "يسار",
              "يمين",
              "أمام"
            ],
            "ans": 0
          },
          {
            "q": "كيف تسأل عن محطة القطار؟",
            "opts": [
              "Wo ist der Bahnhof?",
              "Wie ist der Bahnhof?",
              "Wer ist der Bahnhof?"
            ],
            "ans": 0
          }
        ],
        "icon": "🧭",
        "title": "الاتجاهات والأماكن في المدينة",
        "desc": "links, rechts, geradeaus, neben",
        "xp": 30,
        "grammar": "للسؤال عن مكان نقول: Wo ist ...? ولإعطاء اتجاهات بسيطة: Gehen Sie geradeaus, dann links.",
        "vocab": [
          {
            "de": "Entschuldigung, wo ist der Bahnhof?",
            "ar": "عذراً، أين محطة القطار؟"
          },
          {
            "de": "Gehen Sie geradeaus.",
            "ar": "امشِ إلى الأمام."
          },
          {
            "de": "Dann links oder rechts.",
            "ar": "ثم يساراً أو يميناً."
          },
          {
            "de": "Die Apotheke ist neben dem Supermarkt.",
            "ar": "الصيدلية بجوار السوبرماركت."
          }
        ],
        "quiz": {
          "q": "ما معنى geradeaus؟",
          "opts": [
            "إلى الأمام",
            "إلى اليمين",
            "إلى الخلف"
          ],
          "ans": 0
        }
      },
      {
        "id": "l35",
        "type": "lesson",
        "icon": "🏙️",
        "title": "الأماكن في المدينة",
        "desc": "Park, Bank, Post, Kino, links, rechts",
        "xp": 30,
        "grammar": "للسؤال عن مكان: Wo ist die Post? والإجابة: Die Post ist dort / hier.\nللاتجاه: links يسار، rechts يمين، geradeaus مباشرة. weit بعيد، nah قريب.",
        "vocab": [
          {
            "de": "der Park",
            "ar": "حديقة عامة"
          },
          {
            "de": "die Bank",
            "ar": "بنك"
          },
          {
            "de": "die Post",
            "ar": "مكتب البريد"
          },
          {
            "de": "das Kino",
            "ar": "سينما"
          },
          {
            "de": "die Bäckerei",
            "ar": "مخبز"
          },
          {
            "de": "Wo ist die Post?",
            "ar": "أين مكتب البريد؟"
          },
          {
            "de": "Das Kino ist dort.",
            "ar": "السينما هناك."
          },
          {
            "de": "Die Schule ist nah.",
            "ar": "المدرسة قريبة."
          }
        ],
        "quiz": {
          "q": "ما معنى rechts؟",
          "opts": [
            "يمين",
            "يسار",
            "مباشرة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما عكس weit؟",
            "opts": [
              "nah",
              "links",
              "dort"
            ],
            "ans": 0
          },
          {
            "q": "كيف تسأل عن مكان البنك؟",
            "opts": [
              "Wo ist die Bank?",
              "Wie ist die Bank?",
              "Wer ist die Bank?"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Gehen Sie ___. (مباشرة)",
            "opts": [
              "geradeaus",
              "weit",
              "hier"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l40",
        "type": "lesson",
        "icon": "📅",
        "title": "أيام الأسبوع والساعة",
        "desc": "Mittwoch, Donnerstag, Samstag, Sonntag",
        "xp": 30,
        "grammar": "أيام الأسبوع كلها مذكرة (der) ونستخدم am: am Mittwoch. الترتيب: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.",
        "vocab": [
          {
            "de": "der Mittwoch",
            "ar": "الأربعاء"
          },
          {
            "de": "der Donnerstag",
            "ar": "الخميس"
          },
          {
            "de": "der Samstag",
            "ar": "السبت"
          },
          {
            "de": "der Sonntag",
            "ar": "الأحد"
          },
          {
            "de": "der Monat",
            "ar": "الشهر"
          },
          {
            "de": "die Stunde",
            "ar": "الساعة (60 دقيقة)"
          },
          {
            "de": "die Minute",
            "ar": "الدقيقة"
          },
          {
            "de": "Am Samstag schlafe ich lange.",
            "ar": "أنام طويلاً يوم السبت."
          }
        ],
        "quiz": {
          "q": "أكمل: ___ Samstag habe ich frei.",
          "opts": [
            "Am",
            "Im",
            "Um"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Sonntag؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Donnerstag؟",
            "opts": [
              "الخميس",
              "الأربعاء",
              "السبت"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l44",
        "type": "lesson",
        "icon": "🏛️",
        "title": "أماكن أخرى في المدينة",
        "desc": "Markt, Geschäft, Bibliothek, Museum",
        "xp": 30,
        "grammar": "للسؤال عن مكان: Wo ist ...? وللإجابة: Der Markt ist hier. Das Museum ist dort.",
        "vocab": [
          {
            "de": "der Markt",
            "ar": "السوق"
          },
          {
            "de": "das Geschäft",
            "ar": "المتجر"
          },
          {
            "de": "die Bibliothek",
            "ar": "المكتبة"
          },
          {
            "de": "das Museum",
            "ar": "المتحف"
          },
          {
            "de": "die Brücke",
            "ar": "الجسر"
          },
          {
            "de": "die Haltestelle",
            "ar": "محطة الحافلة"
          },
          {
            "de": "die Ampel",
            "ar": "إشارة المرور"
          },
          {
            "de": "Der Markt ist groß.",
            "ar": "السوق كبير."
          },
          {
            "de": "Das Museum ist offen.",
            "ar": "المتحف مفتوح."
          }
        ],
        "quiz": {
          "q": "ما معنى Markt؟",
          "opts": [
            "السوق",
            "المتجر",
            "المكتبة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Markt؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Geschäft؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى Ampel؟",
            "opts": [
              "إشارة المرور",
              "الجسر",
              "محطة الحافلة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l51",
        "type": "lesson",
        "icon": "🚶",
        "title": "أفعال الحركة واللقاء",
        "desc": "warten, bleiben, besuchen, öffnen",
        "xp": 30,
        "grammar": "وجهة الحركة: gehen/fahren + nach (مدينة) أو zu (شخص). bleiben للبقاء: Ich bleibe hier.",
        "vocab": [
          {
            "de": "warten",
            "ar": "ينتظر"
          },
          {
            "de": "bleiben",
            "ar": "يبقى"
          },
          {
            "de": "treffen",
            "ar": "يقابل"
          },
          {
            "de": "besuchen",
            "ar": "يزور"
          },
          {
            "de": "öffnen",
            "ar": "يفتح"
          },
          {
            "de": "schließen",
            "ar": "يغلق"
          },
          {
            "de": "fliegen",
            "ar": "يطير"
          },
          {
            "de": "steigen",
            "ar": "يصعد"
          },
          {
            "de": "Wir besuchen unsere Freunde.",
            "ar": "نزور أصدقاءنا."
          },
          {
            "de": "Ich bleibe zu Hause.",
            "ar": "أبقى في البيت."
          }
        ],
        "quiz": {
          "q": "ما معنى warten؟",
          "opts": [
            "ينتظر",
            "يبقى",
            "يقابل"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى öffnen؟",
            "opts": [
              "يفتح",
              "ينتظر",
              "يبقى"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى steigen؟",
            "opts": [
              "يصعد",
              "يبقى",
              "يقابل"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l65",
        "type": "lesson",
        "icon": "🧭",
        "title": "عبارات في الطريق",
        "desc": "Wie komme ich zum Bahnhof?, Gehen Sie geradeaus",
        "xp": 30,
        "grammar": "للسؤال عن الطريق: Wie komme ich zum ...? (zum + مذكر/محايد، zur + مؤنث). للتوضيح: Noch einmal, bitte.",
        "vocab": [
          {
            "de": "Wie komme ich zum Bahnhof?",
            "ar": "كيف أصل إلى المحطة؟"
          },
          {
            "de": "Gehen Sie links und dann rechts.",
            "ar": "اذهب يساراً ثم يميناً."
          },
          {
            "de": "Es ist nicht weit.",
            "ar": "ليس بعيداً."
          },
          {
            "de": "Ich bin neu hier.",
            "ar": "أنا جديد هنا."
          },
          {
            "de": "Können Sie das wiederholen?",
            "ar": "هل يمكنك أن تكرر هذا؟"
          },
          {
            "de": "Noch einmal, bitte.",
            "ar": "مرة أخرى من فضلك."
          },
          {
            "de": "Ich verstehe Sie nicht.",
            "ar": "لا أفهمك."
          }
        ],
        "quiz": {
          "q": "ما معنى Wie komme ich zum Bahnhof?؟",
          "opts": [
            "كيف أصل إلى المحطة؟",
            "اذهب يساراً ثم يميناً.",
            "ليس بعيداً."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Ich bin neu hier.؟",
            "opts": [
              "أنا جديد هنا.",
              "اذهب يساراً ثم يميناً.",
              "ليس بعيداً."
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Ich verstehe Sie nicht.؟",
            "opts": [
              "لا أفهمك.",
              "كيف أصل إلى المحطة؟",
              "اذهب يساراً ثم يميناً."
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l105",
        "type": "lesson",
        "icon": "📰",
        "title": "المجتمع والإعلام",
        "desc": "Welt, Regierung, Gesetz, Wahl, Meinung",
        "xp": 30,
        "grammar": "للأخبار: Ich lese die Zeitung. Ich sehe Fernsehen.",
        "vocab": [
          {
            "de": "die Welt",
            "ar": "العالم"
          },
          {
            "de": "die Regierung",
            "ar": "الحكومة"
          },
          {
            "de": "das Gesetz",
            "ar": "القانون"
          },
          {
            "de": "die Wahl",
            "ar": "الانتخاب"
          },
          {
            "de": "die Meinung",
            "ar": "الرأي"
          },
          {
            "de": "die Sprache",
            "ar": "اللغة"
          },
          {
            "de": "die Kultur",
            "ar": "الثقافة"
          },
          {
            "de": "die Religion",
            "ar": "الدين"
          },
          {
            "de": "die Zeitung",
            "ar": "الجريدة"
          },
          {
            "de": "die Nachricht",
            "ar": "الخبر"
          },
          {
            "de": "das Fernsehen",
            "ar": "التلفزيون"
          },
          {
            "de": "das Radio",
            "ar": "الراديو"
          }
        ],
        "quiz": {
          "q": "ما معنى Welt؟",
          "opts": [
            "العالم",
            "الحكومة",
            "القانون"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Welt؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Regierung؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Kultur؟",
            "opts": [
              "الثقافة",
              "العالم",
              "الحكومة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "cp_u4",
        "type": "checkpoint",
        "icon": "🤖",
        "title": "محطة محادثة AI: وصف الطريق والروتين اليومي",
        "desc": "اسأل عن مكان في المدينة واحكِ عن يومك ومهنتك",
        "xp": 50,
        "scenarioTitle": "سائح يسألك عن الطريق في برلين",
        "scenarioGoal": "صف الطريق لمحطة القطار وتحدث باختصار عن عملك ووقتك.",
        "starterDe": "Entschuldigung! Ich suche den Bahnhof. Können Sie mir helfen?",
        "starterAr": "عذراً! أبحث عن محطة القطار. هل يمكنك مساعدتي؟",
        "systemPrompt": "أنت شخص في الشارع بألمانيا تسأل الطالب عن الاتجاهات (geradeaus, links, rechts) ثم تتبادل معه حديثاً بسيطاً عن العمل والروتين اليومي بمستوى A1."
      }
    ]
  },
  {
    "unit": "الوحدة السادسة: الطعام والطلبات والمواعيد",
    "nodes": [
      {
        "id": "l23",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Du ___ gern Reis. (essen)",
            "opts": [
              "isst",
              "esst",
              "esse"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Ich trinke ___ Kaffee. (لا أشرب)",
            "opts": [
              "keinen",
              "kein",
              "keine"
            ],
            "ans": 0,
            "e": "Kaffee مذكر: keinen."
          }
        ],
        "icon": "🍽️",
        "title": "الطعام والوجبات والتفضيلات",
        "desc": "الأطعمة، الوجبات، mögen و essen",
        "xp": 35,
        "grammar": "mögen للتفضيل: Ich mag Tee. ومع فعل نستخدم gern: Ich esse gern Reis.\nessen فعل غير منتظم: ich esse، du isst، er isst، wir essen.",
        "vocab": [
          {
            "de": "Was essen Sie gern?",
            "ar": "ماذا تحب أن تأكل؟"
          },
          {
            "de": "Ich esse gern Reis und Gemüse.",
            "ar": "أحب أكل الأرز والخضار."
          },
          {
            "de": "Ich trinke keinen Kaffee.",
            "ar": "لا أشرب القهوة."
          },
          {
            "de": "Die Speisekarte, bitte.",
            "ar": "قائمة الطعام من فضلك."
          },
          {
            "de": "Zahlen, bitte!",
            "ar": "الحساب من فضلك!"
          }
        ],
        "quiz": {
          "q": "كيف تقول: أحب شرب الشاي؟",
          "opts": [
            "Ich trinke gern Tee.",
            "Ich bin gern Tee.",
            "Ich wohne gern Tee."
          ],
          "ans": 0
        }
      },
      {
        "id": "l24",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Ich ___ heute arbeiten.",
            "opts": [
              "muss",
              "musst",
              "müssen"
            ],
            "ans": 0
          },
          {
            "q": "أي جملة صحيحة؟",
            "opts": [
              "Ich kann kommen.",
              "Ich kann kommt.",
              "Ich kommen kann."
            ],
            "ans": 0
          }
        ],
        "icon": "📅",
        "title": "المواعيد والدعوات والاعتذار",
        "desc": "Termin, einladen, können, müssen",
        "xp": 35,
        "grammar": "können (يستطيع) و müssen (يجب) يأتيان مصرفين في المركز الثاني، والفعل الآخر في المصدر آخر الجملة: Ich kann am Freitag kommen.",
        "vocab": [
          {
            "de": "Hast du am Freitag Zeit?",
            "ar": "هل لديك وقت يوم الجمعة؟"
          },
          {
            "de": "Wir können zusammen lernen.",
            "ar": "يمكننا أن نتعلم معاً."
          },
          {
            "de": "Ich muss heute arbeiten.",
            "ar": "يجب أن أعمل اليوم."
          },
          {
            "de": "Leider kann ich nicht.",
            "ar": "للأسف لا أستطيع."
          },
          {
            "de": "Bis morgen!",
            "ar": "أراك غداً!"
          }
        ],
        "quiz": {
          "q": "أين يأتي الفعل الثاني في جملة modal؟",
          "opts": [
            "مصدر في نهاية الجملة",
            "مصرفاً قبل الفاعل",
            "يحذف دائماً"
          ],
          "ans": 0
        }
      },
      {
        "id": "l32",
        "type": "lesson",
        "icon": "🍽️",
        "title": "في المطعم",
        "desc": "Kellner, Rechnung, bestellen, bezahlen",
        "xp": 30,
        "grammar": "في المطعم: Ich möchte bestellen. Die Rechnung, bitte. الفعل المنتظم: ich bestelle، du bestellst، er bestellt. للدفع: Ich bezahle mit Karte.",
        "vocab": [
          {
            "de": "der Kellner",
            "ar": "النادل"
          },
          {
            "de": "die Speisekarte",
            "ar": "قائمة الطعام"
          },
          {
            "de": "die Rechnung",
            "ar": "الحساب"
          },
          {
            "de": "das Frühstück",
            "ar": "الفطور"
          },
          {
            "de": "das Abendessen",
            "ar": "العشاء"
          },
          {
            "de": "das Obst",
            "ar": "الفاكهة"
          },
          {
            "de": "Ich bestelle einen Kaffee.",
            "ar": "أطلب قهوة."
          },
          {
            "de": "Ich bezahle mit Karte.",
            "ar": "أدفع بالبطاقة."
          },
          {
            "de": "Das Essen schmeckt gut.",
            "ar": "الأكل طعمه جيد."
          },
          {
            "de": "Ich bin hungrig.",
            "ar": "أنا جائع."
          }
        ],
        "quiz": {
          "q": "كيف تطلب الحساب؟",
          "opts": [
            "Die Rechnung, bitte.",
            "Das Frühstück, bitte.",
            "Wo ist der Kellner nicht?"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "أكمل: Er ___ einen Tee. (bestellen)",
            "opts": [
              "bestellt",
              "bestelle",
              "bestellst"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى durstig؟",
            "opts": [
              "عطشان",
              "جائع",
              "متعب"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l42",
        "type": "lesson",
        "icon": "🛒",
        "title": "المطعم والتسوق: مزيد من الكلمات",
        "desc": "Restaurant, Glas, Flasche, Fleisch, Fisch, Preis",
        "xp": 30,
        "grammar": "الكميات بدون أداة بعد الكلمة: ein Glas Wasser، eine Flasche Milch. السعر: Der Preis ist hoch. billig رخيص، teuer غالٍ.",
        "vocab": [
          {
            "de": "das Restaurant",
            "ar": "المطعم"
          },
          {
            "de": "das Glas",
            "ar": "الكوب"
          },
          {
            "de": "die Flasche",
            "ar": "الزجاجة"
          },
          {
            "de": "das Fleisch",
            "ar": "اللحم"
          },
          {
            "de": "der Fisch",
            "ar": "السمك"
          },
          {
            "de": "der Preis",
            "ar": "السعر"
          },
          {
            "de": "der Schuh",
            "ar": "الحذاء"
          },
          {
            "de": "Das Brot ist billig.",
            "ar": "الخبز رخيص."
          }
        ],
        "quiz": {
          "q": "كيف تطلب كوب ماء؟",
          "opts": [
            "Ein Glas Wasser, bitte.",
            "Ein Wasser Glas bitte.",
            "Glas ein Wasser bitte."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما عكس teuer؟",
            "opts": [
              "billig",
              "hoch",
              "groß"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Fisch؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l46",
        "type": "lesson",
        "icon": "🧂",
        "title": "التوابل والمنتجات",
        "desc": "Zucker, Salz, Käse, Butter, Honig",
        "xp": 30,
        "grammar": "المواد غير المعدودة تأتي بدون أداة تنكير: Ich brauche Salz. Ich esse Käse.",
        "vocab": [
          {
            "de": "der Zucker",
            "ar": "السكر"
          },
          {
            "de": "das Salz",
            "ar": "الملح"
          },
          {
            "de": "der Pfeffer",
            "ar": "الفلفل"
          },
          {
            "de": "der Honig",
            "ar": "العسل"
          },
          {
            "de": "die Butter",
            "ar": "الزبدة"
          },
          {
            "de": "der Käse",
            "ar": "الجبن"
          },
          {
            "de": "das Mehl",
            "ar": "الدقيق"
          },
          {
            "de": "der Joghurt",
            "ar": "الزبادي"
          },
          {
            "de": "die Marmelade",
            "ar": "المربى"
          },
          {
            "de": "Der Käse ist frisch.",
            "ar": "الجبن طازج."
          },
          {
            "de": "Ich brauche Salz.",
            "ar": "أحتاج ملحاً."
          }
        ],
        "quiz": {
          "q": "ما معنى Zucker؟",
          "opts": [
            "السكر",
            "الملح",
            "الفلفل"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Zucker؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Salz؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى Marmelade؟",
            "opts": [
              "المربى",
              "الدقيق",
              "الزبادي"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l45",
        "type": "lesson",
        "icon": "🥕",
        "title": "الخضار والفواكه",
        "desc": "Tomate, Kartoffel, Gurke, Birne",
        "xp": 30,
        "grammar": "الأسماء التي تنتهي بـ -e غالباً مؤنثة: die Tomate, die Banane, die Birne. للتعبير عن الكمية: ein Kilo Tomaten.",
        "vocab": [
          {
            "de": "die Tomate",
            "ar": "الطماطم"
          },
          {
            "de": "die Kartoffel",
            "ar": "البطاطس"
          },
          {
            "de": "die Gurke",
            "ar": "الخيار"
          },
          {
            "de": "die Orange",
            "ar": "البرتقالة"
          },
          {
            "de": "die Kirsche",
            "ar": "الكرز"
          },
          {
            "de": "die Birne",
            "ar": "الكمثرى"
          },
          {
            "de": "der Salat",
            "ar": "السلطة"
          },
          {
            "de": "Die Tomate ist rot.",
            "ar": "الطماطم حمراء."
          },
          {
            "de": "Ich kaufe Kartoffeln.",
            "ar": "أشتري بطاطس."
          }
        ],
        "quiz": {
          "q": "ما معنى Tomate؟",
          "opts": [
            "الطماطم",
            "البطاطس",
            "الخيار"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Tomate؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Kartoffel؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Salat؟",
            "opts": [
              "السلطة",
              "الكرز",
              "الكمثرى"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l63",
        "type": "lesson",
        "icon": "🍴",
        "title": "أدوات المائدة والمطبخ",
        "desc": "Tasse, Teller, Löffel, Gabel, Messer",
        "xp": 30,
        "grammar": "أدوات الأكل: der Löffel، die Gabel، das Messer، der Teller، die Tasse. نقول: Ich esse mit dem Löffel.",
        "vocab": [
          {
            "de": "die Tasse",
            "ar": "الفنجان"
          },
          {
            "de": "der Teller",
            "ar": "الطبق"
          },
          {
            "de": "der Löffel",
            "ar": "الملعقة"
          },
          {
            "de": "die Gabel",
            "ar": "الشوكة"
          },
          {
            "de": "das Messer",
            "ar": "السكين"
          },
          {
            "de": "der Topf",
            "ar": "القدر"
          },
          {
            "de": "der Kühlschrank",
            "ar": "الثلاجة"
          },
          {
            "de": "die Dusche",
            "ar": "الدش"
          },
          {
            "de": "der Spiegel",
            "ar": "المرآة"
          },
          {
            "de": "der Fernseher",
            "ar": "التلفاز"
          },
          {
            "de": "Der Teller ist sauber.",
            "ar": "الطبق نظيف."
          },
          {
            "de": "Ich esse mit dem Löffel.",
            "ar": "آكل بالملعقة."
          }
        ],
        "quiz": {
          "q": "ما معنى Tasse؟",
          "opts": [
            "الفنجان",
            "الطبق",
            "الملعقة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Tasse؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Teller؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Fernseher؟",
            "opts": [
              "التلفاز",
              "الطبق",
              "الملعقة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l70",
        "type": "lesson",
        "icon": "📇",
        "title": "أسماء متنوعة",
        "desc": "Schlüssel, Ausweis, Adresse, Gast, Party",
        "xp": 30,
        "grammar": "ابدأ بحفظ الاسم مع أداته: der Schlüssel، die Adresse، das Formular. وللتحية: Willkommen! للضيوف.",
        "vocab": [
          {
            "de": "der Schlüssel",
            "ar": "المفتاح"
          },
          {
            "de": "die Tüte",
            "ar": "الكيس"
          },
          {
            "de": "die Kasse",
            "ar": "الصندوق"
          },
          {
            "de": "das Geschenk",
            "ar": "الهدية"
          },
          {
            "de": "der Gast",
            "ar": "الضيف"
          },
          {
            "de": "die Party",
            "ar": "الحفلة"
          },
          {
            "de": "das Wochenende",
            "ar": "عطلة نهاية الأسبوع"
          },
          {
            "de": "der Ausweis",
            "ar": "بطاقة الهوية"
          },
          {
            "de": "die Adresse",
            "ar": "العنوان"
          },
          {
            "de": "das Formular",
            "ar": "الاستمارة"
          },
          {
            "de": "Wo ist mein Ausweis?",
            "ar": "أين بطاقتي؟"
          },
          {
            "de": "Die Party ist am Samstag.",
            "ar": "الحفلة يوم السبت."
          }
        ],
        "quiz": {
          "q": "ما معنى Schlüssel؟",
          "opts": [
            "المفتاح",
            "الكيس",
            "الصندوق"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Schlüssel؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Tüte؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Wochenende؟",
            "opts": [
              "عطلة نهاية الأسبوع",
              "المفتاح",
              "الكيس"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l84",
        "type": "lesson",
        "icon": "🍝",
        "title": "أطباق ومشروبات",
        "desc": "Suppe, Pizza, Hähnchen, Gericht, Saft",
        "xp": 30,
        "grammar": "للطلب: Ich nehme die Suppe. Als Nachtisch ein Eis.",
        "vocab": [
          {
            "de": "die Suppe",
            "ar": "الشوربة"
          },
          {
            "de": "die Pizza",
            "ar": "البيتزا"
          },
          {
            "de": "das Hähnchen",
            "ar": "الدجاج"
          },
          {
            "de": "das Gericht",
            "ar": "الطبق"
          },
          {
            "de": "der Saft",
            "ar": "العصير"
          },
          {
            "de": "die Limonade",
            "ar": "الليمونادة"
          },
          {
            "de": "das Eis",
            "ar": "الآيس كريم"
          },
          {
            "de": "die Soße",
            "ar": "الصلصة"
          },
          {
            "de": "das Getränk",
            "ar": "المشروب"
          },
          {
            "de": "der Nachtisch",
            "ar": "الحلوى"
          },
          {
            "de": "die Vorspeise",
            "ar": "المقبلات"
          }
        ],
        "quiz": {
          "q": "ما معنى Suppe؟",
          "opts": [
            "الشوربة",
            "البيتزا",
            "الدجاج"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Suppe؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Pizza؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Limonade؟",
            "opts": [
              "الليمونادة",
              "البيتزا",
              "الدجاج"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l92",
        "type": "lesson",
        "icon": "🍳",
        "title": "أفعال المطبخ",
        "desc": "backen, braten, schneiden, mischen, schälen",
        "xp": 30,
        "grammar": "الأفعال المنتظمة: ich backe، du backst، er backt. braten → du brätst.",
        "vocab": [
          {
            "de": "backen",
            "ar": "يخبز"
          },
          {
            "de": "braten",
            "ar": "يقلي"
          },
          {
            "de": "schneiden",
            "ar": "يقطع"
          },
          {
            "de": "mischen",
            "ar": "يخلط"
          },
          {
            "de": "schälen",
            "ar": "يقشّر"
          },
          {
            "de": "probieren",
            "ar": "يجرّب"
          },
          {
            "de": "servieren",
            "ar": "يقدّم"
          },
          {
            "de": "füllen",
            "ar": "يملأ"
          },
          {
            "de": "rühren",
            "ar": "يحرّك"
          }
        ],
        "quiz": {
          "q": "ما معنى backen؟",
          "opts": [
            "يخبز",
            "يقلي",
            "يقطع"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى schälen؟",
            "opts": [
              "يقشّر",
              "يخبز",
              "يقلي"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى rühren؟",
            "opts": [
              "يحرّك",
              "يخبز",
              "يقلي"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l93",
        "type": "lesson",
        "icon": "🍓",
        "title": "فواكه وخضار أكثر",
        "desc": "Erdbeere, Traube, Zitrone, Melone, Pflaume",
        "xp": 30,
        "grammar": "معظم الفواكه والخضار مؤنثة: die Erdbeere، die Zitrone، die Karotte.",
        "vocab": [
          {
            "de": "die Erdbeere",
            "ar": "الفراولة"
          },
          {
            "de": "die Traube",
            "ar": "العنب"
          },
          {
            "de": "die Zitrone",
            "ar": "الليمون"
          },
          {
            "de": "die Melone",
            "ar": "البطيخ"
          },
          {
            "de": "die Pflaume",
            "ar": "البرقوق"
          },
          {
            "de": "die Karotte",
            "ar": "الجزر"
          },
          {
            "de": "der Spinat",
            "ar": "السبانخ"
          },
          {
            "de": "der Kohl",
            "ar": "الكرنب"
          },
          {
            "de": "die Paprika",
            "ar": "الفلفل الرومي"
          },
          {
            "de": "die Bohne",
            "ar": "الفول"
          },
          {
            "de": "die Erbse",
            "ar": "البازلاء"
          }
        ],
        "quiz": {
          "q": "ما معنى Erdbeere؟",
          "opts": [
            "الفراولة",
            "العنب",
            "الليمون"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Erdbeere؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Traube؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Karotte؟",
            "opts": [
              "الجزر",
              "العنب",
              "الليمون"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "cp_u5",
        "type": "checkpoint",
        "icon": "🤖",
        "title": "محطة محادثة AI: دعوة للعشاء وتحديد موعد",
        "desc": "اتفق مع صديقك على موعد للعشاء واعتذر أو اقترح وقتاً بديلاً",
        "xp": 50,
        "scenarioTitle": "ترتيب لقاء للعشاء في المطعم",
        "scenarioGoal": "استخدم können و müssen و gern لتحديد يوم وساعة اللقاء.",
        "starterDe": "Hallo! Wollen wir am Freitag zusammen essen gehen? Was isst du gern?",
        "starterAr": "مرحباً! هل نذهب لتناول الطعام معاً يوم الجمعة؟ ماذا تحب أن تأكل؟",
        "systemPrompt": "أنت صديق ألماني تدعو الطالب لتناول الطعام. ناقش معه الأطعمة المفضلة (gern) والأيام والمواعيد باستخدام können و müssen."
      }
    ]
  },
  {
    "unit": "الوحدة السابعة: التسوق والملابس والخدمات",
    "nodes": [
      {
        "id": "l5",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Ich brauche ___ Banane. (die Banane)",
            "opts": [
              "eine",
              "einen",
              "ein"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Ich suche ___ Brot. (das Brot)",
            "opts": [
              "ein",
              "einen",
              "eine"
            ],
            "ans": 0
          }
        ],
        "icon": "🛒",
        "title": "التسوق في السوبرماركت",
        "desc": "brauchen, haben, Lebensmittel, Obst",
        "xp": 25,
        "grammar": "أداة النكرة في حالة المفعول (Akkusativ): Ich brauche einen Apfel (مذكر), eine Banane (مؤنث), ein Brot (محايد).",
        "vocab": [
          {
            "de": "Ich brauche Milch und Brot.",
            "ar": "أحتاج إلى حليب وخبز."
          },
          {
            "de": "Was kostet das Kilo Äpfel?",
            "ar": "كم سعر كيلو التفاح؟"
          },
          {
            "de": "Gibt es Tomaten?",
            "ar": "هل توجد طماطم؟"
          }
        ],
        "quiz": {
          "q": "ما أداة المذكر (Akkusativ) لكلمة Apfel بعد brauche؟",
          "opts": [
            "einen",
            "eine",
            "ein"
          ],
          "ans": 0
        }
      },
      {
        "id": "l6",
        "type": "lesson",
        "extra": [
          {
            "q": "ما معنى gelb؟",
            "opts": [
              "أصفر",
              "أخضر",
              "أزرق"
            ],
            "ans": 0
          },
          {
            "q": "كيف تقول: القميص أبيض؟",
            "opts": [
              "Das Hemd ist weiß.",
              "Das Hemd hat weiß.",
              "Das Hemd weiß ist."
            ],
            "ans": 0
          }
        ],
        "icon": "👕",
        "title": "الملابس والمقاسات والألوان",
        "desc": "Hemd, Hose, Größe, Farbe, kosten",
        "xp": 25,
        "grammar": "السؤال عن السعر والرأي: Wie gefällt dir das Hemd? Es ist zu klein / perfekt.",
        "vocab": [
          {
            "de": "Ich suche eine Hose.",
            "ar": "أنا أبحث عن بنطلون."
          },
          {
            "de": "Welche Größe haben Sie?",
            "ar": "ما هو مقاس حضرتك؟"
          },
          {
            "de": "Das T-Shirt kostet 15 Euro.",
            "ar": "هذا القميص يكلف 15 يورو."
          },
          {
            "de": "rot",
            "ar": "أحمر"
          },
          {
            "de": "blau",
            "ar": "أزرق"
          },
          {
            "de": "grün",
            "ar": "أخضر"
          },
          {
            "de": "gelb",
            "ar": "أصفر"
          },
          {
            "de": "schwarz",
            "ar": "أسود"
          },
          {
            "de": "weiß",
            "ar": "أبيض"
          },
          {
            "de": "grau",
            "ar": "رمادي"
          },
          {
            "de": "Die Jacke ist blau.",
            "ar": "الجاكيت زرقاء."
          }
        ],
        "quiz": {
          "q": "كيف تسأل عن مقاس الملابس؟",
          "opts": [
            "Welche Größe haben Sie?",
            "Wie spät ist es?",
            "Woher kommst du?"
          ],
          "ans": 0
        }
      },
      {
        "id": "l58",
        "type": "lesson",
        "icon": "🧥",
        "title": "الملابس: مزيد",
        "desc": "Mantel, Kleid, Rock, Brille",
        "xp": 30,
        "grammar": "للوصف: Der Mantel ist warm. Die Brille ist neu. الأسماء تُحفظ مع أدواتها.",
        "vocab": [
          {
            "de": "der Pullover",
            "ar": "البلوفر"
          },
          {
            "de": "das Kleid",
            "ar": "الفستان"
          },
          {
            "de": "der Rock",
            "ar": "التنورة"
          },
          {
            "de": "die Socke",
            "ar": "الجورب"
          },
          {
            "de": "der Mantel",
            "ar": "المعطف"
          },
          {
            "de": "die Mütze",
            "ar": "القبعة"
          },
          {
            "de": "der Gürtel",
            "ar": "الحزام"
          },
          {
            "de": "die Brille",
            "ar": "النظارة"
          },
          {
            "de": "Der Mantel ist warm.",
            "ar": "المعطف دافئ."
          },
          {
            "de": "Die Brille ist neu.",
            "ar": "النظارة جديدة."
          }
        ],
        "quiz": {
          "q": "ما معنى Pullover؟",
          "opts": [
            "البلوفر",
            "الفستان",
            "التنورة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Pullover؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Kleid؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى Brille؟",
            "opts": [
              "النظارة",
              "الفستان",
              "التنورة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l79",
        "type": "lesson",
        "icon": "🧱",
        "title": "المواد والخامات",
        "desc": "Holz, Metall, Plastik, Wolle, Leder",
        "xp": 30,
        "grammar": "الخامات غالباً بدون أداة: Der Tisch ist aus Holz.",
        "vocab": [
          {
            "de": "das Holz",
            "ar": "الخشب"
          },
          {
            "de": "das Metall",
            "ar": "المعدن"
          },
          {
            "de": "das Plastik",
            "ar": "البلاستيك"
          },
          {
            "de": "die Wolle",
            "ar": "الصوف"
          },
          {
            "de": "das Leder",
            "ar": "الجلد"
          },
          {
            "de": "das Gold",
            "ar": "الذهب"
          },
          {
            "de": "das Silber",
            "ar": "الفضة"
          },
          {
            "de": "der Stein",
            "ar": "الحجر"
          }
        ],
        "quiz": {
          "q": "ما معنى Holz؟",
          "opts": [
            "الخشب",
            "المعدن",
            "البلاستيك"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Holz؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Metall؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى Leder؟",
            "opts": [
              "الجلد",
              "الخشب",
              "المعدن"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l95",
        "type": "lesson",
        "icon": "👔",
        "title": "ملابس وإكسسوارات",
        "desc": "Bluse, Anzug, Krawatte, Schal, Handschuh",
        "xp": 30,
        "grammar": "الألوان والمقاسات: Welche Größe? Welche Farbe?",
        "vocab": [
          {
            "de": "die Bluse",
            "ar": "البلوزة"
          },
          {
            "de": "der Anzug",
            "ar": "البدلة"
          },
          {
            "de": "die Krawatte",
            "ar": "ربطة العنق"
          },
          {
            "de": "der Schal",
            "ar": "الوشاح"
          },
          {
            "de": "der Handschuh",
            "ar": "القفاز"
          },
          {
            "de": "der Stiefel",
            "ar": "البوت"
          },
          {
            "de": "die Sandale",
            "ar": "الصندل"
          },
          {
            "de": "der Ring",
            "ar": "الخاتم"
          },
          {
            "de": "die Kette",
            "ar": "القلادة"
          },
          {
            "de": "die Größe",
            "ar": "المقاس"
          },
          {
            "de": "die Farbe",
            "ar": "اللون"
          }
        ],
        "quiz": {
          "q": "ما معنى Bluse؟",
          "opts": [
            "البلوزة",
            "البدلة",
            "ربطة العنق"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Bluse؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Anzug؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Stiefel؟",
            "opts": [
              "البوت",
              "البدلة",
              "ربطة العنق"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l41",
        "type": "lesson",
        "icon": "🏃",
        "title": "أفعال يومية مفيدة",
        "desc": "sehen, fragen, spielen, kochen, verstehen, wissen",
        "xp": 30,
        "grammar": "الأفعال المنتظمة: ich + e، du + st، er + t. أفعال غير منتظمة تتغير: sehen → du siehst، wissen → ich weiß، du weißt.",
        "vocab": [
          {
            "de": "Ich sehe einen Film.",
            "ar": "أشاهد فيلماً."
          },
          {
            "de": "Ich frage dich.",
            "ar": "أسألك."
          },
          {
            "de": "Er antwortet nicht.",
            "ar": "هو لا يجيب."
          },
          {
            "de": "Die Kinder spielen.",
            "ar": "الأطفال يلعبون."
          },
          {
            "de": "Ich koche Reis.",
            "ar": "أطبخ الأرز."
          },
          {
            "de": "Ich verstehe das nicht.",
            "ar": "لا أفهم هذا."
          },
          {
            "de": "Ich weiß es nicht.",
            "ar": "لا أعرف."
          },
          {
            "de": "Ich putze die Küche.",
            "ar": "أنظّف المطبخ."
          }
        ],
        "quiz": {
          "q": "أكمل: Du ___ einen Film. (sehen)",
          "opts": [
            "siehst",
            "sehst",
            "sieht"
          ],
          "ans": 0,
          "e": "sehen غير منتظم: du siehst."
        },
        "extra": [
          {
            "q": "ما معنى verstehen؟",
            "opts": [
              "يفهم",
              "يسأل",
              "يطبخ"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Ich ___ es nicht. (wissen)",
            "opts": [
              "weiß",
              "wisse",
              "weißt"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l52",
        "type": "lesson",
        "icon": "🚿",
        "title": "أفعال الروتين اليومي",
        "desc": "duschen, waschen, anziehen, einkaufen",
        "xp": 30,
        "grammar": "الأفعال المنفصلة تفصل بادئتها في آخر الجملة: Wir kaufen am Samstag ein. Ich ziehe mich an.",
        "vocab": [
          {
            "de": "duschen",
            "ar": "يستحم"
          },
          {
            "de": "waschen",
            "ar": "يغسل"
          },
          {
            "de": "anziehen",
            "ar": "يرتدي"
          },
          {
            "de": "frühstücken",
            "ar": "يفطر"
          },
          {
            "de": "aufräumen",
            "ar": "يرتّب"
          },
          {
            "de": "anrufen",
            "ar": "يتصل هاتفياً"
          },
          {
            "de": "einkaufen",
            "ar": "يتسوق"
          },
          {
            "de": "mitbringen",
            "ar": "يحضر معه"
          },
          {
            "de": "Ich dusche jeden Morgen.",
            "ar": "أستحم كل صباح."
          },
          {
            "de": "Wir kaufen am Samstag ein.",
            "ar": "نتسوق يوم السبت."
          }
        ],
        "quiz": {
          "q": "ما معنى duschen؟",
          "opts": [
            "يستحم",
            "يغسل",
            "يرتدي"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى aufräumen؟",
            "opts": [
              "يرتّب",
              "يستحم",
              "يغسل"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى mitbringen؟",
            "opts": [
              "يحضر معه",
              "يغسل",
              "يرتدي"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l59",
        "type": "lesson",
        "icon": "🏢",
        "title": "المكتب والعمل",
        "desc": "Büro, Firma, Kunde, Pause",
        "xp": 30,
        "grammar": "للمكان: Ich bin im Büro. وللاستراحة: Wir machen Pause. (بدون أداة)",
        "vocab": [
          {
            "de": "das Büro",
            "ar": "المكتب"
          },
          {
            "de": "die Firma",
            "ar": "الشركة"
          },
          {
            "de": "der Kunde",
            "ar": "الزبون"
          },
          {
            "de": "der Brief",
            "ar": "الرسالة"
          },
          {
            "de": "das Papier",
            "ar": "الورق"
          },
          {
            "de": "der Kuli",
            "ar": "القلم الجاف"
          },
          {
            "de": "die Pause",
            "ar": "الاستراحة"
          },
          {
            "de": "der Feierabend",
            "ar": "نهاية الدوام"
          },
          {
            "de": "Ich bin im Büro.",
            "ar": "أنا في المكتب."
          },
          {
            "de": "Wir machen Pause.",
            "ar": "نأخذ استراحة."
          }
        ],
        "quiz": {
          "q": "ما معنى Büro؟",
          "opts": [
            "المكتب",
            "الشركة",
            "الزبون"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Büro؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Firma؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Feierabend؟",
            "opts": [
              "نهاية الدوام",
              "الشركة",
              "الزبون"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l66",
        "type": "lesson",
        "icon": "🛍️",
        "title": "عبارات التسوق",
        "desc": "Haben Sie das in Blau?, Das nehme ich",
        "xp": 30,
        "grammar": "في المحل: Ich suche ... للبحث، Das nehme ich للقرار، Kann ich mit Karte zahlen? للدفع.",
        "vocab": [
          {
            "de": "Ich suche eine Jacke.",
            "ar": "أبحث عن جاكيت."
          },
          {
            "de": "Haben Sie das in Blau?",
            "ar": "هل عندكم هذا بالأزرق؟"
          },
          {
            "de": "Das ist zu teuer.",
            "ar": "هذا غالٍ جداً."
          },
          {
            "de": "Das nehme ich.",
            "ar": "سآخذ هذا."
          },
          {
            "de": "Kann ich mit Karte zahlen?",
            "ar": "هل أستطيع الدفع بالبطاقة؟"
          },
          {
            "de": "Wo ist die Kasse?",
            "ar": "أين الصندوق؟"
          },
          {
            "de": "Ich möchte das umtauschen.",
            "ar": "أريد استبدال هذا."
          },
          {
            "de": "Brauchen Sie eine Tüte?",
            "ar": "هل تحتاج كيساً؟"
          }
        ],
        "quiz": {
          "q": "ما معنى Ich suche eine Jacke.؟",
          "opts": [
            "أبحث عن جاكيت.",
            "هل عندكم هذا بالأزرق؟",
            "هذا غالٍ جداً."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Kann ich mit Karte zahlen?؟",
            "opts": [
              "هل أستطيع الدفع بالبطاقة؟",
              "أبحث عن جاكيت.",
              "هل عندكم هذا بالأزرق؟"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Brauchen Sie eine Tüte?؟",
            "opts": [
              "هل تحتاج كيساً؟",
              "هل عندكم هذا بالأزرق؟",
              "هذا غالٍ جداً."
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l73",
        "type": "lesson",
        "icon": "🏦",
        "title": "في البنك والبريد",
        "desc": "Geld wechseln, Briefmarke, Konto",
        "xp": 30,
        "grammar": "للرغبة: Ich möchte ... + مصدر في الآخر. وللسؤال: Wo kann ich ...? (أين أستطيع ...؟)",
        "vocab": [
          {
            "de": "Ich möchte Geld wechseln.",
            "ar": "أريد صرف نقود."
          },
          {
            "de": "Wo ist der Geldautomat?",
            "ar": "أين الصراف الآلي؟"
          },
          {
            "de": "Ich brauche eine Briefmarke.",
            "ar": "أحتاج طابعاً بريدياً."
          },
          {
            "de": "Wie viel kostet ein Brief nach Ägypten?",
            "ar": "كم يكلف خطاب إلى مصر؟"
          },
          {
            "de": "Ich möchte ein Konto eröffnen.",
            "ar": "أريد فتح حساب."
          },
          {
            "de": "Wo kann ich unterschreiben?",
            "ar": "أين أوقّع؟"
          },
          {
            "de": "Hier ist mein Konto.",
            "ar": "هذا حسابي."
          },
          {
            "de": "Das Paket ist für meinen Bruder.",
            "ar": "الطرد لأخي."
          }
        ],
        "quiz": {
          "q": "ما معنى Ich möchte Geld wechseln.؟",
          "opts": [
            "أريد صرف نقود.",
            "أين الصراف الآلي؟",
            "أحتاج طابعاً بريدياً."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Ich möchte ein Konto eröffnen.؟",
            "opts": [
              "أريد فتح حساب.",
              "أريد صرف نقود.",
              "أين الصراف الآلي؟"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Das Paket ist für meinen Bruder.؟",
            "opts": [
              "الطرد لأخي.",
              "أين الصراف الآلي؟",
              "أحتاج طابعاً بريدياً."
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l62",
        "type": "lesson",
        "icon": "💶",
        "title": "الأرقام الكبيرة والمال",
        "desc": "fünfzig, hundert, tausend, Cent",
        "xp": 30,
        "grammar": "العشرات: zwanzig, dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig. للدفع: Ich zahle bar. / mit Karte.",
        "vocab": [
          {
            "de": "null",
            "ar": "صفر"
          },
          {
            "de": "fünfzig",
            "ar": "خمسون"
          },
          {
            "de": "sechzig",
            "ar": "ستون"
          },
          {
            "de": "siebzig",
            "ar": "سبعون"
          },
          {
            "de": "achtzig",
            "ar": "ثمانون"
          },
          {
            "de": "neunzig",
            "ar": "تسعون"
          },
          {
            "de": "tausend",
            "ar": "ألف"
          },
          {
            "de": "der Cent",
            "ar": "السنت"
          },
          {
            "de": "das Bargeld",
            "ar": "النقد"
          },
          {
            "de": "die Zahl",
            "ar": "الرقم / العدد"
          },
          {
            "de": "bar",
            "ar": "نقداً"
          },
          {
            "de": "Das kostet fünfzig Euro.",
            "ar": "هذا يكلف خمسين يورو."
          },
          {
            "de": "Ich zahle bar.",
            "ar": "أدفع نقداً."
          }
        ],
        "quiz": {
          "q": "ما معنى null؟",
          "opts": [
            "صفر",
            "خمسون",
            "ستون"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Cent؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Bargeld؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى bar؟",
            "opts": [
              "نقداً",
              "صفر",
              "خمسون"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l87",
        "type": "lesson",
        "icon": "🌅",
        "title": "أجزاء اليوم والزمن",
        "desc": "Morgen, Mittag, Nachmittag, Abend, Nacht",
        "xp": 30,
        "grammar": "احفظ الأسماء مذكرة غالباً: der Morgen، der Abend، der Moment. وdie Nacht مؤنثة.",
        "vocab": [
          {
            "de": "der Morgen",
            "ar": "الصباح"
          },
          {
            "de": "der Mittag",
            "ar": "الظهر"
          },
          {
            "de": "der Nachmittag",
            "ar": "بعد الظهر"
          },
          {
            "de": "der Abend",
            "ar": "المساء"
          },
          {
            "de": "die Nacht",
            "ar": "الليل"
          },
          {
            "de": "der Anfang",
            "ar": "البداية"
          },
          {
            "de": "das Ende",
            "ar": "النهاية"
          },
          {
            "de": "die Zukunft",
            "ar": "المستقبل"
          },
          {
            "de": "der Moment",
            "ar": "اللحظة"
          },
          {
            "de": "die Sekunde",
            "ar": "الثانية"
          }
        ],
        "quiz": {
          "q": "ما معنى Morgen؟",
          "opts": [
            "الصباح",
            "الظهر",
            "بعد الظهر"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Morgen؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Mittag؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Anfang؟",
            "opts": [
              "البداية",
              "الظهر",
              "بعد الظهر"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "cp3",
        "type": "checkpoint",
        "icon": "🤖",
        "title": "محطة محادثة AI #3: في متجر الملابس",
        "desc": "ابحث عن قميص أو بنطلون واسأل عن المقاس والسعر",
        "xp": 50,
        "scenarioTitle": "مساعد متجر ملابس",
        "scenarioGoal": "اسأل عن بنطلون بالمقاس والسعر المناسب.",
        "starterDe": "Guten Tag! Kann ich Ihnen helfen?",
        "starterAr": "نهارك سعيد! هل يمكنني مساعدتك؟",
        "systemPrompt": "أنت بائع في متجر ملابس. ساعد الطالب ليسأل عن المقاسات والأسعار بجمل A1."
      }
    ]
  },
  {
    "unit": "الوحدة الثامنة: السكن والتقنية والحياة في البيت",
    "nodes": [
      {
        "id": "l7",
        "type": "lesson",
        "extra": [
          {
            "q": "ما معنى Miete؟",
            "opts": [
              "إيجار",
              "مطبخ",
              "جار"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Das Zimmer hat ___ Bett. (das Bett)",
            "opts": [
              "ein",
              "einen",
              "eine"
            ],
            "ans": 0
          }
        ],
        "icon": "🏠",
        "title": "الشقة والأثاث (Wohnen)",
        "desc": "Zimmer, Küche, Bad, Miete, Möbel",
        "xp": 25,
        "grammar": "صفات المسكن ووصف الغرف: Die Wohnung ist groß und hell (الشقة كبيرة ومضيئة).",
        "vocab": [
          {
            "de": "Ich suche eine 2-Zimmer-Wohnung.",
            "ar": "أبحث عن شقة غرفتين."
          },
          {
            "de": "Wie hoch ist die Miete?",
            "ar": "كم تبلغ قيمة الإيجار؟"
          },
          {
            "de": "Das Zimmer hat ein Bett und einen Tisch.",
            "ar": "الغرفة بها سرير وطاولة."
          },
          {
            "de": "Ich miete eine Wohnung.",
            "ar": "أستأجر شقة."
          }
        ],
        "quiz": {
          "q": "ما ترجمة: شقة غرفتين؟",
          "opts": [
            "2-Zimmer-Wohnung",
            "Kaffee",
            "Familie"
          ],
          "ans": 0
        }
      },
      {
        "id": "l33",
        "type": "lesson",
        "icon": "🛏️",
        "title": "غرف البيت والأثاث",
        "desc": "Küche, Bad, Schlafzimmer, Garten",
        "xp": 30,
        "grammar": "الاسم المركّب يأخذ جنس آخر كلمة فيه: das Zimmer ← das Schlafzimmer، das Wohnzimmer.\nجمع: die Küche → die Küchen، das Bett → die Betten، der Garten → die Gärten، das Zimmer → die Zimmer.",
        "vocab": [
          {
            "de": "die Küche",
            "ar": "المطبخ"
          },
          {
            "de": "das Bad",
            "ar": "الحمام"
          },
          {
            "de": "das Schlafzimmer",
            "ar": "غرفة النوم"
          },
          {
            "de": "das Wohnzimmer",
            "ar": "غرفة المعيشة"
          },
          {
            "de": "der Garten",
            "ar": "الحديقة"
          },
          {
            "de": "das Bett",
            "ar": "السرير"
          },
          {
            "de": "der Schrank",
            "ar": "الخزانة"
          },
          {
            "de": "der Nachbar",
            "ar": "الجار"
          }
        ],
        "quiz": {
          "q": "ما أداة Schlafzimmer؟",
          "opts": [
            "das",
            "der",
            "die"
          ],
          "ans": 0,
          "e": "المركّب يأخذ جنس آخر كلمة: das Zimmer."
        },
        "extra": [
          {
            "q": "ما جمع Garten؟",
            "opts": [
              "Gärten",
              "Gartens",
              "Garten"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Schrank؟",
            "opts": [
              "خزانة",
              "سرير",
              "جار"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l49",
        "type": "lesson",
        "icon": "📱",
        "title": "الهاتف والكمبيوتر",
        "desc": "Handy, Computer, E-Mail, Nummer",
        "xp": 30,
        "grammar": "للسؤال عن الرقم: Wie ist deine Nummer? وللإيميل: Meine E-Mail ist ...",
        "vocab": [
          {
            "de": "das Handy",
            "ar": "الموبايل"
          },
          {
            "de": "der Computer",
            "ar": "الكمبيوتر"
          },
          {
            "de": "das Telefon",
            "ar": "الهاتف"
          },
          {
            "de": "die Nummer",
            "ar": "الرقم"
          },
          {
            "de": "das Passwort",
            "ar": "كلمة السر"
          },
          {
            "de": "der Drucker",
            "ar": "الطابعة"
          },
          {
            "de": "Mein Handy ist neu.",
            "ar": "موبايلي جديد."
          },
          {
            "de": "Das ist meine Nummer.",
            "ar": "هذا رقمي."
          }
        ],
        "quiz": {
          "q": "ما معنى Handy؟",
          "opts": [
            "الموبايل",
            "الكمبيوتر",
            "الهاتف"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Handy؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Computer؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Drucker؟",
            "opts": [
              "الطابعة",
              "الرقم",
              "كلمة السر"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l72",
        "type": "lesson",
        "icon": "📞",
        "title": "عبارات الهاتف",
        "desc": "Hier ist Ali, Einen Moment, bitte",
        "xp": 30,
        "grammar": "في الهاتف: Hier ist ... للتعريف، Kann ich bitte ... sprechen? لطلب شخص، Ich rufe später an للتأجيل.",
        "vocab": [
          {
            "de": "Hallo, hier ist Ali.",
            "ar": "مرحباً، معك علي."
          },
          {
            "de": "Kann ich bitte Herrn Weber sprechen?",
            "ar": "هل أستطيع التحدث مع السيد فيبر؟"
          },
          {
            "de": "Einen Moment, bitte.",
            "ar": "لحظة من فضلك."
          },
          {
            "de": "Er ist nicht da.",
            "ar": "هو غير موجود."
          },
          {
            "de": "Ich rufe später an.",
            "ar": "سأتصل لاحقاً."
          },
          {
            "de": "Können Sie mir seine Nummer geben?",
            "ar": "هل يمكنك إعطائي رقمه؟"
          },
          {
            "de": "Die Verbindung ist schlecht.",
            "ar": "الاتصال سيئ."
          },
          {
            "de": "Auf Wiederhören!",
            "ar": "إلى اللقاء!"
          }
        ],
        "quiz": {
          "q": "ما معنى Hallo, hier ist Ali.؟",
          "opts": [
            "مرحباً، معك علي.",
            "هل أستطيع التحدث مع السيد فيبر؟",
            "لحظة من فضلك."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Ich rufe später an.؟",
            "opts": [
              "سأتصل لاحقاً.",
              "مرحباً، معك علي.",
              "هل أستطيع التحدث مع السيد فيبر؟"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Auf Wiederhören!؟",
            "opts": [
              "إلى اللقاء!",
              "هل أستطيع التحدث مع السيد فيبر؟",
              "لحظة من فضلك."
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l94",
        "type": "lesson",
        "icon": "🛋️",
        "title": "أثاث المنزل",
        "desc": "Sofa, Sessel, Regal, Vorhang, Kissen",
        "xp": 30,
        "grammar": "احفظ الأسماء مع أداتها: das Sofa، der Sessel، das Regal.",
        "vocab": [
          {
            "de": "das Sofa",
            "ar": "الأريكة"
          },
          {
            "de": "der Sessel",
            "ar": "المقعد"
          },
          {
            "de": "das Regal",
            "ar": "الرف"
          },
          {
            "de": "der Vorhang",
            "ar": "الستارة"
          },
          {
            "de": "das Kissen",
            "ar": "الوسادة"
          },
          {
            "de": "die Decke",
            "ar": "البطانية"
          },
          {
            "de": "das Bild",
            "ar": "الصورة"
          },
          {
            "de": "der Schreibtisch",
            "ar": "المكتب"
          },
          {
            "de": "die Matratze",
            "ar": "المرتبة"
          },
          {
            "de": "der Wecker",
            "ar": "المنبّه"
          }
        ],
        "quiz": {
          "q": "ما معنى Sofa؟",
          "opts": [
            "الأريكة",
            "المقعد",
            "الرف"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Sofa؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Sessel؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Decke؟",
            "opts": [
              "البطانية",
              "المقعد",
              "الرف"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l76",
        "type": "lesson",
        "icon": "🏠",
        "title": "أجزاء البيت",
        "desc": "Balkon, Aufzug, Flur, Wand, Dach",
        "xp": 30,
        "grammar": "الوصف: Der Aufzug ist kaputt. Die Wohnung hat einen Balkon. (مذكر في Akkusativ: einen).",
        "vocab": [
          {
            "de": "der Balkon",
            "ar": "الشرفة"
          },
          {
            "de": "der Aufzug",
            "ar": "المصعد"
          },
          {
            "de": "der Flur",
            "ar": "الممر"
          },
          {
            "de": "der Boden",
            "ar": "الأرض"
          },
          {
            "de": "die Wand",
            "ar": "الجدار"
          },
          {
            "de": "das Dach",
            "ar": "السطح"
          },
          {
            "de": "der Keller",
            "ar": "القبو"
          },
          {
            "de": "das Licht",
            "ar": "الضوء"
          },
          {
            "de": "der Teppich",
            "ar": "السجادة"
          },
          {
            "de": "die Heizung",
            "ar": "التدفئة"
          },
          {
            "de": "kaputt",
            "ar": "معطل"
          },
          {
            "de": "Die Wohnung hat einen Balkon.",
            "ar": "الشقة فيها شرفة."
          }
        ],
        "quiz": {
          "q": "ما معنى Balkon؟",
          "opts": [
            "الشرفة",
            "المصعد",
            "الممر"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Balkon؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Aufzug؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Keller؟",
            "opts": [
              "القبو",
              "الشرفة",
              "المصعد"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l83",
        "type": "lesson",
        "icon": "💻",
        "title": "الإنترنت والأجهزة",
        "desc": "Internet, Webseite, Programm, Datei, Tastatur",
        "xp": 30,
        "grammar": "أغلب كلمات التقنية: das Internet، das Programm، die Datei، der Bildschirm.",
        "vocab": [
          {
            "de": "das Internet",
            "ar": "الإنترنت"
          },
          {
            "de": "die Webseite",
            "ar": "الموقع"
          },
          {
            "de": "das Programm",
            "ar": "البرنامج"
          },
          {
            "de": "die Datei",
            "ar": "الملف"
          },
          {
            "de": "die Tastatur",
            "ar": "لوحة المفاتيح"
          },
          {
            "de": "die Maus",
            "ar": "الفأرة"
          },
          {
            "de": "der Bildschirm",
            "ar": "الشاشة"
          },
          {
            "de": "der Akku",
            "ar": "البطارية"
          },
          {
            "de": "das Kabel",
            "ar": "الكابل"
          },
          {
            "de": "das Video",
            "ar": "الفيديو"
          }
        ],
        "quiz": {
          "q": "ما معنى Internet؟",
          "opts": [
            "الإنترنت",
            "الموقع",
            "البرنامج"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Internet؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Webseite؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Maus؟",
            "opts": [
              "الفأرة",
              "الموقع",
              "البرنامج"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l97",
        "type": "lesson",
        "icon": "🏟️",
        "title": "الرياضة والفعاليات",
        "desc": "Spiel, Mannschaft, Ball, Tor, Training",
        "xp": 30,
        "grammar": "للهواية: Ich gehe ins Theater. Wir sehen das Spiel.",
        "vocab": [
          {
            "de": "das Spiel",
            "ar": "اللعبة"
          },
          {
            "de": "die Mannschaft",
            "ar": "الفريق"
          },
          {
            "de": "der Ball",
            "ar": "الكرة"
          },
          {
            "de": "das Tor",
            "ar": "الهدف"
          },
          {
            "de": "das Training",
            "ar": "التدريب"
          },
          {
            "de": "das Schwimmbad",
            "ar": "المسبح"
          },
          {
            "de": "das Fitnessstudio",
            "ar": "النادي الرياضي"
          },
          {
            "de": "das Konzert",
            "ar": "الحفلة الموسيقية"
          },
          {
            "de": "das Theater",
            "ar": "المسرح"
          },
          {
            "de": "die Ausstellung",
            "ar": "المعرض"
          }
        ],
        "quiz": {
          "q": "ما معنى Spiel؟",
          "opts": [
            "اللعبة",
            "الفريق",
            "الكرة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Spiel؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Mannschaft؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Schwimmbad؟",
            "opts": [
              "المسبح",
              "الفريق",
              "الكرة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "cp4",
        "type": "checkpoint",
        "icon": "🏆",
        "title": "محطة محادثة AI #4: التحدي الشامل للسكن",
        "desc": "حوار متكامل حول التسوق وشراء مستلزمات الشقة",
        "xp": 60,
        "scenarioTitle": "البحث عن شقة وشراء أثاث",
        "scenarioGoal": "تحدث مع صاحب الشقة أو بائع الأثاث عن التفاصيل.",
        "starterDe": "Hallo! Sie suchen eine Wohnung? Erzählen Sie mir mehr.",
        "starterAr": "مرحباً! أنت تبحث عن شقة؟ اخبرني بالمزيد.",
        "systemPrompt": "أنت مؤجر شقة أو بائع أثاث. حاور الطالب حول الغرف والإيجار والمقاسات."
      }
    ]
  },
  {
    "unit": "الوحدة التاسعة: الصحة والطقس والطبيعة",
    "nodes": [
      {
        "id": "l8",
        "type": "lesson",
        "extra": [
          {
            "q": "ما معنى krank؟",
            "opts": [
              "مريض",
              "متعب",
              "جائع"
            ],
            "ans": 0
          },
          {
            "q": "كيف تقول: ذراعي يؤلمني؟",
            "opts": [
              "Mein Arm tut weh.",
              "Ich habe Arm weh.",
              "Mein Arm ist weh tut."
            ],
            "ans": 0
          }
        ],
        "icon": "🩺",
        "title": "الجسم والصحة عند الطبيب",
        "desc": "Kopf, Bauch, Arzt, Schmerzen, Krank",
        "xp": 30,
        "grammar": "التعبير عن الألم: Ich habe Kopfschmerzen (لدي صداع). Mein Arm tut weh (ذراعي يؤلمني).",
        "vocab": [
          {
            "de": "Ich bin krank.",
            "ar": "أنا مريض."
          },
          {
            "de": "Wo tut es weh?",
            "ar": "أين مكان الألم؟"
          },
          {
            "de": "Ich brauche einen Termin beim Arzt.",
            "ar": "أحتاج موعداً عند الطبيب."
          }
        ],
        "quiz": {
          "q": "كيف تقول: لدي صداع؟",
          "opts": [
            "Ich habe Kopfschmerzen.",
            "Ich bin Kaffee.",
            "Ich wohne in Berlin."
          ],
          "ans": 0
        }
      },
      {
        "id": "l9",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Im Winter ist es ___.",
            "opts": [
              "kalt",
              "heiß",
              "sonnig"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى regnen؟",
            "opts": [
              "تمطر",
              "تثلج",
              "تشرق"
            ],
            "ans": 0
          }
        ],
        "icon": "☀️",
        "title": "الطقس وفصول السنة",
        "desc": "Sonne, Regen, kalt, warm, Grad",
        "xp": 30,
        "grammar": "التعبير عن الطقس: Es ist kalt (الجو بارد). Heute regnet es (اليوم تمطر).",
        "vocab": [
          {
            "de": "Wie ist das Wetter heute?",
            "ar": "كيف حال الطقس اليوم؟"
          },
          {
            "de": "Es ist sonnig und 25 Grad.",
            "ar": "الجو مشمس و 25 درجة."
          },
          {
            "de": "Im Winter ist es kalt.",
            "ar": "في الشتاء يكون الجو بارداً."
          }
        ],
        "quiz": {
          "q": "كيف تسأل عن الطقس؟",
          "opts": [
            "Wie ist das Wetter heute?",
            "Wie spät ist es?",
            "Woher kommst du?"
          ],
          "ans": 0
        }
      },
      {
        "id": "l39",
        "type": "lesson",
        "icon": "🧍",
        "title": "أجزاء الجسم والمستشفى",
        "desc": "Auge, Ohr, Mund, Nase, Bein, Krankenhaus",
        "xp": 30,
        "grammar": "للألم: Mein ... tut weh. للجمع: Meine Augen tun weh. gesund عكس krank.",
        "vocab": [
          {
            "de": "das Auge",
            "ar": "العين"
          },
          {
            "de": "das Ohr",
            "ar": "الأذن"
          },
          {
            "de": "der Mund",
            "ar": "الفم"
          },
          {
            "de": "die Nase",
            "ar": "الأنف"
          },
          {
            "de": "das Bein",
            "ar": "الساق"
          },
          {
            "de": "das Krankenhaus",
            "ar": "المستشفى"
          },
          {
            "de": "gesund",
            "ar": "سليم"
          },
          {
            "de": "Mein Bein tut weh.",
            "ar": "ساقي تؤلمني."
          }
        ],
        "quiz": {
          "q": "كيف تقول: أذني تؤلمني؟",
          "opts": [
            "Mein Ohr tut weh.",
            "Mein Ohr ist weh.",
            "Ich habe Ohr weh."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Auge؟",
            "opts": [
              "عين",
              "أذن",
              "أنف"
            ],
            "ans": 0
          },
          {
            "q": "ما عكس krank؟",
            "opts": [
              "gesund",
              "müde",
              "schnell"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l47",
        "type": "lesson",
        "icon": "💊",
        "title": "المرض والدواء",
        "desc": "Fieber, Husten, Tablette, Medikament",
        "xp": 30,
        "grammar": "للتعبير عن مرض: Ich habe Fieber. Ich habe Husten. وللدواء: Ich brauche ein Medikament.",
        "vocab": [
          {
            "de": "das Fieber",
            "ar": "الحمى"
          },
          {
            "de": "der Husten",
            "ar": "السعال"
          },
          {
            "de": "die Erkältung",
            "ar": "الزكام"
          },
          {
            "de": "die Tablette",
            "ar": "القرص"
          },
          {
            "de": "das Medikament",
            "ar": "الدواء"
          },
          {
            "de": "das Rezept",
            "ar": "الوصفة الطبية"
          },
          {
            "de": "Ich habe Fieber.",
            "ar": "عندي حمى."
          },
          {
            "de": "Ich brauche ein Medikament.",
            "ar": "أحتاج دواءً."
          }
        ],
        "quiz": {
          "q": "ما معنى Fieber؟",
          "opts": [
            "الحمى",
            "السعال",
            "الزكام"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Fieber؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Husten؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Rezept؟",
            "opts": [
              "الوصفة الطبية",
              "القرص",
              "الدواء"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l60",
        "type": "lesson",
        "icon": "🌳",
        "title": "الطبيعة والحيوانات",
        "desc": "Hund, Katze, Baum, Blume, Berg",
        "xp": 30,
        "grammar": "الحيوانات والنباتات: der Hund، die Katze، der Baum، die Blume. جمعها: die Hunde، die Katzen، die Bäume، die Blumen.",
        "vocab": [
          {
            "de": "der Hund",
            "ar": "الكلب"
          },
          {
            "de": "die Katze",
            "ar": "القطة"
          },
          {
            "de": "der Vogel",
            "ar": "الطائر"
          },
          {
            "de": "das Pferd",
            "ar": "الحصان"
          },
          {
            "de": "der Baum",
            "ar": "الشجرة"
          },
          {
            "de": "die Blume",
            "ar": "الزهرة"
          },
          {
            "de": "der Fluss",
            "ar": "النهر"
          },
          {
            "de": "der Berg",
            "ar": "الجبل"
          },
          {
            "de": "der See",
            "ar": "البحيرة"
          },
          {
            "de": "der Himmel",
            "ar": "السماء"
          },
          {
            "de": "Die Katze schläft.",
            "ar": "القطة نائمة."
          },
          {
            "de": "Der Hund ist klein.",
            "ar": "الكلب صغير."
          }
        ],
        "quiz": {
          "q": "ما معنى Hund؟",
          "opts": [
            "الكلب",
            "القطة",
            "الطائر"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Hund؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Katze؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Himmel؟",
            "opts": [
              "السماء",
              "القطة",
              "الطائر"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l67",
        "type": "lesson",
        "icon": "🩺",
        "title": "عبارات عند الطبيب",
        "desc": "Ich habe Kopfschmerzen, Gute Besserung!",
        "xp": 30,
        "grammar": "للشكوى: Ich habe ... (Kopfschmerzen، Fieber). للسؤال: Wo tut es weh? وللتمنّي: Gute Besserung!",
        "vocab": [
          {
            "de": "Ich habe Kopfschmerzen.",
            "ar": "عندي صداع."
          },
          {
            "de": "Mir ist schlecht.",
            "ar": "أشعر بغثيان."
          },
          {
            "de": "Ich brauche einen Termin.",
            "ar": "أحتاج موعداً."
          },
          {
            "de": "Nehmen Sie die Tablette dreimal am Tag.",
            "ar": "تناول القرص ثلاث مرات يومياً."
          },
          {
            "de": "Ich bin allergisch.",
            "ar": "عندي حساسية."
          },
          {
            "de": "Gute Besserung!",
            "ar": "الشفاء العاجل!"
          },
          {
            "de": "Seit wann haben Sie Schmerzen?",
            "ar": "منذ متى تشعر بالألم؟"
          }
        ],
        "quiz": {
          "q": "ما معنى Ich habe Kopfschmerzen.؟",
          "opts": [
            "عندي صداع.",
            "أشعر بغثيان.",
            "أحتاج موعداً."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Nehmen Sie die Tablette dreimal am Tag.؟",
            "opts": [
              "تناول القرص ثلاث مرات يومياً.",
              "أشعر بغثيان.",
              "أحتاج موعداً."
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Seit wann haben Sie Schmerzen?؟",
            "opts": [
              "منذ متى تشعر بالألم؟",
              "عندي صداع.",
              "أشعر بغثيان."
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l99",
        "type": "lesson",
        "icon": "🚑",
        "title": "الصحة والمستشفى",
        "desc": "Gesundheit, Krankheit, Verletzung, Verband, Salbe",
        "xp": 30,
        "grammar": "الأسماء التي تنتهي بـ -ung و-heit مؤنثة: die Impfung، die Krankheit، die Gesundheit.",
        "vocab": [
          {
            "de": "die Gesundheit",
            "ar": "الصحة"
          },
          {
            "de": "die Krankheit",
            "ar": "المرض"
          },
          {
            "de": "die Verletzung",
            "ar": "الإصابة"
          },
          {
            "de": "der Verband",
            "ar": "الضمادة"
          },
          {
            "de": "die Salbe",
            "ar": "المرهم"
          },
          {
            "de": "der Schnupfen",
            "ar": "الزكام"
          },
          {
            "de": "der Schmerz",
            "ar": "الألم"
          },
          {
            "de": "die Operation",
            "ar": "العملية"
          },
          {
            "de": "der Krankenwagen",
            "ar": "سيارة الإسعاف"
          },
          {
            "de": "die Spritze",
            "ar": "الحقنة"
          },
          {
            "de": "die Impfung",
            "ar": "التطعيم"
          }
        ],
        "quiz": {
          "q": "ما معنى Gesundheit؟",
          "opts": [
            "الصحة",
            "المرض",
            "الإصابة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Gesundheit؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Krankheit؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Schnupfen؟",
            "opts": [
              "الزكام",
              "المرض",
              "الإصابة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l100",
        "type": "lesson",
        "icon": "⛈️",
        "title": "الطقس والطبيعة",
        "desc": "Temperatur, Grad, Gewitter, Nebel, Sturm",
        "xp": 30,
        "grammar": "نتحدث عن الطقس بـ es: Es gibt Nebel. Es ist 20 Grad.",
        "vocab": [
          {
            "de": "die Temperatur",
            "ar": "درجة الحرارة"
          },
          {
            "de": "der Grad",
            "ar": "الدرجة"
          },
          {
            "de": "das Gewitter",
            "ar": "العاصفة الرعدية"
          },
          {
            "de": "der Nebel",
            "ar": "الضباب"
          },
          {
            "de": "der Sturm",
            "ar": "العاصفة"
          },
          {
            "de": "der Mond",
            "ar": "القمر"
          },
          {
            "de": "der Stern",
            "ar": "النجم"
          },
          {
            "de": "die Erde",
            "ar": "الأرض"
          },
          {
            "de": "das Feuer",
            "ar": "النار"
          },
          {
            "de": "die Luft",
            "ar": "الهواء"
          },
          {
            "de": "das Gras",
            "ar": "العشب"
          }
        ],
        "quiz": {
          "q": "ما معنى Temperatur؟",
          "opts": [
            "درجة الحرارة",
            "الدرجة",
            "العاصفة الرعدية"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Temperatur؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Grad؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Mond؟",
            "opts": [
              "القمر",
              "الدرجة",
              "العاصفة الرعدية"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l77",
        "type": "lesson",
        "icon": "🚨",
        "title": "الخدمات والطوارئ",
        "desc": "Polizei, Hilfe, Eingang, Ausgang, Toilette",
        "xp": 30,
        "grammar": "في الطوارئ: Hilfe! Ich brauche die Polizei. وللأماكن العامة: der Eingang (المدخل)، der Ausgang (المخرج).",
        "vocab": [
          {
            "de": "die Polizei",
            "ar": "الشرطة"
          },
          {
            "de": "die Feuerwehr",
            "ar": "الإطفاء"
          },
          {
            "de": "der Notfall",
            "ar": "الطوارئ"
          },
          {
            "de": "die Hilfe",
            "ar": "المساعدة"
          },
          {
            "de": "die Auskunft",
            "ar": "الاستعلامات"
          },
          {
            "de": "der Eingang",
            "ar": "المدخل"
          },
          {
            "de": "der Ausgang",
            "ar": "المخرج"
          },
          {
            "de": "die Toilette",
            "ar": "دورة المياه"
          },
          {
            "de": "die Information",
            "ar": "المعلومات"
          },
          {
            "de": "der Stadtplan",
            "ar": "خريطة المدينة"
          },
          {
            "de": "Wo ist die Toilette?",
            "ar": "أين دورة المياه؟"
          }
        ],
        "quiz": {
          "q": "ما معنى Polizei؟",
          "opts": [
            "الشرطة",
            "الإطفاء",
            "الطوارئ"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Polizei؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Feuerwehr؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Eingang؟",
            "opts": [
              "المدخل",
              "الإطفاء",
              "الطوارئ"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l75",
        "type": "lesson",
        "icon": "🫀",
        "title": "الجسم: مزيد",
        "desc": "Finger, Fuß, Rücken, Hals, Gesicht, Herz",
        "xp": 30,
        "grammar": "جمع بعض الأسماء: der Fuß → die Füße، der Zahn → die Zähne، das Haar → die Haare. وللألم: Mein Rücken tut weh.",
        "vocab": [
          {
            "de": "der Finger",
            "ar": "الإصبع"
          },
          {
            "de": "der Fuß",
            "ar": "القدم"
          },
          {
            "de": "das Knie",
            "ar": "الركبة"
          },
          {
            "de": "der Rücken",
            "ar": "الظهر"
          },
          {
            "de": "der Hals",
            "ar": "الرقبة"
          },
          {
            "de": "das Gesicht",
            "ar": "الوجه"
          },
          {
            "de": "das Haar",
            "ar": "الشعر"
          },
          {
            "de": "der Zahn",
            "ar": "السن"
          },
          {
            "de": "das Herz",
            "ar": "القلب"
          },
          {
            "de": "Mein Rücken tut weh.",
            "ar": "ظهري يؤلمني."
          }
        ],
        "quiz": {
          "q": "ما معنى Finger؟",
          "opts": [
            "الإصبع",
            "القدم",
            "الركبة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Finger؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Fuß؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Gesicht؟",
            "opts": [
              "الوجه",
              "القدم",
              "الركبة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l89",
        "type": "lesson",
        "icon": "🐄",
        "title": "الحيوانات والطقس",
        "desc": "Kuh, Schaf, Huhn, Löwe, Affe",
        "xp": 30,
        "grammar": "الجمع: das Huhn → die Hühner، das Schaf → die Schafe، die Kuh → die Kühe.",
        "vocab": [
          {
            "de": "die Kuh",
            "ar": "البقرة"
          },
          {
            "de": "das Schaf",
            "ar": "الخروف"
          },
          {
            "de": "das Huhn",
            "ar": "الدجاجة"
          },
          {
            "de": "der Löwe",
            "ar": "الأسد"
          },
          {
            "de": "der Affe",
            "ar": "القرد"
          },
          {
            "de": "der Hase",
            "ar": "الأرنب"
          },
          {
            "de": "der Wald",
            "ar": "الغابة"
          },
          {
            "de": "der Regen",
            "ar": "المطر"
          },
          {
            "de": "der Schnee",
            "ar": "الثلج"
          },
          {
            "de": "der Wind",
            "ar": "الرياح"
          },
          {
            "de": "die Wiese",
            "ar": "المرج"
          }
        ],
        "quiz": {
          "q": "ما معنى Kuh؟",
          "opts": [
            "البقرة",
            "الخروف",
            "الدجاجة"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Kuh؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Schaf؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى Hase؟",
            "opts": [
              "الأرنب",
              "الخروف",
              "الدجاجة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "cp5",
        "type": "checkpoint",
        "icon": "🤖",
        "title": "محطة محادثة AI #5: حجز موعد عيادة",
        "desc": "تحدث مع موظف العيادة عن حالتك الصحية وموعد الزيارة",
        "xp": 55,
        "scenarioTitle": "حجز موعد عيادة",
        "scenarioGoal": "أخبر موظف الاستقبال بمكان الألم واتفق على موعد.",
        "starterDe": "Guten Tag! Praxis Dr. Müller. Was kann ich für Sie tun?",
        "starterAr": "نهارك سعيد! عيادة دكتور مولر. ماذا يمكنني أن أقدم لك؟",
        "systemPrompt": "أنت موظف استقبال عيادة. ساعد المريض في تحديد موعد وسؤاله عن حالته."
      }
    ]
  },
  {
    "unit": "الوحدة العاشرة: السفر والمواصلات والإجازات",
    "nodes": [
      {
        "id": "l10",
        "type": "lesson",
        "extra": [
          {
            "q": "أي جملة صحيحة؟",
            "opts": [
              "Der Zug fährt um zehn ab.",
              "Der Zug abfährt um zehn.",
              "Der Zug fährt ab um zehn nicht."
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Fahrkarte؟",
            "opts": [
              "تذكرة",
              "رصيف",
              "قطار"
            ],
            "ans": 0
          }
        ],
        "icon": "🚆",
        "title": "السفر والمحطة والمواصلات",
        "desc": "Zug, Fahrkarte, Bahnhof, abfahren",
        "xp": 30,
        "grammar": "استخدام الأفعال المنفصلة (Trennbare Verben): Der Zug fährt um 10 Uhr ab (القطار يتحرك الساعة 10).",
        "vocab": [
          {
            "de": "Eine Fahrkarte nach Berlin, bitte.",
            "ar": "تذكرة إلى برلين من فضلك."
          },
          {
            "de": "Wann fährt der nächste Zug?",
            "ar": "متى يتحرك القطار القادم؟"
          },
          {
            "de": "Gleis 3.",
            "ar": "رصيف رقم 3."
          }
        ],
        "quiz": {
          "q": "ما الفعل المنفصل المناسب لحركة القطار؟",
          "opts": [
            "abfahren",
            "wohnen",
            "sprechen"
          ],
          "ans": 0
        }
      },
      {
        "id": "l34",
        "type": "lesson",
        "icon": "✈️",
        "title": "وسائل المواصلات والسفر",
        "desc": "mit dem Bus, mit der U-Bahn, Ticket, Koffer",
        "xp": 30,
        "grammar": "مع وسائل المواصلات نستخدم mit + Dativ: mit dem Zug، mit dem Bus (مذكر: dem)، mit dem Flugzeug (محايد: dem)، mit der U-Bahn (مؤنث: der).",
        "vocab": [
          {
            "de": "das Flugzeug",
            "ar": "الطائرة"
          },
          {
            "de": "das Fahrrad",
            "ar": "الدراجة"
          },
          {
            "de": "die U-Bahn",
            "ar": "المترو"
          },
          {
            "de": "das Ticket",
            "ar": "التذكرة"
          },
          {
            "de": "der Koffer",
            "ar": "حقيبة السفر"
          },
          {
            "de": "das Hotel",
            "ar": "الفندق"
          },
          {
            "de": "Ich fahre mit dem Bus.",
            "ar": "أذهب بالحافلة."
          },
          {
            "de": "Mein Koffer ist schwer.",
            "ar": "حقيبتي ثقيلة."
          },
          {
            "de": "der Flughafen",
            "ar": "المطار"
          },
          {
            "de": "die Reise",
            "ar": "الرحلة"
          },
          {
            "de": "Der Zug kommt um acht an.",
            "ar": "يصل القطار الساعة الثامنة."
          }
        ],
        "quiz": {
          "q": "أكمل: Ich fahre ___ U-Bahn.",
          "opts": [
            "mit der",
            "mit dem",
            "mit den"
          ],
          "ans": 0,
          "e": "U-Bahn مؤنث: mit der."
        },
        "extra": [
          {
            "q": "أكمل: Ich fahre ___ Bus.",
            "opts": [
              "mit dem",
              "mit der",
              "mit die"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Koffer؟",
            "opts": [
              "حقيبة سفر",
              "تذكرة",
              "فندق"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l64",
        "type": "lesson",
        "icon": "🏨",
        "title": "عبارات الاستقبال والفندق",
        "desc": "Ich habe eine Reservierung, Können Sie mir helfen?",
        "xp": 30,
        "grammar": "للأسئلة المهذبة: Können Sie ...? وللرغبة: Ich möchte + مصدر في آخر الجملة: Ich möchte bezahlen.",
        "vocab": [
          {
            "de": "Ich habe eine Reservierung.",
            "ar": "عندي حجز."
          },
          {
            "de": "Haben Sie ein Zimmer frei?",
            "ar": "هل عندكم غرفة شاغرة؟"
          },
          {
            "de": "Hier ist mein Pass.",
            "ar": "هذا جواز سفري."
          },
          {
            "de": "Wo ist das Frühstück?",
            "ar": "أين الفطور؟"
          },
          {
            "de": "Ich möchte bezahlen.",
            "ar": "أريد أن أدفع."
          },
          {
            "de": "Können Sie mir helfen?",
            "ar": "هل يمكنك مساعدتي؟"
          },
          {
            "de": "Der Schlüssel, bitte.",
            "ar": "المفتاح من فضلك."
          },
          {
            "de": "Wie lange bleiben Sie?",
            "ar": "كم ستبقى؟"
          }
        ],
        "quiz": {
          "q": "ما معنى Ich habe eine Reservierung.؟",
          "opts": [
            "عندي حجز.",
            "هل عندكم غرفة شاغرة؟",
            "هذا جواز سفري."
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما معنى Ich möchte bezahlen.؟",
            "opts": [
              "أريد أن أدفع.",
              "عندي حجز.",
              "هل عندكم غرفة شاغرة؟"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Wie lange bleiben Sie?؟",
            "opts": [
              "كم ستبقى؟",
              "هل عندكم غرفة شاغرة؟",
              "هذا جواز سفري."
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l48",
        "type": "lesson",
        "icon": "🏖️",
        "title": "الإجازة والسفر",
        "desc": "Urlaub, Meer, Strand, Pass, Gepäck",
        "xp": 30,
        "grammar": "في الإجازة: Wir machen Urlaub am Meer. للأمتعة: Ich habe viel Gepäck.",
        "vocab": [
          {
            "de": "der Urlaub",
            "ar": "الإجازة"
          },
          {
            "de": "das Meer",
            "ar": "البحر"
          },
          {
            "de": "der Strand",
            "ar": "الشاطئ"
          },
          {
            "de": "der Pass",
            "ar": "جواز السفر"
          },
          {
            "de": "das Gepäck",
            "ar": "الأمتعة"
          },
          {
            "de": "die Reservierung",
            "ar": "الحجز"
          },
          {
            "de": "Der Strand ist schön.",
            "ar": "الشاطئ جميل."
          },
          {
            "de": "Wir machen Urlaub am Meer.",
            "ar": "نقضي الإجازة عند البحر."
          }
        ],
        "quiz": {
          "q": "ما معنى Urlaub؟",
          "opts": [
            "الإجازة",
            "البحر",
            "الشاطئ"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Urlaub؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Meer؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى Reservierung؟",
            "opts": [
              "الحجز",
              "جواز السفر",
              "الأمتعة"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l82",
        "type": "lesson",
        "icon": "🎉",
        "title": "الأعياد والحفلات",
        "desc": "Hochzeit, Fest, Feier, Feiertag, Einladung",
        "xp": 30,
        "grammar": "للدعوة: Ich lade dich ein. وللتهنئة: Alles Gute!",
        "vocab": [
          {
            "de": "die Hochzeit",
            "ar": "الزفاف"
          },
          {
            "de": "das Fest",
            "ar": "الحفل"
          },
          {
            "de": "die Feier",
            "ar": "الاحتفال"
          },
          {
            "de": "der Feiertag",
            "ar": "العطلة الرسمية"
          },
          {
            "de": "die Einladung",
            "ar": "الدعوة"
          },
          {
            "de": "die Kerze",
            "ar": "الشمعة"
          },
          {
            "de": "der Ballon",
            "ar": "البالون"
          }
        ],
        "quiz": {
          "q": "ما معنى Hochzeit؟",
          "opts": [
            "الزفاف",
            "الحفل",
            "الاحتفال"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Hochzeit؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما أداة Fest؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما معنى Feiertag؟",
            "opts": [
              "العطلة الرسمية",
              "الحفل",
              "الاحتفال"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l80",
        "type": "lesson",
        "icon": "🚗",
        "title": "المرور والسيارات",
        "desc": "Verkehr, Stau, Taxi, Kreuzung, Fußgänger",
        "xp": 30,
        "grammar": "احفظ الاسم مع أداته: der Verkehr، die Autobahn، das Taxi.",
        "vocab": [
          {
            "de": "der Verkehr",
            "ar": "المرور"
          },
          {
            "de": "der Stau",
            "ar": "الازدحام"
          },
          {
            "de": "das Taxi",
            "ar": "التاكسي"
          },
          {
            "de": "die Kreuzung",
            "ar": "التقاطع"
          },
          {
            "de": "der Fußgänger",
            "ar": "المشاة"
          },
          {
            "de": "der Parkplatz",
            "ar": "موقف السيارات"
          },
          {
            "de": "die Tankstelle",
            "ar": "محطة الوقود"
          },
          {
            "de": "die Autobahn",
            "ar": "الطريق السريع"
          },
          {
            "de": "der Führerschein",
            "ar": "رخصة القيادة"
          },
          {
            "de": "der Unfall",
            "ar": "الحادث"
          }
        ],
        "quiz": {
          "q": "ما معنى Verkehr؟",
          "opts": [
            "المرور",
            "الازدحام",
            "التاكسي"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Verkehr؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما أداة Stau؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 0
          },
          {
            "q": "ما معنى Parkplatz؟",
            "opts": [
              "موقف السيارات",
              "الازدحام",
              "التاكسي"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "l98",
        "type": "lesson",
        "icon": "🛂",
        "title": "المطار والحدود",
        "desc": "Visum, Grenze, Zoll, Landung, Flug",
        "xp": 30,
        "grammar": "في المطار: Ich brauche ein Visum. Der Flug hat Verspätung.",
        "vocab": [
          {
            "de": "das Visum",
            "ar": "التأشيرة"
          },
          {
            "de": "die Grenze",
            "ar": "الحدود"
          },
          {
            "de": "der Zoll",
            "ar": "الجمارك"
          },
          {
            "de": "die Landung",
            "ar": "الهبوط"
          },
          {
            "de": "der Flug",
            "ar": "الرحلة الجوية"
          },
          {
            "de": "die Abfahrt",
            "ar": "المغادرة"
          },
          {
            "de": "die Ankunft",
            "ar": "الوصول"
          },
          {
            "de": "der Bahnsteig",
            "ar": "الرصيف"
          },
          {
            "de": "die Verspätung",
            "ar": "التأخير"
          },
          {
            "de": "der Sitzplatz",
            "ar": "المقعد"
          }
        ],
        "quiz": {
          "q": "ما معنى Visum؟",
          "opts": [
            "التأشيرة",
            "الحدود",
            "الجمارك"
          ],
          "ans": 0
        },
        "extra": [
          {
            "q": "ما أداة Visum؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 2
          },
          {
            "q": "ما أداة Grenze؟",
            "opts": [
              "der",
              "die",
              "das"
            ],
            "ans": 1
          },
          {
            "q": "ما معنى Abfahrt؟",
            "opts": [
              "المغادرة",
              "الحدود",
              "الجمارك"
            ],
            "ans": 0
          }
        ]
      },
      {
        "id": "cp6",
        "type": "checkpoint",
        "icon": "🏆",
        "title": "محطة محادثة AI #6: في محطة القطار",
        "desc": "حوار شامل في محطة القطار والسفر لمدينة جديدة",
        "xp": 65,
        "scenarioTitle": "شراء تذكرة وسؤال عن المواعيد في المحطة",
        "scenarioGoal": "احجز تذكرة قطار واستفسر عن الرصيف ووقت الرحلة.",
        "starterDe": "Guten Tag! Wohin möchten Sie reisen?",
        "starterAr": "نهارك سعيد! إلى أين تود أن تسافر؟",
        "systemPrompt": "أنت موظف محطة القطار. ساعد المسافر في حجز التذكرة، معرفة الرصيف، ووقت القيام بدقة لمستوى A1."
      }
    ]
  },
  {
    "unit": "الوحدة الحادية عشرة: إتقان A1 والامتحان الدولي",
    "nodes": [
      {
        "id": "l25",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Ich habe Deutsch ___.",
            "opts": [
              "gelernt",
              "lernt",
              "lernen"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Er ist nach Berlin ___.",
            "opts": [
              "gefahren",
              "gefahrt",
              "fahrt"
            ],
            "ans": 0
          }
        ],
        "icon": "⏳",
        "title": "الماضي المركب المستخدم في المحادثة (Perfekt)",
        "desc": "haben / sein + Partizip II (ge-...-t / ge-...-en)",
        "xp": 40,
        "grammar": "للتحدث عن الماضي في المحادثات نستخدم Perfekt: الفعل المساعد (haben أو sein) في المركز الثاني، والتصريف الثالث (Partizip II) في آخر الجملة.\nنستخدم sein مع أفعال الحركة وتغيير المكان (gehen, fahren, fliegen): Ich bin nach Berlin gefahren.\nونستخدم haben مع باقي الأفعال: Ich habe Deutsch gelernt.",
        "vocab": [
          {
            "de": "Ich habe gestern Deutsch gelernt.",
            "ar": "تعلمت الألمانية بالأمس."
          },
          {
            "de": "Wir haben Pizza gegessen.",
            "ar": "أكلنا بيتزا."
          },
          {
            "de": "Er ist nach München gefahren.",
            "ar": "هو سافر إلى ميونخ."
          },
          {
            "de": "Ich bin um 8 Uhr aufgestanden.",
            "ar": "استيقظت الساعة الثامنة."
          },
          {
            "de": "Was hast du am Wochenende gemacht?",
            "ar": "ماذا فعلت في عطلة نهاية الأسبوع؟"
          }
        ],
        "quiz": {
          "q": "أي فعل مساعد نستخدمه مع فعل fahren (يسافر) في الماضي؟",
          "opts": [
            "sein (bin gefahren)",
            "haben (habe gefahren)",
            "werden"
          ],
          "ans": 0
        }
      },
      {
        "id": "l26",
        "type": "lesson",
        "extra": [
          {
            "q": "أكمل: Ich fahre ___ Berlin.",
            "opts": [
              "nach",
              "in",
              "um"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: ___ Sommer ist es heiß.",
            "opts": [
              "Im",
              "Am",
              "Um"
            ],
            "ans": 0
          }
        ],
        "icon": "📍",
        "title": "حروف الجر الزمنية والمكانية",
        "desc": "am, um, im / in, nach, zu, bei, mit",
        "xp": 40,
        "grammar": "حروف الجر الزمنية: am للأيام وأجزاء اليوم (am Montag, am Abend)، um للساعة (um 9 Uhr)، im للشهور وفصول السنة (im Sommer, im Mai).\nحروف المكان والحركة: nach للمدن والدول بدون أداة (nach Ägypten, nach Berlin)، in للأماكن المغلقة (ins Kino / im Supermarkt)، mit لوسائل المواصلات (mit dem Bus).",
        "vocab": [
          {
            "de": "Am Montag beginnt der Kurs um 9 Uhr.",
            "ar": "يوم الاثنين يبدأ الكورس الساعة 9."
          },
          {
            "de": "Im Sommer fahre ich nach Deutschland.",
            "ar": "في الصيف أسافر إلى ألمانيا."
          },
          {
            "de": "Ich fahre mit dem Zug zur Arbeit.",
            "ar": "أذهب بالقطار إلى العمل."
          },
          {
            "de": "Wir treffen uns im Café.",
            "ar": "نلتقي في المقهى."
          }
        ],
        "quiz": {
          "q": "اختر حرف الجر الصحيح: Der Unterricht beginnt ___ 8 Uhr.",
          "opts": [
            "um",
            "am",
            "im"
          ],
          "ans": 0
        }
      },
      {
        "id": "l29",
        "type": "lesson",
        "extra": [
          {
            "q": "أمر لـ du من warten؟",
            "opts": [
              "Warte!",
              "Wartest!",
              "Wartet!"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: ___ Sie bitte herein! (kommen)",
            "opts": [
              "Kommen",
              "Komm",
              "Kommt"
            ],
            "ans": 0
          }
        ],
        "icon": "📢",
        "title": "الأمر والطلب المهذب (Imperativ)",
        "desc": "Kommen Sie! / Komm! / Sprich langsam!",
        "xp": 40,
        "grammar": "مع Sie: المصدر ثم Sie: Kommen Sie bitte! / Gehen Sie geradeaus.\nمع du: جذر الفعل بدون en: Komm! / Warte! وبعض الأفعال تتغير: sprechen → Sprich! ، lesen → Lies!\nمع ihr: Kommt! / Wartet!",
        "vocab": [
          {
            "de": "Kommen Sie bitte herein.",
            "ar": "تفضل بالدخول من فضلك."
          },
          {
            "de": "Sprechen Sie bitte langsamer.",
            "ar": "تكلم ببطء أكثر من فضلك."
          },
          {
            "de": "Warte bitte kurz!",
            "ar": "انتظر قليلاً من فضلك!"
          },
          {
            "de": "Lies den Text laut!",
            "ar": "اقرأ النص بصوت عالٍ!"
          }
        ],
        "quiz": {
          "q": "كيف تطلب من شخص (Sie) أن يتكلم ببطء؟",
          "opts": [
            "Sprechen Sie bitte langsam.",
            "Sprichst Sie bitte langsam.",
            "Sprecht Sie langsam."
          ],
          "ans": 0
        }
      },
      {
        "id": "l30",
        "type": "lesson",
        "extra": [
          {
            "q": "ما الشهر الخامس؟",
            "opts": [
              "Mai",
              "März",
              "Juni"
            ],
            "ans": 0
          },
          {
            "q": "أكمل: Ich habe ___ Montag Zeit.",
            "opts": [
              "am",
              "im",
              "um"
            ],
            "ans": 0
          }
        ],
        "icon": "🗓️",
        "title": "الشهور والتواريخ",
        "desc": "Januar bis Dezember, am 5. Mai",
        "xp": 35,
        "grammar": "للشهر نستخدم im: im Mai. لتاريخ محدد نستخدم am + رقم ترتيبي: am 5. Mai (am fünften Mai).\nللسؤال: Wann hast du Geburtstag? أو Der Wievielte ist heute?",
        "vocab": [
          {
            "de": "Januar",
            "ar": "يناير"
          },
          {
            "de": "Februar",
            "ar": "فبراير"
          },
          {
            "de": "März",
            "ar": "مارس"
          },
          {
            "de": "April",
            "ar": "أبريل"
          },
          {
            "de": "Mai",
            "ar": "مايو"
          },
          {
            "de": "Juni",
            "ar": "يونيو"
          },
          {
            "de": "Juli",
            "ar": "يوليو"
          },
          {
            "de": "August",
            "ar": "أغسطس"
          },
          {
            "de": "September",
            "ar": "سبتمبر"
          },
          {
            "de": "Oktober",
            "ar": "أكتوبر"
          },
          {
            "de": "November",
            "ar": "نوفمبر"
          },
          {
            "de": "Dezember",
            "ar": "ديسمبر"
          },
          {
            "de": "Mein Geburtstag ist am 5. Mai.",
            "ar": "عيد ميلادي يوم 5 مايو."
          },
          {
            "de": "Wann hast du Geburtstag?",
            "ar": "متى عيد ميلادك؟"
          }
        ],
        "quiz": {
          "q": "أكمل: Mein Geburtstag ist ___ 5. Mai.",
          "opts": [
            "am",
            "um",
            "im"
          ],
          "ans": 0
        }
      },
      {
        "id": "l31",
        "type": "reading",
        "listen": true,
        "icon": "🎧",
        "title": "تدريب الاستماع (Hören: Richtig / Falsch)",
        "desc": "اسمع مقاطع قصيرة بدون نص وجاوب صح أم خطأ",
        "xp": 50,
        "passages": [
          {
            "title": "مقطع 1: رسالة من العيادة",
            "text": "Guten Tag, hier ist die Praxis Dr. Weber. Ihr Termin ist am Dienstag um halb zehn.",
            "statement": "Der Termin ist um 9:30 Uhr.",
            "isTrue": true,
            "explanation": "صحيح — halb zehn تعني التاسعة والنصف."
          },
          {
            "title": "مقطع 2: في السوبرماركت",
            "text": "Das Brot kostet zwei Euro fünfzig und die Milch ein Euro zwanzig.",
            "statement": "Die Milch kostet 2,50 Euro.",
            "isTrue": false,
            "explanation": "خطأ — الخبز 2,50 يورو والحليب 1,20 يورو."
          },
          {
            "title": "مقطع 3: تعريف",
            "text": "Ich heiße Lara, ich bin zwanzig Jahre alt und ich wohne in Wien.",
            "statement": "Lara wohnt in Berlin.",
            "isTrue": false,
            "explanation": "خطأ — لارا تسكن في فيينا (Wien)."
          }
        ]
      },
      {
        "id": "l27",
        "type": "reading",
        "icon": "📰",
        "title": "تدريب القراءة والفهم (Lesen: Richtig / Falsch)",
        "desc": "اقرأ رسائل ولافتات وإعلانات حقيقية وجاوب صح أم خطأ",
        "xp": 50,
        "passages": [
          {
            "title": "نص 1: رسالة قصيرة (SMS)",
            "text": "Hallo Sara! Ich bin noch im Büro und muss bis 18:30 Uhr arbeiten. Wir können uns heute leider nicht um 18:00 Uhr im Café treffen. Geht es um 19:15 Uhr? Liebe Grüße, Mona",
            "statement": "Mona und Sara treffen sich heute um 18:00 Uhr.",
            "isTrue": false,
            "explanation": "خطأ (Falsch) — منى تعمل حتى 18:30 وتقترح اللقاء الساعة 19:15 بدلاً من 18:00."
          },
          {
            "title": "نص 2: لافتة في محطة القطار (Durchsage)",
            "text": "Achtung am Gleis 4: Der ICE 508 nach Hamburg fährt heute nicht um 14:10 Uhr, sondern erst um 14:35 Uhr ab. Wir bitten um Entschuldigung.",
            "statement": "Der Zug nach Hamburg hat 25 Minuten Verspätung.",
            "isTrue": true,
            "explanation": "صحيح (Richtig) — موعد القطار الأصلي 14:10 وتأخر إلى 14:35 أي 25 دقيقة."
          },
          {
            "title": "نص 3: إعلان شقة (Wohnungsanzeige)",
            "text": "Schöne 2-Zimmer-Wohnung im Zentrum von Köln zu vermieten. Die Miete ist 650 Euro plus 120 Euro Nebenkosten. Keine Haustiere erlaubt. Tel: 0176-443219",
            "statement": "In dieser Wohnung darf man einen Hund haben.",
            "isTrue": false,
            "explanation": "خطأ (Falsch) — الإعلان يذكر بوضوح: Keine Haustiere erlaubt (غير مسموح بالحيوانات الأليفة)."
          }
        ]
      },
      {
        "id": "l28",
        "type": "writing_exam",
        "icon": "✍️",
        "title": "تدريب الكتابة الرسمي (Schreiben: Formular & E-Mail)",
        "desc": "املأ استمارة بيانات واكتب إيميل امتحان A1 بتقييم AI",
        "xp": 60,
        "formStory": "اسم صديقك Karim Hassan، عمره 24 سنة، يسكن في شارع Gartenstraße 12 في مدينة Bonn (الرمز البريدي 53111)، وهو من مصر (Ägypten) ويريد حجز كورس لغة ألمانية مسائي (Abendkurs) ويدفع نقداً (Bar).",
        "formFields": [
          {
            "key": "nachname",
            "label": "Familienname (اسم العائلة)",
            "expected": "hassan"
          },
          {
            "key": "vorname",
            "label": "Vorname (الاسم الأول)",
            "expected": "karim"
          },
          {
            "key": "plz_ort",
            "label": "PLZ / Wohnort (الرمز البريدي والمدينة)",
            "expected": "53111 bonn"
          },
          {
            "key": "land",
            "label": "Heimatland (البلد)",
            "expected": "ägypten"
          },
          {
            "key": "kurs",
            "label": "Kurszeit (وقت الكورس: Vormittag / Abend)",
            "expected": "abend"
          }
        ],
        "emailTask": {
          "promptAr": "اكتب إيميلاً قصيراً (حوالي 30 كلمة) لصديقك الألماني (Tim) تعتذر فيه عن عدم الحضور لحفل عيد ميلاده يوم السبت:",
          "bullets": [
            "اشكره على الدعوة (Danke für die Einladung).",
            "اعتذر واشرح السبب (لأنك مريض أو لديك عمل).",
            "اقترح يوماً آخر للقاء في الأسبوع القادم."
          ]
        }
      },
      {
        "id": "cp7",
        "type": "checkpoint",
        "icon": "🎓",
        "title": "محطة محادثة AI #7: المقابلة الشفوية لامتحان A1",
        "desc": "محاكاة كاملة للجزء الشفوي (Sprechen) في امتحان Goethe A1",
        "xp": 80,
        "scenarioTitle": "لجنة امتحان التحدث A1",
        "scenarioGoal": "قدّم نفسك (الاسم، العمر، البلد، السكن، المهنة، الهوايات) ثم اسأل الممتحن سؤالاً.",
        "starterDe": "Guten Tag und herzlich willkommen zur Prüfung Start Deutsch 1! Bitte stellen Sie sich kurz vor.",
        "starterAr": "نهارك سعيد وأهلاً بك في امتحان A1! من فضلك قدّم نفسك باختصار.",
        "systemPrompt": "أنت ممتحن ودود في امتحان Goethe Start Deutsch 1. اطلب من الطالب تقديم نفسه، ثم اسأله تهجئة اسمه أو رقم هاتفه، ثم اطلب منه أن يسألك سؤالاً باستخدام كلمة مثل (Wochenende / Essen / Arbeit). شجعه وقيّم أداءه في النهاية."
      }
    ]
  }
];

const UNIT_TESTS = [
  {
    "id": "ut5",
    "title": "اختبار الوحدة الأولى: الحروف والنطق والتعارف",
    "xp": 50,
    "questions": [
      {
        "q": "ما حروف العلة الألمانية؟",
        "opts": [
          "A, E, I, O, U",
          "B, C, D, F, G",
          "K, L, M, N, P"
        ],
        "ans": 0
      },
      {
        "q": "كيف يُنطق sch غالباً؟",
        "opts": [
          "ش",
          "ف",
          "ك"
        ],
        "ans": 0
      },
      {
        "q": "أي كلمة فيها ß؟",
        "opts": [
          "Straße",
          "Mutter",
          "Haus"
        ],
        "ans": 0
      },
      {
        "q": "كيف تقول: اسمي سارة؟",
        "opts": [
          "Ich heiße Sara.",
          "Ich wohne Sara.",
          "Ich komme Sara."
        ],
        "ans": 0
      },
      {
        "q": "ما معنى Ich komme aus Ägypten؟",
        "opts": [
          "أنا من مصر.",
          "أنا أسكن في برلين.",
          "أنا أتكلم ألماني."
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut1",
    "title": "اختبار الوحدة الثانية: التواصل والمواقف اليومية",
    "xp": 50,
    "questions": [
      {
        "q": "أي تحية تناسب الصباح؟",
        "opts": [
          "Guten Morgen.",
          "Gute Nacht.",
          "Auf Wiedersehen."
        ],
        "ans": 0
      },
      {
        "q": "اختر الرد الطبيعي على Wie geht es dir؟",
        "opts": [
          "Gut, danke.",
          "Ich bin 20.",
          "In Berlin."
        ],
        "ans": 0
      },
      {
        "q": "كيف تكتب 45؟",
        "opts": [
          "fünfundvierzig",
          "vierzigfünf",
          "fünfzigvier"
        ],
        "ans": 0
      },
      {
        "q": "ما معنى siebzehn؟",
        "opts": [
          "17",
          "70",
          "7"
        ],
        "ans": 0
      },
      {
        "q": "اختر طلب القهوة المهذب:",
        "opts": [
          "Ich möchte einen Kaffee, bitte.",
          "Ich bin einen Kaffee.",
          "Ich komme Kaffee."
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut6",
    "title": "اختبار الوحدة الثالثة: القواعد خطوة خطوة",
    "xp": 50,
    "questions": [
      {
        "q": "أكمل: Wir ___ hier.",
        "opts": [
          "sind",
          "bin",
          "seid"
        ],
        "ans": 0
      },
      {
        "q": "أين يأتي الفعل غالباً في الجملة الخبرية؟",
        "opts": [
          "المركز الثاني",
          "آخر الجملة دائماً",
          "أول الجملة دائماً"
        ],
        "ans": 0
      },
      {
        "q": "أي سؤال يبدأ بأداة سؤال؟",
        "opts": [
          "Wo wohnen Sie?",
          "Wohnen Sie hier?",
          "Sind Sie hier?"
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Ich habe ___ Auto.",
        "opts": [
          "kein",
          "nicht",
          "keine"
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Ich sehe ___ Mann. (der Mann)",
        "opts": [
          "einen",
          "eine",
          "ein"
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut4",
    "title": "اختبار الوحدة الرابعة: الأسرة والروتين والهوايات",
    "xp": 50,
    "questions": [
      {
        "q": "ما معنى meine Schwester؟",
        "opts": [
          "أختي",
          "أخي",
          "أمي"
        ],
        "ans": 0
      },
      {
        "q": "ما معنى halb neun؟",
        "opts": [
          "8:30",
          "9:30",
          "9:15"
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Ich stehe um sieben Uhr ___.",
        "opts": [
          "auf",
          "an",
          "aus"
        ],
        "ans": 0
      },
      {
        "q": "كيف تقول: أحب لعب كرة القدم؟",
        "opts": [
          "Ich spiele gern Fußball.",
          "Ich bin gern Fußball.",
          "Ich wohne Fußball."
        ],
        "ans": 0
      },
      {
        "q": "ما معنى müde؟",
        "opts": [
          "متعب",
          "سعيد",
          "جائع"
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut11",
    "title": "اختبار الوحدة الخامسة: العمل والمهن والمدينة",
    "xp": 50,
    "questions": [
      {
        "q": "كيف تسأل عن المهنة؟",
        "opts": [
          "Was sind Sie von Beruf?",
          "Wie heißen Sie von Beruf?",
          "Wo ist Ihr Beruf?"
        ],
        "ans": 0
      },
      {
        "q": "ما معنى Gehen Sie geradeaus؟",
        "opts": [
          "امشِ إلى الأمام.",
          "انعطف يساراً.",
          "توقف هنا."
        ],
        "ans": 0
      },
      {
        "q": "ما معنى die Schule؟",
        "opts": [
          "المدرسة",
          "المحطة",
          "الصيدلية"
        ],
        "ans": 0
      },
      {
        "q": "ما معنى das Problem؟",
        "opts": [
          "مشكلة",
          "موعد",
          "عطلة"
        ],
        "ans": 0
      },
      {
        "q": "أي سؤال تسأله لمعرفة مكان محطة القطار؟",
        "opts": [
          "Wo ist der Bahnhof?",
          "Wie alt ist der Bahnhof?",
          "Wer ist der Bahnhof?"
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut7",
    "title": "اختبار الوحدة السادسة: الطعام والطلبات والمواعيد",
    "xp": 50,
    "questions": [
      {
        "q": "كيف تقول: أحب شرب الشاي؟",
        "opts": [
          "Ich trinke gern Tee.",
          "Ich bin gern Tee.",
          "Ich wohne gern Tee."
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Du ___ gern Pizza.",
        "opts": [
          "isst",
          "essen",
          "esse"
        ],
        "ans": 0
      },
      {
        "q": "ما معنى Zahlen, bitte؟",
        "opts": [
          "الحساب من فضلك.",
          "الماء من فضلك.",
          "الطاولة من فضلك."
        ],
        "ans": 0
      },
      {
        "q": "أين يأتي مصدر الفعل مع können؟",
        "opts": [
          "في نهاية الجملة",
          "قبل الفاعل",
          "يحذف دائماً"
        ],
        "ans": 0
      },
      {
        "q": "كيف تعتذر وتقول: للأسف لا أستطيع؟",
        "opts": [
          "Leider kann ich nicht.",
          "Leider bin ich nicht.",
          "Ich habe leider nicht."
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut2",
    "title": "اختبار الوحدة السابعة: التسوق والملابس والخدمات",
    "xp": 50,
    "questions": [
      {
        "q": "أكمل: Ich brauche ___ Apfel.",
        "opts": [
          "einen",
          "eine",
          "ein"
        ],
        "ans": 0
      },
      {
        "q": "كيف تسأل عن المقاس؟",
        "opts": [
          "Welche Größe haben Sie?",
          "Wie spät ist es?",
          "Woher kommen Sie?"
        ],
        "ans": 0
      },
      {
        "q": "ما معنى Wie viel kostet das؟",
        "opts": [
          "كم سعر هذا؟",
          "أين هذا؟",
          "متى يفتح؟"
        ],
        "ans": 0
      },
      {
        "q": "كيف تقول: أبحث عن قميص؟",
        "opts": [
          "Ich suche ein Hemd.",
          "Ich suche einen Hemd.",
          "Ich suche eine Hemd."
        ],
        "ans": 0
      },
      {
        "q": "كيف تسأل عن لون؟",
        "opts": [
          "Welche Farbe hat das?",
          "Wie viel Uhr ist es?",
          "Wo wohnen Sie?"
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut9",
    "title": "اختبار الوحدة الثامنة: السكن والتقنية والحياة في البيت",
    "xp": 50,
    "questions": [
      {
        "q": "ما معنى das Schlafzimmer؟",
        "opts": [
          "غرفة النوم",
          "المطبخ",
          "الحديقة"
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Ich schlafe im ___.",
        "opts": [
          "Schlafzimmer",
          "Büro",
          "Bahnhof"
        ],
        "ans": 0
      },
      {
        "q": "ما معنى das Handy؟",
        "opts": [
          "الهاتف المحمول",
          "الكتاب",
          "القطار"
        ],
        "ans": 0
      },
      {
        "q": "أين أستخدم الكمبيوتر؟",
        "opts": [
          "Am Computer.",
          "Im Supermarkt.",
          "Am Bahnhof."
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Das Wohnzimmer ist ___.",
        "opts": [
          "groß",
          "fahren",
          "Montag"
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut10",
    "title": "اختبار الوحدة التاسعة: الصحة والطقس والطبيعة",
    "xp": 50,
    "questions": [
      {
        "q": "كيف تقول: لدي صداع؟",
        "opts": [
          "Ich habe Kopfschmerzen.",
          "Ich bin Kopfschmerzen.",
          "Ich mache Kopfschmerzen."
        ],
        "ans": 0
      },
      {
        "q": "ما معنى Es ist kalt؟",
        "opts": [
          "الجو بارد.",
          "الجو جميل.",
          "إنها تمطر."
        ],
        "ans": 0
      },
      {
        "q": "كيف تسأل عن الطقس؟",
        "opts": [
          "Wie ist das Wetter?",
          "Wie ist dein Name?",
          "Wo ist der Zug?"
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Ich habe ___.",
        "opts": [
          "Fieber",
          "Fahrkarte",
          "Koffer"
        ],
        "ans": 0
      },
      {
        "q": "أين تشتري دواء؟",
        "opts": [
          "In der Apotheke.",
          "Im Kino.",
          "Am Bahnhof."
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut3",
    "title": "اختبار الوحدة العاشرة: السفر والمواصلات والإجازات",
    "xp": 50,
    "questions": [
      {
        "q": "أكمل: Der Zug fährt um zehn Uhr ___.",
        "opts": [
          "ab",
          "auf",
          "an"
        ],
        "ans": 0
      },
      {
        "q": "كيف تطلب تذكرة إلى برلين؟",
        "opts": [
          "Eine Fahrkarte nach Berlin, bitte.",
          "Ein Zimmer nach Berlin.",
          "Ich fahre eine Karte."
        ],
        "ans": 0
      },
      {
        "q": "أين تسأل عن موعد القطار؟",
        "opts": [
          "Am Bahnhof.",
          "In der Küche.",
          "Im Badezimmer."
        ],
        "ans": 0
      },
      {
        "q": "ما معنى das Flugzeug؟",
        "opts": [
          "الطائرة",
          "الحافلة",
          "الدراجة"
        ],
        "ans": 0
      },
      {
        "q": "كيف تسأل عن مكان الفندق؟",
        "opts": [
          "Wo ist das Hotel?",
          "Wie spät ist das Hotel?",
          "Wer ist das Hotel?"
        ],
        "ans": 0
      }
    ]
  },
  {
    "id": "ut8",
    "title": "اختبار الوحدة الحادية عشرة: إتقان A1 والامتحان الدولي",
    "xp": 60,
    "questions": [
      {
        "q": "أكمل: Ich ___ gestern viel gelernt.",
        "opts": [
          "habe",
          "bin",
          "sind"
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Wir ___ nach Berlin gefahren.",
        "opts": [
          "sind",
          "haben",
          "seid"
        ],
        "ans": 0
      },
      {
        "q": "اختر حرف الجر الصحيح: ___ Montag habe ich Zeit.",
        "opts": [
          "Am",
          "Um",
          "Im"
        ],
        "ans": 0
      },
      {
        "q": "اختر حرف الجر الصحيح: ___ Sommer ist es warm.",
        "opts": [
          "Im",
          "Am",
          "Um"
        ],
        "ans": 0
      },
      {
        "q": "أكمل: Ich fahre ___ dem Bus zur Arbeit.",
        "opts": [
          "mit",
          "nach",
          "um"
        ],
        "ans": 0
      }
    ]
  }
];
