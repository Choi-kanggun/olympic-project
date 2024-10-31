# olympic-project

# 목차

1. 프로젝트 목표
2. 컴포넌트 분리
3. 기능 소개
4. 프로젝트 시연

# 1. 프로젝트 목표

- 리액트 컴포넌트와 훅(useState)을 다루기
- 리액트에서 이벤트를 관리하기
- 리액트의 state, props 를 확실히 이해하고 사용해보기

# 2. 컴포넌트 분리

- emotion을 사용하여 css를 적용하였고, App.jsx, MedalForm.jsx, MedalTable.jsx로 각각 분리하였습니다.<br>
- 국가명과 메달을 입력 받는 input창과 국가 추가, 업데이트 버튼을 하나의 form 태그로 만들어서 MedalForm.jsx로 분리하였습니다. <br>
- MedalForm.jsx에서 추가한 리스트들이 표시되는 MedalTable.jsx입니다.<br>

![](https://velog.velcdn.com/images/kg4889/post/518e0ac9-1959-44f5-8b0b-35964caca990/image.png)

# 3. 기능 소개

### 기본 레이아웃 구성

![image](https://github.com/user-attachments/assets/e67aaf58-c294-4ec3-aa80-1ef2d3847696)

- 각 국가들의 올림픽 메달 현황을 테이블에 추가할 수 있습니다.

![image](https://github.com/user-attachments/assets/f7a3bf44-247e-42f3-b3dc-43591690f7ea)

- localStorage를 이용하여 새로고침 혹은 페이지가 닫혀도 데이터들이 유지됩니다.

![image](https://github.com/user-attachments/assets/64b5217e-04fc-45c6-811c-027286508151)


- 메달 input창은 0~99 이외의 숫자를 입력하면, 0이상 100미만의 숫자를 입력하라는 alert을 띄웁니다.<br>
- 추가한 국가들의 메달 변동 사항을 업데이트 버튼으로 변경할 수 있습니다. <br>
- 이미 리스트에 있는 국가를 다시 추가하려고 하면, alert을 통해 알려줍니다.<br>
- 리스트에 없는 국가를 업데이트 하려고 하면, alert을 통해 알려줍니다.<br>
- 금메달 개수에 따른 정렬 또는 메달 총합에 따른 정렬 버튼으로 정렬할 수 있습니다.<br>
- 테이블의 국가 리스트를 삭제할 수 있습니다.<br>

# 4. 프로젝트 시연

- 국가 메달 리스트를 추가하고 업데이트하여 테이블에 등록하고 금메달 개수와 총합 개수에 따른 정렬 시연 <br>
![bandicam2024-10-3110-40-09-858-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/851ff582-7ddc-4fc7-8799-d5f6cddcff94)


- 테이블에 등록된 국가 리스트를 삭제하고, localStorage를 이용하여 데이터 유지 시연<br>
![bandicam2024-10-3110-41-22-837-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/0b8afa9c-84d6-46ee-abac-647449052483)


- 리스트에 이미 등록된 국가를 추가하거나 리스트에 없는 국가 추가 시 alert창 알림 시연<br>
![bandicam2024-10-3111-28-50-979-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/fc171362-02a4-44bb-99a4-1745d6fb1510)


- 메달 input에 0~99 이외의 숫자가 입력될 경우, alert창 알림 시연<br>
![bandicam2024-10-3111-31-32-774-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/b15d9993-7753-41da-ab5b-ae340cd34871)

