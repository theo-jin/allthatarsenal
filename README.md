# ALLTHATARSENAL

### NEXT.js를 활용한 아스날FC 팬 페이지

## 프로젝트 소개

NEXT.js기반의 아스날FC 팬 페이지입니다. NoSQL로 선수 정보 관리하고, 선수별 즐겨찾기, 댓글 작성 기능, 경기 일정 정보를 제공하는 서비스입니다.

NEXT.js를 활용한 아스날FC 팬 페이지입니다. 여러 토이 프로젝트를 하였지만 대부분 단편적으로 끝나는 경우가 많았고, 그 프로젝트를 더 이상 디벨롭하지 못해 아쉬웠던 경험이 있었습니다. 하나의 서비스를 만든다라고 생각하고, 제가 학습한 것들로 꾸준히 코드 개선을 하려는 의도로 프로젝트를 시작했습니다.

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

### NextAuth를 이용한 회원가입 및 로그인 & 로그아웃 기능

- 회원가입, 이메일 중복검사 및 비밀번호 유효성검사 시행.
  - 프론트엔드에서만 진행되는 유효성 검사는 개발자 도구와 같은 것들로 무효가 될 수 있기 때문에, 프론트엔드와 백엔드에서 양쪽에서 유효성 검사 시행.

### 개인화 여부에 따른 data fetch 이원화

- 한 유저의 개인화된 요청인가 or 다수 유저의 공통된 요청인가에 따라 data fetch 이원화
- 선수별 댓글 및 즐겨찾기와 같은 요청은 개인화된 요청이기에 클라이언트 컴포넌트에서 TanStack Query로 data fetch
- 선수 목록 및 선수 상세 정보 와 같은 요청은 개인화 되지 않은 다수 유저의 공통된 요청이기에 서버 컴포넌트에서 Next.js로 data fetch

### MongoDB와 Firebase Storage로 선수 데이터 관리

- 데이터베이스는 MongoDB로 관리. 선수 데이터, 사용자 정보 및 댓글 저장.
  - MongoDB의 유연한 스키마가 데이터 요구사항이 변경될 때 매끄럽게 적용되는 장점 때문에 MongoDB사용.
- 선수 이미지 및 홈 화면 이미지 Firebase Storage에서 관리.

### 선수별 댓글 CRUD 구현

- 댓글 기능 사용자 인가 없을 시 등록 및 삭제 불가.
- Admin 계정은 user 확인 없이 모든 댓글 삭제 가능.
  - role이 user인 계정은 서버에서 댓글에 저장된 작성자와 user name이 일치해야 수정 및 삭제 기능 작동, role이 admin인 계정은 서버에서 user 일치 확인 없이 모든 댓글 삭제 가능

### 선수별 즐겨찾기 기능 구현

- 로그인 상태서만 즐겨찾기 표시 및 등록/취소 기능 동작. 로그아웃 상태에서는 즐겨찾기 미표시 및 비활성화
- Protected Routes (마이 페이지)에서 즐겨찾기 리스트 출력.

### Recharts를 활용한 선수 간 스탯 비교 기능 구현

- Next.js에서 가져온 선수 스탯 데이터를 Recharts로 시각화, 선수 간 스탯 비교 기능 구현. 선수 목록 출력 시 사용된 선수 카드 컴포넌트 재활용.
- Recharts는 선수 상세 페이지에서 적용

### FullCalendar와 fobmobAPI를 활용한 경기 일정 표시

- fobmobAPI의 경기 일정 데이터를 FullCalendar로 구현, 경기 일정 시각화.

<br />

## 아키텍쳐

![alt text](image-1.png)

## DB

![alt text](image.png)

## 1. data fetching을 두 가지로 한 이유: 개인화된 요청과 개인화되지 않은 요청 분리

Next.js의 data fetch 많은 방법 중 NEXT.js에서 fetch 하는 방법을 사용했습니다. NEXT.js fetch의 캐시 방법은 서버 캐시를 사용하였고, NEXT.js fetch 사용 시 모든 데이터 요청의 응답 캐시를 서버 캐시로 처리해야 하는 문제가 생겼습니다. NEXT.js fetch는 force-cache 기본 옵션으로 요청의 응답이 서버에 캐싱 되는데, 그것이 개인화된 요청일 때도 모든 사용자에게 똑같은 응답이 반환되는 문제가 생겼습니다.  
해당 문제를 해결하고자 개인화된 요청된 요청이냐 아니냐에 따라 data fetch를 클라이언트 컴포넌트에서 TanStack Query와 서버 컴포넌트에서 NEXT.js fetch로 관리하였습니다.

### 1-1) TanstackQuery

개인화된 요청을 캐싱하지 않고 NEXT.js fetch의 no-store 옵션을 설정하여 사용하는 방법도 고려했지만, 이 경우, 새로 고침을 하거나 캐시가 만료될 때마다 API 호출이 발생하여 API 호출 비용이 늘어나는 문제가 있었습니다.  
그 문제를 보완하고자 개인화된 요청은 클라이언트 컴포넌트에서 TanStack Query를 사용하여 브라우저 메모리에 캐시를 하고, queryKey와 staleTime으로 캐시를 관리하는 방법을 사용했습니다. 개인화된 요청의 경우 검색 엔진에 노출될 필요가 없으므로 SEO에 대한 걱정 없었고, 그 데이터까지 서버에서 캐싱할 시 서버 부하가 온다고 판단하여 클라이언트 컴포넌트에서 data fetch하여 관리하였습니다.  
본 프로젝트에서는 Authorization이 포함된 요청인 선수별 댓글 및 즐겨찾기를 클라이언트 컴포넌트에서 TanStack Query를 사용하여 관리하여 해결했습니다.

### 1-2) Next.js에서 페칭

