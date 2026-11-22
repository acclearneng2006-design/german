const MOTIVATION_QUOTES = [
      { quote: "كل كلمة ألمانية جديدة بتقربك خطوة من هدفك — استمر يا بطل! 🚀", sub: "Übung macht den Meister — الممارسة تصنع الإتقان" },
      { quote: "10 دقايق تركيز النهاردة أحسن من ساعة تأجيل لبكرة. أنت قدّها! 💪", sub: "Schritt für Schritt — خطوة بخطوة" },
      { quote: "الألماني لغة منطقية وممتعة لما تاخدها ببساطة.. كمل بنفس الحماس! 🌟", sub: "Du schaffst das! — أنت تستطيع فعلها" },
      { quote: "الغلط في التمرين هو أسرع طريق إن المعلومة تثبت في دماغك للأبد! 🧠", sub: "Aus Fehlern wird man klug — من الأخطاء نتعلم" },
      { quote: "مستواك بيتطور مع كل جملة بتسمعها أو تنطقها.. فخور باستمرارك! 🔥", sub: "Weiter so! — واصل هكذا" },
      { quote: "تخيل نفسك بتتكلم ألماني بثقة وطلاقة.. كل درس هنا بيبني اللحظة دي! ✨", sub: "Dranbleiben lohnt sich — الاستمرار يستحق" }
    ];

    const PRAISE_CORRECT = [
      "عاش يا بطل! إجابة في الجون 🎯",
      "ممتاز! تركيزك عالي النهاردة 🌟",
      "رائع جداً! كمل بنفس القوة 💪",
      "إجابة نموذجية! برافو عليك 👏",
      "الله ينور! المعلومة ثبتت تماماً ✨",
      "شغل عالي! خطوة ممتازة لقدام 🚀"
    ];

    const ENCOURAGE_RETRY = [
      "قربت جداً! بص على الإجابة الصح وجربها بنفسك عشان تثبت 💡",
      "ولا يهمك، كلنا بنتعلم من المحاولة.. شوف الصح واختاره 👇",
      "ممتاز إنك بتجرب! ركز في الفرق البسيط ده واختار الصح ✨",
      "غلطات البداية هي اللي بتخليك أستاذ بعدين.. جرب تاني 💪"
    ];

    function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

    function launchConfetti() {
      const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#a855f7", "#38bdf8"];
      for (let i = 0; i < 42; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (1.6 + Math.random() * 1.4) + "s";
        piece.style.animationDelay = (Math.random() * 0.35) + "s";
        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 3400);
      }
    }

    function showToast(message, type = "default", icon = "✨") {
      const container = document.getElementById("toastContainer");
      if (!container) return;
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(message)}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.animation = "toastOut 0.25s ease forwards";
        setTimeout(() => toast.remove(), 260);
      }, 2800);
    }

    function updateDailyStreak() {
      const today = new Date().toISOString().slice(0, 10);
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (state.lastActiveDate === today) {
        if (!state.streakDays) state.streakDays = 1;
        return;
      }
      if (state.lastActiveDate === yesterday) {
        state.streakDays = (state.streakDays || 1) + 1;
      } else {
        state.streakDays = 1;
      }
      state.lastActiveDate = today;
      saveState(false);
    }

    function renderMotivationBanner() {
      const box = document.getElementById("motivationBanner");
      if (!box) return;
      const allNodes = CURRICULUM.flatMap(u => u.nodes).concat(UNIT_TESTS, [{ id: "mock-final" }, { id: "goethe-mock" }]);
      const doneCount = state.completed.length;
      const pct = Math.min(100, Math.round((doneCount / allNodes.length) * 100));
      const dayIndex = new Date().getDate() % MOTIVATION_QUOTES.length;
      const item = MOTIVATION_QUOTES[dayIndex];

      let statusLine = item.sub;
      if (doneCount === 0) {
        statusLine = "ابدأ بأول درس دلوقتي وخد أول 35 XP في رحلتك! 🎯";
      } else if (pct >= 80) {
        statusLine = `أنجزت ${pct}% من المسار! فاضل تكّة وتخلص مستوى A1 بالكامل 🏆`;
      } else {
        statusLine = `أنجزت ${doneCount} من ${allNodes.length} محطة (${pct}%) • ${item.sub}`;
      }

      box.innerHTML = `
        <div class="motivation-banner">
          <div class="motivation-text">
            <div class="motivation-tag">✨ دفعة حماس ليك</div>
            <div class="motivation-quote">${item.quote}</div>
            <div class="motivation-sub">${statusLine}</div>
          </div>
          <div class="streak-box" title="أيام التمرين المتتالية">
            <div class="streak-num">🔥 ${state.streakDays || 1}</div>
            <div class="streak-lbl">يوم التزام</div>
          </div>
        </div>
      `;
    }

    // فعّله (true) فقط بعد نشر worker.example.js المحدّث، لأنه يرسل توكن Supabase مع كل طلب AI
    const SEND_AUTH_TO_PROXY = false;
    const DEFAULT_AI_PROXY_URL = "https://deutsch-a1-ai.deutsch-a1-coach-h3544.workers.dev/api/chat";
    const SUPABASE_URL = "https://wvejscyxfsgmcecljpga.supabase.co";
    const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_FK4nXbtN4s3BYmraYqUjew_UIg4AAtx";
    const LOCAL_PROGRESS_KEY = "deutsch_a1_v2";
    const LESSON_FLOW_VERSION = 7;

    const DEFAULT_STATE = {
      lessonFlowVersion: LESSON_FLOW_VERSION,
      streakDays: 1,
      lastActiveDate: "",
      completed: [],
      xp: 0,
      freeChat: [],
      cpChats: {},
      reviewQueue: [],
      mistakes: [],
      lessonProgress: {},
      settings: {
        aiMode: "proxy",
        geminiKey: "",
        geminiModel: "gemini-3.5-flash-lite",
        aiProxyUrl: DEFAULT_AI_PROXY_URL,
        ollamaUrl: "http://localhost:11434",
        ollamaModel: "qwen3:14b"
      }
    };

    let legacyProgressPending = false;
    let state = loadState();
    let activeCheckpoint = null;
    let currentFreeTopic = "محادثة عامة حرة بمستوى A1 باستخدام كل ما تعلمه الطالب";
    let supabaseClient = null;
    let supabaseSession = null;
    let passwordRecoveryMode = false;
    let supabaseSyncTimer = null;
    let recognition = null;
    let activeMicTarget = null;

    function loadState() {
      try {
        const raw = localStorage.getItem(LOCAL_PROGRESS_KEY);
        if (!raw) return JSON.parse(JSON.stringify(DEFAULT_STATE));
        const parsed = JSON.parse(raw);
        legacyProgressPending = Boolean(
          (parsed.completed || []).length || parsed.xp || (parsed.reviewQueue || []).length ||
          Object.keys(parsed.lessonProgress || {}).length || (parsed.mistakes || []).length ||
          Object.keys(parsed.cpChats || {}).length
        );
        const mergedState = {
          ...DEFAULT_STATE,
          ...parsed,
          settings: { ...DEFAULT_STATE.settings }
        };
        if ((parsed.lessonFlowVersion || 1) < LESSON_FLOW_VERSION) mergedState.lessonProgress = {};
        mergedState.lessonFlowVersion = LESSON_FLOW_VERSION;
        if (!mergedState.settings.aiProxyUrl) mergedState.settings.aiProxyUrl = DEFAULT_AI_PROXY_URL;
        if (mergedState.settings.aiMode === "auto" && !mergedState.settings.geminiKey) mergedState.settings.aiMode = "proxy";
        return mergedState;
      } catch {
        return JSON.parse(JSON.stringify(DEFAULT_STATE));
      }
    }

    function saveState(autoCloud = true) {
      updateHeaderUI();
      if (supabaseSession) { if (autoCloud) debouncedSupabasePush(); }
      else { try { localStorage.setItem(LOCAL_PROGRESS_KEY, JSON.stringify(getSyncPayload())); } catch {} }
    }

    function updateHeaderUI() {
      document.getElementById("xpCount").textContent = state.xp;
      const streakEl = document.getElementById("streakCount");
      if (streakEl) streakEl.textContent = state.streakDays || 1;
      renderMotivationBanner();
      const allNodes = CURRICULUM.flatMap(u => u.nodes).concat(UNIT_TESTS, [{ id: "mock-final" }, { id: "goethe-mock" }]);
      const pct = Math.min(100, Math.round((state.completed.length / allNodes.length) * 100));
      document.getElementById("globalProgress").style.width = pct + "%";

      const dot = document.getElementById("syncDot");
      const lbl = document.getElementById("syncLabel");
      if (supabaseSession) {
        dot.className = "sync-dot ok";
        lbl.textContent = "متزامن";
      } else {
        dot.className = "sync-dot";
        lbl.textContent = "محلي";
      }

      const summary = document.getElementById("summaryStats");
      if (summary) {
        summary.textContent = `أنجزت ${state.completed.length} من ${allNodes.length} محطة (${pct}%) • إجمالي النقاط: ${state.xp} XP`;
        const bd = [];
        if (state.completed.length >= 1) bd.push("🌱 أول خطوة");
        if (state.completed.filter(i => /^l\d+$/.test(i)).length >= 5) bd.push("📚 5 دروس");
        if ((state.streakDays || 1) >= 3) bd.push("🔥 3 أيام");
        if (state.completed.some(i => /^ut/.test(i))) bd.push("📝 اجتزت اختبار وحدة");
        if (state.completed.includes("mock-final")) bd.push("🏆 المحاكاة");
        if (bd.length) summary.textContent += " • الشارات: " + bd.join("، ");
      }
    }

    function getAllVocabulary() {
      return CURRICULUM.flatMap((unit, unitIndex) =>
        unit.nodes.filter(node => node.type === "lesson").flatMap(lesson =>
          lesson.vocab.map((item, vocabIndex) => ({ ...item, lessonId: lesson.id, lessonTitle: lesson.title, unitIndex, vocabIndex }))
        )
      );
    }

    function getChoices(correct, lesson, index, getter) {
      const eligible = getAllVocabulary()
        .filter(item => item.lessonId === lesson.id || state.completed.includes(item.lessonId))
        .map(getter);
      const local = lesson.vocab.filter((_, i) => i !== index).map(getter);
      const choices = [correct];
      [...local, ...eligible].forEach(value => { if (choices.length < 3 && value !== correct && !choices.includes(value)) choices.push(value); });
      return choices.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
    }

    function markVocabularyMistake(lessonId, vocabIndex) {
      if (vocabIndex === undefined || vocabIndex === null) return;
      state.mistakes = state.mistakes || [];
      const mistake = state.mistakes.find(item => item.lessonId === lessonId && item.vocabIndex === vocabIndex);
      if (mistake) { mistake.count = (mistake.count || 1) + 1; mistake.lastAt = Date.now(); }
      else state.mistakes.push({ lessonId, vocabIndex, count: 1, lastAt: Date.now() });
    }

    function colorGermanArticles(text) {
      const PL = /^(Männer|Frauen|Kinder|Eltern|Äpfel|Geschwister)$/;
      return escapeHtml(String(text)).replace(/\b(der|den|dem|des|die|das)\s+([A-ZÄÖÜ][\wäöüß-]*)/gi, (all, art, noun) => {
        if (!/^[A-ZÄÖÜ]/.test(noun)) return all;
        const a = art.toLowerCase();
        if (a === "die" && PL.test(noun)) return all;
        const c = a === "die" ? "f" : a === "das" ? "n" : "m";
        return `<span class="article-${c}">${art}</span> ${noun}`;
      });
    }

    function vocabSpeech(item) { return item && typeof item === "object" ? (item.speak || item.de || "") : String(item || ""); }

    function speakerMarkup(text) {
      const safe = escapeHtml(text);
      return `<button class="icon-btn" data-speak="${safe}" data-rate="0.92" title="نطق عادي">🔊</button><button class="icon-btn" data-speak="${safe}" data-rate="0.6" title="نطق بطيء">🐢</button>`;
    }

    function bindSpeakButtons(root = document) {
      root.querySelectorAll("[data-speak]").forEach(button => {
        if (button.dataset.bound === "true") return;
        button.dataset.bound = "true";
        button.addEventListener("click", () => speakGerman(button.dataset.speak, Number(button.dataset.rate || 0.92)));
      });
    }

    function renderVocabularyBank() {
      const list = document.getElementById("vocabularyBankList");
      const unitSelect = document.getElementById("vocabUnitFilter");
      if (!list || !unitSelect) return;
      if (unitSelect.options.length === 1) CURRICULUM.forEach((unit, index) => unitSelect.add(new Option(unit.unit, String(index))));
      const query = (document.getElementById("vocabSearch").value || "").trim().toLowerCase();
      const unitFilter = unitSelect.value;
      const errorsOnly = document.getElementById("vocabErrorFilter").value === "errors";
      const vocab = getAllVocabulary().filter(item => {
        const error = (state.mistakes || []).some(m => m.lessonId === item.lessonId && m.vocabIndex === item.vocabIndex);
        return (unitFilter === "all" || Number(unitFilter) === item.unitIndex) && (!errorsOnly || error) && (!query || `${item.de} ${item.ar} ${item.lessonTitle}`.toLowerCase().includes(query));
      });
      list.innerHTML = vocab.length ? vocab.map(item => `<div class="card vocab-bank-item"><div class="vocab-de ltr">${colorGermanArticles(item.de)}</div><div class="vocab-ar">${escapeHtml(item.ar)}</div><small style="color:var(--muted)">${escapeHtml(item.lessonTitle)}${(state.mistakes || []).some(m => m.lessonId === item.lessonId && m.vocabIndex === item.vocabIndex) ? " • ⚠️ راجعها" : ""}</small><div class="vocab-actions">${speakerMarkup(vocabSpeech(item))}</div></div>`).join("") : `<div class="card">مفيش كلمات مطابقة للفلاتر دي.</div>`;
      bindSpeakButtons(list);
    }

    // 3D Flip Flashcards Modal
    let flashcardDeck = [];
    let flashcardIndex = 0;

    function openFlashcardsModal() {
      const unitFilter = document.getElementById("vocabUnitFilter")?.value || "all";
      const all = getAllVocabulary().filter(item =>
        state.completed.includes(item.lessonId) &&
        (unitFilter === "all" || Number(unitFilter) === item.unitIndex)
      );
      flashcardDeck = all.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]).slice(0, 20);
      flashcardIndex = 0;
      document.getElementById("overlayTitle").textContent = "🎴 بطاقات المراجعة السريعة";
      document.getElementById("overlayXp").textContent = `${flashcardDeck.length} بطاقة`;
      renderFlashcardView();
      document.getElementById("lessonOverlay").classList.add("open");
    }

    function renderFlashcardView() {
      const body = document.getElementById("overlayBody");
      if (!flashcardDeck.length) {
        body.innerHTML = `<div class="card"><h4>لسه مفيش كلمات للمراجعة</h4><p>البطاقات بتظهر للكلمات الموجودة في الدروس اللي أنهيتها. خلّص أول درس وارجع هنا 🎴</p></div>`;
        return;
      }
      if (flashcardIndex >= flashcardDeck.length) {
        launchConfetti();
        body.innerHTML = `
          <div class="card" style="text-align:center;padding:24px">
            <div style="font-size:40px;margin-bottom:8px">🎉</div>
            <h4>أنهيت جولة البطاقات بنجاح!</h4>
            <p style="color:var(--muted);margin-bottom:14px">راجعت ${flashcardDeck.length} كلمة وعبارة ألمانية.</p>
            <button class="btn-primary" onclick="openFlashcardsModal()">🔄 جولة جديدة</button>
          </div>
        `;
        return;
      }
      const card = flashcardDeck[flashcardIndex];
      body.innerHTML = `
        <div class="card" style="padding:12px 16px">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px;color:var(--muted)">
            <span>بطاقة ${flashcardIndex + 1} من ${flashcardDeck.length}</span>
            <span>${escapeHtml(card.lessonTitle)}</span>
          </div>
          <div class="progress-track" style="margin-top:8px"><div class="progress-fill" style="width:${Math.round(((flashcardIndex + 1) / flashcardDeck.length) * 100)}%"></div></div>
        </div>

        <div class="flashcard-stage">
          <div class="flashcard-inner" id="activeFlashcard" onclick="this.classList.toggle('flipped')">
            <div class="flashcard-face front">
              <div class="vocab-de ltr" style="font-size:24px;text-align:center">${colorGermanArticles(card.de)}</div>
              <div class="vocab-actions" style="margin-top:14px" onclick="event.stopPropagation()">${speakerMarkup(vocabSpeech(card))}</div>
              <div class="flashcard-hint">👆 اضغط على البطاقة لقلبها ومعرفة المعنى</div>
            </div>
            <div class="flashcard-face back">
              <div style="font-size:21px;font-weight:800;color:#fff">${escapeHtml(card.ar)}</div>
              <div class="ltr" style="font-size:14px;color:var(--accent);margin-top:8px;font-weight:700">${escapeHtml(card.de)}</div>
              <div class="flashcard-hint">👆 اضغط مرة أخرى للعودة للألماني</div>
            </div>
          </div>
        </div>

        <div class="row-2" style="margin-top:12px">
          <button class="btn-ghost" style="padding:13px;border-color:rgba(245,158,11,0.5)" onclick="nextFlashcard(false)">🔁 راجعها تاني</button>
          <button class="btn-primary success" style="margin-top:0" onclick="nextFlashcard(true)">✅ أعرفها تماماً</button>
        </div>
      `;
      bindSpeakButtons(body);
      speakGerman(vocabSpeech(card), 0.92);
    }

    function nextFlashcard(known) {
      const card = flashcardDeck[flashcardIndex];
      if (!known && card) {
        markVocabularyMistake(card.lessonId, card.vocabIndex);
        flashcardDeck.push(card);
        saveState(false);
      }
      flashcardIndex++;
      renderFlashcardView();
    }

    function exportProgress() {
      const payload = { version: 1, exportedAt: new Date().toISOString(), completed: state.completed, xp: state.xp, reviewQueue: state.reviewQueue || [], lessonProgress: state.lessonProgress || {}, mistakes: state.mistakes || [], cpChats: state.cpChats || {} };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const link = document.createElement("a"); link.href = URL.createObjectURL(blob); link.download = "deutsch-a1-progress.json"; link.click(); URL.revokeObjectURL(link.href);
    }

    function importProgress(input) {
      const file = input.files && input.files[0]; if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result);
          if (!Array.isArray(data.completed) || typeof data.xp !== "number") throw new Error("صيغة الملف غير صحيحة");
          state.completed = Array.from(new Set([...(state.completed || []), ...data.completed.filter(id => typeof id === "string")]));
          state.xp = Math.max(state.xp || 0, data.xp);
          state.reviewQueue = data.reviewQueue || state.reviewQueue || [];
          state.lessonProgress = { ...(data.lessonProgress || {}), ...(state.lessonProgress || {}) };
          state.mistakes = data.mistakes || state.mistakes || [];
          state.cpChats = { ...(data.cpChats || {}), ...(state.cpChats || {}) };
          saveState(); renderPath(); showToast("تم استيراد تقدمك بنجاح!", "xp", "💾");
        } catch (error) { alert(`تعذر استيراد النسخة: ${error.message}`); }
        input.value = "";
      };
      reader.readAsText(file);
    }

    function renderPath() {
      const container = document.getElementById("pathContainer");
      container.innerHTML = "";
      renderReviewCard();
      let animDelay = 0;

      CURRICULUM.forEach((unit, unitIndex) => {
        const uHead = document.createElement("div");
        uHead.className = "unit-header";
        uHead.innerHTML = `<span class="unit-title">${unit.unit}</span>`;
        container.appendChild(uHead);

        const list = document.createElement("div");
        list.className = "node-list";

        unit.nodes.forEach(node => {
          const isDone = state.completed.includes(node.id);
          const isLocked = !isPathItemUnlocked(node.id);
          const card = document.createElement("div");
          const isSpecial = node.type === "checkpoint" || node.type === "reading" || node.type === "writing_exam";
          card.className = `node-card ${isSpecial ? "checkpoint" : ""} ${isDone ? "done" : ""} ${isLocked ? "locked" : ""}`;
          card.style.animationDelay = `${Math.min(animDelay * 35, 420)}ms`;
          animDelay++;

          card.tabIndex = isLocked ? -1 : 0; card.setAttribute("role", "button");
          if (isLocked) card.setAttribute("aria-disabled", "true");
          card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.click(); } });
          card.onclick = () => {
            if (isLocked) { showToast("كمّل المحطة المفتوحة الأول عشان تفتح اللي بعدها 🔒", "default", "🔒"); return; }
            if (node.type === "checkpoint") openCheckpoint(node);
            else if (node.type === "reading") openReadingLesson(node);
            else if (node.type === "writing_exam") openWritingExamLesson(node);
            else openLesson(node);
          };

          const badgeText = isDone
            ? "✓ مكتمل"
            : isLocked ? "🔒 مقفول"
            : (node.type === "checkpoint" ? "محادثة AI" : `+${node.xp} XP`);

          card.innerHTML = `
            <div class="node-left">
              <div class="node-icon">${isDone ? "✅" : isLocked ? "🔒" : node.icon}</div>
              <div class="node-info">
                <h3>${node.title}</h3>
                <p>${node.desc}</p>
              </div>
            </div>
            <span class="node-badge">${badgeText}</span>
          `;
          list.appendChild(card);
        });

        container.appendChild(list);

        const unitTest = UNIT_TESTS[unitIndex];
        if (unitTest) {
          const testDone = state.completed.includes(unitTest.id);
          const testLocked = !isPathItemUnlocked(unitTest.id);
          const testCard = document.createElement("div");
          testCard.className = `node-card exam-node ${testDone ? "done" : ""} ${testLocked ? "locked" : ""}`;
          testCard.style.marginTop = "10px";
          testCard.tabIndex = testLocked ? -1 : 0;
          if (testLocked) testCard.setAttribute("aria-disabled", "true");
          testCard.onclick = () => testLocked ? showToast("كمّل دروس الوحدة الأول عشان تفتح الاختبار 🔒", "default", "🔒") : openUnitTest(unitTest);
          testCard.innerHTML = `<div class="node-left"><div class="node-icon">${testDone ? "✅" : testLocked ? "🔒" : "📝"}</div><div class="node-info"><h3>${unitTest.title}</h3><p>مراجعة قصيرة • 5 أسئلة • النجاح من 4 إجابات صحيحة</p></div></div><span class="node-badge">${testDone ? "✓ اجتزت الاختبار" : testLocked ? "🔒 مقفول" : `+${unitTest.xp} XP`}</span>`;
          container.appendChild(testCard);
        }
      });

      const courseUnlocked = isCoursePathComplete();
      const mockDone = state.completed.includes("mock-final");
      const mockCard = document.createElement("div");
      mockCard.className = `node-card checkpoint ${mockDone ? "done" : ""} ${courseUnlocked ? "" : "locked"}`;
      mockCard.style.marginTop = "20px";
      mockCard.innerHTML = `<div class="node-left"><div class="node-icon">${mockDone ? "🏆" : courseUnlocked ? "🏁" : "🔒"}</div><div class="node-info"><h3>اختبار مراجعة A1 الشامل</h3><p>25 سؤالًا من جميع الوحدات • 25 دقيقة • النجاح من 18/25</p></div></div><span class="node-badge">${mockDone ? "✓ ناجح (+100 XP)" : courseUnlocked ? "ابدأ المحاكاة" : "🔒 بعد إنهاء المنهج"}</span>`;
      mockCard.onclick = () => courseUnlocked ? openMockExam() : showToast("المحاكاة النهائية تفتح بعد إنهاء الدروس واختبارات الوحدات 🔒", "default", "🔒");
      container.appendChild(mockCard);
      const gDone = state.completed.includes("goethe-mock");
      const gCard = document.createElement("div");
      gCard.className = `node-card exam-node ${gDone ? "done" : ""} ${courseUnlocked ? "" : "locked"}`; gCard.style.marginTop = "10px"; gCard.tabIndex = 0;
      gCard.innerHTML = `<div class="node-left"><div class="node-icon">${gDone ? "🏆" : "🎓"}</div><div class="node-info"><h3>تدريب مهارات A1 الأربع</h3><p>استماع + قراءة + كتابة + محادثة، كل جزء بدرجته</p></div></div><span class="node-badge">${gDone ? "✓ ناجح" : "+50 XP"}</span>`;
      gCard.onclick = () => courseUnlocked ? openGoetheExam() : showToast("تدريب Goethe يفتح بعد إنهاء المنهج واختباراته 🔒", "default", "🔒");
      gCard.tabIndex = courseUnlocked ? 0 : -1;
      if (!courseUnlocked) gCard.setAttribute("aria-disabled", "true");
      gCard.addEventListener("keydown", e => { if (e.key === "Enter" && courseUnlocked) openGoetheExam(); });
      container.appendChild(gCard);
      refreshChatTopics();
    }

    // Reading Lesson (Lesen: Richtig / Falsch)
    function openReadingLesson(node) {
      activeCheckpoint = null;
      document.getElementById("overlayTitle").textContent = node.title;
      document.getElementById("overlayXp").textContent = `+${node.xp} XP`;
      const isDone = state.completed.includes(node.id);
      const body = document.getElementById("overlayBody");

      body.innerHTML = `
        <div class="card">
          <h4>📰 تدريب القراءة والفهم (مثل امتحان Goethe A1)</h4>
          <p style="font-size:13.5px;color:var(--muted)">${node.listen ? "اسمع كل مقطع بالألمانية بدون نص مكتوب" : "اقرأ كل نص قصير بالألمانية"}، ثم حدد هل الجملة التي تحته صحيحة (Richtig) أم خاطئة (Falsch).</p>
        </div>
        ${node.passages.map((p, idx) => `
          <div class="card reading-item" data-answered="false" data-correct="false">
            <h4>
              <span>${escapeHtml(p.title)}</span>
              <span class="vocab-actions">${speakerMarkup(p.text)}</span>
            </h4>
            ${node.listen ? '<div class="reading-passage" style="text-align:center">🎧 اضغط 🔊 للاستماع (تقدر تعيد)</div>' : `<div class="reading-passage">${escapeHtml(p.text)}</div>`}
            <p style="font-weight:700;font-size:14px;margin-top:8px">الجملة: <span class="ltr" style="color:var(--accent)">${escapeHtml(p.statement)}</span></p>
            <div class="rf-row">
              <button class="quiz-opt" style="text-align:center;font-weight:800" onclick="answerReading(this, ${p.isTrue === true})" data-exp="${escapeHtml(p.explanation)}">✅ Richtig (صحيح)</button>
              <button class="quiz-opt" style="text-align:center;font-weight:800" onclick="answerReading(this, ${p.isTrue === false})" data-exp="${escapeHtml(p.explanation)}">❌ Falsch (خطأ)</button>
            </div>
            <div class="quiz-feedback"></div>
          </div>
        `).join("")}
        <button class="btn-primary ${isDone ? "success" : ""}" onclick="completeNode('${node.id}', ${node.xp})">
          ${isDone ? "✅ تم إكمال تدريب القراءة" : `🎉 إتمام التدريب واستلام +${node.xp} XP`}
        </button>
      `;
      bindSpeakButtons(body);
      document.getElementById("lessonOverlay").classList.add("open");
    }

    function answerReading(btn, isRight, explanation) {
      explanation = btn.dataset.exp || explanation;
      const card = btn.closest(".reading-item");
      const btns = card.querySelectorAll(".quiz-opt");
      btns.forEach(b => b.classList.remove("correct", "wrong", "pop-anim", "shake-anim"));
      const fb = card.querySelector(".quiz-feedback");
      if (isRight) {
        btn.classList.add("correct", "pop-anim");
        fb.innerHTML = `<span style="color:var(--success)">✅ ${pickRandom(PRAISE_CORRECT)}<br><small style="color:var(--text);font-weight:500">${explanation}</small></span>`;
      } else {
        document.getElementById("lessonNextBtn").disabled = false;
        btn.classList.add("wrong", "shake-anim");
        fb.innerHTML = `<span style="color:var(--accent)">💡 ${pickRandom(ENCOURAGE_RETRY)}<br><small style="color:var(--text);font-weight:500">${explanation}</small></span>`;
      }
    }

    // Writing Exam Lesson (Schreiben: Formular & E-Mail)
    function openWritingExamLesson(node) {
      activeCheckpoint = null;
      document.getElementById("overlayTitle").textContent = node.title;
      document.getElementById("overlayXp").textContent = `+${node.xp} XP`;
      const isDone = state.completed.includes(node.id);
      const body = document.getElementById("overlayBody");

      body.innerHTML = `
        <div class="card">
          <h4>📋 الجزء الأول: ملء الاستمارة (Formular ausfüllen)</h4>
          <p style="font-size:13.5px;line-height:1.8;margin-bottom:10px">${escapeHtml(node.formStory)}</p>
          <div class="formular-grid">
            ${node.formFields.map(f => `
              <div class="formular-field">
                <label>${escapeHtml(f.label)}</label>
                <input type="text" class="form-control ltr formular-inp" data-expected="${escapeHtml(f.expected)}" placeholder="..." />
              </div>
            `).join("")}
          </div>
          <button class="btn-ghost" style="width:100%;margin-top:12px" onclick="gradeFormular()">✅ تصحيح الاستمارة</button>
          <div id="formularFeedback" class="lesson-feedback"></div>
        </div>

        <div class="card">
          <h4>✉️ الجزء الثاني: كتابة إيميل قصير (E-Mail schreiben)</h4>
          <p style="font-size:13.5px;font-weight:700;margin-bottom:8px">${escapeHtml(node.emailTask.promptAr)}</p>
          <ul style="padding-right:18px;font-size:13px;color:var(--muted);margin-bottom:10px;line-height:1.8">
            ${node.emailTask.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
          </ul>
          <textarea id="examEmailInput" class="lesson-textarea" placeholder="Lieber Tim,&#10;vielen Dank für die Einladung..."></textarea>
          <button class="btn-primary" onclick="gradeExamEmail()">🤖 قيّم الإيميل بدرجة امتحان A1</button>
          <div id="examEmailFeedback" class="lesson-feedback"></div>
        </div>

        <button class="btn-primary ${isDone ? "success" : ""}" onclick="completeNode('${node.id}', ${node.xp})">
          ${isDone ? "✅ تم إكمال تدريب الكتابة" : `🏆 إنهاء تدريب الكتابة واستلام +${node.xp} XP`}
        </button>
      `;
      document.getElementById("lessonOverlay").classList.add("open");
    }

    function gradeFormular() {
      const inputs = Array.from(document.querySelectorAll(".formular-inp"));
      let correctCount = 0;
      inputs.forEach(inp => {
        const val = inp.value.trim().toLowerCase();
        const exp = inp.dataset.expected.toLowerCase();
        if (val && exp.split(" ").every(p => val.split(/[\s,\/]+/).includes(p))) {
          inp.style.borderColor = "var(--success)";
          correctCount++;
        } else {
          inp.style.borderColor = "var(--danger)";
        }
      });
      const fb = document.getElementById("formularFeedback");
      fb.style.display = "block";
      fb.innerHTML = correctCount === inputs.length
        ? `<strong style="color:var(--success)">🎉 ممتاز! ملأت جميع خانات الاستمارة بدقة 5/5!</strong>`
        : `<strong style="color:var(--accent)">حصلت على ${correctCount} من ${inputs.length}. راجع الخانات المحددة بالأحمر وجرب تاني.</strong>`;
    }

    async function gradeExamEmail() {
      const text = document.getElementById("examEmailInput").value.trim();
      const fb = document.getElementById("examEmailFeedback");
      fb.style.display = "block";
      if (!text) {
        fb.textContent = "اكتب الإيميل بالألماني أولاً ثم اضغط تقييم.";
        return;
      }
      fb.textContent = "⏳ ممتحن AI بيقيّم إيميلك حسب معايير Goethe A1...";
      const sys = "أنت ممتحن رسمي لامتحان Goethe-Zertifikat A1 (جزء الكتابة Schreiben). قيّم إيميل الطالب من 10 درجات بناءً على تغطية النقاط الثلاث المطلوبة (الشكر، الاعتذار والسبب، اقتراح موعد جديد) وسلامة الجمل البسيطة. اكتب التقييم بالعربية المشجعة مع نسخة مصححة نموذجية قصيرة.";
      const reply = await callAI([{ role: "user", content: text }], sys);
      fb.textContent = reply;
    }

    let mockTimerId = null;
    let mockSecondsLeft = 25 * 60;
    function openMockExam() {
      const pool = UNIT_TESTS.flatMap(test => test.questions.map(q => ({ ...q, source: test.title })));
      const selected = pool.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]).slice(0, 25);
      document.getElementById("overlayTitle").textContent = "اختبار مراجعة شامل لمستوى A1";
      document.getElementById("overlayXp").textContent = "25 دقيقة";
      const body = document.getElementById("overlayBody");
      body.innerHTML = `<div class="card"><h4>🏁 مراجعة شاملة اختيار من متعدد</h4><p style="font-size:13.5px;color:var(--muted)">25 سؤال اختيار من متعدد من الوحدات الثمانية • 25 دقيقة • النجاح من 18/25. اختبار مراجعة وليس محاكاة Goethe كاملة.</p><strong id="mockTimer" style="font-size:18px;color:var(--accent)">25:00</strong></div>${selected.map((q, i) => {const opts=q.opts.map((text,j)=>({text,correct:j===q.ans})).map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]);return `<div class="card unit-test-q" data-answer=""><h4>السؤال ${i+1}/25</h4><p style="font-weight:700">${escapeHtml(q.q)}</p>${opts.map(o=>`<button class="quiz-opt" data-correct="${o.correct}" onclick="selectUnitAnswer(this)">${escapeHtml(o.text)}</button>`).join("")}</div>`}).join("")}<button class="btn-primary" onclick="submitMockExam()">إنهاء الاختبار</button><div id="mockResult" class="lesson-feedback"></div>`;
      mockSecondsLeft = 25 * 60;
      clearInterval(mockTimerId);
      mockTimerId = setInterval(() => {
        mockSecondsLeft--;
        const t = document.getElementById("mockTimer");
        if (!t) { clearInterval(mockTimerId); return; }
        t.textContent = `${Math.floor(mockSecondsLeft/60)}:${String(mockSecondsLeft%60).padStart(2,"0")}`;
        if (mockSecondsLeft <= 0) submitMockExam(true);
      }, 1000);
      document.getElementById("lessonOverlay").classList.add("open");
    }

    function submitMockExam(timeout = false) {
      clearInterval(mockTimerId);
      const questions = Array.from(document.querySelectorAll(".unit-test-q"));
      const score = questions.filter(q => q.dataset.answer === "true").length;
      questions.forEach(q => q.querySelectorAll(".quiz-opt").forEach(o => { o.disabled = true; if (o.dataset.correct === "true") o.classList.add("correct"); else if (o.classList.contains("selected")) o.classList.add("wrong"); }));
      const result = document.getElementById("mockResult");
      if (!result) return;
      result.style.display = "block";
      result.innerHTML = `<strong>${timeout ? "انتهى الوقت. " : ""}نتيجتك ${score}/25 ${score >= 18 ? "🎉 مبروك! اجتزت المحاكاة بنجاح!" : "راجع الوحدات وحاول مجددًا."}</strong>`;
      if (score >= 18) {
        launchConfetti();
        if (!state.completed.includes("mock-final")) {
          state.completed.push("mock-final");
          state.xp += 100;
          saveState();
          renderPath();
        }
      }
    }

    function openUnitTest(test) {
      document.getElementById("overlayTitle").textContent = test.title;
      document.getElementById("overlayXp").textContent = `+${test.xp} XP`;
      const body = document.getElementById("overlayBody");
      body.innerHTML = `<div class="card"><h4>📝 اختبار شامل للوحدة</h4><p style="font-size:14px;line-height:1.8">جاوب على الأسئلة الخمسة. تحتاج 4 إجابات صحيحة على الأقل لاجتياز الاختبار وكسب النقاط.</p></div>${test.questions.map((q, qi) => `<div class="card unit-test-q" data-answer=""><h4>السؤال ${qi + 1} من ${test.questions.length}</h4><p style="font-size:15px;font-weight:700;margin-bottom:8px">${q.q}</p>${q.opts.map((opt, oi) => ({ opt, correct: oi === q.ans })).map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]).map(choice => `<button class="quiz-opt" data-correct="${choice.correct}" onclick="selectUnitAnswer(this)">${choice.opt}</button>`).join("")}</div>`).join("")}<button class="btn-primary" onclick="gradeUnitTest('${test.id}', ${test.xp})">✅ اعرض نتيجتي</button><div id="unitTestResult" class="lesson-feedback" style="display:none"></div><button id="saveUnitTestBtn" class="btn-primary success" style="display:none" onclick="completeNode('${test.id}', ${test.xp})">احفظ النتيجة وخد ${test.xp} XP</button>`;
      document.getElementById("lessonOverlay").classList.add("open");
    }

    function selectUnitAnswer(btn) {
      const question = btn.closest(".unit-test-q");
      question.querySelectorAll(".quiz-opt").forEach(option => option.classList.remove("selected", "correct", "wrong"));
      btn.classList.add("selected");
      question.dataset.answer = btn.dataset.correct;
    }

    function gradeUnitTest(testId, xp) {
      const questions = Array.from(document.querySelectorAll(".unit-test-q"));
      if (questions.some(q => !q.dataset.answer)) { alert("جاوب على كل الأسئلة الأول."); return; }
      const score = questions.filter(q => q.dataset.answer === "true").length;
      questions.forEach(q => {
        const chosen = q.querySelector(".quiz-opt.selected");
        const correct = Array.from(q.querySelectorAll(".quiz-opt")).find(option => option.dataset.correct === "true");
        if (chosen) chosen.classList.add(chosen.dataset.correct === "true" ? "correct" : "wrong");
        if (correct) correct.classList.add("correct");
      });
      const result = document.getElementById("unitTestResult");
      result.style.display = "block";
      if (score >= 4) {
        launchConfetti();
        result.innerHTML = `<strong style="color:var(--success)">🎉 ممتاز! نتيجتك ${score} من ${questions.length}. اجتزت اختبار الوحدة!</strong>`;
        document.getElementById("saveUnitTestBtn").style.display = "block";
      } else {
        result.innerHTML = `<strong style="color:var(--danger)">نتيجتك ${score} من ${questions.length}. تحتاج 4 إجابات صحيحة. راجع الدروس وحاول مرة ثانية.</strong>`;
        document.getElementById("saveUnitTestBtn").style.display = "none";
      }
      const wrongQs = questions.filter(q => q.dataset.answer !== "true").map(q => q.querySelector("p").textContent);
      result.innerHTML += wrongQs.length ? `<div style="margin-top:8px;font-weight:500;color:var(--text)">يحتاج مراجعة:<br>${wrongQs.map(w => "• " + escapeHtml(w)).join("<br>")}</div>` : `<div style="margin-top:8px;font-weight:500;color:var(--text)">نقاط القوة: أجبت على كل الأسئلة صح 👏</div>`;
    }

    function renderReviewCard() {
      const card = document.getElementById("reviewCard");
      if (!card) return;
      const due = (state.reviewQueue || []).filter(item => item.dueAt <= Date.now());
      card.style.display = due.length ? "block" : "none";
      card.innerHTML = due.length ? `<div class="card"><h4>🔁 مراجعة الكلمات المستحقة</h4><p style="font-size:13px;margin-bottom:8px">عندك ${due.length} كلمة أو جملة للمراجعة.</p><button class="btn-primary" onclick="openReviewSession()">ابدأ المراجعة</button></div>` : "";
    }

    function ensureReviewItem(lessonId, vocabIndex, dueAt = Date.now() + 86400000) {
      if (!state.reviewQueue) state.reviewQueue = [];
      let item = state.reviewQueue.find(entry => entry.lessonId === lessonId && entry.vocabIndex === vocabIndex);
      if (!item) { item = { lessonId, vocabIndex, streak: 0, dueAt }; state.reviewQueue.push(item); }
      return item;
    }

    function scheduleLessonReview(lessonId) {
      const lesson = CURRICULUM.flatMap(unit => unit.nodes).find(node => node.id === lessonId && node.type === "lesson");
      if (lesson) lesson.vocab.forEach((_, index) => ensureReviewItem(lessonId, index));
    }

    function openReviewSession() {
      const due = (state.reviewQueue || []).filter(item => item.dueAt <= Date.now()).slice(0, 10);
      if (!due.length) { renderPath(); return; }
      const questions = due.map((item, qi) => {
        const lesson = CURRICULUM.flatMap(unit => unit.nodes).find(node => node.id === item.lessonId);
        if (!lesson || !lesson.vocab[item.vocabIndex]) return "";
        const vocab = lesson.vocab[item.vocabIndex];
        const options = getChoices(vocab.de, lesson, item.vocabIndex, entry => entry.de);
        return `<div class="card review-question" data-lesson-id="${lesson.id}" data-vocab-index="${item.vocabIndex}" data-answered="false"><h4>مراجعة ${qi + 1} • ${lesson.title}</h4><p style="margin-bottom:8px">${vocab.ar}</p><span class="vocab-actions">${speakerMarkup(vocabSpeech(vocab))}</span>${options.map(option => `<button class="quiz-opt ltr" data-correct="${option === vocab.de}" onclick="answerReview(this)">${option}</button>`).join("")}<div class="quiz-feedback"></div></div>`;
      }).join("");
      document.getElementById("overlayTitle").textContent = "مراجعة ذكية";
      document.getElementById("overlayXp").textContent = `${due.length} كلمات`;
      document.getElementById("overlayBody").innerHTML = `<div class="card"><h4>🧠 حاول تفتكر الأول</h4><p>اقرأ المعنى العربي واختر الجملة الألمانية، واسمع النطق لو احتجت.</p></div>${questions}<button class="btn-primary" onclick="closeOverlay();renderPath()">إنهاء المراجعة</button>`;
      bindSpeakButtons(document.getElementById("overlayBody"));
      document.getElementById("lessonOverlay").classList.add("open");
    }

    function answerReview(btn) {
      const question = btn.closest(".review-question");
      if (question.dataset.answered === "true") return;
      question.dataset.answered = "true";
      const options = question.querySelectorAll(".quiz-opt");
      options.forEach(option => option.disabled = true);
      const correctButton = Array.from(options).find(option => option.dataset.correct === "true");
      const item = ensureReviewItem(question.dataset.lessonId, Number(question.dataset.vocabIndex));
      if (btn.dataset.correct !== "true") markVocabularyMistake(question.dataset.lessonId, Number(question.dataset.vocabIndex));
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct", "pop-anim");
        item.streak = (item.streak || 0) + 1;
        if (item.streak >= 2) state.mistakes = (state.mistakes || []).filter(m => !(m.lessonId === item.lessonId && m.vocabIndex === item.vocabIndex));
        const days = [1, 3, 7, 14, 30][Math.min(item.streak - 1, 4)];
        item.dueAt = Date.now() + days * 86400000;
        question.querySelector(".quiz-feedback").textContent = `✅ ممتاز! هتراجعها بعد ${days} يوم.`;
      } else {
        btn.classList.add("wrong", "shake-anim");
        if (correctButton) correctButton.classList.add("correct");
        item.streak = 0;
        item.dueAt = Date.now() + 600000;
        question.querySelector(".quiz-feedback").textContent = `هنراجعها تاني بعد 10 دقايق. الصحيح: ${correctButton ? correctButton.textContent : ""}`;
      }
      saveState();
    }

    function switchTab(tab) {
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
      document.getElementById("view-" + tab).classList.add("active");
      document.querySelector(`.nav-item[data-tab="${tab}"]`).classList.add("active");

      if (tab === "vocab") renderVocabularyBank();
      if (tab === "chat" && state.freeChat.length === 0) initFreeChat();
    }

    let lessonSlides = [];
    let currentLesson = null;

    function openLesson(lesson) {
      activeCheckpoint = null;
      currentLesson = lesson;
      const isDone = state.completed.includes(lesson.id);
      lessonSlides = [
        { type: "intro", title: "هدف الدرس" },
        { type: "grammar", title: "افهم القاعدة" }
      ];
      if (lesson.id === "l16") lessonSlides.push({ type: "alphabet", title: "اسمع الحروف واحدًا واحدًا" });
      lesson.vocab.forEach((item, index) => {
        const opts = getChoices(item.de, lesson, index, e => e.de);
        lessonSlides.push({ type: "vocabPractice", title: `كلمة وسؤال ${index + 1} من ${lesson.vocab.length}`, item, index, question: `ما الألماني الصحيح لـ: ${item.ar}`, options: opts, answer: opts.indexOf(item.de), vocabIndex: index, speakText: vocabSpeech(item), explanation: `${item.de} = ${item.ar}` });
      });
      const orderSource = lesson.vocab.find(v => !v.de.includes("/") && (v.de.match(/\S+/g) || []).length >= 3 && (v.de.match(/\S+/g) || []).every(word => word.replace(/[.,!?]/g, "").length > 1));
      lessonSlides.push({ type: "writing", title: "اكتب جملتك" });
      const dictIdx = lesson.vocab.findIndex(v => v.kind !== "letter" && !/[\/,–]/.test(v.de) && v.de.split(/\s+/).length >= 2);
      if (dictIdx >= 0) lessonSlides.push({ type: "dictation", title: "إملاء من السمع", item: lesson.vocab[dictIdx], vocabIndex: dictIdx, tries: 0 });
      if (orderSource) {
        const tokens = orderSource.de.match(/\S+/g);
        const scrambled = [...tokens].map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
        if (scrambled.join(" ") === tokens.join(" ")) scrambled.reverse();
        lessonSlides.push({ type: "wordOrder", title: "ترتيب الجملة", tokens, scrambled, translation: orderSource.ar });
      }
      const grammarOptions = lesson.quiz.opts.map((text, index) => ({ text, correct: index === lesson.quiz.ans })).map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
      lessonSlides.push({ type: "quiz", title: "مراجعة القاعدة", question: lesson.quiz.q, options: grammarOptions.map(o => o.text), answer: grammarOptions.findIndex(o => o.correct), explanation: lesson.grammar });
      (lesson.extra || []).forEach(ex => {
        const o = ex.opts.map((text, index) => ({ text, correct: index === ex.ans })).map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
        lessonSlides.push({ type: "quiz", title: "تدريب إضافي", question: ex.q, options: o.map(x => x.text), answer: o.findIndex(x => x.correct), explanation: ex.e || lesson.grammar });
      });
      lessonSlides.push({ type: "recap", title: "خلاصة الدرس" });

      document.getElementById("overlayTitle").textContent = lesson.title;
      document.getElementById("overlayXp").textContent = `+${lesson.xp} XP`;
      document.getElementById("overlayBody").innerHTML = `<div class="lesson-hero"><div class="lesson-hero-top"><strong>📚 درس خطوة بخطوة</strong><span class="node-badge">سؤال واحد في كل مرة</span></div><div id="lessonStageTitle"></div><div class="progress-track"><div id="lessonProgressFill" class="progress-fill"></div></div></div><div id="lessonSlide"></div><div class="lesson-nav"><button id="lessonPrevBtn" class="btn-ghost" onclick="showLessonStep(Number(document.getElementById('overlayBody').dataset.step)-1)">رجوع</button><button id="lessonNextBtn" class="btn-primary" onclick="moveLessonStep()">التالي ←</button></div>`;
      const body = document.getElementById("overlayBody");
      body.dataset.lessonId = lesson.id;
      body.dataset.done = String(isDone);
      const resumeStep = !isDone ? (state.lessonProgress?.[lesson.id] || 0) : 0;
      const writingStep = lessonSlides.findIndex(slide => slide.type === "writing");
      body.dataset.practiceDone = String(isDone || resumeStep > writingStep);
      body.dataset.practiceReviewed = String(isDone || resumeStep > writingStep);
      document.getElementById("lessonOverlay").classList.add("open");
      showLessonStep(resumeStep);
    }

    function showLessonStep(step) {
      const body = document.getElementById("overlayBody");
      const index = Math.max(0, Math.min(lessonSlides.length - 1, step));
      const slide = lessonSlides[index];
      body.dataset.step = String(index);
      if (currentLesson && body.dataset.done !== "true") {
        state.lessonProgress = state.lessonProgress || {};
        state.lessonProgress[currentLesson.id] = index;
        saveState();
      }
      document.getElementById("lessonStageTitle").textContent = `الجزء ${index + 1} من ${lessonSlides.length} • ${slide.title}`;
      document.getElementById("lessonProgressFill").style.width = `${Math.round(((index + 1) / lessonSlides.length) * 100)}%`;
      document.getElementById("lessonPrevBtn").disabled = index === 0;
      const next = document.getElementById("lessonNextBtn");
      next.disabled = false;
      next.textContent = index === lessonSlides.length - 1 ? (body.dataset.done === "true" ? "إنهاء" : "إتمام الدرس واستلام النقاط") : "التالي ←";
      const target = document.getElementById("lessonSlide");
      target.classList.remove("slide-enter");
      void target.offsetWidth;
      target.classList.add("slide-enter");

      if (slide.type === "intro") {
        const estimatedMinutes = Math.max(4, Math.ceil((currentLesson.vocab.length * 40 + 90) / 60));
        target.innerHTML = `<div class="card"><h4>🎯 هدف الدرس</h4><p>${currentLesson.desc}</p><p style="color:var(--accent);font-size:12.5px;margin-top:6px">⏱️ ${estimatedMinutes} دقائق تقريبًا • ${currentLesson.vocab.length} كلمات وعبارات</p><p style="margin-top:8px;color:var(--muted)">هنتعلم خطوة خطوة، نطبق بجملة، وبعدها نراجع بأسئلة متفرقة. سؤال واحد في كل مرة.</p></div>`;
      } else if (slide.type === "alphabet") {
        const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","Ä","Ö","Ü","ß"];
        target.innerHTML = `<div class="card"><h4>🔤 اسمع كل حرف لوحده</h4><p style="font-size:13px;color:var(--muted)">اضغط على أي حرف لسماع نطقه بالألمانية، وكرره بصوتك.</p><div class="alpha-grid">${letters.map(letter => `<button type="button" class="alpha-btn" aria-label="اسمع الحرف ${letter}" onclick="speakLetterBtn(this, '${letter}')"><strong>${letter}</strong><span>🔊</span></button>`).join("")}</div></div>`;
      } else if (slide.type === "recap") {
        const recapItems = currentLesson.vocab.slice(0, 6).map(item => `<li>${colorGermanArticles(item.de)} — ${escapeHtml(item.ar)}</li>`).join("");
        target.innerHTML = `<div class="card"><h4>🧾 خلاصة الدرس</h4><p style="white-space:pre-line;line-height:1.9">${escapeHtml(currentLesson.grammar)}</p><hr style="border-color:var(--border);margin:10px 0"><ul style="padding-right:18px;line-height:2">${recapItems}</ul><p style="color:var(--success);font-weight:700;margin-top:8px">ممتاز! راجعت أهم النقاط، اضغط إتمام الدرس لاستلام نقاطك.</p></div>`;
      } else if (slide.type === "reviewIntro") {
        target.innerHTML = `<div class="card"><h4>🧠 وقت المراجعة</h4><p>خدت وقتك في التعلم والتطبيق. دلوقتي راجع الكلمات والقاعدة بأسئلة متفرقة، سؤال واحد في كل مرة.</p></div>`;
      } else if (slide.type === "grammar") {
        target.innerHTML = `<div class="card"><h4>📖 شرح القاعدة</h4><p style="white-space:pre-line;line-height:1.95">${currentLesson.grammar}</p><button class="btn-ghost" style="margin-top:12px" onclick="explainGrammarAI('${currentLesson.id}')">✨ شرح إضافي من المدرّب</button><div id="grammar-ai-box" class="ai-box" style="display:none"></div></div>`;
      } else if (slide.type === "vocabPractice") {
        target.innerHTML = `<div class="card" id="vocabLearnCard"><h4>📖 تعلّم الكلمة</h4><div class="vocab-de ltr" style="font-size:24px;margin:16px 0">${colorGermanArticles(slide.item.de)}</div><p>${escapeHtml(slide.item.ar)}</p><div class="vocab-actions">${speakerMarkup(vocabSpeech(slide.item))}</div><button class="btn-primary" style="margin-top:14px" onclick="startVocabQuiz()">اختبر نفسي ←</button></div><div class="card" id="vocabQuizCard" hidden><h4>🧠 سؤال واحد على الكلمة</h4><p style="font-size:17px;font-weight:700;margin:12px 0">${slide.question}</p>${slide.options.map((option, optionIndex) => `<button class="quiz-opt" data-correct="${optionIndex === slide.answer}" onclick="checkQuiz(this)">${escapeHtml(option)}</button>`).join("")}<div id="quizFeedback" class="quiz-feedback" aria-live="polite"></div></div>`;
        next.disabled = true;
      } else if (slide.type === "quiz" || slide.type === "listening") {
        const listening = slide.type === "listening";
        target.innerHTML = `<div class="card"><h4>${listening ? "👂 استماع فقط" : "🧠 سؤال واحد"}</h4><p style="font-size:17px;font-weight:700;margin:12px 0">${listening ? "اسمع الجملة واختر معناها" : slide.question}</p><div class="vocab-actions">${listening ? speakerMarkup(vocabSpeech(slide.item)) : (slide.vocabIndex !== undefined ? speakerMarkup(slide.speakText || slide.options[slide.answer]) : "")}</div>${slide.options.map((option, optionIndex) => `<button class="quiz-opt" data-correct="${optionIndex === slide.answer}" onclick="checkQuiz(this)">${escapeHtml(option)}</button>`).join("")}<div id="quizFeedback" class="quiz-feedback" aria-live="polite"></div></div>`;
        next.disabled = true;
      } else if (slide.type === "wordOrder") {
        target.innerHTML = `<div class="card"><h4>🧩 رتّب الكلمات لتكوين جملة</h4><p>${escapeHtml(slide.translation)}</p><div id="wordOrderBuilt" class="word-order-built" data-target="${escapeHtml(slide.tokens.join(" "))}" data-solved="false">اضغط الكلمات بالترتيب</div><div class="word-order-tiles">${slide.scrambled.map(word => `<button class="word-chip" onclick="selectWordToken(this)">${escapeHtml(word)}</button>`).join("")}</div><button class="btn-ghost" onclick="resetWordOrder()">إعادة المحاولة</button><div id="wordOrderFeedback" class="quiz-feedback"></div></div>`;
        next.disabled = true;
      } else if (slide.type === "dictation") {
        target.innerHTML = `<div class="card"><h4>🎧 اسمع واكتب</h4><p style="color:var(--muted);font-size:13px">اسمع الجملة واكتبها زي ما سمعتها. الحروف الكبيرة والترقيم مش مهمين، وتقدر تكتب ae بدل ä.</p><div class="vocab-actions">${speakerMarkup(vocabSpeech(slide.item))}</div><input id="dictInput" class="form-control ltr" style="margin-top:10px" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Schreib hier..." /><button class="btn-primary" onclick="checkDictation()">✅ تحقق</button><div id="quizFeedback" class="quiz-feedback" aria-live="polite"></div></div>`;
        next.disabled = true;
      } else if (slide.type === "writing") {
        target.innerHTML = `<div class="card"><h4>✍️ طبّق اللي اتعلمته</h4><p class="lesson-practice-prompt">اكتب جملة واحدة بالألماني عن موضوع الدرس. تقدر تتكلم بالميكروفون أو تكتبها.</p><textarea id="lessonPracticeInput" class="lesson-textarea" placeholder="Schreib deinen Satz hier..." oninput="invalidateLessonPractice()"></textarea><button id="lessonMicBtn" class="mic-btn" style="margin-top:8px" onclick="toggleMic(&quot;lesson&quot;)">🎙️ اتكلم بالألماني</button><button class="btn-primary" style="margin-top:10px" onclick="checkLessonPractice('${currentLesson.id}')">🤖 راجع الجملة</button><div id="lessonPracticeFeedback" class="lesson-feedback"></div></div>`;
        if (body.dataset.done !== "true") next.disabled = body.dataset.practiceReviewed !== "true";
      }
      bindSpeakButtons(target);
      document.getElementById("lessonOverlay").scrollTop = 0;
    }

    function speakLetterBtn(btn, letter) {
      document.querySelectorAll(".alpha-btn").forEach(b => b.classList.remove("speaking"));
      btn.classList.add("speaking");
      speakGerman(letter, 0.85);
      setTimeout(() => btn.classList.remove("speaking"), 750);
    }

    function moveLessonStep() {
      const body = document.getElementById("overlayBody");
      const index = Number(body.dataset.step || 0);
      if (index === lessonSlides.length - 1) {
        if (body.dataset.done === "true") closeOverlay();
        else if (body.dataset.practiceDone === "true") completeNode(currentLesson.id, currentLesson.xp);
        else showLessonStep(lessonSlides.findIndex(slide => slide.type === "writing"));
        return;
      }
      showLessonStep(index + 1);
    }

    function invalidateLessonPractice() {
      const body = document.getElementById("overlayBody");
      if (body && body.dataset.done !== "true") {
        body.dataset.practiceReviewed = "false";
        body.dataset.practiceDone = "false";
      }
      updateWritingNext();
    }

    function updateWritingNext() {
      const input = document.getElementById("lessonPracticeInput");
      const hasAnswer = Boolean(input?.value.trim());
      const body = document.getElementById("overlayBody");
      const approved = hasAnswer && body?.dataset.practiceReviewed === "true";
      const next = document.getElementById("lessonNextBtn");
      if (next) next.disabled = !approved;
      if (body) body.dataset.practiceDone = String(approved);
    }

    function selectWordToken(btn) {
      const tileArea = btn.parentElement;
      const built = document.getElementById("wordOrderBuilt");
      if (btn.disabled || built.dataset.solved === "true") return;
      btn.disabled = true;
      btn.classList.add("used");
      const current = built.dataset.current || "";
      built.dataset.current = current ? `${current} ${btn.textContent}` : btn.textContent;
      built.textContent = built.dataset.current;
      const selectedCount = tileArea.querySelectorAll(".word-chip.used").length;
      if (selectedCount === tileArea.querySelectorAll(".word-chip").length) {
        const expected = built.dataset.target.replace(/[.,!?]/g, "").toLowerCase();
        const actual = built.dataset.current.replace(/[.,!?]/g, "").toLowerCase();
        const feedback = document.getElementById("wordOrderFeedback");
        if (actual === expected) {
          built.dataset.solved = "true";
          built.classList.add("solved", "pop-anim");
          document.getElementById("lessonNextBtn").disabled = false;
          feedback.innerHTML = `<span style="color:var(--success)">✅ ${pickRandom(PRAISE_CORRECT)} الجملة مترتبة صح 100%!</span>`;
        } else {
          feedback.innerHTML = `<span style="color:var(--danger)">قربت! اضغط إعادة الترتيب وحاول تاني.</span>`;
        }
      }
    }

    function resetWordOrder() {
      const built = document.getElementById("wordOrderBuilt");
      if (built.dataset.solved === "true") return;
      built.dataset.current = "";
      built.textContent = "اضغط الكلمات بالترتيب";
      document.querySelectorAll(".word-chip").forEach(btn => { btn.disabled = false; btn.classList.remove("used"); });
      document.getElementById("wordOrderFeedback").textContent = "";
    }

    function startVocabQuiz() {
      const learn = document.getElementById("vocabLearnCard");
      const quiz = document.getElementById("vocabQuizCard");
      if (!learn || !quiz) return;
      learn.hidden = true;
      quiz.hidden = false;
    }

    function checkQuiz(btn) {
      const parent = btn.parentElement;
      if (parent.dataset.answered === "true") return;
      parent.dataset.answered = "true";
      const options = parent.querySelectorAll(".quiz-opt");
      options.forEach(option => { option.classList.remove("correct", "wrong", "pop-anim", "shake-anim"); option.disabled = true; });
      const correct = Array.from(options).find(option => option.dataset.correct === "true");
      const feedback = document.getElementById("quizFeedback");
      const slide = lessonSlides[Number(document.getElementById("overlayBody").dataset.step)];
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct", "pop-anim");
        document.getElementById("lessonNextBtn").disabled = false;
        feedback.innerHTML = `<span style="color:var(--success)">✅ ${pickRandom(PRAISE_CORRECT)}<br><small style="color:var(--text);font-weight:500">${slide.explanation || (slide.item ? `${slide.item.de} = ${slide.item.ar}` : "")}</small></span>`;
      } else {
        btn.classList.add("wrong", "shake-anim");
        if (correct) correct.classList.add("correct");
        if (slide.vocabIndex !== undefined) {
          markVocabularyMistake(currentLesson.id, slide.vocabIndex);
          const item = ensureReviewItem(currentLesson.id, slide.vocabIndex, Date.now() + 600000);
          item.streak = 0; item.dueAt = Date.now() + 600000; saveState();
        }
        feedback.innerHTML = `<span style="color:var(--accent)">💡 ${pickRandom(ENCOURAGE_RETRY)}<br><strong style="color:var(--success)">الإجابة الصحيحة: ${correct ? correct.textContent : ""}</strong></span>`;
      }
    }

    async function checkLessonPractice(lessonId) {
      const lesson = CURRICULUM.flatMap(u => u.nodes).find(n => n.id === lessonId);
      const input = document.getElementById("lessonPracticeInput");
      const output = document.getElementById("lessonPracticeFeedback");
      const answer = input.value.trim();
      output.style.display = "block";
      if (!answer) { output.textContent = "اكتب جملة أو جملتين بالألماني الأول، وبعدها أراجعهم لك."; return; }
      output.textContent = "⏳ المدرّب بيراجع إجابتك...";
      const prompt = `الدرس: ${lesson.title}\nالشرح: ${lesson.grammar}\nالكلمات: ${lesson.vocab.map(v => v.de).join(", ")}\nإجابة المتعلم: ${answer}`;
      let result;
      try {
        result = await callAI([{ role: "user", content: prompt }], "أنت مدرس ألماني مشجع لمتعلم عربي A1. راجع الجملة وصححها واشرح الخطأ بالعربية ببساطة، ثم أعط مثالاً قصيراً. لا تستخدم Markdown.");
      } catch (error) {
        result = `⚠️ تعذر مراجعة الجملة: ${error.message || "خطأ اتصال"}`;
      }
      output.textContent = result;
      if (String(result).startsWith("⚠️")) {
        document.getElementById("overlayBody").dataset.practiceReviewed = "false";
        invalidateLessonPractice();
        return;
      }
      document.getElementById("overlayBody").dataset.practiceReviewed = "true";
      output.textContent = "✅ راجع المدرب جملتك.\n" + result;
      updateWritingNext();
    }

    async function explainGrammarAI(lessonId) {
      const lesson = CURRICULUM.flatMap(u => u.nodes).find(n => n.id === lessonId);
      const box = document.getElementById("grammar-ai-box");
      box.style.display = "block";
      box.textContent = "⏳ جاري تحضير شرح مبسط...";
      const prompt = `اشرح هذه القاعدة الألمانية لمستوى A1 بالعامية المصرية البسيطة مع 3 أمثلة ألمانية مترجمة للعربية:\nالدرس: ${lesson.title}\nالقاعدة: ${lesson.grammar}`;
      const reply = await callAI([{ role: "user", content: prompt }], "أنت معلم لغة ألمانية تشرح بالعامية المصرية بوضوح واختصار.");
      box.textContent = reply;
    }

    async function explainVocabAI(lessonId, idx) {
      const lesson = CURRICULUM.flatMap(u => u.nodes).find(n => n.id === lessonId);
      const item = lesson.vocab[idx];
      const box = document.getElementById(`vocab-ai-${lessonId}-${idx}`);
      box.style.display = "block";
      box.textContent = "⏳ جاري توليد جملتين من الحياة اليومية...";
      const prompt = `أعطني جملتين قصيرتين جداً بالألمانية (مستوى A1) تستخدم فيهما: "${item.de}" (${item.ar}) مع الترجمة العربية لكل جملة.`;
      const reply = await callAI([{ role: "user", content: prompt }], "أنت معلم ألماني لمستوى A1. أجب باختصار شديد.");
      box.textContent = reply;
    }

    function openCheckpoint(cp) {
      activeCheckpoint = cp;
      document.getElementById("overlayTitle").textContent = cp.scenarioTitle;
      document.getElementById("overlayXp").textContent = `+${cp.xp} XP`;

      if (!state.cpChats[cp.id] || state.cpChats[cp.id].length === 0) {
        state.cpChats[cp.id] = [{ role: "ai", de: cp.starterDe, ar: cp.starterAr }];
        saveState(false);
      }

      const isDone = state.completed.includes(cp.id);
      const body = document.getElementById("overlayBody");
      body.innerHTML = `
        <div class="card" style="margin-bottom:10px;padding:12px 14px">
          <div style="font-size:13px;color:var(--accent);font-weight:700;margin-bottom:4px">🎯 المطلوب منك في المحادثة:</div>
          <div style="font-size:13px">${cp.scenarioGoal}</div>
        </div>

        <div class="chat-box" style="height:calc(100vh - 265px);min-height:360px">
          <div class="chat-context-banner">
            <span>🤖 محادثة تطبيقية على الدروس السابقة</span>
            <button class="btn-ghost" style="padding:3px 8px;font-size:11px" onclick="resetCheckpointChat('${cp.id}')">إعادة الحوار</button>
          </div>
          <div class="chat-messages" id="cpMessages"></div>
          <div class="chat-input-area">
            <button class="mic-btn" id="cpMicBtn" onclick="toggleMic('cp')" title="تحدث بالألمانية">🎙️</button>
            <input type="text" id="cpInput" class="chat-input ltr" placeholder="رد بالألماني أو اتكلم بالميكروفون..." onkeydown="if(event.key==='Enter') sendCheckpointMsg()" />
            <button class="send-btn" onclick="sendCheckpointMsg()">إرسال</button>
          </div>
        </div>

        <button class="btn-primary ${isDone ? "success" : ""}" style="margin-top:12px" onclick="completeNode('${cp.id}', ${cp.xp})">
          ${isDone ? "✅ تم اجتياز المحطة" : "🏁 أنهيت المحادثة — استلم النقاط"}
        </button>
      `;

      renderMessages("cpMessages", state.cpChats[cp.id]);
      document.getElementById("lessonOverlay").classList.add("open");
    }

    function resetCheckpointChat(cpId) {
      const cp = CURRICULUM.flatMap(u => u.nodes).find(n => n.id === cpId);
      state.cpChats[cpId] = [{ role: "ai", de: cp.starterDe, ar: cp.starterAr }];
      saveState(false);
      renderMessages("cpMessages", state.cpChats[cpId]);
    }

    async function sendCheckpointMsg() {
      if (!activeCheckpoint) return;
      const input = document.getElementById("cpInput");
      const text = input.value.trim();
      if (!text) return;

      input.value = "";
      const history = state.cpChats[activeCheckpoint.id];
      history.push({ role: "user", text });
      renderMessages("cpMessages", history);

      history.push({ role: "ai", de: "...", ar: "يكتب الرد..." });
      renderMessages("cpMessages", history);

      const sys = `${activeCheckpoint.systemPrompt}
اكتب جملة ألمانية قصيرة ثم ||| ثم ترجمتها بالعربية. استخدم ما أتمه الطالب فقط. لا Markdown أو ** أو عناوين أو قوائم.
${getStudiedSummary()}`;

      const apiMsgs = history.slice(0, -1).slice(-12).map(m => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.role === "user" ? m.text : m.de
      }));

      let rawReply = "";
      try { rawReply = await callAI(apiMsgs, sys); }
      catch (error) { rawReply = `⚠️ ${error.message || "تعذر الاتصال بالمدرب"}`; }
      if (rawReply.startsWith("⚠️")) {
        history[history.length - 1] = { role: "ai", de: rawReply, ar: "" };
        renderMessages("cpMessages", history);
        return;
      }
      const { de: dePart, ar: arPart } = parseAIChatReply(rawReply);
      history[history.length - 1] = { role: "ai", de: dePart, ar: arPart };
      saveState();
      renderMessages("cpMessages", history);
      if (dePart) speakGerman(dePart);
    }

    function completeNode(id, xp) {
      if (!state.completed.includes(id) && !isPathItemUnlocked(id)) {
        showToast("كمّل المحطة المفتوحة الأول عشان تفتح اللي بعدها 🔒", "default", "🔒");
        return;
      }
      if (!state.completed.includes(id)) {
        if (activeCheckpoint && !(state.cpChats[id] || []).some(m => m.role === "user")) { showToast("ابعت رد واحد على الأقل للمدرب الأول", "default", "💬"); return; }
        const rd = document.querySelectorAll(".reading-item");
        if (rd.length && [...rd].some(i => !i.querySelector(".quiz-opt.correct"))) { showToast("جاوب على كل الأسئلة صح الأول", "default", "📝"); return; }
      }
      updateDailyStreak();
      launchConfetti();
      if (!state.completed.includes(id)) {
        const lesson = CURRICULUM.flatMap(unit => unit.nodes).find(node => node.id === id && node.type === "lesson");
        state.completed.push(id);
        const finishedLessons = lesson ? CURRICULUM.flatMap(unit => unit.nodes).filter(node => node.type === "lesson" && state.completed.includes(node.id)).length : 0;
        const bonusXp = lesson && finishedLessons % 3 === 0 ? 15 : 0;
        const earnedXp = xp + bonusXp;
        state.xp += earnedXp;
        scheduleLessonReview(id);
        if (lesson) {
          const totalLessons = CURRICULUM.flatMap(unit => unit.nodes).filter(node => node.type === "lesson").length;
          const remaining = Math.max(0, totalLessons - finishedLessons);
          showToast(bonusXp ? `إنجاز رائع! خلصت ${finishedLessons} دروس وخدت مكافأة سلسلة. +${earnedXp} XP 🏅` : `عاش! خلصت درس جديد. فاضلك ${remaining} درسًا. +${earnedXp} XP 🎉`, "xp", bonusXp ? "🏅" : "⭐");
        } else {
          showToast(`عاش يا بطل! كسبت +${earnedXp} XP وخطوة جديدة في A1 🎉`, "xp", "🏆");
        }
      } else {
        showToast("مراجعة ممتازة! المعلومة بقت أرسخ في ذاكرتك 💪", "default", "✅");
      }
      saveState();
      renderPath();
      closeOverlay();
    }

    function closeOverlay() {
      clearInterval(mockTimerId);
      document.getElementById("lessonOverlay").classList.remove("open");
      activeCheckpoint = null;
    }

    function getStudiedSummary() {
      const doneNodes = CURRICULUM.flatMap(u => u.nodes).filter(n => state.completed.includes(n.id) && n.type === "lesson");
      if (!doneNodes.length) return "المتعلم في بداية A1 ولم ينهِ درساً بعد. لا تستخدم محتوى الدروس المقفولة.";
      const learnedWords = doneNodes.flatMap(n => n.vocab.map(v => `${v.de}=${v.ar}`)).slice(-22);
      const learnedRules = doneNodes.slice(-8).map(n => `${n.title}: ${n.grammar.replace(/\s+/g, " ").slice(0, 75)}`);
      return `قواعد ودروس مكتملة: ${learnedRules.join(" | ")}. كلمات تعلمها: ${learnedWords.join("؛ ")}. علّمه كلمة واحدة جديدة مع معناها فقط عند الحاجة.`.slice(0, 1250);
    }

    function getLearningSequence() {
      const sequence = [];
      CURRICULUM.forEach((unit, index) => {
        sequence.push(...unit.nodes);
        if (UNIT_TESTS[index]) sequence.push(UNIT_TESTS[index]);
      });
      return sequence;
    }

    function isPathItemUnlocked(id) {
      const sequence = getLearningSequence();
      const index = sequence.findIndex(item => item.id === id);
      if (index < 0) return false;
      return state.completed.includes(id) || sequence.slice(0, index).every(item => state.completed.includes(item.id));
    }

    function isCoursePathComplete() {
      return getLearningSequence().every(item => state.completed.includes(item.id));
    }

    function refreshChatTopics() {
      const chips = document.querySelectorAll("#scenarioChips .chip");
      chips.forEach(chip => {
        const topic = chip.dataset.topic || "";
        let required = [];
        if (topic.includes("عطلة نهاية الأسبوع")) required = ["l25"];
        else if (topic.includes("المقهى")) required = ["l4"];
        else if (topic.includes("التعارف")) required = ["l1"];
        else if (topic.includes("التسوق")) required = ["l5", "l6"];
        else if (topic.includes("الاتجاهات")) required = ["l10", "l15"];
        const locked = required.some(id => !state.completed.includes(id));
        chip.disabled = locked;
        chip.setAttribute("aria-disabled", String(locked));
        chip.title = locked ? "افتح الموضوع بعد إنهاء دروسه في المسار" : "";
        chip.classList.toggle("locked", locked);
      });
    }

    function initFreeChat() {
      state.freeChat = [
        { role: "ai", de: "Hallo! Ich bin dein Deutsch-Coach. Worüber möchtest du heute sprechen?", ar: "مرحباً! أنا مدربك للألمانية. عن ماذا تود أن تتحدث اليوم؟" }
      ];
      saveState(false);
      renderMessages("freeChatMessages", state.freeChat);
    }

    function resetFreeChat() { initFreeChat(); }

    document.getElementById("scenarioChips").addEventListener("click", e => {
      if (!e.target.classList.contains("chip") || e.target.disabled) return;
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      currentFreeTopic = e.target.dataset.topic;
      initFreeChat();
    });

    async function sendFreeChat() {
      const input = document.getElementById("freeChatInput");
      const text = input.value.trim();
      if (!text) return;

      input.value = "";
      state.freeChat.push({ role: "user", text });
      renderMessages("freeChatMessages", state.freeChat);

      state.freeChat.push({ role: "ai", de: "...", ar: "جاري الرد..." });
      renderMessages("freeChatMessages", state.freeChat);

      const sys = `أنت مدرب ألماني A1. موضوع الحوار: ${currentFreeTopic}.
اكتب جملة ألمانية قصيرة ثم ||| ثم ترجمتها بالعربية. استخدم أساساً ما أتمه الطالب. لا Markdown أو ** أو عناوين أو قوائم. إن احتجت كلمة جديدة، علّم كلمة واحدة مع ترجمتها.
${getStudiedSummary()}`;

      const apiMsgs = state.freeChat.slice(0, -1).slice(-12).map(m => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.role === "user" ? m.text : m.de
      }));

      let rawReply = "";
      try { rawReply = await callAI(apiMsgs, sys); }
      catch (error) { rawReply = `⚠️ ${error.message || "تعذر الاتصال بالمدرب"}`; }
      if (rawReply.startsWith("⚠️")) {
        state.freeChat[state.freeChat.length - 1] = { role: "ai", de: rawReply, ar: "" };
        renderMessages("freeChatMessages", state.freeChat);
        return;
      }
      const { de: dePart, ar: arPart } = parseAIChatReply(rawReply);
      state.freeChat[state.freeChat.length - 1] = { role: "ai", de: dePart, ar: arPart };
      saveState();
      renderMessages("freeChatMessages", state.freeChat);
      if (dePart) speakGerman(dePart);
    }

    function parseAIChatReply(raw) {
      const clean = value => String(value || "")
        .replace(/\\([*_#])/g, "$1")
        .replace(/```[\s\S]*?```/g, block => block.replace(/```\w*/g, ""))
        .replace(/\*\*|__|~~|`/g, "")
        .replace(/(^|\n)\s{0,3}#{1,6}\s*/g, "$1")
        .replace(/(^|\n)\s*[-*+]\s+/g, "$1")
        .replace(/[ \t]+\n/g, "\n")
        .trim();
      const text = clean(raw);
      const divider = text.indexOf("|||");
      if (divider >= 0) return { de: clean(text.slice(0, divider)), ar: clean(text.slice(divider + 3)) };
      const lines = text.split(/\n+/).map(line => line.trim()).filter(Boolean);
      const arabicLine = lines.findIndex(line => /[\u0600-\u06FF]/.test(line));
      if (arabicLine > 0) return { de: clean(lines.slice(0, arabicLine).join(" ")), ar: clean(lines.slice(arabicLine).join(" ")) };
      return { de: text, ar: "" };
    }

    function renderMessages(containerId, list) {
      const box = document.getElementById(containerId);
      if (!box) return;
      box.innerHTML = "";
      list.forEach(m => {
        const div = document.createElement("div");
        div.className = `msg ${m.role}`;
        if (m.role === "user") {
          div.innerHTML = `<div class="ltr">${escapeHtml(m.text)}</div>`;
        } else {
          div.innerHTML = `
            <div class="msg-de">${m.de === "..." ? '<div class="typing-dots"><span></span><span></span><span></span></div>' : escapeHtml(m.de)}</div>
            ${m.ar ? `<div class="msg-ar">${escapeHtml(m.ar)}</div>` : ""}
            ${m.de !== "..." ? `<span class="vocab-actions">${speakerMarkup(m.de)}</span>` : ""}
          `;
        }
        box.appendChild(div);
      });
      bindSpeakButtons(box);
      box.scrollTop = box.scrollHeight;
    }

    function escapeHtml(str) {
      return str.replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
    }

    function speakGerman(text, rate = 0.92) {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = "de-DE";
      utter.rate = rate;
      const voices = window.speechSynthesis.getVoices();
      const deVoice = voices.find(v => v.lang.toLowerCase().replace("_", "-").startsWith("de"));
      if (!deVoice && voices.length && !window._noDe) { window._noDe = true; showToast("جهازك مفيهوش صوت ألماني، ثبّته من إعدادات النظام (Text-to-speech)", "default", "🔈"); }
      if (deVoice) utter.voice = deVoice;
      window.speechSynthesis.speak(utter);
    }

    function toggleMic(target) {
      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRec) { alert("المتصفح لا يدعم التعرف على الصوت. استخدم Google Chrome."); return; }
      if (recognition && activeMicTarget === target) { recognition.stop(); return; }
      if (recognition) recognition.stop();
      recognition = new SpeechRec();
      recognition.lang = "de-DE";
      recognition.interimResults = false;
      activeMicTarget = target;

      const btnId = target === "cp" ? "cpMicBtn" : target === "lesson" ? "lessonMicBtn" : target === "goethe" ? "gxMicBtn" : "freeMicBtn";
      const inputId = target === "cp" ? "cpInput" : target === "lesson" ? "lessonPracticeInput" : target === "goethe" ? "gxSpeakingInput" : "freeChatInput";
      document.getElementById(btnId).classList.add("recording");

      recognition.onresult = e => {
        document.getElementById(inputId).value = e.results[0][0].transcript;
        if (target === "lesson") invalidateLessonPractice();
        if (target === "goethe") { const fb = document.getElementById("gxSpeakingFeedback"); if (fb) { fb.dataset.reviewed = "false"; fb.textContent = ""; } }
      };
      recognition.onerror = recognition.onend = () => {
        document.getElementById(btnId).classList.remove("recording");
        activeMicTarget = null;
      };
      recognition.start();
    }

    async function callAI(messages, systemInstruction) {
      const { aiMode, geminiKey, geminiModel, aiProxyUrl, ollamaUrl, ollamaModel } = state.settings;
      if (aiMode === "proxy") {
        if (!aiProxyUrl) return "⚠️ أدخل رابط الخادم الآمن واحفظ الإعدادات أولاً.";
        try { return await fetchAIProxy(aiProxyUrl, geminiModel, messages, systemInstruction); }
        catch (e) { return `⚠️ تعذر الاتصال بالخادم الآمن: ${e.message}`; }
      }
      const isLocalhost = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);

      if (aiMode === "ollama" || (aiMode === "auto" && isLocalhost)) {
        try { return await fetchOllama(ollamaUrl, ollamaModel, messages, systemInstruction); }
        catch (e) { if (aiMode === "ollama") return "⚠️ تعذر الاتصال بـ Ollama المحلي."; }
      }

      if (!geminiKey) return "⚠️ أضف مفتاح Gemini API في تبويب الإعدادات أو اختر الخادم الآمن.";

      const modelsToTry = [geminiModel, "gemini-3.5-flash-lite"].filter((v, i, a) => v && a.indexOf(v) === i);
      let lastErr = "";
      for (const model of modelsToTry) {
        try { return await fetchGemini(geminiKey, model, messages, systemInstruction); }
        catch (err) { lastErr = err.message; }
      }
      return `⚠️ تعذر الاتصال بالسيرفر حالياً (${lastErr}).`;
    }

    async function fetchAIProxy(url, model, messages, systemInstruction) {
      const safeModel = ["gemini-3.5-flash-lite"].includes(model) ? model : "gemini-3.5-flash-lite";
      const configuredUrl = url.trim().replace(/\/+$/, "");
      const endpoint = configuredUrl.endsWith("/api/chat") ? configuredUrl : configuredUrl + "/api/chat";
      const apiMessages = messages.map(message => ({
        role: message.role === "user" ? "user" : "model",
        content: message.content
      }));
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...(SEND_AUTH_TO_PROXY && supabaseSession ? { Authorization: "Bearer " + supabaseSession.access_token } : {}) },
        body: JSON.stringify({ model: safeModel, messages: apiMessages, systemInstruction })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      return data.text || "لم يصل رد من الخادم.";
    }

    async function fetchOllama(url, model, messages, systemInstruction) {
      const res = await fetch(`${url.replace(/\/$/, "")}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, stream: false, messages: [{ role: "system", content: systemInstruction }, ...messages] })
      });
      let data = null;
      try { data = await res.json(); } catch (e) {}
      if (!res.ok) throw new Error((data && data.error) || ("Ollama HTTP " + res.status));
      const text = data && data.message && data.message.content;
      if (!text) throw new Error("رد فاضي من الموديل");
      return text;
    }

    async function fetchGemini(key, model, messages, systemInstruction) {
      const contents = messages.map(m => ({ role: m.role === "user" ? "user" : "model", parts: [{ text: m.content }] }));
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemInstruction: { parts: [{ text: systemInstruction }] }, contents })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || `HTTP ${res.status}`);
      return data.candidates[0].content.parts[0].text;
    }

    function arErr(m) {
      m = String(m || "");
      const t = [[/invalid login/i, "البريد أو كلمة المرور غير صحيحة."], [/not confirmed/i, "لازم تأكد بريدك من رسالة التفعيل الأول."], [/already registered/i, "البريد ده مسجل بالفعل، جرّب تسجيل الدخول."], [/rate limit|too many/i, "محاولات كتير، استنى شوية وجرّب تاني."], [/fetch|network/i, "تعذر الاتصال بالإنترنت، تأكد من الشبكة وجرّب تاني."], [/password/i, "كلمة المرور غير مقبولة (8 أحرف على الأقل)."]];
      for (const [r, a] of t) if (r.test(m)) return a;
      return "حصلت مشكلة: " + m;
    }
    function setAuthStatus(message) {
      ["authGateStatus", "supabaseStatus"].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = message;
      });
    }

    function setAuthGateVisible(visible) {
      const gate = document.getElementById("authGate");
      if (gate) gate.hidden = !visible;
    }

    function showAuthPanel(recovery) {
      passwordRecoveryMode = recovery;
      document.getElementById("authLoginPanel").hidden = recovery;
      document.getElementById("authRecoveryPanel").hidden = !recovery;
      document.getElementById("authRetryButton").hidden = recovery;
    }

    function resetProgressState() {
      state = JSON.parse(JSON.stringify(DEFAULT_STATE));
      renderPath();
      updateHeaderUI();
    }

    function initializeSupabase() {
      if (!window.supabase?.createClient) {
        setAuthStatus("تعذر تحميل خدمة الحسابات. تأكد من اتصال الإنترنت ثم حدّث الصفحة.");
        return null;
      }
      if (supabaseClient) return supabaseClient;
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });
      supabaseClient.auth.onAuthStateChange((event, session) => {
        supabaseSession = session;
        if (event === "PASSWORD_RECOVERY") {
          showAuthPanel(true);
          setAuthGateVisible(true);
          setAuthStatus("اكتب كلمة المرور الجديدة لحسابك.");
          return;
        }
        if (session) {
          if (!window._synced) setAuthGateVisible(true);
          setAuthStatus(`جاري تحميل تقدم حساب ${session.user.email}...`);
          updateHeaderUI();
          if (event === "SIGNED_IN" || event === "INITIAL_SESSION" || event === "TOKEN_REFRESHED") {
            setTimeout(() => syncSupabase(false), 0);
          }
        } else {
          if (event === "SIGNED_OUT") { window._synced = false; resetProgressState(); }
          if (event === "SIGNED_OUT") showAuthPanel(false);
          setAuthGateVisible(true);
          setAuthStatus(event === "INITIAL_SESSION" ? "سجّل الدخول أو أنشئ حسابًا للبدء." : "تم تسجيل الخروج.");
          updateHeaderUI();
        }
      });
      return supabaseClient;
    }

    async function signUpSupabase() {
      const client = initializeSupabase();
      const email = document.getElementById("supabaseEmail").value.trim();
      const password = document.getElementById("supabasePassword").value;
      if (!client) return;
      if (!email || password.length < 8) { setAuthStatus("اكتب بريدًا صحيحًا وكلمة مرور من 8 أحرف على الأقل."); return; }
      setAuthStatus("جاري إنشاء الحساب...");
      const { data, error } = await client.auth.signUp({ email, password });
      if (error) setAuthStatus(arErr(error.message));
      else if (data.session) setAuthStatus("تم إنشاء الحساب. جاري تحميل تقدمك...");
      else setAuthStatus("تم إنشاء الحساب. افتح رسالة التأكيد في بريدك ثم ارجع وسجّل الدخول.");
    }

    async function signInSupabase() {
      const client = initializeSupabase();
      const email = document.getElementById("supabaseEmail").value.trim();
      const password = document.getElementById("supabasePassword").value;
      if (!client) return;
      if (!email || !password) { setAuthStatus("اكتب البريد الإلكتروني وكلمة المرور."); return; }
      setAuthStatus("جاري تسجيل الدخول...");
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) setAuthStatus(arErr(error.message));
    }

    async function sendPasswordReset() {
      const client = initializeSupabase();
      const email = document.getElementById("supabaseEmail").value.trim();
      if (!client) return;
      if (!email) { setAuthStatus("اكتب بريدك الإلكتروني أولاً، ثم اضغط نسيت كلمة المرور."); return; }
      setAuthStatus("جاري إرسال رابط استعادة كلمة المرور...");
      const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
      if (error) setAuthStatus(arErr(error.message));
      else setAuthStatus("لو البريد مسجل، هيوصلك رابط استعادة. افتحه من نفس المتصفح واكتب كلمة مرور جديدة.");
    }

    async function applyPasswordReset() {
      const password = document.getElementById("newSupabasePassword").value;
      if (password.length < 8) { setAuthStatus("كلمة المرور لازم تكون 8 أحرف على الأقل."); return; }
      setAuthStatus("جاري تحديث كلمة المرور...");
      const { error } = await supabaseClient.auth.updateUser({ password });
      if (error) { setAuthStatus(arErr(error.message)); return; }
      document.getElementById("newSupabasePassword").value = "";
      showAuthPanel(false);
      setAuthStatus("تم تحديث كلمة المرور. جاري تحميل تقدمك...");
      await syncSupabase(false);
    }

    async function cancelPasswordReset() {
      showAuthPanel(false);
      if (supabaseClient && supabaseSession) await supabaseClient.auth.signOut();
      else setAuthStatus("اكتب بريدك وكلمة المرور لتسجيل الدخول.");
    }

    async function resetMyProgress() {
      const client = initializeSupabase();
      if (!client || !supabaseSession) {
        setAuthStatus("سجّل الدخول أولاً عشان تصفّر تقدم حسابك السحابي.");
        return;
      }
      const confirmed = window.confirm("هتبدأ من الصفر؟ هيتصفّر تقدم حسابك الحالي فقط: الدروس المكتملة، النقاط، المحادثات والمراجعات. حساب الدخول وإعدادات AI مش هيتحذفوا.");
      if (!confirmed) return;
      const previousState = JSON.parse(JSON.stringify(state));
      clearTimeout(supabaseSyncTimer);
      setAuthStatus("جاري تصفير تقدم حسابك على السحابة...");
      state.completed = [];
      state.xp = 0;
      state.streakDays = 1;
      state.lastActiveDate = "";
      state.freeChat = [];
      state.cpChats = {};
      state.reviewQueue = [];
      state.mistakes = [];
      state.resetAt = Date.now();
      state.lessonProgress = {};
      state.lessonFlowVersion = LESSON_FLOW_VERSION;
      legacyProgressPending = false;
      renderPath();
      updateHeaderUI();
      let saved = false;
      try { saved = await pushSupabaseProgress(); }
      catch (error) { setAuthStatus(`تعذر تصفير التقدم: ${error.message}`); }
      if (!saved) {
        state = previousState;
        renderPath();
        updateHeaderUI();
        setAuthStatus("ماقدرناش نحفظ التصفير. تقدمك القديم ما زال محفوظًا.");
        return;
      }
      try { localStorage.removeItem(LOCAL_PROGRESS_KEY); } catch {}
      setAuthStatus("✅ تم تصفير تقدم حسابك السحابي. تقدر تبدأ أول درس من جديد.");
      showToast("بداية جديدة! خطوة صغيرة النهارده تكفي ⭐", "xp", "🚀");
    }

    async function signOutSupabase() {
      if (supabaseClient) await supabaseClient.auth.signOut();
    }

    function debouncedSupabasePush() {
      clearTimeout(supabaseSyncTimer);
      supabaseSyncTimer = setTimeout(() => pushSupabaseProgress(), 1800);
    }

    async function pushSupabaseProgress() {
      if (!supabaseClient || !supabaseSession) return false;
      const { error } = await supabaseClient.from("user_progress").upsert({ user_id: supabaseSession.user.id, payload: getSyncPayload(), updated_at: new Date().toISOString() }, { onConflict: "user_id" });
      if (error) { setAuthStatus(`فشل حفظ التقدم: ${error.message}`); return false; }
      return true;
    }

    async function syncSupabase(manual = true) {
      const client = initializeSupabase();
      if (!client) return;
      const { data: sessionData } = await client.auth.getSession();
      supabaseSession = sessionData.session;
      if (!supabaseSession) { setAuthGateVisible(true); setAuthStatus("سجّل الدخول أو أنشئ حسابًا للبدء."); return; }
      setAuthStatus("جاري تحميل تقدمك وحفظه...");
      const { data, error } = await client.from("user_progress").select("payload").eq("user_id", supabaseSession.user.id).maybeSingle();
      if (error) { setAuthGateVisible(true); setAuthStatus(`تعذر تحميل التقدم: ${error.message}`); return; }
      if (data?.payload) {
        const remote = data.payload;
        if ((remote.resetAt || 0) > (state.resetAt || 0)) { state.completed = []; state.xp = 0; state.cpChats = {}; state.reviewQueue = []; state.mistakes = []; state.lessonProgress = {}; state.resetAt = remote.resetAt; }
        state.completed = Array.from(new Set([...(state.completed || []), ...(remote.completed || [])]));
        state.xp = Math.max(state.xp || 0, remote.xp || 0);
        state.cpChats = { ...(remote.cpChats || {}), ...(state.cpChats || {}) };
        if ((remote.lessonFlowVersion || 1) < LESSON_FLOW_VERSION) state.lessonProgress = {};
        else state.lessonProgress = { ...(remote.lessonProgress || {}), ...(state.lessonProgress || {}) };
        state.lessonFlowVersion = LESSON_FLOW_VERSION;
        state.mistakes = Array.from(new Map([...(remote.mistakes || []), ...(state.mistakes || [])].map(item => [`${item.lessonId}:${item.vocabIndex}`, item])).values());
        const reviewMap = new Map([...(remote.reviewQueue || []), ...(state.reviewQueue || [])].map(item => [`${item.lessonId}:${item.vocabIndex}`, item]));
        state.reviewQueue = Array.from(reviewMap.values());
        if ((remote.lastActiveDate || "") >= (state.lastActiveDate || "")) state.streakDays = remote.streakDays || state.streakDays || 1;
        state.lastActiveDate = [remote.lastActiveDate, state.lastActiveDate].filter(Boolean).sort().at(-1) || "";
      }
      updateDailyStreak();
      renderPath();
      const saved = await pushSupabaseProgress();
      if (!saved) { setAuthGateVisible(true); return; }
      try { localStorage.removeItem(LOCAL_PROGRESS_KEY); } catch {}
      legacyProgressPending = false;
      window._synced = true;
      setAuthStatus(`✅ تم تحميل وحفظ تقدم ${supabaseSession.user.email} على السحابة.`);
      setAuthGateVisible(false);
      updateHeaderUI();
    }

    function populateSettingsUI() {
      const s = state.settings;
      document.getElementById("aiMode").value = s.aiMode;
      document.getElementById("geminiKey").value = s.geminiKey;
      document.getElementById("geminiModel").value = s.geminiModel;
      document.getElementById("aiProxyUrl").value = s.aiProxyUrl || "";
      document.getElementById("ollamaUrl").value = s.ollamaUrl;
      document.getElementById("ollamaModel").value = s.ollamaModel;
    }

    function saveSettings() {
      state.settings.aiMode = document.getElementById("aiMode").value;
      state.settings.geminiKey = document.getElementById("geminiKey").value.trim();
      state.settings.geminiModel = document.getElementById("geminiModel").value.trim() || "gemini-3.5-flash-lite";
      state.settings.aiProxyUrl = document.getElementById("aiProxyUrl").value.trim();
      state.settings.ollamaUrl = document.getElementById("ollamaUrl").value.trim() || "http://localhost:11434";
      state.settings.ollamaModel = document.getElementById("ollamaModel").value.trim() || "qwen3:14b";
      saveState(false);
      document.getElementById("aiStatus").innerHTML = `<span style="color:var(--success)">✅ تم تطبيق الإعدادات لهذه الجلسة.</span>`;
    }

    async function testAI() {
      saveSettings();
      const st = document.getElementById("aiStatus");
      st.textContent = "⏳ جاري اختبار الاتصال...";
      const res = await callAI([{ role: "user", content: "Say: Hallo!" }], "Reply with Hallo! only.");
      st.innerHTML = res.startsWith("⚠️") ? `<span style="color:var(--danger)">${res}</span>` : `<span style="color:var(--success)">✅ الاتصال ناجح! الرد: ${res}</span>`;
    }

    function getSyncPayload() {
      return { lessonFlowVersion: LESSON_FLOW_VERSION, completed: state.completed, xp: state.xp, streakDays: state.streakDays || 1, lastActiveDate: state.lastActiveDate || "", resetAt: state.resetAt || 0, cpChats: Object.fromEntries(Object.entries(state.cpChats || {}).map(([k, v]) => [k, v.slice(-30)])), reviewQueue: state.reviewQueue || [], lessonProgress: state.lessonProgress || {}, mistakes: state.mistakes || [], updatedAt: Date.now() };
    }

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible" && supabaseSession) syncSupabase(false);
    });

    function continueAsGuest() {
      setAuthGateVisible(false); renderPath(); updateHeaderUI();
      showToast("وضع الزائر: تقدمك محفوظ على جهازك فقط", "default", "👤");
    }
    if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
    populateSettingsUI();
    initializeSupabase();
    renderPath();
    updateHeaderUI();

function checkDictation() {
  const slide = lessonSlides[Number(document.getElementById("overlayBody").dataset.step)];
  const norm = normGerman;
  const val = document.getElementById("dictInput").value, fb = document.getElementById("quizFeedback");
  if (!val.trim()) { fb.textContent = "اكتب اللي سمعته الأول."; return; }
  if (norm(val) === norm(slide.item.de)) {
    fb.innerHTML = `<span style="color:var(--success)">✅ ${pickRandom(PRAISE_CORRECT)}<br><small style="color:var(--text)">${escapeHtml(slide.item.de)} = ${escapeHtml(slide.item.ar)}</small></span>`;
    document.getElementById("lessonNextBtn").disabled = false; return;
  }
  slide.tries++; markVocabularyMistake(currentLesson.id, slide.vocabIndex); saveState(false);
  if (slide.tries >= 2) { fb.innerHTML = `<span style="color:var(--accent)">الجملة الصحيحة: <strong class="ltr">${escapeHtml(slide.item.de)}</strong></span>`; document.getElementById("lessonNextBtn").disabled = false; }
  else fb.innerHTML = `<span style="color:var(--accent)">💡 قربت، اسمع تاني وحاول مرة كمان.</span>`;
}
function openMistakesReview() {
  const ms = state.mistakes || [];
  if (!ms.length) { showToast("مفيش أخطاء محفوظة دلوقتي 👏", "default", "✅"); return; }
  ms.forEach(m => { ensureReviewItem(m.lessonId, m.vocabIndex).dueAt = 0; });
  openReviewSession();
}
function openNodeById(id) {
  const n = CURRICULUM.flatMap(u => u.nodes).find(x => x.id === id); if (!n) return;
  if (n.type === "checkpoint") openCheckpoint(n); else if (n.type === "writing_exam") openWritingExamLesson(n); else if (n.type === "reading") openReadingLesson(n); else openLesson(n);
}
function openGoetheExam() {
  const G = {
    "Hören": [
      ["Der Zug nach Hamburg fährt um zehn Uhr dreißig von Gleis fünf ab.", "Der Zug fährt um 10:30 Uhr.", true, "صحيح: zehn Uhr dreißig = 10:30."],
      ["Entschuldigung, die Apotheke ist neben dem Supermarkt, links.", "Die Apotheke ist rechts.", false, "خطأ: قال links أي يساراً."],
      ["Ich habe zwei Brüder und eine Schwester.", "Er hat drei Geschwister.", true, "صحيح: أخوان + أخت = 3."],
      ["Der Kaffee kostet drei Euro, der Tee zwei Euro fünfzig.", "Der Tee ist teurer als der Kaffee.", false, "خطأ: الشاي 2,50 والقهوة 3,00."],
      ["Wir haben am Samstag um acht Uhr einen Deutschkurs.", "Der Kurs ist am Sonntag.", false, "خطأ: الكورس يوم السبت (Samstag)."]
    ],
    "Lesen": [
      ["Liebe Anna, ich komme am Freitag um 17 Uhr in Köln an. Kannst du mich vom Bahnhof abholen? Viele Grüße, Tom", "Tom kommt am Freitag in Köln an.", true, "صحيح: am Freitag um 17 Uhr in Köln an."],
      ["Supermarkt Frisch: Montag bis Samstag 8–20 Uhr. Sonntag geschlossen.", "Am Sonntag ist der Supermarkt offen.", false, "خطأ: geschlossen تعني مغلق."],
      ["Praxis Dr. Klein. Sprechstunde: Dienstag und Donnerstag 9–12 Uhr.", "Man kann am Mittwoch zu Dr. Klein gehen.", false, "خطأ: المواعيد الثلاثاء والخميس فقط."],
      ["Zimmer frei! 2 Zimmer, Küche, Bad, 480 Euro Miete. Tel. 0151-23456.", "Die Wohnung hat drei Zimmer.", false, "خطأ: 2 Zimmer أي غرفتان."],
      ["Hallo, ich bin Maria. Ich komme aus Italien und wohne seit zwei Jahren in Berlin.", "Maria wohnt in Italien.", false, "خطأ: ماريا من إيطاليا لكنها تسكن في برلين."]
    ]
  };
  document.getElementById("overlayTitle").textContent = "تدريب نهائي على مهارات A1 الأربع";
  document.getElementById("overlayXp").textContent = "+50 XP";
  const body = document.getElementById("overlayBody");
  body.innerHTML = `<div class="card"><h4>🎓 تدريب نهائي متكامل</h4><p style="font-size:13.5px;color:var(--muted);line-height:1.8">هتعدّي على أربع مهارات: الاستماع بدون نص، القراءة، كتابة رسالة قصيرة، ثم تقديم نفسك بالألماني. جاوب على الأقسام بالترتيب؛ تحتاج 3/5 في الاستماع والقراءة، وإجابة يراجعها المدرب في الكتابة والمحادثة. ده تدريب تعليمي وليس امتحان Goethe رسمي.</p></div>` +
    Object.entries(G).map(([sec, arr]) => arr.map((q, i) => `<div class="card gx-item" data-sec="${sec}" data-ok="${q[2]}" data-e="${escapeHtml(q[3])}"><h4><span>${sec} ${i + 1}/5</span><span class="vocab-actions">${sec === "Hören" ? speakerMarkup(q[0]) : ""}</span></h4>${sec === "Hören" ? "" : `<div class="reading-passage">${escapeHtml(q[0])}</div>`}<p style="font-weight:700;margin-top:8px">الجملة: <span class="ltr" style="color:var(--accent)">${escapeHtml(q[1])}</span></p><div class="rf-row"><button class="quiz-opt" style="text-align:center;font-weight:800" onclick="answerGx(this, true)">✅ Richtig</button><button class="quiz-opt" style="text-align:center;font-weight:800" onclick="answerGx(this, false)">❌ Falsch</button></div><div class="quiz-feedback"></div></div>`).join("")).join("") +
    `<button class="btn-primary" onclick="finishGx()">اعرض نتيجة الاستماع والقراءة</button><div id="gxResult" class="lesson-feedback"></div>
    <section id="gxWritingSection" class="card" style="display:none;margin-top:12px">
      <h3>✍️ 3) الكتابة</h3><p>اكتب رسالة قصيرة لصديق: اقترح مقابلة، اذكر اليوم والوقت، واطلب منه الرد.</p>
      <textarea id="gxWritingInput" class="lesson-textarea ltr" rows="5" placeholder="Hallo ..."></textarea>
      <button id="gxWritingReviewBtn" class="btn-primary" onclick="reviewGoetheAnswer('writing')">🤖 راجع كتابتي</button><div id="gxWritingFeedback" class="lesson-feedback"></div>
    </section>
    <section id="gxSpeakingSection" class="card" style="display:none;margin-top:12px">
      <h3>🎙️ 4) المحادثة والنطق</h3><p>عرّف بنفسك بالألماني: اسمك، بلدك، مكان سكنك، لغتك، وما تحب. تقدر تكتب أو تستخدم الميكروفون.</p>
      <textarea id="gxSpeakingInput" class="lesson-textarea ltr" rows="4" placeholder="Ich heiße ..."></textarea>
      <button id="gxMicBtn" class="mic-btn" style="margin-top:8px" onclick="toggleMic('goethe')">🎙️ سجّل إجابتك بالألمانية</button>
      <button id="gxSpeakingReviewBtn" class="btn-primary" onclick="reviewGoetheAnswer('speaking')">🤖 راجع إجابتي</button><div id="gxSpeakingFeedback" class="lesson-feedback"></div>
    </section>
    <div id="gxFinalWrap" style="display:none;margin-top:12px"><button class="btn-primary" onclick="finishGoetheSkills()">إنهاء التدريب واستلام الشارة</button><div id="gxFinalResult" class="lesson-feedback"></div></div>`;
  bindSpeakButtons(body);
  document.getElementById("lessonOverlay").classList.add("open");
}
function answerGx(btn, v) {
  const it = btn.closest(".gx-item"); if (it.dataset.done) return; it.dataset.done = "1";
  const ok = String(v) === it.dataset.ok; it.dataset.score = ok ? "1" : "0";
  btn.classList.add(ok ? "correct" : "wrong", ok ? "pop-anim" : "shake-anim");
  it.querySelector(".quiz-feedback").innerHTML = `<span style="color:${ok ? "var(--success)" : "var(--accent)"}">${ok ? "✅" : "💡"} ${escapeHtml(it.dataset.e)}</span>`;
}
function finishGx() {
  const items = [...document.querySelectorAll(".gx-item")];
  if (items.some(i => !i.dataset.done)) { showToast("جاوب على كل الأسئلة الأول", "default", "📝"); return; }
  const sc = sec => items.filter(i => i.dataset.sec === sec && i.dataset.score === "1").length;
  const h = sc("Hören"), l = sc("Lesen"), pass = h >= 3 && l >= 3, r = document.getElementById("gxResult");
  r.style.display = "block";
  r.innerHTML = `<strong>الاستماع ${h}/5 • القراءة ${l}/5</strong><br>${pass ? "🎉 ممتاز! افتح قسمي الكتابة والمحادثة بالأسفل عشان تكمل المهارتين." : "تحتاج 3/5 على الأقل في كل جزء. راجع الدروس ثم أعد التدريب."}<br><small>${h < 3 ? "قوّي الاستماع: اسمع الجمل بتركيز وكررها. " : ""}${l < 3 ? "قوّي القراءة: راجع الكلمات والأوقات." : ""}</small>`;
  const writing = document.getElementById("gxWritingSection"), speaking = document.getElementById("gxSpeakingSection"), final = document.getElementById("gxFinalWrap");
  writing.style.display = pass ? "block" : "none";
  speaking.style.display = pass ? "block" : "none";
  final.style.display = pass ? "block" : "none";
  if (!pass) { writing.style.display = "none"; speaking.style.display = "none"; }
}
async function reviewGoetheAnswer(skill) {
  const writing = skill === "writing";
  const input = document.getElementById(writing ? "gxWritingInput" : "gxSpeakingInput");
  const output = document.getElementById(writing ? "gxWritingFeedback" : "gxSpeakingFeedback");
  const button = document.getElementById(writing ? "gxWritingReviewBtn" : "gxSpeakingReviewBtn");
  const answer = input.value.trim(), words = answer.split(/\s+/).filter(Boolean).length;
  output.style.display = "block";
  if (words < (writing ? 15 : 10)) { output.textContent = writing ? "اكتب 15 كلمة ألمانية على الأقل عشان تكون الرسالة قابلة للمراجعة." : "اكتب أو قل 10 كلمات ألمانية على الأقل عشان نراجع التعريف بنفسك."; return; }
  button.disabled = true; output.textContent = "⏳ المدرب بيراجع إجابتك...";
  const task = writing
    ? "المطلوب: رسالة قصيرة لصديق تقترح فيها مقابلة، وتحدد اليوم والوقت، وتطلب الرد. قيّم إنجاز هذه النقاط ووضوح الرسالة والقواعد الأساسية."
    : "المطلوب: تعريف بالنفس يتضمن الاسم والبلد ومكان السكن واللغة وشيئاً يحبه المتعلم. قيّم اكتمال المعلومات والنطق الكتابي والقواعد البسيطة.";
  const prompt = `المهارة: ${writing ? "الكتابة" : "إجابة محادثة مكتوبة/مفرغة صوتياً"}\n${task}\nنص المتعلم: ${answer}\nقدّم ملاحظتين محددتين بالعربية ثم نسخة ألمانية مصححة قصيرة. لا Markdown.`;
  let result;
  try { result = await callAI([{ role: "user", content: prompt }], "أنت مدرس ألماني A1. شجّع المتعلم وكن دقيقاً. لا تمنح شهادة أو درجة رسمية؛ وضّح ما أتقنه وما يحسّنه. لا تستخدم Markdown أو علامات النجمة."); }
  catch (error) { result = `⚠️ تعذر مراجعة الإجابة: ${error.message || "خطأ اتصال"}`; }
  button.disabled = false;
  if (input.value.trim() !== answer) { output.dataset.reviewed = "false"; output.textContent = "اتغيرت الإجابة أثناء المراجعة؛ ابعتها للمدرب مرة أخرى."; return; }
  output.textContent = result;
  if (String(result).startsWith("⚠️")) return;
  output.textContent = "✅ تمت مراجعة إجابتك.\n" + result;
  output.dataset.reviewed = "true";
  input.oninput = () => { output.dataset.reviewed = "false"; document.getElementById("gxFinalResult").textContent = "عدّلت إجابتك؛ راجعها مرة أخرى قبل الإنهاء."; };
}
function finishGoetheSkills() {
  const items = [...document.querySelectorAll(".gx-item")];
  if (items.some(i => !i.dataset.done)) { showToast("جاوب على أسئلة الاستماع والقراءة كلها.", "default", "📝"); return; }
  const score = sec => items.filter(i => i.dataset.sec === sec && i.dataset.score === "1").length;
  const h = score("Hören"), l = score("Lesen");
  if (h < 3 || l < 3) { showToast("أعد الاستماع والقراءة واجتز 3 من 5 في كل قسم.", "default", "🔁"); return; }
  if (document.getElementById("gxWritingFeedback").dataset.reviewed !== "true" || document.getElementById("gxSpeakingFeedback").dataset.reviewed !== "true") {
    showToast("أرسل الكتابة والمحادثة للمدرب للمراجعة أولاً.", "default", "🤖"); return;
  }
  const result = document.getElementById("gxFinalResult");
  result.style.display = "block";
  if (!state.completed.includes("goethe-mock")) {
    state.completed.push("goethe-mock"); state.xp += 50; updateDailyStreak(); saveState(); renderPath(); launchConfetti();
  }
  result.innerHTML = `🏅 اكتمل تدريبك على المهارات الأربع!<br>الاستماع ${h}/5 • القراءة ${l}/5 • الكتابة تمت مراجعتها • المحادثة تمت مراجعتها.<br><small>حصلت على 50 XP. التدريب لا يُعد شهادة أو نتيجة رسمية من Goethe.</small>`;
}

function normGerman(t) {
  return String(t).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").replace(/[.,!?]/g, "").replace(/\s+/g, " ").trim();
}
