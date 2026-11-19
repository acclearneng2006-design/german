// بيانات المنهج واختبارات الوحدات (تُحمَّل قبل app.js)
const CURRICULUM = [
      {
        unit: "الوحدة الأولى: الحروف والنطق (Alphabet & Aussprache)",
        nodes: [
          {
            id: "l16", type: "lesson", icon: "🔤", title: "1. الأبجدية الألمانية وتهجئة الاسم",
            desc: "الأبجدية A–Z، استمع لكل حرف وحده، وتهجئة الاسم", xp: 35,
            grammar: "الألمانية تستخدم 26 حرفاً لاتينياً، ومعها Ä/Ö/Ü و ß.\nاضغط على أي حرف في صفحة الأبجدية لسماع نطقه منفرداً.\nحروف العلة: A, E, I, O, U. تمرّن ببطء ثم اكتب اسمك حرفاً حرفاً.",
            vocab: [
              { de: "Wie schreibt man Ihren Namen?", ar: "كيف يُكتب اسم حضرتك؟" },
              { de: "Mein Name ist Sara.", ar: "اسمي سارة." }
            ],
            quiz: { q: "أي مجموعة تمثل حروف العلة الألمانية؟", opts: ["A, E, I, O, U", "B, C, D, F, G", "K, L, M, N, P"], ans: 0 }
          },
          {
            id: "l17", type: "lesson", icon: "🗣️", title: "2. الحروف الخاصة وأصوات الألمانية",
            desc: "Ä, Ö, Ü, ß، و ch / sch / ei / ie", xp: 35,
            grammar: "Ä صوته قريب من e، Ö و Ü صوتان أماميان لا يوجد لهما مقابل مطابق بالعربية؛ قرّب الشفتين مع نطق إيه/إي. ß يُسمى Eszett ويُنطق مثل ss.\nsch = ش مثل Schule، ei = آي مثل mein، ie = إي طويلة مثل sieben، و ch له صوتان: خفيف في ich وأقوى في Bach.",
            vocab: [
              { de: "Ä ä – Mädchen", ar: "Ä: مثل صوت قريب من e — فتاة" },
              { de: "Ö ö – schön", ar: "Ö: صوت أمامي — جميل" },
              { de: "Ü ü – fünf", ar: "Ü: صوت أمامي — خمسة" },
              { de: "ß – Straße", ar: "ß يُنطق ss — شارع" },
              { de: "Schule", ar: "مدرسة (sch تُنطق ش)" },
              { de: "mein", ar: "لي/خاصتي (ei تُنطق آي)" },
              { de: "sieben", ar: "سبعة (ie تُنطق إي طويلة)" },
              { de: "Ich spreche Deutsch.", ar: "أنا أتحدث الألمانية." }
            ],
            quiz: { q: "كيف يُنطق المقطع sch غالباً؟", opts: ["ش", "ف", "ك"], ans: 0 }
          }
        ]
      },
      {
        unit: "الوحدة الثانية: البداية والتعارف (Erste Kontakte)",
        nodes: [
          {
            id: "l1", type: "lesson", icon: "👋", title: "1. التحية وتقديم النفس",
            desc: "Hallo, Guten Tag, Ich heiße..., Wie geht's?", xp: 20,
            grammar: "للتعريف عن النفس نستخدم: Ich heiße أو Ich bin. للسؤال باحترام نستخدم Sie.",
            vocab: [
              { de: "Hallo", ar: "مرحباً" },
              { de: "Guten Tag", ar: "نهارك سعيد" },
              { de: "Ich heiße Ahmed.", ar: "أنا اسمي أحمد." },
              { de: "Wie heißen Sie?", ar: "ما اسم حضرتك؟" },
              { de: "Wie geht es dir?", ar: "كيف حالك؟" }
            ],
            quiz: { q: "كيف تسأل شخصاً عن اسمه باحترام؟", opts: ["Wie heißen Sie?", "Wie heißt du?", "Woher kommst du?"], ans: 0 }
          },
          {
            id: "l2", type: "lesson", icon: "🌍", title: "2. البلد واللغة والسكن",
            desc: "kommen aus, wohnen in, sprechen", xp: 20,
            grammar: "الفعل دائماً في المركز الثاني: Ich komme aus Ägypten. Ich wohne in Mansoura.",
            vocab: [
              { de: "Woher kommen Sie?", ar: "من أين حضرتك؟" },
              { de: "Ich komme aus Ägypten.", ar: "أنا من مصر." },
              { de: "Wo wohnen Sie?", ar: "أين تسكن حضرتك؟" }
            ],
            quiz: { q: "ما الترجمة الصحيحة لـ: أنا أسكن في مصر؟", opts: ["Ich komme in Ägypten.", "Ich wohne in Ägypten.", "Ich spreche Ägypten."], ans: 1 }
          },
          {
            id: "cp1", type: "checkpoint", icon: "🤖", title: "محطة محادثة AI #1: لقاء تعارف حقيقي",
            desc: "طبق التحية والاسم والبلد والسكن مع المدرب", xp: 40,
            scenarioTitle: "تعارف في كورس اللغة بألمانيا",
            scenarioGoal: "رحب بالمدرب، اذكر اسمك، بلدك، ومكان سكنك.",
            starterDe: "Hallo! Ich bin Lukas. Wie heißt du und woher kommst du?",
            starterAr: "مرحباً! أنا لوكاس. ما اسمك ومن أين أنت؟",
            systemPrompt: "أنت لوكاس، زميل ألماني ودود في كورس A1. حاوره بجمل قصيرة جداً ومناسبة لمستوى A1 فقط."
          },
          {
            id: "l3", type: "lesson", icon: "🔢", title: "3. الأرقام والعمر ورقم الهاتف",
            desc: "0 bis 100, Wie alt bist du?", xp: 20,
            grammar: "للسؤال عن العمر نستخدم فعل sein: Wie alt bist du? -> Ich bin 20 Jahre alt.",
            vocab: [
              { de: "eins", ar: "واحد" },
              { de: "zwei", ar: "اثنان" },
              { de: "drei", ar: "ثلاثة" },
              { de: "vier", ar: "أربعة" },
              { de: "fünf", ar: "خمسة" },
              { de: "sechs", ar: "ستة" },
              { de: "sieben", ar: "سبعة" },
              { de: "acht", ar: "ثمانية" },
              { de: "neun", ar: "تسعة" },
              { de: "zehn", ar: "عشرة" },
              { de: "Wie alt sind Sie?", ar: "كم عمر حضرتك؟" },
              { de: "elf", ar: "أحد عشر" },
              { de: "zwölf", ar: "اثنا عشر" },
              { de: "zwanzig", ar: "عشرون" },
              { de: "dreißig", ar: "ثلاثون" },
              { de: "hundert", ar: "مئة" },
              { de: "Meine Telefonnummer ist null eins sieben sechs.", ar: "رقم هاتفي صفر واحد سبعة ستة." }
            ],
            quiz: { q: "أي فعل نستخدمه للتعبير عن العمر؟", opts: ["haben", "sein", "wohnen"], ans: 1 }
          },
          {
            id: "l4", type: "lesson", icon: "☕", title: "4. في المقهى والطلبات",
            desc: "Ich möchte..., Kaffee, Wasser", xp: 20,
            grammar: "للطلب المهذب نستخدم: Ich möchte einen Kaffee, bitte.",
            vocab: [
              { de: "Ich möchte einen Kaffee, bitte.", ar: "أود فنجان قهوة من فضلك." },
              { de: "Ein Wasser, bitte.", ar: "مياه من فضلك." },
              { de: "Was kostet das?", ar: "كم يكلف هذا؟" }
            ],
            quiz: { q: "كيف تطلب قهوة بأسلوب مهذب؟", opts: ["Ich möchte einen Kaffee, bitte.", "Ich bin Kaffee.", "Woher kommt Kaffee?"], ans: 0 }
          },
          {
            id: "cp2", type: "checkpoint", icon: "🤖", title: "محطة محادثة AI #2: في المقهى والحساب",
            desc: "اطلب مشروبك واسأل عن السعر والأرقام", xp: 45,
            scenarioTitle: "نادل في مقهى ببرلين",
            scenarioGoal: "اطلب مشروبين واسأل عن الحساب.",
            starterDe: "Guten Tag! Was möchten Sie bestellen?",
            starterAr: "نهارك سعيد! ماذا تود أن تطلب؟",
            systemPrompt: "أنت نادل في مقهى. خذ طلب الطالب واذكر الأسعار بأرقام واضحة وبسيطة."
          }
        ]
      },
      {
        unit: "الوحدة الثالثة: قواعد البداية خطوة خطوة (Grammatik A1)",
        nodes: [
          {
            id: "l18", type: "lesson", icon: "🧩", title: "1. الضمائر وتصريف sein و haben",
            desc: "ich, du, er/sie/es, wir, ihr, sie/Sie", xp: 35,
            grammar: "ضمائر الفاعل: ich أنا، du أنت، er هو، sie هي، es هو/هي لغير العاقل، wir نحن، ihr أنتم، sie هم، Sie حضرتك/حضراتكم.\nsein (يكون): ich bin، du bist، er/sie/es ist، wir sind، ihr seid، sie/Sie sind.\nhaben (يملك/لديه): ich habe، du hast، er/sie/es hat، wir haben، ihr habt، sie/Sie haben.",
            vocab: [
              { de: "Ich bin müde.", ar: "أنا متعب." },
              { de: "Du bist freundlich.", ar: "أنت ودود." },
              { de: "Wir sind hier.", ar: "نحن هنا." },
              { de: "Ich habe Zeit.", ar: "لدي وقت." },
              { de: "Sie hat einen Termin.", ar: "لديها موعد." }
            ],
            quiz: { q: "أكمل: Wir ___ in Berlin.", opts: ["sind", "bin", "seid"], ans: 0 }
          },
          {
            id: "l19", type: "lesson", icon: "🧱", title: "2. ترتيب الجملة وتصريف الأفعال",
            desc: "الفعل في المركز الثاني والجمل البسيطة", xp: 35,
            grammar: "في الجملة الخبرية يأتي الفعل المصرف عادةً في المركز الثاني: Ich lerne heute Deutsch. إذا بدأت بظرف، يبقى الفعل ثانياً: Heute lerne ich Deutsch.\nتصريف lernen: ich lerne، du lernst، er lernt، wir lernen، ihr lernt، sie lernen.",
            vocab: [
              { de: "Ich lerne Deutsch.", ar: "أنا أتعلم الألمانية." },
              { de: "Heute arbeitet Ali.", ar: "علي يعمل اليوم." },
              { de: "Wir wohnen in Kairo.", ar: "نحن نسكن في القاهرة." },
              { de: "Ich kaufe im Supermarkt ein.", ar: "أتسوق في السوبرماركت." }
            ],
            quiz: { q: "أين يأتي الفعل المصرف غالباً في الجملة الخبرية؟", opts: ["المركز الثاني", "آخر الجملة دائماً", "أول الجملة دائماً"], ans: 0 }
          },
          {
            id: "l20", type: "lesson", icon: "❓", title: "3. تكوين الأسئلة: W والأسئلة بنعم أو لا",
            desc: "wer, was, wo, woher, wohin, wann, wie", xp: 35,
            grammar: "أسئلة W تبدأ بأداة السؤال ثم الفعل ثم الفاعل: Wo wohnen Sie? / Wann kommt der Bus?\nأما سؤال نعم/لا فيبدأ بالفعل: Sprechen Sie Deutsch?",
            vocab: [
              { de: "Wer? Was? Wo?", ar: "مَن؟ ماذا؟ أين؟" },
              { de: "Woher kommen Sie?", ar: "من أين حضرتك؟" },
              { de: "Wohin fahren Sie?", ar: "إلى أين تسافر؟" },
              { de: "Wann beginnt der Film?", ar: "متى يبدأ الفيلم؟" },
              { de: "Haben Sie eine Frage?", ar: "هل لديك سؤال؟" }
            ],
            quiz: { q: "أي سؤال يبدأ بالفعل وإجابته غالباً نعم أو لا؟", opts: ["Sprechen Sie Deutsch?", "Wo wohnen Sie?", "Wie heißen Sie?"], ans: 0 }
          },
          {
            id: "l21", type: "lesson", icon: "🚫", title: "4. النفي بـ nicht و kein",
            desc: "كيف تقول لا أو ليس عندي", xp: 35,
            grammar: "نستخدم kein قبل الاسم النكرة أو الاسم بلا أداة: Ich habe kein Auto.\nنستخدم nicht لنفي فعل أو صفة أو اسم معرف: Ich komme heute nicht. / Das Essen ist nicht teuer.",
            vocab: [
              { de: "Ich spreche nicht schnell.", ar: "أنا لا أتحدث بسرعة." },
              { de: "Ich habe kein Auto.", ar: "ليس لدي سيارة." },
              { de: "Wir haben keine Kinder.", ar: "ليس لدينا أطفال." },
              { de: "Das Essen ist nicht teuer.", ar: "الطعام ليس غاليًا." }
            ],
            quiz: { q: "أكمل: Ich habe ___ Schwester.", opts: ["keine", "nicht", "kein"], ans: 0 }
          },
          {
            id: "l22", type: "lesson", icon: "📦", title: "5. أدوات التعريف والنكرة والجمع",
            desc: "der, die, das / ein, eine / kein", xp: 35,
            grammar: "der مذكر، die مؤنث، das محايد. في المفعول المباشر Akkusativ يتغير المذكر: der/ein يصبح den/einen، بينما المؤنث والمحايد لا يتغيران.",
            vocab: [
              { de: "der Mann", ar: "الرجل" },
              { de: "die Männer", ar: "الرجال" },
              { de: "die Frau", ar: "المرأة" },
              { de: "die Frauen", ar: "النساء" },
              { de: "das Kind", ar: "الطفل" },
              { de: "die Kinder", ar: "الأطفال" },
              { de: "Ich kaufe einen Apfel.", ar: "أشتري تفاحة." },
              { de: "Ich sehe eine Tasche.", ar: "أرى حقيبة." }
            ],
            quiz: { q: "اختر الصيغة الصحيحة: Ich kaufe ___ Stuhl. (der Stuhl)", opts: ["einen", "eine", "ein"], ans: 0 }
          },
          {
            id: "cp_u3", type: "checkpoint", icon: "🤖", title: "محطة محادثة AI: أسئلة ونفي وإجابات سريعة",
            desc: "تدرّب على الأسئلة بـ W والنفي بـ kein و nicht مع المدرب", xp: 45,
            scenarioTitle: "حوار سريع لتثبيت القواعد",
            scenarioGoal: "جاوب على أسئلة المدرب واستخدم kein و nicht في جمل بسيطة.",
            starterDe: "Hallo! Hast du ein Auto oder ein Fahrrad? Und sprichst du schon gut Deutsch?",
            starterAr: "مرحباً! هل لديك سيارة أم دراجة؟ وهل تتحدث الألمانية جيداً بالفعل؟",
            systemPrompt: "أنت مدرب ألماني لمستوى A1. اسأل الطالب أسئلة بسيطة بنعم/لا وأسئلة W ليتدرب على استخدام kein و nicht وأدوات النكرة."
          }
        ]
      },
      {
        unit: "الوحدة الرابعة: الأسرة والروتين والعمل والمدينة (Familie & Alltag)",
        nodes: [
          {
            id: "l11", type: "lesson", icon: "👨‍👩‍👧", title: "1. الأسرة والأصدقاء",
            desc: "Familie, Geschwister, verheiratet, allein", xp: 30,
            grammar: "للتحدث عن الملكية نستخدم mein / meine حسب الاسم: mein Bruder (أخي)، meine Schwester (أختي).",
            vocab: [
              { de: "Das ist meine Familie.", ar: "هذه عائلتي." },
              { de: "Ich habe einen Bruder und eine Schwester.", ar: "لدي أخ وأخت." },
              { de: "Bist du verheiratet?", ar: "هل أنت متزوج؟" },
              { de: "Meine Eltern wohnen in Ägypten.", ar: "والداي يسكنان في مصر." }
            ],
            quiz: { q: "اختر الجملة الصحيحة: لدي أخت.", opts: ["Ich habe eine Schwester.", "Ich bin eine Schwester.", "Ich wohne Schwester."], ans: 0 }
          },
          {
            id: "l12", type: "lesson", icon: "⏰", title: "2. الوقت وأيام الأسبوع",
            desc: "Uhrzeit, Wochentage, Termine", xp: 30,
            grammar: "للسؤال عن الوقت نقول: Wie spät ist es? وللمواعيد نستخدم um مع الساعة: Der Kurs beginnt um neun Uhr.",
            vocab: [
              { de: "Wie spät ist es?", ar: "كم الساعة؟" },
              { de: "Es ist halb acht.", ar: "الساعة السابعة والنصف." },
              { de: "Am Montag habe ich einen Deutschkurs.", ar: "لدي درس ألماني يوم الاثنين." },
              { de: "Der Termin ist um 10 Uhr.", ar: "الموعد الساعة العاشرة." }
            ],
            quiz: { q: "كيف تقول: الموعد الساعة الثالثة؟", opts: ["Der Termin ist um drei Uhr.", "Der Termin ist drei Jahre.", "Ich bin um drei Uhr."], ans: 0 }
          },
          {
            id: "l13", type: "lesson", icon: "🏃", title: "3. الروتين اليومي",
            desc: "aufstehen, arbeiten, frühstücken, schlafen", xp: 30,
            grammar: "بعض الأفعال تنفصل في الجملة، مثل aufstehen: Ich stehe um sieben Uhr auf. البادئة تأتي في آخر الجملة.",
            vocab: [
              { de: "Ich stehe um sieben Uhr auf.", ar: "أستيقظ الساعة السابعة." },
              { de: "Dann frühstücke ich.", ar: "بعد ذلك أتناول الإفطار." },
              { de: "Ich gehe um acht Uhr zur Arbeit.", ar: "أذهب إلى العمل الساعة الثامنة." },
              { de: "Am Abend sehe ich fern.", ar: "أشاهد التلفاز في المساء." }
            ],
            quiz: { q: "أين تأتي بادئة الفعل aufstehen؟", opts: ["في نهاية الجملة: Ich stehe früh auf.", "قبل الفاعل دائماً.", "تحذف من الجملة."], ans: 0 }
          },
          {
            id: "l14", type: "lesson", icon: "💼", title: "4. العمل والمهن",
            desc: "Beruf, Arbeitsplatz, arbeiten, suchen", xp: 30,
            grammar: "للسؤال عن المهنة نقول: Was sind Sie von Beruf? وللإجابة: Ich bin Ingenieur / Programmierer.",
            vocab: [
              { de: "Was sind Sie von Beruf?", ar: "ما مهنتك؟" },
              { de: "Ich bin Ingenieur.", ar: "أنا مهندس." },
              { de: "Wo arbeiten Sie?", ar: "أين تعمل؟" },
              { de: "Ich suche eine Arbeit.", ar: "أبحث عن عمل." }
            ],
            quiz: { q: "كيف تسأل شخصاً عن مهنته؟", opts: ["Was sind Sie von Beruf?", "Wie alt sind Sie?", "Wo wohnen Sie?"], ans: 0 }
          },
          {
            id: "l15", type: "lesson", icon: "🧭", title: "5. الاتجاهات والأماكن في المدينة",
            desc: "links, rechts, geradeaus, neben", xp: 30,
            grammar: "للسؤال عن مكان نقول: Wo ist ...? ولإعطاء اتجاهات بسيطة: Gehen Sie geradeaus, dann links.",
            vocab: [
              { de: "Entschuldigung, wo ist der Bahnhof?", ar: "عذراً، أين محطة القطار؟" },
              { de: "Gehen Sie geradeaus.", ar: "امشِ إلى الأمام." },
              { de: "Dann links oder rechts.", ar: "ثم يساراً أو يميناً." },
              { de: "Die Apotheke ist neben dem Supermarkt.", ar: "الصيدلية بجوار السوبرماركت." }
            ],
            quiz: { q: "ما معنى geradeaus؟", opts: ["إلى الأمام", "إلى اليمين", "إلى الخلف"], ans: 0 }
          },
          {
            id: "cp_u4", type: "checkpoint", icon: "🤖", title: "محطة محادثة AI: وصف الطريق والروتين اليومي",
            desc: "اسأل عن مكان في المدينة واحكِ عن يومك ومهنتك", xp: 50,
            scenarioTitle: "سائح يسألك عن الطريق في برلين",
            scenarioGoal: "صف الطريق لمحطة القطار وتحدث باختصار عن عملك ووقتك.",
            starterDe: "Entschuldigung! Ich suche den Bahnhof. Können Sie mir helfen?",
            starterAr: "عذراً! أبحث عن محطة القطار. هل يمكنك مساعدتي؟",
            systemPrompt: "أنت شخص في الشارع بألمانيا تسأل الطالب عن الاتجاهات (geradeaus, links, rechts) ثم تتبادل معه حديثاً بسيطاً عن العمل والروتين اليومي بمستوى A1."
          }
        ]
      },
      {
        unit: "الوحدة الخامسة: الطعام والطلبات والمواعيد (Essen & Termine)",
        nodes: [
          {
            id: "l23", type: "lesson", icon: "🍽️", title: "1. الطعام والوجبات والتفضيلات",
            desc: "الأطعمة، الوجبات، mögen و essen", xp: 35,
            grammar: "mögen للتفضيل: Ich mag Tee. ومع فعل نستخدم gern: Ich esse gern Reis.\nessen فعل غير منتظم: ich esse، du isst، er isst، wir essen.",
            vocab: [
              { de: "Was essen Sie gern?", ar: "ماذا تحب أن تأكل؟" },
              { de: "Ich esse gern Reis und Gemüse.", ar: "أحب أكل الأرز والخضار." },
              { de: "Ich trinke keinen Kaffee.", ar: "لا أشرب القهوة." },
              { de: "Die Speisekarte, bitte.", ar: "قائمة الطعام من فضلك." },
              { de: "Zahlen, bitte!", ar: "الحساب من فضلك!" }
            ],
            quiz: { q: "كيف تقول: أحب شرب الشاي؟", opts: ["Ich trinke gern Tee.", "Ich bin gern Tee.", "Ich wohne gern Tee."], ans: 0 }
          },
          {
            id: "l24", type: "lesson", icon: "📅", title: "2. المواعيد والدعوات والاعتذار",
            desc: "Termin, einladen, können, müssen", xp: 35,
            grammar: "können (يستطيع) و müssen (يجب) يأتيان مصرفين في المركز الثاني، والفعل الآخر في المصدر آخر الجملة: Ich kann am Freitag kommen.",
            vocab: [
              { de: "Hast du am Freitag Zeit?", ar: "هل لديك وقت يوم الجمعة؟" },
              { de: "Wir können zusammen lernen.", ar: "يمكننا أن نتعلم معاً." },
              { de: "Ich muss heute arbeiten.", ar: "يجب أن أعمل اليوم." },
              { de: "Leider kann ich nicht.", ar: "للأسف لا أستطيع." },
              { de: "Bis morgen!", ar: "أراك غداً!" }
            ],
            quiz: { q: "أين يأتي الفعل الثاني في جملة modal؟", opts: ["مصدر في نهاية الجملة", "مصرفاً قبل الفاعل", "يحذف دائماً"], ans: 0 }
          },
          {
            id: "cp_u5", type: "checkpoint", icon: "🤖", title: "محطة محادثة AI: دعوة للعشاء وتحديد موعد",
            desc: "اتفق مع صديقك على موعد للعشاء واعتذر أو اقترح وقتاً بديلاً", xp: 50,
            scenarioTitle: "ترتيب لقاء للعشاء في المطعم",
            scenarioGoal: "استخدم können و müssen و gern لتحديد يوم وساعة اللقاء.",
            starterDe: "Hallo! Wollen wir am Freitag zusammen essen gehen? Was isst du gern?",
            starterAr: "مرحباً! هل نذهب لتناول الطعام معاً يوم الجمعة؟ ماذا تحب أن تأكل؟",
            systemPrompt: "أنت صديق ألماني تدعو الطالب لتناول الطعام. ناقش معه الأطعمة المفضلة (gern) والأيام والمواعيد باستخدام können و müssen."
          }
        ]
      },
      {
        unit: "الوحدة السادسة: التسوق والحياة اليومية (Einkaufen & Alltag)",
        nodes: [
          {
            id: "l5", type: "lesson", icon: "🛒", title: "1. التسوق في السوبرماركت",
            desc: "brauchen, haben, Lebensmittel, Obst", xp: 25,
            grammar: "أداة النكرة في حالة المفعول (Akkusativ): Ich brauche einen Apfel (مذكر), eine Banane (مؤنث), ein Brot (محايد).",
            vocab: [
              { de: "Ich brauche Milch und Brot.", ar: "أحتاج إلى حليب وخبز." },
              { de: "Was kostet das Kilo Äpfel?", ar: "كم سعر كيلو التفاح؟" },
              { de: "Gibt es Tomaten?", ar: "هل توجد طماطم؟" }
            ],
            quiz: { q: "ما أداة المذكر (Akkusativ) لكلمة Apfel بعد brauche؟", opts: ["einen", "eine", "ein"], ans: 0 }
          },
          {
            id: "l6", type: "lesson", icon: "👕", title: "2. الملابس والمقاسات والألوان",
            desc: "Hemd, Hose, Größe, Farbe, kosten", xp: 25,
            grammar: "السؤال عن السعر والرأي: Wie gefällt dir das Hemd? Es ist zu klein / perfekt.",
            vocab: [
              { de: "Ich suche eine Hose.", ar: "أنا أبحث عن بنطلون." },
              { de: "Welche Größe haben Sie?", ar: "ما هو مقاس حضرتك؟" },
              { de: "Das T-Shirt kostet 15 Euro.", ar: "هذا القميص يكلف 15 يورو." },
              { de: "rot", ar: "أحمر" },
              { de: "blau", ar: "أزرق" },
              { de: "grün", ar: "أخضر" },
              { de: "gelb", ar: "أصفر" },
              { de: "schwarz", ar: "أسود" },
              { de: "weiß", ar: "أبيض" },
              { de: "Die Jacke ist blau.", ar: "الجاكيت زرقاء." }
            ],
            quiz: { q: "كيف تسأل عن مقاس الملابس؟", opts: ["Welche Größe haben Sie?", "Wie spät ist es?", "Woher kommst du?"], ans: 0 }
          },
          {
            id: "cp3", type: "checkpoint", icon: "🤖", title: "محطة محادثة AI #3: في متجر الملابس",
            desc: "ابحث عن قميص أو بنطلون واسأل عن المقاس والسعر", xp: 50,
            scenarioTitle: "مساعد متجر ملابس",
            scenarioGoal: "اسأل عن بنطلون بالمقاس والسعر المناسب.",
            starterDe: "Guten Tag! Kann ich Ihnen helfen?",
            starterAr: "نهارك سعيد! هل يمكنني مساعدتك؟",
            systemPrompt: "أنت بائع في متجر ملابس. ساعد الطالب ليسأل عن المقاسات والأسعار بجمل A1."
          },
          {
            id: "l7", type: "lesson", icon: "🏠", title: "3. الشقة والأثاث (Wohnen)",
            desc: "Zimmer, Küche, Bad, Miete, Möbel", xp: 25,
            grammar: "صفات المسكن ووصف الغرف: Die Wohnung ist groß und hell (الشقة كبيرة ومضيئة).",
            vocab: [
              { de: "Ich suche eine 2-Zimmer-Wohnung.", ar: "أبحث عن شقة غرفتين." },
              { de: "Wie hoch ist die Miete?", ar: "كم تبلغ قيمة الإيجار؟" },
              { de: "Das Zimmer hat ein Bett und einen Tisch.", ar: "الغرفة بها سرير وطاولة." }
            ],
            quiz: { q: "ما ترجمة: شقة غرفتين؟", opts: ["2-Zimmer-Wohnung", "Kaffee", "Familie"], ans: 0 }
          },
          {
            id: "cp4", type: "checkpoint", icon: "🏆", title: "محطة محادثة AI #4: التحدي الشامل للسكن",
            desc: "حوار متكامل حول التسوق وشراء مستلزمات الشقة", xp: 60,
            scenarioTitle: "البحث عن شقة وشراء أثاث",
            scenarioGoal: "تحدث مع صاحب الشقة أو بائع الأثاث عن التفاصيل.",
            starterDe: "Hallo! Sie suchen eine Wohnung? Erzählen Sie mir mehr.",
            starterAr: "مرحباً! أنت تبحث عن شقة؟ اخبرني بالمزيد.",
            systemPrompt: "أنت مؤجر شقة أو بائع أثاث. حاور الطالب حول الغرف والإيجار والمقاسات."
          }
        ]
      },
      {
        unit: "الوحدة السابعة: الصحة، السفر والطقس (Gesundheit & Reisen)",
        nodes: [
          {
            id: "l8", type: "lesson", icon: "🩺", title: "1. الجسم والصحة عند الطبيب",
            desc: "Kopf, Bauch, Arzt, Schmerzen, Krank", xp: 30,
            grammar: "التعبير عن الألم: Ich habe Kopfschmerzen (لدي صداع). Mein Arm tut weh (ذراعي يؤلمني).",
            vocab: [
              { de: "Ich bin krank.", ar: "أنا مريض." },
              { de: "Wo tut es weh?", ar: "أين مكان الألم؟" },
              { de: "Ich brauche einen Termin beim Arzt.", ar: "أحتاج موعداً عند الطبيب." }
            ],
            quiz: { q: "كيف تقول: لدي صداع؟", opts: ["Ich habe Kopfschmerzen.", "Ich bin Kaffee.", "Ich wohne in Berlin."], ans: 0 }
          },
          {
            id: "l9", type: "lesson", icon: "☀️", title: "2. الطقس وفصول السنة",
            desc: "Sonne, Regen, kalt, warm, Grad", xp: 30,
            grammar: "التعبير عن الطقس: Es ist kalt (الجو بارد). Heute regnet es (اليوم تمطر).",
            vocab: [
              { de: "Wie ist das Wetter heute?", ar: "كيف حال الطقس اليوم؟" },
              { de: "Es ist sonnig und 25 Grad.", ar: "الجو مشمس و 25 درجة." },
              { de: "Im Winter ist es kalt.", ar: "في الشتاء يكون الجو بارداً." }
            ],
            quiz: { q: "كيف تسأل عن الطقس؟", opts: ["Wie ist das Wetter heute?", "Wie spät ist es?", "Woher kommst du?"], ans: 0 }
          },
          {
            id: "cp5", type: "checkpoint", icon: "🤖", title: "محطة محادثة AI #5: حجز موعد عيادة",
            desc: "تحدث مع موظف العيادة عن حالتك الصحية وموعد الزيارة", xp: 55,
            scenarioTitle: "حجز موعد عيادة",
            scenarioGoal: "أخبر موظف الاستقبال بمكان الألم واتفق على موعد.",
            starterDe: "Guten Tag! Praxis Dr. Müller. Was kann ich für Sie tun?",
            starterAr: "نهارك سعيد! عيادة دكتور مولر. ماذا يمكنني أن أقدم لك؟",
            systemPrompt: "أنت موظف استقبال عيادة. ساعد المريض في تحديد موعد وسؤاله عن حالته."
          },
          {
            id: "l10", type: "lesson", icon: "🚆", title: "3. السفر والمحطة والمواصلات",
            desc: "Zug, Fahrkarte, Bahnhof, abfahren", xp: 30,
            grammar: "استخدام الأفعال المنفصلة (Trennbare Verben): Der Zug fährt um 10 Uhr ab (القطار يتحرك الساعة 10).",
            vocab: [
              { de: "Eine Fahrkarte nach Berlin, bitte.", ar: "تذكرة إلى برلين من فضلك." },
              { de: "Wann fährt der nächste Zug?", ar: "متى يتحرك القطار القادم؟" },
              { de: "Gleis 3.", ar: "رصيف رقم 3." }
            ],
            quiz: { q: "ما الفعل المنفصل المناسب لحركة القطار؟", opts: ["abfahren", "wohnen", "sprechen"], ans: 0 }
          },
          {
            id: "cp6", type: "checkpoint", icon: "🏆", title: "محطة محادثة AI #6: في محطة القطار",
            desc: "حوار شامل في محطة القطار والسفر لمدينة جديدة", xp: 65,
            scenarioTitle: "شراء تذكرة وسؤال عن المواعيد في المحطة",
            scenarioGoal: "احجز تذكرة قطار واستفسر عن الرصيف ووقت الرحلة.",
            starterDe: "Guten Tag! Wohin möchten Sie reisen?",
            starterAr: "نهارك سعيد! إلى أين تود أن تسافر؟",
            systemPrompt: "أنت موظف محطة القطار. ساعد المسافر في حجز التذكرة، معرفة الرصيف، ووقت القيام بدقة لمستوى A1."
          }
        ]
      },
      {
        unit: "الوحدة الثامنة: إتقان A1 والامتحان الدولي (Perfekt, Lesen & Schreiben)",
        nodes: [
          {
            id: "l25", type: "lesson", icon: "⏳", title: "1. الماضي المركب المستخدم في المحادثة (Perfekt)",
            desc: "haben / sein + Partizip II (ge-...-t / ge-...-en)", xp: 40,
            grammar: "للتحدث عن الماضي في المحادثات نستخدم Perfekt: الفعل المساعد (haben أو sein) في المركز الثاني، والتصريف الثالث (Partizip II) في آخر الجملة.\nنستخدم sein مع أفعال الحركة وتغيير المكان (gehen, fahren, fliegen): Ich bin nach Berlin gefahren.\nونستخدم haben مع باقي الأفعال: Ich habe Deutsch gelernt.",
            vocab: [
              { de: "Ich habe gestern Deutsch gelernt.", ar: "تعلمت الألمانية بالأمس." },
              { de: "Wir haben Pizza gegessen.", ar: "أكلنا بيتزا." },
              { de: "Er ist nach München gefahren.", ar: "هو سافر إلى ميونخ." },
              { de: "Ich bin um 8 Uhr aufgestanden.", ar: "استيقظت الساعة الثامنة." },
              { de: "Was hast du am Wochenende gemacht?", ar: "ماذا فعلت في عطلة نهاية الأسبوع؟" }
            ],
            quiz: { q: "أي فعل مساعد نستخدمه مع فعل fahren (يسافر) في الماضي؟", opts: ["sein (bin gefahren)", "haben (habe gefahren)", "werden"], ans: 0 }
          },
          {
            id: "l26", type: "lesson", icon: "📍", title: "2. حروف الجر الزمنية والمكانية",
            desc: "am, um, im / in, nach, zu, bei, mit", xp: 40,
            grammar: "حروف الجر الزمنية: am للأيام وأجزاء اليوم (am Montag, am Abend)، um للساعة (um 9 Uhr)، im للشهور وفصول السنة (im Sommer, im Mai).\nحروف المكان والحركة: nach للمدن والدول بدون أداة (nach Ägypten, nach Berlin)، in للأماكن المغلقة (ins Kino / im Supermarkt)، mit لوسائل المواصلات (mit dem Bus).",
            vocab: [
              { de: "Am Montag beginnt der Kurs um 9 Uhr.", ar: "يوم الاثنين يبدأ الكورس الساعة 9." },
              { de: "Im Sommer fahre ich nach Deutschland.", ar: "في الصيف أسافر إلى ألمانيا." },
              { de: "Ich fahre mit dem Zug zur Arbeit.", ar: "أذهب بالقطار إلى العمل." },
              { de: "Wir treffen uns im Café.", ar: "نلتقي في المقهى." }
            ],
            quiz: { q: "اختر حرف الجر الصحيح: Der Unterricht beginnt ___ 8 Uhr.", opts: ["um", "am", "im"], ans: 0 }
          },
          {
            id: "l29", type: "lesson", icon: "📢", title: "3. الأمر والطلب المهذب (Imperativ)",
            desc: "Kommen Sie! / Komm! / Sprich langsam!", xp: 40,
            grammar: "مع Sie: المصدر ثم Sie: Kommen Sie bitte! / Gehen Sie geradeaus.\nمع du: جذر الفعل بدون en: Komm! / Warte! وبعض الأفعال تتغير: sprechen → Sprich! ، lesen → Lies!\nمع ihr: Kommt! / Wartet!",
            vocab: [
              { de: "Kommen Sie bitte herein.", ar: "تفضل بالدخول من فضلك." },
              { de: "Sprechen Sie bitte langsamer.", ar: "تكلم ببطء أكثر من فضلك." },
              { de: "Warte bitte kurz!", ar: "انتظر قليلاً من فضلك!" },
              { de: "Lies den Text laut!", ar: "اقرأ النص بصوت عالٍ!" }
            ],
            quiz: { q: "كيف تطلب من شخص (Sie) أن يتكلم ببطء؟", opts: ["Sprechen Sie bitte langsam.", "Sprichst Sie bitte langsam.", "Sprecht Sie langsam."], ans: 0 }
          },
          {
            id: "l30", type: "lesson", icon: "🗓️", title: "4. الشهور والتواريخ",
            desc: "Januar bis Dezember, am 5. Mai", xp: 35,
            grammar: "للشهر نستخدم im: im Mai. لتاريخ محدد نستخدم am + رقم ترتيبي: am 5. Mai (am fünften Mai).\nللسؤال: Wann hast du Geburtstag؟ أو Der Wievielte ist heute؟",
            vocab: [
              { de: "Januar", ar: "يناير" },
              { de: "Februar", ar: "فبراير" },
              { de: "März", ar: "مارس" },
              { de: "April", ar: "أبريل" },
              { de: "Mai", ar: "مايو" },
              { de: "Juni", ar: "يونيو" },
              { de: "Juli", ar: "يوليو" },
              { de: "August", ar: "أغسطس" },
              { de: "September", ar: "سبتمبر" },
              { de: "Oktober", ar: "أكتوبر" },
              { de: "November", ar: "نوفمبر" },
              { de: "Dezember", ar: "ديسمبر" }
              { de: "Mein Geburtstag ist am 5. Mai.", ar: "عيد ميلادي يوم 5 مايو." },
              { de: "Wann hast du Geburtstag?", ar: "متى عيد ميلادك؟" }
            ],
            quiz: { q: "أكمل: Mein Geburtstag ist ___ 5. Mai.", opts: ["am", "um", "im"], ans: 0 }
          },
          {
            id: "l31", type: "reading", listen: true, icon: "🎧", title: "5. تدريب الاستماع (Hören: Richtig / Falsch)",
            desc: "اسمع مقاطع قصيرة بدون نص وجاوب صح أم خطأ", xp: 50,
            passages: [
              { title: "مقطع 1: رسالة من العيادة", text: "Guten Tag, hier ist die Praxis Dr. Weber. Ihr Termin ist am Dienstag um halb zehn.", statement: "Der Termin ist um 9:30 Uhr.", isTrue: true, explanation: "صحيح — halb zehn تعني التاسعة والنصف." },
              { title: "مقطع 2: في السوبرماركت", text: "Das Brot kostet zwei Euro fünfzig und die Milch ein Euro zwanzig.", statement: "Die Milch kostet 2,50 Euro.", isTrue: false, explanation: "خطأ — الخبز 2,50 يورو والحليب 1,20 يورو." },
              { title: "مقطع 3: تعريف", text: "Ich heiße Lara, ich bin zwanzig Jahre alt und ich wohne in Wien.", statement: "Lara wohnt in Berlin.", isTrue: false, explanation: "خطأ — لارا تسكن في فيينا (Wien)." }
            ]
          },
          {
            id: "l27", type: "reading", icon: "📰", title: "6. تدريب القراءة والفهم (Lesen: Richtig / Falsch)",
            desc: "اقرأ رسائل ولافتات وإعلانات حقيقية وجاوب صح أم خطأ", xp: 50,
            passages: [
              {
                title: "نص 1: رسالة قصيرة (SMS)",
                text: "Hallo Sara! Ich bin noch im Büro und muss bis 18:30 Uhr arbeiten. Wir können uns heute leider nicht um 18:00 Uhr im Café treffen. Geht es um 19:15 Uhr? Liebe Grüße, Mona",
                statement: "Mona und Sara treffen sich heute um 18:00 Uhr.",
                isTrue: false,
                explanation: "خطأ (Falsch) — منى تعمل حتى 18:30 وتقترح اللقاء الساعة 19:15 بدلاً من 18:00."
              },
              {
                title: "نص 2: لافتة في محطة القطار (Durchsage)",
                text: "Achtung am Gleis 4: Der ICE 508 nach Hamburg fährt heute nicht um 14:10 Uhr, sondern erst um 14:35 Uhr ab. Wir bitten um Entschuldigung.",
                statement: "Der Zug nach Hamburg hat 25 Minuten Verspätung.",
                isTrue: true,
                explanation: "صحيح (Richtig) — موعد القطار الأصلي 14:10 وتأخر إلى 14:35 أي 25 دقيقة."
              },
              {
                title: "نص 3: إعلان شقة (Wohnungsanzeige)",
                text: "Schöne 2-Zimmer-Wohnung im Zentrum von Köln zu vermieten. Die Miete ist 650 Euro plus 120 Euro Nebenkosten. Keine Haustiere erlaubt. Tel: 0176-443219",
                statement: "In dieser Wohnung darf man einen Hund haben.",
                isTrue: false,
                explanation: "خطأ (Falsch) — الإعلان يذكر بوضوح: Keine Haustiere erlaubt (غير مسموح بالحيوانات الأليفة)."
              }
            ]
          },
          {
            id: "l28", type: "writing_exam", icon: "✍️", title: "7. تدريب الكتابة الرسمي (Schreiben: Formular & E-Mail)",
            desc: "املأ استمارة بيانات واكتب إيميل امتحان A1 بتقييم AI", xp: 60,
            formStory: "اسم صديقك Karim Hassan، عمره 24 سنة، يسكن في شارع Gartenstraße 12 في مدينة Bonn (الرمز البريدي 53111)، وهو من مصر (Ägypten) ويريد حجز كورس لغة ألمانية مسائي (Abendkurs) ويدفع نقداً (Bar).",
            formFields: [
              { key: "nachname", label: "Familienname (اسم العائلة)", expected: "hassan" },
              { key: "vorname", label: "Vorname (الاسم الأول)", expected: "karim" },
              { key: "plz_ort", label: "PLZ / Wohnort (الرمز البريدي والمدينة)", expected: "53111 bonn" },
              { key: "land", label: "Heimatland (البلد)", expected: "ägypten" },
              { key: "kurs", label: "Kurszeit (وقت الكورس: Vormittag / Abend)", expected: "abend" }
            ],
            emailTask: {
              promptAr: "اكتب إيميلاً قصيراً (حوالي 30 كلمة) لصديقك الألماني (Tim) تعتذر فيه عن عدم الحضور لحفل عيد ميلاده يوم السبت:",
              bullets: [
                "اشكره على الدعوة (Danke für die Einladung).",
                "اعتذر واشرح السبب (لأنك مريض أو لديك عمل).",
                "اقترح يوماً آخر للقاء في الأسبوع القادم."
              ]
            }
          },
          {
            id: "cp7", type: "checkpoint", icon: "🎓", title: "محطة محادثة AI #7: المقابلة الشفوية لامتحان A1",
            desc: "محاكاة كاملة للجزء الشفوي (Sprechen) في امتحان Goethe A1", xp: 80,
            scenarioTitle: "لجنة امتحان التحدث A1",
            scenarioGoal: "قدّم نفسك (الاسم، العمر، البلد، السكن، المهنة، الهوايات) ثم اسأل الممتحن سؤالاً.",
            starterDe: "Guten Tag und herzlich willkommen zur Prüfung Start Deutsch 1! Bitte stellen Sie sich kurz vor.",
            starterAr: "نهارك سعيد وأهلاً بك في امتحان A1! من فضلك قدّم نفسك باختصار.",
            systemPrompt: "أنت ممتحن ودود في امتحان Goethe Start Deutsch 1. اطلب من الطالب تقديم نفسه، ثم اسأله تهجئة اسمه أو رقم هاتفه، ثم اطلب منه أن يسألك سؤالاً باستخدام كلمة مثل (Wochenende / Essen / Arbeit). شجعه وقيّم أداءه في النهاية."
          }
        ]
      }
    ];

    const UNIT_TESTS = [
      { id:"ut5", title:"اختبار الوحدة الأولى: الحروف والنطق", xp:50, questions:[
        {q:"ما حروف العلة الألمانية؟",opts:["A, E, I, O, U","B, C, D, F, G","K, L, M, N, P"],ans:0},
        {q:"كيف يُنطق sch غالباً؟",opts:["ش","ف","ك"],ans:0},
        {q:"أي كلمة فيها ß؟",opts:["Straße","Mutter","Haus"],ans:0},
        {q:"أي زوج يوضح أن ie صوت طويل؟",opts:["sieben","mein","Schule"],ans:0},
        {q:"كيف تطلب تهجئة الاسم؟",opts:["Wie schreibt man das?","Wie kostet das?","Wo schreibt man?"],ans:0}
      ]},
      { id:"ut1", title:"اختبار الوحدة الثانية: البداية والتعارف", xp:50, questions:[
        {q:"كيف تقدم نفسك؟",opts:["Ich heiße Sara.","Ich wohne Sara.","Ich bin aus Sara."],ans:0},
        {q:"ما السؤال المهذب عن الاسم؟",opts:["Wie heißen Sie?","Wie alt bist du?","Wo wohnen du?"],ans:0},
        {q:"ما معنى Ich komme aus Ägypten؟",opts:["أنا من مصر.","أنا أعيش في برلين.","أنا أتكلم مصري."],ans:0},
        {q:"كيف تقول: عمري 20 سنة؟",opts:["Ich bin 20 Jahre alt.","Ich habe 20 Jahre.","Ich heiße 20."],ans:0},
        {q:"اختر طلب القهوة المهذب:",opts:["Ich möchte einen Kaffee, bitte.","Ich bin einen Kaffee.","Ich komme Kaffee."],ans:0}
      ]},
      { id:"ut6", title:"اختبار الوحدة الثالثة: قواعد البداية", xp:50, questions:[
        {q:"أكمل: Wir ___ hier.",opts:["sind","bin","seid"],ans:0},
        {q:"أين يأتي الفعل غالباً في الجملة الخبرية؟",opts:["المركز الثاني","آخر الجملة دائماً","أول الجملة دائماً"],ans:0},
        {q:"أي سؤال يبدأ بأداة سؤال؟",opts:["Wo wohnen Sie?","Wohnen Sie hier?","Sind Sie hier?"],ans:0},
        {q:"أكمل: Ich habe ___ Auto.",opts:["kein","nicht","keine"],ans:0},
        {q:"أكمل: Ich sehe ___ Mann. (der Mann)",opts:["einen","eine","ein"],ans:0}
      ]},
      { id:"ut4", title:"اختبار الوحدة الرابعة: الأسرة والروتين والعمل والمدينة", xp:50, questions:[
        {q:"ما معنى meine Schwester؟",opts:["أختي","أخي","أمي"],ans:0},
        {q:"كيف تقول: الموعد الساعة العاشرة؟",opts:["Der Termin ist um zehn Uhr.","Der Termin hat zehn Uhr.","Ich bin zehn Uhr."],ans:0},
        {q:"أكمل: Ich stehe um sieben Uhr ___.",opts:["auf","an","aus"],ans:0},
        {q:"كيف تسأل عن المهنة؟",opts:["Was sind Sie von Beruf?","Wie heißen Sie von Beruf?","Wo ist Ihr Beruf?"],ans:0},
        {q:"ما معنى Gehen Sie geradeaus؟",opts:["امشِ إلى الأمام.","انعطف يساراً.","توقف هنا."],ans:0}
      ]},
      { id:"ut7", title:"اختبار الوحدة الخامسة: الطعام والمواعيد", xp:50, questions:[
        {q:"كيف تقول: أحب شرب الشاي؟",opts:["Ich trinke gern Tee.","Ich bin gern Tee.","Ich wohne gern Tee."],ans:0},
        {q:"أكمل: Du ___ gern Pizza.",opts:["isst","essen","esse"],ans:0},
        {q:"ما معنى Zahlen, bitte؟",opts:["الحساب من فضلك.","الماء من فضلك.","الطاولة من فضلك."],ans:0},
        {q:"أين يأتي مصدر الفعل مع können؟",opts:["في نهاية الجملة","قبل الفاعل","يحذف دائماً"],ans:0},
        {q:"كيف تعتذر وتقول: للأسف لا أستطيع؟",opts:["Leider kann ich nicht.","Leider bin ich nicht.","Ich habe leider nicht."],ans:0}
      ]},
      { id:"ut2", title:"اختبار الوحدة السادسة: التسوق والحياة اليومية", xp:50, questions:[
        {q:"أكمل: Ich brauche ___ Apfel.",opts:["einen","eine","ein"],ans:0},
        {q:"كيف تسأل عن المقاس؟",opts:["Welche Größe haben Sie?","Wie spät ist es?","Woher kommen Sie?"],ans:0},
        {q:"ما معنى Wie viel kostet das؟",opts:["كم سعر هذا؟","أين هذا؟","متى يفتح؟"],ans:0},
        {q:"كيف تقول: أبحث عن شقة؟",opts:["Ich suche eine Wohnung.","Ich bin eine Wohnung.","Ich habe Wohnung suche."],ans:0},
        {q:"اختر الجملة الصحيحة:",opts:["Das Zimmer ist groß.","Der Zimmer ist groß.","Das Zimmer sind groß."],ans:0}
      ]},
      { id:"ut3", title:"اختبار الوحدة السابعة: الصحة والسفر والطقس", xp:50, questions:[
        {q:"كيف تقول: لدي صداع؟",opts:["Ich habe Kopfschmerzen.","Ich bin Kopfschmerzen.","Ich mache Kopfschmerzen."],ans:0},
        {q:"ما معنى Es ist kalt؟",opts:["الجو بارد.","الجو جميل.","إنها تمطر."],ans:0},
        {q:"كيف تسأل عن الطقس؟",opts:["Wie ist das Wetter?","Wie ist dein Name?","Wo ist der Zug?"],ans:0},
        {q:"أكمل: Der Zug fährt um 10 Uhr ___.",opts:["ab","auf","an"],ans:0},
        {q:"كيف تطلب تذكرة إلى برلين؟",opts:["Eine Fahrkarte nach Berlin, bitte.","Ein Zimmer nach Berlin.","Ich fahre eine Karte."],ans:0}
      ]},
      { id:"ut8", title:"اختبار الوحدة الثامنة: الماضي التام وحروف الجر", xp:60, questions:[
        {q:"أكمل: Ich ___ gestern viel gelernt.",opts:["habe","bin","sind"],ans:0},
        {q:"أكمل: Wir ___ nach Berlin gefahren.",opts:["sind","haben","seid"],ans:0},
        {q:"اختر حرف الجر الصحيح: ___ Montag habe ich Zeit.",opts:["Am","Um","Im"],ans:0},
        {q:"اختر حرف الجر الصحيح: ___ Sommer ist es warm.",opts:["Im","Am","Um"],ans:0},
        {q:"أكمل: Ich fahre ___ dem Bus zur Arbeit.",opts:["mit","nach","um"],ans:0}
      ]}
    ];
