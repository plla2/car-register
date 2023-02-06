# React를 활용한 CRUD 주차등록차
react + JSON-Server 주차등록을 한 차들의 정보를 리스트화하여 확인, 추가, 삭제, 수정을 할 수 있다.

## 💻 Repo소개
주차등록을 따로 하거나 주차비를 미리 지불한 차들을 리스트화 하여 차이름,회사,번호를 입력하여 확인할 수 있는 사이트입니다.

## 🖋️ 주요 기능
<ul>
  <li> 렌더링 첫화면 리스트에서는 주차등록을 해놓은 차들의 정보를 db.json을 이용하여 서버에 저장해놓고, 확인 할 수 있게 해준다.
  <li> Add Entered car(+)버튼을 이용하여 차이름, 회사, 차번호를 입력하여 추가할 수 있다.
  <li> Actions의 버튼들을 통해 수정, 제거, 정보확인을 할 수 있다.
    <li> Edit버튼은 차의 정보들을 수정하여 수정한 값들을 목록에 다시 등록을 해줍니다.
      <li> Remove버튼은 차의 정보들을 db.json 서버의 배열로부터 제거를 해줍니다.
        <li> Details버튼은 차의 정보들(차이름, 회사, 차번호)를 디테일하게 보여주는 버튼입니다.
  </ul>
  
```
  useEffect(() => {
    fetch("http://localhost:8000/cars/")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setCardata(resp);
      })
      .catch((err) => {
        alert("에러가 발생하였습니다 !!");
      });
  }, []);
```
http://localhost:8000/cars/ 서버를 통해 db.json에 등록된 차들의 정보를 렌더링을 통해 보여주고,</br>
에러가 잡히면 catch문을 통해 alert로 사용자에게 알린다.
```
fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cardata),
    }
```
Creata 창을 통하여 cardata의 값들을 JSON.stringify를 이용하여 문자열로 반환해준다.
```
const Removefunction = (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetch("http://localhost:8000/cars/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("성공적으로 삭제되었습니다.");
          window.location.reload();
        })
        .catch((err) => {
          alert("에러가 발생하였습니다 !!");
        });
    }
  };
  ```
  Remove버튼을 누르면 alert를 통해 사용자에게 알림창이 뜨고 확인을 누르면 http://localhost:8000/cars/ 서버의 데이터에서 삭제가 되게 된다.</br>
  삭제가 완료되면 '성공적으로 삭제되었습니다'라는 알림창을 통해 사용자에게 알리고 화면이 다시 렌더링된다.</br></br>
  
 ## ❌ 에러내용 및 해결
 1. 에러내용: CarDetail.js작성 중에 No routes matched location의 에러메세지가 콘솔창에 뜸. </br>이 에러는 react가 렌더되면서 app.js에서 CarDetail가 제대로 렌더링 되지않고 끝내져서 맨 처음 렌더 시 이러한 에러 문구가 뜬 것이였다.</br></br><img width="333" alt="스크린샷 2023-02-06 오후 4 06 02" src="https://user-images.githubusercontent.com/120915990/216906027-62461d5f-401b-4618-9f92-f4b9facc76cf.png"></br> 해결방법: app.js에서 CarDetail의 Route path를 제대로 확인하고 /가 빠지지 않았는지 확인하여 path경로에 /가 빠져있는 것을보고 추가하여 해결하였다.</br></br>
 2. 에러내용: 404 Not Found의 에러가 발생하여 찾아보니 서버를 찾긴 했으나 URL에 해당되는 페이지(파일)을 찾을 수 없을 떄 발생한다고 하였다.</br>
 해결방법: Vscode를 재실행하고 npm start, db경로 설정까지만 완료하고 시작하여 react-router-dom을 설치하지 못해서 생긴 에러였다.<br> 
 ```
 npm i react-router-dom
 ```
 을 실행시켜 라우터까지 설치완료하고 실행하였더니 에러가 해결되었다.</br></br>
 
## ⚙️ Prerequisites
<ul>
<li>node >= 18.14.0
<li>react >= 18.2.0
<li>bootstrap >= 5.2.3
<li>json-server >= 0.17.1
<li>react-router-dom >= 6.8.0

### Install
```npx create-react-app .```</br>
```npm install react-router-dom --save```</br>
```npm install react-bootstrap bootstrap```</br>
```npm install json-server```</br>
```json-server --watch db.json --port 8000```</br>


## 🖥️ 실행화면
첫 렌더화면 </br></br>
<img width="800" alt="스크린샷 2023-02-06 오후 4 20 45" src="https://user-images.githubusercontent.com/120915990/216908704-3c46b68b-f73f-4af2-be3d-5818cbcefa1d.png"></br></br>
Create 화면</br></br>
<img width="751" alt="스크린샷 2023-02-06 오후 4 20 57" src="https://user-images.githubusercontent.com/120915990/216910314-5f14458d-ad37-4e00-a0e9-f17df5ffd30d.png">
</br></br>
Edit 화면</br></br>
<img width="646" alt="스크린샷 2023-02-06 오후 4 24 07" src="https://user-images.githubusercontent.com/120915990/216909705-7f6b54ec-1dbd-4a00-845f-c2bf33e571b7.png"></br></br>
Remove 화면</br></br>
<img width="800" alt="스크린샷 2023-02-06 오후 4 21 17" src="https://user-images.githubusercontent.com/120915990/216909860-0ed1f810-000f-4806-920f-ba514db9725a.png"></br></br>
Detail 화면</br></br>
<img width="617" alt="스크린샷 2023-02-06 오후 4 21 27" src="https://user-images.githubusercontent.com/120915990/216910033-209dc22d-43bb-4ee7-90fa-37ea326f87c6.png">


