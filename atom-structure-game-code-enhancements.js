הנה דוגמאות קוד להרחבת המשחק על מבנה האטום עם הרכיבים החדשים:

```javascript
// זיהוי חלקיקי האטום
var atomScene = new Phaser.Scene('atomScene');

atomScene.create = function() {
  // הצגת סמלים של חלקיקים על המסך
  var protonSymbol = this.add.text(200, 200, 'P', { fontSize: '64px' });
  var neutronSymbol = this.add.text(300, 200, 'N', { fontSize: '64px' });
  var electronSymbol = this.add.text(400, 200, 'E', { fontSize: '64px' });

  // הוספת אירועי גרירה והשלכה של החלקיקים
  protonSymbol.setInteractive().on('dragstart', this.startDrag, this);
  // ... קוד להוספת אירועים לנוטרונים ואלקטרונים

  // בדיקת התאמת החלקיקים והצגת משוב
  this.input.on('drop', function (pointer, gameObject, dropZone) {
    if (dropZone.name === gameObject.name) {
      // החלקיק זוהה נכון - הצגת אפקט חיובי
      this.tweens.add({
        targets: gameObject,
        scale: 1.2,
        duration: 300,
        yoyo: true
      });
    } else {
      // החלקיק זוהה לא נכון - הצגת אפקט שלילי
      this.cameras.main.shake(100, 0.01);
    }
  }, this);
};

// מערכת ניקוד, תגמולים והישגים
var scoreScene = new Phaser.Scene('scoreScene');

scoreScene.create = function() {
  this.score = 0;
  this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px' });

  // הוספת כפתורים לתגמולים והישגים
  var achievementsButton = this.add.image(700, 50, 'achievementsButton')
    .setInteractive()
    .on('pointerdown', this.showAchievements, this);

  var rewardButton = this.add.image(700, 150, 'rewardButton')
    .setInteractive()
    .on('pointerdown', this.claimReward, this);
};

scoreScene.increaseScore = function(amount) {
  this.score += amount;
  this.scoreText.setText('Score: ' + this.score);
};

scoreScene.showAchievements = function() {
  // הצגת לוח הישגים למשתמש
  // ...
};

scoreScene.claimReward = function() {
  // הצגת מודל או פופאפ לתגמול למשתמש
  // ...
};

// אפקטים ויזואליים
var visualEffectsScene = new Phaser.Scene('visualEffectsScene');

visualEffectsScene.preload = function() {
  this.load.image('proton', 'assets/proton.png');
  this.load.image('neutron', 'assets/neutron.png');
  this.load.image('electron', 'assets/electron.png');
};

visualEffectsScene.create = function() {
  var proton = this.add.image(200, 300, 'proton');
  var neutron = this.add.image(300, 300, 'neutron');
  var electron = this.add.image(400, 300, 'electron');

  // הוספת אפקטי תאורה ותנועה לחלקיקים
  proton.setTint(0xff0000);
  neutron.setTint(0x00ff00);
  electron.setTint(0x0000ff);

  this.tweens.add({
    targets: [proton, neutron, electron],
    y: '+=50',
    duration: 1000,
    yoyo: true,
    loop: -1
  });
};
```

הקוד הזה מדגים:

1. **זיהוי חלקיקי האטום**:
   - הצגת סמלים של חלקיקים (פרוטונים, נוטרונים, אלקטרונים)
   - הוספת אירועי גרירה והשלכה של החלקיקים
   - בדיקת התאמת החלקיקים והצגת משוב חיובי או שלילי

2. **מערכת ניקוד, תגמולים והישגים**:
   - מעקב אחר ניקוד המשתמש ועדכון התצוגה
   - הוספת כפתורים להצגת הישגים ותגמולים למשתמש

3. **אפקטים ויזואליים**:
   - טעינת תמונות לייצוג החלקיקים
   - הוספת אפקטי צבע ותנועה לחלקיקים להפיכת החוויה למעניינת

זוהי רק דוגמה התחלתית להרחבת הקוד. בהמשך נוכל להוסיף עוד תכונות כמו מסכי הדרכה, מעברים בין רמות, והתאמה נוספת של האפקטים החזותיים.

האם הדוגמאות הקוד האלה עונות על הצרכים שלך? אשמח לקבל עוד משוב ולהמשיך לפתח את הפרויקט יחד אתך.