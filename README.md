# ALLTHATARSENAL

### NEXT.js를 활용한 아스날FC 팬 페이지

## 프로젝트 소개

이 프로젝트는 Next.js를 기반으로 제작된 아스날 FC 팬 페이지입니다. NoSQL 데이터베이스를 활용하여 선수 정보를 관리하며, 사용자들이 선수별 즐겨찾기 기능, 댓글 작성, 경기 일정 확인 등의 서비스를 이용할 수 있도록 구현하였습니다.

이 페이지는 단순한 토이 프로젝트를 넘어서, 하나의 완성된 서비스를 목표로 꾸준히 개선하고자 시작한 프로젝트입니다. 이전의 프로젝트들이 단편적으로 끝난 아쉬움을 반영하여, 이번에는 학습한 내용을 지속적으로 적용하고 발전시키려는 의도를 담고 있습니다.

## 기술 스택

<p>

<img src="https://img.shields.io/badge/typescript-3178C6?&logo=typescript&logoColor=white"  alt="typescript">

<img src="https://img.shields.io/badge/npm-CB3837?&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Next.js-000000?&logo=Next.js&logoColor=white"  alt="Next.js">
<img src="https://img.shields.io/badge/TanStackQuery-FF4154?&logo=ReactQuery&logoColor=white" alt="TanStackQuery">
<img src="https://img.shields.io/badge/NextAuth-000000?&logo=Next.js&logoColor=white"alt="NextAuth">
<img src="https://img.shields.io/badge/NextUI-000000?&logo=NextUI&logoColor=white" alt="NextUI">
<img src="https://img.shields.io/badge/Swiper-6332F6?&logo=Swiper&logoColor=white" alt="Swiper">
<img src="https://img.shields.io/badge/Recharts-FF6384?&logo=Recharts&logoColor=white" alt="Recharts">
<img src= "https://img.shields.io/badge/Fullcalender-3178C6?&logoColor=white" alt="Fullcalender">

<img src="https://img.shields.io/badge/MongoDB-47A248?&logo=MongoDB&logoColor=white" alt="MongoDB">
<img src="https://img.shields.io/badge/Firebase-DD2C00?&logo=firebase&logoColor=white" alt="Firebase">
<img src="https://img.shields.io/badge/vercel-000000?&logo=vercel&logoColor=white" alt="vercel">

</p>

## 구현 기능

### 사용자 인증 및 권한 관리

- NextAuth로 회원가입, 로그인, 로그아웃 기능 구현.이메일 중복검사 시행
- 비밀번호 **유효성 검사를 프론트엔드와 백엔드 모두에서 시행해 보안 강화**.

### 데이터 관리

- MongoDB로 선수 데이터, 사용자 정보, 댓글 관리. **유연한 스키마로 변경사항 대응**.
- Firebase Storage로 선수 이미지 및 홈 화면 이미지 관리.

### 댓글 및 즐겨찾기 기능

- 댓글 기능: 사용자 인가 시 등록 및 삭제 가능, Admin 계정은 모든 댓글 삭제 가능.
- 즐겨찾기 기능: 로그인 상태에서만 즐겨찾기 표시 및 등록/취소 가능, 마이 페이지에서 리스트 출력.

### 선수 스탯 비교 및 경기 일정 표시

- Recharts로 선수 간 스탯 비교 시각화.
- FullCalendar와 fobmobAPI를 사용해 경기 일정 데이터 시각화

<br />

## 아키텍쳐

![alt text](image-1.png)

## DB

![alt text](image.png)

## 기술 선정의 이유

### [1. 데이터 페치 이원화의 이유: 비즈니스 로직에 따른 분리](https://velog.io/@theo_jin/%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%8E%98%EC%B9%AD)

### [2.Next/image를 쓰는 이유: Next/image로 LCP(Largest Contentful Paint)를 30% 개선](https://velog.io/@theo_jin/Nextimage%EB%A5%BC-%EC%93%B0%EB%8A%94-%EC%9D%B4%EC%9C%A0All-That-Arsenal)

### [3.TailwindCSS & NEXT UI를 사용](https://velog.io/@theo_jin/TailwindCSS-NEXT-UI%EB%A5%BC-%EC%82%AC%EC%9A%A9All-That-Arsenal)

## 실행 방법

```sh
$ git clone https://github.com/theo-jin/allthatarsenal.git
$ npm install
$ npm run dev
```

<br />

## 배포 링크

https://allthatarsenal-orbi.vercel.app/

<br />

## 기능

#### 테스트를 위해 로그인하시길 바랍니다.

```
id:asdf@asdf.com
pw:asdfasdf
```
