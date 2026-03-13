/**************************************************************
 * ① 統合シート設定
 **************************************************************/
const MASTER_SETTINGS = {
  SHEET_NAME: '宿泊者名簿（統合）',
  HEADERS: [
    'タイムスタンプ',                 // 1
    '言語',                           // 2
    '宿泊代表者氏名 / Full Name',     // 3
    'ふりがな',                       // 4
    '生年月日（年）',                 // 5
    '生年月日（月）',                 // 6
    '生年月日（日）',                 // 7
    '連絡先（電話番号）',             // 8
    '日本国内住所の有無',             // 9
    '住所',                           //10
    '国籍',                           //11
    '旅券番号（パスポート番号）',     //12
    '旅券写しURL',                    //13
    '到着日時',                       //14
    '出発日時',                       //15
    '宿泊約款・利用規約 同意',       //16
    '元シート名',                     //17
    '宿泊目的（複数選択）'               //18
  ]
};


/**************************************************************
 * ② 各言語シート → 統合形式へのマッピング
 *    （xlsx の列構造に合わせ済み）
 **************************************************************/

const FORM_MAPPERS = {

  /**
   * 日本語シート
   * シート名: 「日本語」
   *
   * 列構造（0始まり）
   * 0: タイムスタンプ
   * 1: 1. 宿泊代表者氏名
   * 2: 2. ふりがな（カタカナ/ひらがな）
   * 3: 3. 生年月日（年）
   * 4: 4. 生年月日（月）
   * 5: 5. 生年月日（日）
   * 6: 6. 連絡先（電話番号）
   * 7: 7. 日本国内に住所がありますか？
   * 8: 8. 住所
   * 9: 9. 国籍
   * 10: 10. 旅券番号（パスポート番号）
   * 11: 11. 旅券の写し（顔写真ページ）のアップロード
   * 12: 12. 到着日時
   * 13: 13. 出発日時
   * 14: 14. 宿泊約款、利用規約に同意しますか？
   */
  '日本語': function(row, sheetName) {
    return [
      row[0],          // タイムスタンプ
      '日本語',        // 言語
      row[1],          // 宿泊代表者氏名
      row[2],          // ふりがな
      row[3],          // 生年月日（年）
      row[4],          // 生年月日（月）
      row[5],          // 生年月日（日）
      row[6],          // 連絡先
      row[7],          // 日本国内住所の有無
      row[8],          // 住所
      row[9],          // 国籍
      row[10],         // 旅券番号
      row[11],         // 旅券写しURL
      row[12],         // 到着日時
      row[13],         // 出発日時
      row[14],         // 同意
      sheetName,       // 元シート名
      row[15] || ''    // 宿泊目的（複数選択）
    ];
  },

  /**
   * 英語シート
   * シート名: 「英語」
   *
   * 0: タイムスタンプ
   * 1: 1. Full Name
   * 2: 3. Date of Birth (Year)
   * 3: 4. Date of Birth (Month)
   * 4: 5. Date of Birth (Day)
   * 5: 6. Contact Number (Phone)
   * 6: 7. Do you have an address in Japan?
   * 7: 8. Address
   * 8: 9. Nationality
   * 9: 10. Passport Number
   * 10: 11. Passport Photo Page Upload
   * 11: 12. Arrival Date and Time
   * 12: 13. Departure Date and Time
   * 13: 14. Do you agree to the Accommodation Agreement and House Rules?
   */
  '英語': function(row, sheetName) {
    return [
      row[0],          // タイムスタンプ
      '英語',          // 言語
      row[1],          // Full Name
      '',              // ふりがな（無し）
      row[2],          // DOB Year
      row[3],          // DOB Month
      row[4],          // DOB Day
      row[5],          // 連絡先
      row[6],          // 日本国内住所の有無
      row[7],          // 住所
      row[8],          // 国籍
      row[9],          // 旅券番号
      row[10],         // パスポート写しURL
      row[11],         // 到着日時
      row[12],         // 出発日時
      row[13],         // 同意
      sheetName,       // 元シート名
      row[14] || ''    // 宿泊目的（複数選択）
    ];
  },

  /**
   * スペイン語シート
   * シート名: 「スペイン語」
   * ヘッダー構造は英語と同じ並び
   */
  'スペイン語': function(row, sheetName) {
    return [
      row[0],
      'スペイン語',
      row[1],
      '',
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7],
      row[8],
      row[9],
      row[10],
      row[11],
      row[12],
      row[13],
      sheetName,       // 元シート名
      row[14] || ''    // 宿泊目的（複数選択）
    ];
  },

  /**
   * 中国語（繁体）
   * シート名: 「中国語（繁体）」
   */
  '中国語（繁体）': function(row, sheetName) {
    return [
      row[0],
      '中国語（繁体）',
      row[1],
      '',
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7],
      row[8],
      row[9],
      row[10],
      row[11],
      row[12],
      row[13],
      sheetName,       // 元シート名
      row[14] || ''    // 宿泊目的（複数選択）
    ];
  },

  /**
   * 中国語（簡体）
   * シート名: 「中国語（簡体）」
   */
  '中国語（簡体）': function(row, sheetName) {
    return [
      row[0],
      '中国語（簡体）',
      row[1],
      '',
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7],
      row[8],
      row[9],
      row[10],
      row[11],
      row[12],
      row[13],
      sheetName,       // 元シート名
      row[14] || ''    // 宿泊目的（複数選択）
    ];
  },

  /**
   * 韓国語
   * シート名: 「韓国語」
   */
  '韓国語': function(row, sheetName) {
    return [
      row[0],
      '韓国語',
      row[1],
      '',
      row[2],
      row[3],
      row[4],
      row[5],
      row[6],
      row[7],
      row[8],
      row[9],
      row[10],
      row[11],
      row[12],
      row[13],
      sheetName,       // 元シート名
      row[14] || ''    // 宿泊目的（複数選択）
    ];
  }

};