개인화되지 않은 데이터들은 Next.js의 서버 컴포넌트에서 NEXT.js fetch로 관리하였습니다. NEXT.js의 서버 컴포넌트는 RSC(React Server Component)에 기반하고 있습니다. 서버 컴포넌트의 장점은 data fetch 로직을 서버로 옮길 수 있고, DB와 더 가까이에서 처리할 수 있습니다. Next.js의 서버 컴포넌트에서 data fetch 할 경우, 서버 요청과 배포 전반에 걸쳐 fetch 요청에 대한 결과를 유지하는 데이터 캐시가 내장되어 있어 모든 배포에서 캐싱 된 데이터가 유지된다는 장점이 있습니다.  
본 프로젝트에서는 선수 정보, 경기 일정 등의 개인화되지 않은 정적 데이터를 효율적으로 캐싱하여 사용하기 위해 Next.js의 서버 컴포넌트에서 data fetch를 하여 관리하였습니다.

## 2. next/image를 쓰는 이유: next/image의 자동 최적화기능으로 이미지 로딩 시간을 단축

프로젝트 초기 세팅 시, next/image에서 제공하는 이미지 최적화 과정이 무겁다고만 생각하고, 대신 img태그를 사용하는 것이 좋다고 생각하여 img태그를 사용하였습니다. 하지만, 프로젝트를 진행하며 img태그 다운로드 시간이 길다는 것을 발견하였고, 본 프로젝트에는 무엇이 더 적합한가 하고 고민하였습니다. 우선 저는 next/image의 장단점을 알아보았습니다.

### 장점

- **자동 최적화**: 빌드 시 이미지를 자동으로 최적화. 이미지 크기를 미리 줄여주어 사용자의 이미지 로딩 시간을 단축합니다.
- **지연 로딩**: 초기 페이지 로드 시 필요하지 않은 리소스를 로드하지 않음으로써 성능을 향상시킵니다.
- **자동 캐싱**: 서버에서 이미지 크기를 자동으로 조절하고 캐싱합니다.

### 단점

- **서버 부하**: next/image의 자동 이미지 최적화 기능은 수많은 이미지를 처리 시 서버 리소스 사용량을 증가시킬 수 있습니다.
- **기능 중복**: 이미 외부 CDN을 통해 이미지 최적화와 캐싱하고 있을 시, next/image가 제공하는 기능(자동 최적화)과 중복될 수도 있습니다.

저는 next/image의 장단점들을 본 프로젝트에 고려하여 판단하였습니다.

- 본 프로젝트에서는 이미지를 Firebase storage에서 가져오고 있고, 외부 CDN 도입 시 지불해야 하는 추가 비용이 발생하기에 도입하지 않았습니다. 그래서 next/image와 CDN의 기능 중복문제는 단점이 되지 않았습니다.
- 빌드 상황에서 최적화된 이미지를 불러오는 속도가 빠릅니다. (**다운로드 속도 50% 감소**)
  - slow 3G 환경에서 속도 비교
    - next/image: 약 6s
    - HTML img태그: 약 12s
- 데이터나 개발 조건 변경에 따라 다시 HTML img태그로 변경 시 리팩토링이 비교적 어렵지 않았습니다.

위와 같은 장단점을 고려하여 next/image 사용 시 발생하는 단점들보다 장점들이 더 많아 최종적으로 next/image를 현재 프로젝트에 사용하게 되었습니다.

## 3.TailwindCSS & NEXT UI를 사용

### 3-1) TailwindCSS

- TailwindCSS는 제로 런타임으로 (런타임에 CSS를 계산할 필요가 없으므로 페이지 로딩 속도가 향상됩니다.)동작하며 빠르다는 장점이 있었습니다.

```
제로런타임

브라우저가 페이지를 렌더링할 때 실제로 사용되는 스타일만 포함하는 최적화된 CSS 파일을 빌드 타임에 생성
```

- CSS 번들 크기를 줄여준다.: 실제로 사용되는 스타일만 포함되므로 CSS 번들 크기가 줄어듭니다.

물론 tailwind를 쓰는 데 단점들도 존재했으나 위와 같은 장점과 상대적으로 쓰기 쉽고, 반응형을 구성하는 데에 편하기에 사용하였습니다.

### 3-2) NextUI

- NextUI는 TailwindCSS를 스타일 엔진으로 사용하는데, NextUI 컴포넌트 내에서 모든 TailwindCSS 클래스를 사용할 수 있어서 tailwind TailwindCSS와 연계가 좋았습니다.
- NextUI는 tailwind-variants라는 TailwindCSS 유틸리티 라이브러리를 만들어 TailwindCSS 클래스 충돌을 자동으로 처리하고 관리하고있고, 그것이 TailwindCSS와 같이 사용 하기 좋다고 판단하였습니다.

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

### SwiperReact를 이용한 스크롤

![CPT2404010024-600x482](https://github.com/theo-jin/allthatarsenal/assets/83561523/be430768-ba9e-41c5-8684-7a0193bed63b)

### mongoDB에서 선수 목록 출력 및 생성및 선수별 정렬

![CPT2404010053-600x396](https://github.com/theo-jin/allthatarsenal/assets/83561523/212486a9-b8f1-427c-aeeb-53136cb59413)

### fobmobAPI와 Fullcalender를 통한 일정표시

![CPT2404010039-600x481](https://github.com/theo-jin/allthatarsenal/assets/83561523/0ab66c5f-98c0-43a8-aa18-32ee4ab4cf1b)

### Recharts를 이용한 선수간 스탯 비교 기능 구현

![CPT2404010041-600x481](https://github.com/theo-jin/allthatarsenal/assets/83561523/db9ed50b-8bc4-4112-bca5-f2c3fbb9c701)
