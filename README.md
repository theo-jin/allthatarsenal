#   개인프로젝트-ALLTHATARSENAL


<!--  -->
<br />

## 📝 프로젝트 소개
### NEXT.js를 활용한 아스날 팬 페이지
개인 프로젝트로 꾸준히 애정을 가지고 할 수 있는 프로젝트가 무엇일까? </br>
고민한 끝에 제가 좋아하는 팀 아스날에 관한 팬 페이지를 풀스택으로 제작하고 싶은 마음에 시작하게 되었습니다. </br>
      
**진행 기간: 2023.07 ~**


## 구현 기능
<!--  -->

#### 1. 회원가입 및 로그인 기능.NextAuth를 활용한 로그인.
#### 2. mongoDB에서 선수 목록 출력 및 생성.
#### 3. 선수 정보 출력 및 선수당 댓글 출력,작성,수정,삭제기능 구현.(tanstackQuery로 마이그레이션 진행중 댓글 삭제및 수정 현재 기능 불가.)
#### 4. Recharts를 활용한 선수간 스탯 비교 기능 구현
#### 5. FullCalendar와 fobmobAPI를 활용한 경기 일정관리. 

<!--  -->
<br />

## 🕹️ 실행 방법

```sh
$ git clone https://github.com/theo-jin/allthatarsenal.git
$ npm install
$ npm run dev
```

<!--  -->
<br />

## 🔗 배포 링크

https://allthatarsenal-orbi.vercel.app/

<!--  -->
<br />

## 🖱️ 기능
#### 테스트를 위해 로그인하시길 바랍니다.
```
id:asdf@asdf.com
pw:asdfasdf
```

### SwiperReact를 이용한 스크롤 
![CPT2404010024-600x482](https://github.com/theo-jin/allthatarsenal/assets/83561523/be430768-ba9e-41c5-8684-7a0193bed63b)


### mongoDB에서 선수 목록 출력 및 생성및 선수별 정렬
![CPT2404010053-600x396](https://github.com/theo-jin/allthatarsenal/assets/83561523/212486a9-b8f1-427c-aeeb-53136cb59413)

### fobmobAPI와 Fullcalender를 통한 일정표시
![CPT2404010039-600x481](https://github.com/theo-jin/allthatarsenal/assets/83561523/0ab66c5f-98c0-43a8-aa18-32ee4ab4cf1b)



###  Recharts를 활용한 선수간 스탯 비교 기능 구현
![CPT2404010041-600x481](https://github.com/theo-jin/allthatarsenal/assets/83561523/db9ed50b-8bc4-4112-bca5-f2c3fbb9c701)

## 업데이트
### 댓글기능 tanstackQuery로 마이그레이션 추후 useMutation으로 수정및 삭제 기능 업데이트트
댓글 기능을 구현할때 useEffect를 사용하고 의존성배열을 player.id(player마다 comment란이 있고 그 id로 comment를 출력합니다.)넣어 관리했지만 필요없는 서버요청이 많았습니다. 그것을 해결하고자 tanstackQuery를 적용하였습니다.
그래서 현재 댓글의 수정및 삭제기능이 정상적으로 작동 하지 않습니다.
```
<--useEffect사용-->
 useEffect(() => {
fetch("/api/comment/list?id=" + player._id)
  .then((r) => r.json()).then((result) => {
 			setCommentData(result);
 		});
 }, [player._id]);

```
```
<--tanstackQuery로 로딩상황과 정상적으로 호출됐을때 상황 처리-->
	const { data, isLoading, isError } = useQuery({
		queryKey: ["comments", player._id],
		queryFn: async () => {
			const res = await (
				await fetch(`/api/comment/list?id=${player._id}`)
			).json();
			return res;
		},
	});
```
## 🛠️ 기술 스택

<!--
  Shield.io 배지 양식

  <img src= "https://img.shields.io/badge/라벨-색상?style=배지스타일&logo=로고이름&logoColor=로고색상">

  - 라벨: 임의의 이름
  - 색상: https://simpleicons.org/ 에서 검색한 로고의 색상코드 (# 제외하고 입력)
  - 배지 스타일: plastic, flat, flat-square, for-the-badge, social 중 하나 선택
  - 로고 이름: https://simpleicons.org/ 에서 검색한 로고의 이름
  - 로고 색상: 로고의 색상코드
-->
<p>
<!-- npm -->
<img src= "https://img.shields.io/badge/npm-CB3837?&logo=npm&logoColor=white">
  
<!-- NEXT.js -->
<img src= "https://img.shields.io/badge/Next.js-000000?&logo=Next.js&logoColor=white">
<!-- ReactQuery -->
<img src= "https://img.shields.io/badge/ReactQuery-FF4154?&logo=ReactQuery&logoColor=white">
<!-- NextAuth -->
<img src= "https://img.shields.io/badge/NextAuth-000000?&logo=Next.js&logoColor=white">
<!-- NEXTUI -->
<img src= "https://img.shields.io/badge/NextUI-000000?&logo=&logoColor=white">
<!-- MongoDB -->
<img src= "https://img.shields.io/badge/MongoDB-47A248?&logo=MongoDB&logoColor=white">
<!-- Typescript -->
<img src= "https://img.shields.io/badge/typescript-3178C6?&logo=typescript&logoColor=white">
<!-- Recharts-->
<img src="https://img.shields.io/badge/Recharts-FF6384?&logo=Recharts&logoColor=white">
<!-- emotion -->
<img src="https://img.shields.io/badge/emotion-D26AC2?&logoColor=white">
<!-- Vercel -->
<img src= "https://img.shields.io/badge/vercel-000000?&logo=vercel&logoColor=white">
<!-- Swiper -->
<img src= "https://img.shields.io/badge/Swiper-000000?&logoColor=white">
<!-- Fullcalender -->
<img src= "https://img.shields.io/badge/Fullcalender-3178C6?&logoColor=white">

</p>



  <!--  -->
  <br />
  



