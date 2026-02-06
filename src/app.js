        // ==================== I18N ====================
        const i18n = {
            en: {
                appName: '🧰 ToolBox Pro',
                appDesc: 'Free Online Utility Tools - Fast, Secure, Easy',
                navPassword: '🔐 Password', navQR: '📱 QR Code', navColor: '🎨 Color',
                navConverter: '🔄 Converter', navCalc: '🧮 Calculator', navEncoder: '🔀 Encoder',
                navText: '📝 Text', navJSON: '📋 JSON',
                pwTitle: '🔐 Password Generator', pwDesc: 'Create strong, secure passwords with custom options',
                pwResult: 'Generated Password', clickGenerate: 'Click Generate', copy: 'Copy',
                length: 'Length', uppercase: 'ABC', lowercase: 'abc', numbers: '123', symbols: '!@#',
                generatePw: '🔄 Generate Password', pwStrengthWeak: 'Weak', pwStrengthMedium: 'Medium', pwStrengthStrong: 'Strong',
                qrTitle: '📱 QR Code Generator', qrDesc: 'Generate QR codes for URLs, text, and more',
                contentType: 'Content Type', typeURL: '🔗 URL / Website', typeText: '📝 Text',
                typeWiFi: '📶 WiFi', typeEmail: '📧 Email', typePhone: '📞 Phone',
                urlOrText: 'URL or Text', generateQR: '⚡ Generate QR Code', downloadPNG: '📥 Download PNG',
                colorTitle: '🎨 Color Picker & Converter', colorDesc: 'Pick colors and convert between HEX, RGB, HSL formats',
                pickColor: 'Pick Color', preview: 'Preview', copyHex: '📋 Copy HEX',
                convTitle: '🔄 Unit Converter', convDesc: 'Convert between different units instantly',
                category: 'Category', catLength: '📏 Length', catWeight: '⚖️ Weight', catVolume: '💧 Volume',
                catArea: '📐 Area', catTemp: '🌡️ Temperature', catSpeed: '🚀 Speed', catTime: '⏱️ Time',
                catData: '💾 Digital Storage', catPressure: '💨 Pressure', catEnergy: '⚡ Energy',
                from: 'From', to: 'To',
                calcTitle: '🧮 Calculator', calcDesc: 'Scientific calculator with percentage and basic operations',
                calcC: 'C', calcDel: '←', calcEq: '=',
                encTitle: '🔀 Base64 & URL Encoder', encDesc: 'Encode and decode Base64, URL encode/decode',
                input: 'Input', b64Enc: '🔒 Base64 Encode', b64Dec: '🔓 Base64 Decode',
                urlEnc: '🔗 URL Encode', urlDec: '📎 URL Decode', result: 'Result',
                textTitle: '📝 Text Tools', textDesc: 'Transform and analyze text',
                chars: 'Chars', words: 'Words', lines: 'Lines', spaces: 'Spaces',
                upper: 'UPPER', lower: 'lower', titleCase: 'Title Case', reverse: 'Reverse', clear: 'Clear',
                jsonTitle: '📋 JSON Formatter', jsonDesc: 'Format, validate, and minify JSON',
                format: '✨ Format', minify: '🗜️ Minify', validate: '✓ Validate', copyResult: '📋 Copy Result',
                copied: 'Copied!', copiedPw: 'Password copied!', copiedColor: 'Color copied!',
                enterContent: 'Please enter content', qrGenerated: 'QR Code generated!',
                qrError: 'Error generating QR', downloaded: 'Downloaded!', selectOne: 'Select at least one option',
                enterJSON: 'Enter JSON first', validJSON: '✅ Valid JSON!', invalidJSON: '❌ Invalid JSON',
                formatFirst: 'Format JSON first', footer: 'Made with ❤️ | Free Online Tools'
            },
            zh: {
                appName: '🧰 工具箱专业版', appDesc: '免费在线实用工具 - 快速、安全、易用',
                navPassword: '🔐 密码', navQR: '📱 二维码', navColor: '🎨 颜色',
                navConverter: '🔄 转换器', navCalc: '🧮 计算器', navEncoder: '🔀 编码器',
                navText: '📝 文本', navJSON: '📋 JSON',
                pwTitle: '🔐 密码生成器', pwDesc: '创建强密码，支持自定义选项',
                pwResult: '生成的密码', clickGenerate: '点击生成', copy: '复制',
                length: '长度', uppercase: '大写', lowercase: '小写', numbers: '数字', symbols: '符号',
                generatePw: '🔄 生成密码', pwStrengthWeak: '弱', pwStrengthMedium: '中等', pwStrengthStrong: '强',
                qrTitle: '📱 二维码生成器', qrDesc: '生成网址、文本等二维码',
                contentType: '内容类型', typeURL: '🔗 网址', typeText: '📝 文本',
                typeWiFi: '📶 WiFi', typeEmail: '📧 邮箱', typePhone: '📞 电话',
                urlOrText: '网址或文本', generateQR: '⚡ 生成二维码', downloadPNG: '📥 下载 PNG',
                colorTitle: '🎨 颜色选择器', colorDesc: '选择颜色并在 HEX、RGB 格式间转换',
                pickColor: '选择颜色', preview: '预览', copyHex: '📋 复制 HEX',
                convTitle: '🔄 单位转换器', convDesc: '即时转换不同单位',
                category: '类别', catLength: '📏 长度', catWeight: '⚖️ 重量', catVolume: '💧 体积',
                catArea: '📐 面积', catTemp: '🌡️ 温度', catSpeed: '🚀 速度', catTime: '⏱️ 时间',
                catData: '💾 存储', catPressure: '💨 压力', catEnergy: '⚡ 能量',
                from: '从', to: '到',
                calcTitle: '🧮 计算器', calcDesc: '科学计算器，支持百分比和基本运算',
                calcC: '清除', calcDel: '删除', calcEq: '等于',
                encTitle: '🔀 Base64 和 URL 编码', encDesc: 'Base64 编解码，URL 编解码',
                input: '输入', b64Enc: '🔒 Base64 编码', b64Dec: '🔓 Base64 解码',
                urlEnc: '🔗 URL 编码', urlDec: '📎 URL 解码', result: '结果',
                textTitle: '📝 文本工具', textDesc: '转换和分析文本',
                chars: '字符', words: '单词', lines: '行', spaces: '空格',
                upper: '大写', lower: '小写', titleCase: '首字母大写', reverse: '反转', clear: '清空',
                jsonTitle: '📋 JSON 格式化', jsonDesc: '格式化、验证和压缩 JSON',
                format: '✨ 格式化', minify: '🗜️ 压缩', validate: '✓ 验证', copyResult: '📋 复制结果',
                copied: '已复制!', copiedPw: '密码已复制!', copiedColor: '颜色已复制!',
                enterContent: '请输入内容', qrGenerated: '二维码已生成!',
                qrError: '生成二维码出错', downloaded: '已下载!', selectOne: '至少选择一个选项',
                enterJSON: '先输入 JSON', validJSON: '✅ 有效的 JSON!', invalidJSON: '❌ 无效的 JSON',
                formatFirst: '先格式化 JSON'
            },
            es: {
                appName: '🧰 ToolBox Pro', appDesc: 'Herramientas gratuitas en línea - Rápido, Seguro, Fácil',
                navPassword: '🔐 Contraseña', navQR: '📱 QR', navColor: '🎨 Color',
                navConverter: '🔄 Convertidor', navCalc: '🧮 Calculadora', navEncoder: '🔀 Codificador',
                navText: '📝 Texto', navJSON: '📋 JSON',
                pwTitle: '🔐 Generador de Contraseñas', pwDesc: 'Crea contraseñas seguras con opciones personalizadas',
                pwResult: 'Contraseña Generada', clickGenerate: 'Haz clic en Generar', copy: 'Copiar',
                length: 'Longitud', uppercase: 'MAYÚS', lowercase: 'minús', numbers: 'Núm', symbols: 'Símb',
                generatePw: '🔄 Generar Contraseña',
                qrTitle: '📱 Generador de Código QR', qrDesc: 'Genera códigos QR para URLs, texto y más',
                contentType: 'Tipo de Contenido', typeURL: '🔗 URL', typeText: '📝 Texto',
                typeWiFi: '📶 WiFi', typeEmail: '📧 Email', typePhone: '📞 Teléfono',
                urlOrText: 'URL o Texto', generateQR: '⚡ Generar QR', downloadPNG: '📥 Descargar PNG',
                colorTitle: '🎨 Selector de Color', colorDesc: 'Selecciona colores y convierte entre HEX, RGB',
                pickColor: 'Seleccionar Color', preview: 'Vista Previa', copyHex: '📋 Copiar HEX',
                convTitle: '🔄 Convertidor de Unidades', convDesc: 'Convierte entre diferentes unidades al instante',
                category: 'Categoría', catLength: '📏 Longitud', catWeight: '⚖️ Peso', catVolume: '💧 Volumen',
                catArea: '📐 Área', catTemp: '🌡️ Temperatura', catSpeed: '🚀 Velocidad', catTime: '⏱️ Tiempo',
                catData: '💾 Almacenamiento', catPressure: '💨 Presión', catEnergy: '⚡ Energía',
                from: 'De', to: 'A',
                calcTitle: '🧮 Calculadora', calcDesc: 'Calculadora científica con operaciones básicas',
                calcC: 'C', calcDel: '←', calcEq: '=',
                encTitle: '🔀 Codificador Base64 y URL', encDesc: 'Codifica y decodifica Base64, URL',
                input: 'Entrada', b64Enc: '🔒 Codificar Base64', b64Dec: '🔓 Decodificar Base64',
                urlEnc: '🔗 Codificar URL', urlDec: '📎 Decodificar URL', result: 'Resultado',
                textTitle: '📝 Herramientas de Texto', textDesc: 'Transforma y analiza texto',
                chars: 'Caracteres', words: 'Palabras', lines: 'Líneas', spaces: 'Espacios',
                upper: 'MAYÚS', lower: 'minús', titleCase: 'Título', reverse: 'Reverso', clear: 'Limpiar',
                jsonTitle: '📋 Formateador JSON', jsonDesc: 'Formatea, valida y minimiza JSON',
                format: '✨ Formatear', minify: '🗜️ Minimizar', validate: '✓ Validar', copyResult: '📋 Copiar Resultado',
                copied: '¡Copiado!', copiedPw: '¡Contraseña copiada!', copiedColor: '¡Color copiado!',
                enterContent: 'Por favor ingresa contenido', qrGenerated: '¡Código QR generado!',
                qrError: 'Error al generar QR', downloaded: '¡Descargado!', selectOne: 'Selecciona al menos una opción',
                enterJSON: 'Ingresa JSON primero', validJSON: '✅ ¡JSON válido!', invalidJSON: '❌ JSON inválido',
                formatFirst: 'Formatea JSON primero'
            },
            ja: {
                appName: '🧰 ツールボックスプロ', appDesc: '無料オンラインユーティリティツール - 高速、安全、簡単',
                navPassword: '🔐 パスワード', navQR: '📱 QRコード', navColor: '🎨 カラー',
                navConverter: '🔄 変換', navCalc: '🧮 電卓', navEncoder: '🔀 エンコーダ',
                navText: '📝 テキスト', navJSON: '📋 JSON',
                pwTitle: '🔐 パスワード生成', pwDesc: 'カスタムオプションで強力なパスワードを作成',
                pwResult: '生成されたパスワード', clickGenerate: 'クリックして生成', copy: 'コピー',
                length: '長さ', uppercase: '大文字', lowercase: '小文字', numbers: '数字', symbols: '記号',
                generatePw: '🔄 パスワード生成',
                qrTitle: '📱 QRコード生成', qrDesc: 'URL、テキストなどのQRコードを生成',
                contentType: 'コンテンツタイプ', typeURL: '🔗 URL', typeText: '📝 テキスト',
                typeWiFi: '📶 WiFi', typeEmail: '📧 メール', typePhone: '📞 電話',
                urlOrText: 'URLまたはテキスト', generateQR: '⚡ QRコード生成', downloadPNG: '📥 PNGダウンロード',
                colorTitle: '🎨 カラーピッカー', colorDesc: '色を選択し、HEX、RGB間で変換',
                pickColor: '色を選択', preview: 'プレビュー', copyHex: '📋 HEXコピー',
                convTitle: '🔄 単位変換', convDesc: '異なる単位間を即座に変換',
                category: 'カテゴリ', catLength: '📏 長さ', catWeight: '⚖️ 重さ', catVolume: '💧 容積',
                catArea: '📐 面積', catTemp: '🌡️ 温度', catSpeed: '🚀 速度', catTime: '⏱️ 時間',
                catData: '💾 ストレージ', catPressure: '💨 圧力', catEnergy: '⚡ エネルギー',
                from: 'から', to: 'へ',
                calcTitle: '🧮 電卓', calcDesc: '基本演算とパーセント対応の科学電卓',
                calcC: 'C', calcDel: '←', calcEq: '=',
                encTitle: '🔀 Base64 & URL エンコーダ', encDesc: 'Base64、URLのエンコードとデコード',
                input: '入力', b64Enc: '🔒 Base64エンコード', b64Dec: '🔓 Base64デコード',
                urlEnc: '🔗 URLエンコード', urlDec: '📎 URLデコード', result: '結果',
                textTitle: '📝 テキストツール', textDesc: 'テキストを変換・分析',
                chars: '文字数', words: '単語数', lines: '行数', spaces: '空白',
                upper: '大文字', lower: '小文字', titleCase: 'タイトル', reverse: '反転', clear: 'クリア',
                jsonTitle: '📋 JSONフォーマッタ', jsonDesc: 'JSONをフォーマット、検証、圧縮',
                format: '✨ フォーマット', minify: '🗜️ 圧縮', validate: '✓ 検証', copyResult: '📋 結果コピー',
                copied: 'コピー完了!', copiedPw: 'パスワードをコピーしました!', copiedColor: '色をコピーしました!',
                enterContent: '内容を入力してください', qrGenerated: 'QRコードを生成しました!',
                qrError: 'QRコード生成エラー', downloaded: 'ダウンロード完了!', selectOne: '1つ以上選択してください',
                enterJSON: 'JSONを入力してください', validJSON: '✅ 有効なJSON!', invalidJSON: '❌ 無効なJSON',
                formatFirst: '先にJSONをフォーマットしてください'
            },
            ko: {
                appName: '🧰 툴박스 프로', appDesc: '무료 온라인 유틸리티 도구 - 빠르고, 안전하고, 쉬운',
                navPassword: '🔐 비밀번호', navQR: '📱 QR코드', navColor: '🎨 색상',
                navConverter: '🔄 변환기', navCalc: '🧮 계산기', navEncoder: '🔀 인코더',
                navText: '📝 텍스트', navJSON: '📋 JSON',
                pwTitle: '🔐 비밀번호 생성기', pwDesc: '사용자 지정 옵션으로 강력한 비밀번호 생성',
                pwResult: '생성된 비밀번호', clickGenerate: '생성 클릭', copy: '복사',
                length: '길이', uppercase: '대문자', lowercase: '소문자', numbers: '숫자', symbols: '기호',
                generatePw: '🔄 비밀번호 생성',
                qrTitle: '📱 QR코드 생성기', qrDesc: 'URL, 텍스트 등의 QR코드 생성',
                contentType: '콘텐츠 유형', typeURL: '🔗 URL', typeText: '📝 텍스트',
                typeWiFi: '📶 WiFi', typeEmail: '📧 이메일', typePhone: '📞 전화',
                urlOrText: 'URL 또는 텍스트', generateQR: '⚡ QR코드 생성', downloadPNG: '📥 PNG 다운로드',
                colorTitle: '🎨 색상 선택기', colorDesc: '색상을 선택하고 HEX, RGB 간 변환',
                pickColor: '색상 선택', preview: '미리보기', copyHex: '📋 HEX 복사',
                convTitle: '🔄 단위 변환기', convDesc: '다양한 단위 간 즉시 변환',
                category: '카테고리', catLength: '📏 길이', catWeight: '⚖️ 무게', catVolume: '💧 부피',
                catArea: '📐 면적', catTemp: '🌡️ 온도', catSpeed: '🚀 속도', catTime: '⏱️ 시간',
                catData: '💾 저장소', catPressure: '💨 압력', catEnergy: '⚡ 에너지',
                from: '에서', to: '로',
                calcTitle: '🧮 계산기', calcDesc: '기본 연산과 백분율을 지원하는 과학 계산기',
                calcC: 'C', calcDel: '←', calcEq: '=',
                encTitle: '🔀 Base64 및 URL 인코더', encDesc: 'Base64, URL 인코딩 및 디코딩',
                input: '입력', b64Enc: '🔒 Base64 인코딩', b64Dec: '🔓 Base64 디코딩',
                urlEnc: '🔗 URL 인코딩', urlDec: '📎 URL 디코딩', result: '결과',
                textTitle: '📝 텍스트 도구', textDesc: '텍스트 변환 및 분석',
                chars: '문자', words: '단어', lines: '줄', spaces: '공백',
                upper: '대문자', lower: '소문자', titleCase: '제목', reverse: '반전', clear: '지우기',
                jsonTitle: '📋 JSON 포맷터', jsonDesc: 'JSON 포맷, 검증 및 축소',
                format: '✨ 포맷', minify: '🗜️ 축소', validate: '✓ 검증', copyResult: '📋 결과 복사',
                copied: '복사됨!', copiedPw: '비밀번호 복사됨!', copiedColor: '색상 복사됨!',
                enterContent: '내용을 입력하세요', qrGenerated: 'QR코드 생성됨!',
                qrError: 'QR코드 생성 오류', downloaded: '다운로드됨!', selectOne: '하나 이상 선택하세요',
                enterJSON: 'JSON을 먼저 입력하세요', validJSON: '✅ 유효한 JSON!', invalidJSON: '❌ 유효하지 않은 JSON',
                formatFirst: 'JSON을 먼저 포맷하세요'
            }
        };

        let currentLang = localStorage.getItem('lang') || 'en';

        function setLang(lang) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
            document.documentElement.lang = lang;
            
            const flags = {en: '🇺🇸', zh: '🇨🇳', es: '🇪🇸', ja: '🇯🇵', ko: '🇰🇷'};
            const names = {en: 'English', zh: '中文', es: 'Español', ja: '日本語', ko: '한국어'};
            
            document.getElementById('current-lang-flag').textContent = flags[lang];
            document.getElementById('current-lang-name').textContent = names[lang];
            
            updateUI();
            document.getElementById('langDropdown').classList.remove('show');
        }

        function updateUI() {
            const t = i18n[currentLang];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) el.textContent = t[key];
            });
            document.title = t.appName;
        }

        function toggleLang() {
            document.getElementById('langDropdown').classList.toggle('show');
        }

        document.addEventListener('click', e => {
            if (!e.target.closest('.lang-selector')) {
                document.getElementById('langDropdown').classList.remove('show');
            }
        });

        // ==================== TAB SWITCHING ====================
        function switchTab(tab) {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add('active');
            document.getElementById(tab + '-section').classList.add('active');
        }

        // ==================== TOAST ====================
        function showToast(message, type = 'success') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
            toast.innerHTML = `${icon} ${message}`;
            
            container.appendChild(toast);
            
            // Trigger animation
            requestAnimationFrame(() => toast.classList.add('show'));
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // ==================== PASSWORD ====================
        function generatePassword() {
            const len = parseInt(document.getElementById('pwLength').value);
            const upper = document.getElementById('pwUpper').checked;
            const lower = document.getElementById('pwLower').checked;
            const nums = document.getElementById('pwNumbers').checked;
            const syms = document.getElementById('pwSymbols').checked;

            let chars = '';
            if (upper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (lower) chars += 'abcdefghijklmnopqrstuvwxyz';
            if (nums) chars += '0123456789';
            if (syms) chars += '!@#$%^&*()_+-=[]{}|;:,.<>';

            if (!chars) {
                showToast(i18n[currentLang].selectOne);
                return;
            }

            let pw = '';
            const arr = new Uint32Array(len);
            crypto.getRandomValues(arr);
            for (let i = 0; i < len; i++) pw += chars[arr[i] % chars.length];

            document.getElementById('passwordOutput').innerHTML = 
                pw + `<button class="copy-btn" onclick="copyPassword()">${i18n[currentLang].copy}</button>`;
            
            updatePasswordStrength(pw);
        }
        
        function calculatePasswordStrength(password) {
            let score = 0;
            if (password.length >= 8) score++;
            if (password.length >= 12) score++;
            if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
            if (/[0-9]/.test(password)) score++;
            if (/[^a-zA-Z0-9]/.test(password)) score++;
            return Math.min(score, 4);
        }
        
        function updatePasswordStrength(password) {
            const strength = calculatePasswordStrength(password);
            const bar = document.getElementById('pwStrengthBar');
            const text = document.getElementById('pwStrengthText');
            const t = i18n[currentLang];
            
            bar.className = 'password-strength-bar';
            
            if (strength <= 1) {
                bar.classList.add('strength-weak');
                text.textContent = t.pwStrengthWeak || 'Weak';
                text.style.color = 'var(--danger)';
            } else if (strength === 2 || strength === 3) {
                bar.classList.add('strength-medium');
                text.textContent = t.pwStrengthMedium || 'Medium';
                text.style.color = 'var(--warning)';
            } else {
                bar.classList.add('strength-strong');
                text.textContent = t.pwStrengthStrong || 'Strong';
                text.style.color = 'var(--success)';
            }
        }

        function copyPassword() {
            const pw = document.getElementById('passwordOutput').textContent.replace(i18n[currentLang].copy, '').trim();
            navigator.clipboard.writeText(pw).then(() => showToast(i18n[currentLang].copiedPw));
        }

        // ==================== QR CODE ====================
        function updateQRInput() {
            const type = document.getElementById('qrType').value;
            const area = document.getElementById('qrInputArea');
            const t = i18n[currentLang];
            
            const inputs = {
                url: `<div class="input-group"><label class="input-label">${t.urlOrText}</label><input type="text" class="input-field" id="qrContent" placeholder="https://example.com"></div>`,
                text: `<div class="input-group"><label class="input-label">${t.typeText}</label><textarea class="input-field" id="qrContent" placeholder="Enter text..."></textarea></div>`,
                wifi: `<div class="input-group"><label class="input-label">WiFi SSID</label><input type="text" class="input-field" id="qrWifiSSID" placeholder="Network Name"></div><div class="input-group"><label class="input-label">Password</label><input type="text" class="input-field" id="qrWifiPass" placeholder="Password"></div>`,
                email: `<div class="input-group"><label class="input-label">Email</label><input type="email" class="input-field" id="qrEmail" placeholder="name@example.com"></div><div class="input-group"><label class="input-label">Subject</label><input type="text" class="input-field" id="qrSubject" placeholder="Subject"></div>`,
                phone: `<div class="input-group"><label class="input-label">${t.typePhone}</label><input type="tel" class="input-field" id="qrPhone" placeholder="+1 234 567 8900"></div>`
            };
            
            area.innerHTML = inputs[type] || inputs.url;
        }

        function getQRContent() {
            const type = document.getElementById('qrType').value;
            switch(type) {
                case 'url':
                case 'text':
                    return document.getElementById('qrContent')?.value || '';
                case 'wifi':
                    return `WIFI:T:WPA;S:${document.getElementById('qrWifiSSID')?.value || ''};P:${document.getElementById('qrWifiPass')?.value || ''};;`;
                case 'email':
                    return `mailto:${document.getElementById('qrEmail')?.value || ''}?subject=${encodeURIComponent(document.getElementById('qrSubject')?.value || '')}`;
                case 'phone':
                    return `tel:${document.getElementById('qrPhone')?.value || ''}`;
                default: return '';
            }
        }

        function generateQR() {
            const content = getQRContent();
            if (!content) {
                showToast(i18n[currentLang].enterContent);
                return;
            }

            const canvas = document.getElementById('qrCanvas');
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            try {
                new QRCode(canvas, {
                    text: content, width: 256, height: 256,
                    colorDark: '#000000', colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });
                document.getElementById('qrResult').classList.add('show');
                showToast(i18n[currentLang].qrGenerated);
            } catch(e) {
                showToast(i18n[currentLang].qrError);
            }
        }

        function downloadQR() {
            const canvas = document.getElementById('qrCanvas');
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast(i18n[currentLang].downloaded);
        }

        // ==================== COLOR ====================
        function updateColorFromPicker() {
            const color = document.getElementById('colorPicker').value;
            document.getElementById('colorHex').value = color;
            updateColorPreview();
            hexToRgb(color);
        }

        function updateColorFromHex() {
            let hex = document.getElementById('colorHex').value;
            if (!hex.startsWith('#')) hex = '#' + hex;
            if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
                document.getElementById('colorPicker').value = hex;
                updateColorPreview();
                hexToRgb(hex);
            }
        }

        function updateColorFromRGB() {
            const r = parseInt(document.getElementById('colorR').value) || 0;
            const g = parseInt(document.getElementById('colorG').value) || 0;
            const b = parseInt(document.getElementById('colorB').value) || 0;
            const hex = '#' + [r,g,b].map(x => {
                const h = Math.max(0, Math.min(255, x)).toString(16);
                return h.length === 1 ? '0' + h : h;
            }).join('');
            document.getElementById('colorPicker').value = hex;
            document.getElementById('colorHex').value = hex;
            updateColorPreview();
        }

        function updateColorPreview() {
            document.getElementById('colorPreview').style.background = document.getElementById('colorPicker').value;
        }

        function hexToRgb(hex) {
            document.getElementById('colorR').value = parseInt(hex.slice(1, 3), 16);
            document.getElementById('colorG').value = parseInt(hex.slice(3, 5), 16);
            document.getElementById('colorB').value = parseInt(hex.slice(5, 7), 16);
        }

        function copyColor() {
            navigator.clipboard.writeText(document.getElementById('colorHex').value)
                .then(() => showToast(i18n[currentLang].copiedColor));
        }

        // ==================== CONVERTER ====================
        const unitData = {
            length: { m: 1, km: 1000, cm: 0.01, mm: 0.001, ft: 0.3048, in: 0.0254, mi: 1609.34 },
            weight: { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 },
            temp: {}
        };

        const unitNames = {
            length: { m: 'Meters', km: 'Kilometers', cm: 'Centimeters', mm: 'Millimeters', ft: 'Feet', in: 'Inches', mi: 'Miles' },
            weight: { kg: 'Kilograms', g: 'Grams', lb: 'Pounds', oz: 'Ounces' },
            temp: { C: 'Celsius', F: 'Fahrenheit', K: 'Kelvin' }
        };

        function updateUnits() {
            const cat = document.getElementById('convCategory').value;
            const fromSel = document.getElementById('convFromUnit');
            const toSel = document.getElementById('convToUnit');
            
            fromSel.innerHTML = '';
            toSel.innerHTML = '';
            
            Object.entries(unitNames[cat] || unitNames.length).forEach(([key, name]) => {
                fromSel.add(new Option(name, key));
                toSel.add(new Option(name, key));
            });
            
            if (toSel.options.length > 1) toSel.selectedIndex = 1;
            convert();
        }

        function convert() {
            const cat = document.getElementById('convCategory').value;
            const from = document.getElementById('convFromUnit').value;
            const to = document.getElementById('convToUnit').value;
            const val = parseFloat(document.getElementById('convFromVal').value) || 0;
            
            let result;
            
            if (cat === 'temp') {
                let c = val;
                if (from === 'F') c = (val - 32) * 5/9;
                else if (from === 'K') c = val - 273.15;
                
                if (to === 'C') result = c;
                else if (to === 'F') result = c * 9/5 + 32;
                else result = c + 273.15;
            } else {
                const data = unitData[cat] || unitData.length;
                result = (val * data[from]) / data[to];
            }
            
            document.getElementById('convToVal').value = parseFloat(result.toFixed(6));
        }

        function swapConv() {
            const f = document.getElementById('convFromUnit');
            const t = document.getElementById('convToUnit');
            const tmp = f.selectedIndex;
            f.selectedIndex = t.selectedIndex;
            t.selectedIndex = tmp;
            convert();
        }

        // ==================== CALCULATOR ====================
        let calcExpr = '';

        function calcInput(v) {
            calcExpr += v;
            document.getElementById('calcDisplay').value = calcExpr;
        }

        function calcClear() {
            calcExpr = '';
            document.getElementById('calcDisplay').value = '';
        }

        function calcBack() {
            calcExpr = calcExpr.slice(0, -1);
            document.getElementById('calcDisplay').value = calcExpr;
        }

        function calcEqual() {
            try {
                calcExpr = String(eval(calcExpr) || '');
                document.getElementById('calcDisplay').value = calcExpr;
            } catch {
                document.getElementById('calcDisplay').value = 'Error';
                calcExpr = '';
            }
        }

        // ==================== ENCODER ====================
        function base64Encode() {
            const input = document.getElementById('encoderInput').value;
            try {
                document.getElementById('encoderOutput').textContent = btoa(unescape(encodeURIComponent(input)));
            } catch {
                showToast('Error');
            }
        }

        function base64Decode() {
            const input = document.getElementById('encoderInput').value;
            try {
                document.getElementById('encoderOutput').textContent = decodeURIComponent(escape(atob(input)));
            } catch {
                showToast('Invalid Base64');
            }
        }

        function urlEncode() {
            document.getElementById('encoderOutput').textContent = encodeURIComponent(document.getElementById('encoderInput').value);
        }

        function urlDecode() {
            try {
                document.getElementById('encoderOutput').textContent = decodeURIComponent(document.getElementById('encoderInput').value);
            } catch {
                showToast('Invalid URL');
            }
        }

        function copyEncoderResult() {
            const out = document.getElementById('encoderOutput').textContent;
            if (out) navigator.clipboard.writeText(out).then(() => showToast(i18n[currentLang].copied));
        }

        // ==================== TEXT ====================
        function analyzeText() {
            const text = document.getElementById('textInput').value;
            document.getElementById('statChars').textContent = text.length;
            document.getElementById('statWords').textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
            document.getElementById('statLines').textContent = text.split('\n').length;
            document.getElementById('statSpaces').textContent = (text.match(/\s/g) || []).length;
        }

        function transformText(type) {
            const input = document.getElementById('textInput');
            const text = input.value;
            const transforms = {
                upper: () => text.toUpperCase(),
                lower: () => text.toLowerCase(),
                title: () => text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
                reverse: () => text.split('').reverse().join('')
            };
            if (transforms[type]) {
                input.value = transforms[type]();
                analyzeText();
            }
        }

        function clearText() {
            document.getElementById('textInput').value = '';
            analyzeText();
        }

        // ==================== JSON ====================
        function formatJSON(pretty) {
            const input = document.getElementById('jsonInput').value.trim();
            const resultBox = document.getElementById('jsonResult');
            const output = document.getElementById('jsonOutput');
            
            if (!input) {
                showToast(i18n[currentLang].enterJSON);
                return;
            }
            
            try {
                output.textContent = JSON.stringify(JSON.parse(input), null, pretty ? 2 : 0);
                output.style.color = 'var(--text-primary)';
                resultBox.classList.add('show');
            } catch (e) {
                output.textContent = 'Error: ' + e.message;
                output.style.color = 'var(--danger)';
                resultBox.classList.add('show');
            }
        }

        function validateJSON() {
            const input = document.getElementById('jsonInput').value.trim();
            if (!input) {
                showToast(i18n[currentLang].enterJSON);
                return;
            }
            try {
                JSON.parse(input);
                showToast(i18n[currentLang].validJSON);
            } catch (e) {
                showToast(i18n[currentLang].invalidJSON + ': ' + e.message);
            }
        }

        function copyJSON() {
            const out = document.getElementById('jsonOutput').textContent;
            if (!out || out.startsWith('Error')) {
                showToast(i18n[currentLang].formatFirst);
                return;
            }
            navigator.clipboard.writeText(out).then(() => showToast(i18n[currentLang].copied));
        }

        // ==================== INIT ====================
        document.addEventListener('DOMContentLoaded', () => {
            setLang(currentLang);
            updateUnits();
            updateQRInput();
        });