/**************************************************************
 * ③ 統合シート初期セットアップ
 **************************************************************/

/**
 * 一度だけ実行：
 * 「宿泊者名簿（統合）」シートを作成し、ヘッダー行をセット
 */
function setupMasterSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(MASTER_SETTINGS.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(MASTER_SETTINGS.SHEET_NAME);
  }

  sheet.clear();
  sheet
    .getRange(1, 1, 1, MASTER_SETTINGS.HEADERS.length)
    .setValues([MASTER_SETTINGS.HEADERS]);
}


/**************************************************************
 * ④ Slack 通知設定（別モジュール相当）
 **************************************************************/

const SLACK_CONFIG = {
  PROP_KEY_WEBHOOK_URL: 'SLACK_CHECKIN_WEBHOOK_URL', // ScriptProperties に保存するキー名
  USERNAME: 'チェックイン通知BOT',
  ICON_EMOJI: ':house:'   // 好きな絵文字に変更OK
  // CHANNEL: '#checkin-notify', // 必要なら固定チャンネル指定も可
};


/**
 * Slack Webhook URL を Script Properties に保存する（最初の1回だけ実行）
 * URL は Slack で Incoming Webhook を作成したときのもの
 */
function setSlackWebhookUrl() {
  // ★ GASエディタから直接実行し、URLを設定してください
  // ★ コードに直接URLを書くとGitHub Push Protectionでブロックされます
  const url = 'YOUR_SLACK_WEBHOOK_URL_HERE'; // ←ここにWebhook URLを入れて実行
  PropertiesService.getScriptProperties().setProperty(
    SLACK_CONFIG.PROP_KEY_WEBHOOK_URL,
    url
  );
}


/**
 * 宿泊者名簿（統合）に書き込んだ1行分を元に Slack へ通知する
 * @param {any[]} masterRow MASTER_SETTINGS.HEADERS と同じ順番の配列
 */
