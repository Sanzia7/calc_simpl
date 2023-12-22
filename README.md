# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

 Файл проекта .editorconfig служит для настройки самого базового  стиля написания кода, который можно открывать в самых разных редакторах с одними и теми же установленными настройками

 !NB:  Со страницы "Start a New React Project" официальной документации React была удалена информация об инициализации приложения с помощью Create React App. Для старта проекта рекомендуют использовать full-stack React-фреймворк Next.js, который является более сложным и комплексным решением. Тем не менее, Create React App по прежнему используется и остается актуальным, информацию о нем можно найти на официальном сайте.


//=========================================
Разработайте приложение «Калькулятор». Описание приложения:

должен работать только с целыми числами;
10 кнопок с цифрами (от 0 до 9);
2 кнопки для операций: сложение и вычитание;
и еще 2 кнопки: “=” — получить результат, “С” — сброс
План реализации:

Подготовьте стартовый React-проект. В качестве стартового проекта используйте шаблон приложения, который мы подготовили в первом уроке (с настроенными ESLint, Prettier и EditorConfig).

Подготовьте верстку. Реализуйте в одном компоненте App всю верстку калькулятора (кнопки чисел, кнопки операций, дисплей). Для стилизации используйте файл App.module.css (стили можно использовать любые).


Создайте состояния. Используйте хук useState() для добавления новых состояний. Создайте строковые состояния для первого операнда (operand1), оператора (operator), второго операнда (operand2). Таким образом, на дисплей будет выводиться строка: operand1 + operator + operand2.

Результатом после подставления значений может быть '1+2', '2+3' и так далее.


Вывод цифр. Создайте массив NUMS (без useState()), где каждый элемент — строка с определенной цифрой ('0', '1', '2' и так до '9'.). Для вывода возьмите кнопку калькулятора из верстки и используйте её в методе map() для массива NUMS. Динамически подставляйте значения элементов массива (цифры) в названия кнопок.

Добавьте обработчики кликов на кнопки цифр. Для кнопки, выводящей цифру, добавьте обработчик события клика, который будет устанавливать новое значение для operand1: берем старое значение operand1 и конкатинируем (приписываем справа) к нему цифру с нажатой кнопки. Таким образом, если мы последовательно нажмем на кнопки “1”, “2” и “3”, то в operand1 будет содержаться сначала '', потом '1', затем '12' и в итоге '123'.

Добавьте обработчики кликов на кнопки операций. При клике на различные кнопки операций должны происходить определенные действия:

“C” — устанавливает для operand1, operand2 и operator начальные пустые состояния.
“+” — устанавливает для operator значение '+'.
“-” — устанавливает для operator значение '-'.
💡Если задан какой-либо operator (не является пустым значением), то в таком случае при клике на кнопку цифры обработчик клика на цифру из пункта выше должен обновлять значение уже не для operand1, а operand2 (добавить в него дополнительную проверку).

“=” — если задан operand2 (не является пустой строкой), то в таком случае необходимо проверить значение operator:
если operator равен '+' — привести к числовому типу operand1 и operand2, сложить их и полученный результат записать в operand1;
если operator равен '-' — привести к числовому типу operand1 и operand2, вычесть из operand1 значение operand2 и записать полученный результат в operand1;
в обоих случаях в конце устанавливаем для operator и operand2 начальные пустые состояния.
Добавить подсветку результата. Чтобы результат подсвечивался другим цветом, создадим еще одно состояние с помощью useState() — isResult. По умолчанию оно будет значением false. На основе этого состояния необходимо добавлять или удалять специальный CSS-класс для дисплея, который будет активировать подсветку. Теперь при клике на кнопку с операцией “=” необходимо устанавливать для isResult значение true, а при клике на кнопки с другими операциями или на кнопки с цифрами значение false.

