#### React Native로 날씨앱 만들기

- 환경설정
  - [Expo XDE 설치](https://expo.io/tools)
  - [Xcode 설치](https://developer.apple.com/download/)

- Basic React Native Concepts
  - return 할 수 있는 component가 정해져 있다. (더이상 div나 html ..등을 사용하지 않음)
  - 리액트 네이티브의 컴포넌트는 모바일 환경에 따라 네이티브하게 변화한다.
    - ex. view 컴포넌트를 이용하면 ios/android 환경에 따라 objective-c 혹은 java로 변함
  - [React Native Component Document](https://facebook.github.io/react-native/docs/getting-started.html)
  - 리액트 네이티브의 디자인은 flexbox로 가능

- React Native Layouts with Flexbox

  - html, css의 경우 디폴트 flex direction은 row / React Native의 경우 column (대부분의 앱의 column 방향이기 때문에)

- [expo의 아이콘 관련 패키지, Vector-icons](https://expo.github.io/vector-icons/)

  ~~~jsx
  import {Ionicons} from '@expo/vector-icons'; 
  
  <Ionicons color = 'white' size = {144} name = 'ios-rainy'/>
  ~~~

- ComponentDidMount

  ~~~jsx
  componentDidMount(){
      console.log("componentDidMount");
  }
  ~~~

  - 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드.
  - setTimeout, AJAX 처리등을 넣음.
  - 위치정보를 불러오는데 성공했을 경우에 위치 값을 날씨 API에 넘겨주도록 한다.

- fetch-then

  - [MDN Web Docs](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)

- [날씨 api](https://www.openweathermap.org/)

  - `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}`

  

