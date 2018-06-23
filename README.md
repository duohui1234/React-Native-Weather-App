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

- [Vector-icons](https://expo.github.io/vector-icons/)

  - expo의 아이콘 관련 패키지

    ~~~jsx
    import {Ionicons} from '@expo/vector-icons'; 
    
    <Ionicons color = 'white' size = {144} name = 'ios-rainy'/>
    ~~~

    