function postCheckinToSlack(masterRow) {
  const props = PropertiesService.getScriptProperties();
  const webhookUrl = props.getProperty(SLACK_CONFIG.PROP_KEY_WEBHOOK_URL);

  if (!webhookUrl) {
    console.warn('Slack Webhook URL が未設定です（Script Properties を確認してください）');
    return;
  }

  const [
    timestamp,      // 1. タイムスタンプ
    lang,           // 2. 言語
    fullName,       // 3. 宿泊代表者氏名 / Full Name
    furigana,       // 4. ふりがな
    dobYear,        // 5. 生年月日（年）
    dobMonth,       // 6. 生年月日（月）
    dobDay,         // 7. 生年月日（日）
    phone,          // 8. 連絡先（電話番号）
    hasAddress,     // 9. 日本国内住所の有無
    address,        //10. 住所
    nationality,    //11. 国籍
    passportNo,     //12. 旅券番号（パスポート番号）
    passportUrl,    //13. 旅券写しURL
    arrival,        //14. 到着日時
    departure,      //15. 出発日時
    agreement,      //16. 宿泊約款・利用規約 同意
    sourceSheet,    //17. 元シート名
    stayPurpose     //18. 宿泊目的（複数選択）
  ] = masterRow;

  const dob =
    dobYear && dobMonth && dobDay
      ? `${dobYear}-${dobMonth}-${dobDay}`
      : '';

  // ★ ここで日本向けフォーマットに変換
  const arrivalText    = formatDateTimeJa(arrival);
  const departureText  = formatDateTimeJa(departure);
  const timestampText  = formatDateTimeJa(timestamp);

  // 言語に応じてざっくり旗アイコン
  const langFlag =
    lang === '日本語'            ? '🇯🇵' :
    lang === '英語'              ? '🇺🇸' :
    lang === 'スペイン語'        ? '🇪🇸' :
    lang.indexOf('中国語') === 0 ? '🇨🇳' :
    lang === '韓国語'            ? '🇰🇷' :
    '🌐';

  // fallback（blocksが見えない環境向け）
  const fallbackLines = [
    `新しいチェックイン情報 (${lang})`,
    `氏名: ${fullName || '-'}`,
    dob ? `生年月日: ${dob}` : '',
    `国籍: ${nationality || '-'}`,
    `到着: ${arrivalText || '-'}`,
    `出発: ${departureText || '-'}`
  ].filter(Boolean);

  const blocks = [
    // タイトル
    {
      type: 'header',
      text: {
        type: 'plain_text',
        text: `新しいチェックイン情報 ${langFlag}`,
        emoji: true
      }
    },
    // 氏名・生年月日・国籍・パスポート
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*氏名*\n${fullName || '-'}${furigana ? '\n(' + furigana + ')' : ''}`
        },
        {
          type: 'mrkdwn',
          text: `*生年月日*\n${dob || '-'}`
        },
        {
          type: 'mrkdwn',
          text: `*国籍*\n${nationality || '-'}`
        },
        {
          type: 'mrkdwn',
          text: `*パスポート番号*\n${passportNo || '-'}`
        }
      ]
    },
    // 連絡先・住所の有無
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*電話番号*\n${phone || '-'}`
        },
        {
          type: 'mrkdwn',
          text: `*日本国内住所の有無*\n${hasAddress || '-'}`
        }
      ]
    },
    // 住所（あれば）
    address
      ? {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*住所*\n${address}`
          }
        }
      : null,
    // ★ 到着/出発/同意（ここもフォーマット済みを使用）
    {
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*到着*\n${arrivalText || '-'}`
        },
        {
          type: 'mrkdwn',
          text: `*出発*\n${departureText || '-'}`
        },
        {
          type: 'mrkdwn',
          text: `*約款・規約への同意*\n${agreement || '-'}`
        },
        {
          type: 'mrkdwn',
          text: `*宿泊目的*\n${stayPurpose || '-'}`
        }
      ]
    },
    // パスポート画像URL（あれば）
    passportUrl
      ? {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*旅券画像URL*\n${passportUrl}`
          }
        }
      : null,
    { type: 'divider' },
    // コンテキスト（受付時刻もフォーマット済み）
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: `*元フォーム:* ${sourceSheet}`
        },
        {
          type: 'mrkdwn',
          text: `*受付時刻:* ${timestampText}`
        }
      ]
    }
  ].filter(Boolean);

  const payload = {
    username: SLACK_CONFIG.USERNAME,
    icon_emoji: SLACK_CONFIG.ICON_EMOJI,
    text: fallbackLines.join(' / '),
    blocks: blocks
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const res = UrlFetchApp.fetch(webhookUrl, options);
    const code = res.getResponseCode();
    if (code >= 400) {
      console.error('Slack送信エラー: ' + code + ' / ' + res.getContentText());
    }
  } catch (err) {
    console.error('Slack送信中に例外発生: ', err);
  }
}



/**************************************************************
 * ⑤ メイン onFormSubmit
 *    6言語フォーム → 統合シート → Slack通知
 **************************************************************/

function onFormSubmit(e) {
  const ss = e.source;
  const srcSheet = e.range.getSheet();
  const sheetName = srcSheet.getName();

  const mapper = FORM_MAPPERS[sheetName];
  if (!mapper) {
    // 統合対象外シートなら何もしない
    console.log('統合対象外のシートから送信: ' + sheetName);
    return;
  }

  const rowValues = e.range.getValues()[0];

  // 1行分を統合用フォーマットに変換
  let outputRow;
  try {
    outputRow = mapper(rowValues, sheetName);
  } catch (err) {
    console.error('マッピング処理でエラー（シート: ' + sheetName + '）', err);
    throw err;
  }

  // 統合シート取得
  const masterSheet = ss.getSheetByName(MASTER_SETTINGS.SHEET_NAME);
  if (!masterSheet) {
    throw new Error('統合シート「' + MASTER_SETTINGS.SHEET_NAME + '」が見つかりません。先に setupMasterSheet() を実行してください。');
  }

  const nextRow = masterSheet.getLastRow() + 1;

  // 統合シートへ追記
  masterSheet
    .getRange(nextRow, 1, 1, outputRow.length)
    .setValues([outputRow]);

  // Slack通知（失敗してもフォーム処理は成功させたいので try/catch）
  try {
    postCheckinToSlack(outputRow);
  } catch (err) {
    console.error('Slack通知でエラー: ', err);
  }
}

/**************************************************************
 * 日付表示用ヘルパー
 *   入力: Date or 文字列
 *   出力: "11月20日(木) 18:00" 形式
 **************************************************************/
function formatDateTimeJa(value) {
  if (!value) return '-';

  let date;
  if (Object.prototype.toString.call(value) === '[object Date]') {
    date = value;
  } else {
    // 文字列の場合も Date に変換を試みる
    date = new Date(value);
  }

  if (isNaN(date)) {
    // どうしても解釈できなければそのまま返す
    return String(value);
  }

  const wNames = ['日', '月', '火', '水', '木', '金', '土'];
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const w = wNames[date.getDay()];

  const pad = n => ('0' + n).slice(-2);
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());

  return `${m}月${d}日(${w}) ${hh}:${mm}`;
}

