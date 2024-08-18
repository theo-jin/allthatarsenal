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

### 1. 데이터 페치 이원화의 이유: 비즈니스 로직에 따른 분리

프로젝트에서는 비즈니스 로직에 따라 데이터 페치 방식을 두 가지로 분리하여 효율성을 높였습니다. Next.js 의 데이터 페치 방식 중 하나인 **서버 컴포넌트에서의 페치**와 클라이언트 컴포넌트에서의 **TanStack Query** 를 조합하여 사용했습니다

### Next.js Fetch를 단독으로 사용시 나타나는 문제점

Next.js의 기본 데이터 페치 방식은 서버 캐시를 사용하여 모든 데이터 요청의 응답을 캐시합니다. 이 방식은 개인화된 요청에서도 **모든 사용자에게 동일한 응답이 반환되는 문제**가 발생했습니다. 이를 해결하기 위해, 개인화된 요청과 공통된 요청을 구분하여 데이터 페치 방식을 이원화했습니다

### **1-1) 개인화된 요청: TanStack Query**

개인화된 요청을 처리하기 위해 TanStack Query를 사용했습니다. Next.js fetch에서 no-store 옵션을 설정하여 캐싱을 방지할 수도 있었지만, 이 경우 새로 고침이나 캐시 만료 시마다 API 호출이 발생하여 비용이 증가하는 문제가 있었습니다. 이를 해결하기 위해, 개인화된 요청은 클라이언트 컴포넌트에서 TanStack Query로 브라우저 메모리에 캐시하고, queryKey와 staleTime으로 캐시를 관리했습니다. 검색 엔진 노출이 필요 없는 개인화된 요청은 클라이언트 컴포넌트에서 처리하여 서버 부하를 줄였습니다.

본 프로젝트에서는 선수별 댓글 및 즐겨찾기와 같은 **Authorization이 필요한 요청을 클라이언트 컴포넌트에서 TanStack Query를 사용**하여 관리했습니다.

### **1-2) 공통된 요청: Next.js Fetch**

개인화되지 않은 데이터는 Next.js 서버 컴포넌트에서 Next.js fetch를 사용하여 관리했습니다. 서버 컴포넌트(RSC, React Server Component)는 데이터 페치 로직을 서버로 옮겨 데이터베이스와 더 가깝게 처리할 수 있는 장점이 있습니다. Next.js 서버 컴포넌트에서 데이터를 페치하면, 서버 요청과 배포 전반에 걸쳐 캐싱된 데이터를 유지할 수 있습니다. 이를 통해, 개인화되지 않은 정적 데이터를 효율적으로 캐싱하여 사용할 수 있습니다.
본 프로젝트에서는 선수 정보, 경기 일정 등의 **개인화되지 않은 정적 데이터를 효율적으로 캐싱하여 사용하기 위해 Next.js의 서버 컴포넌트에서 data fetch를 하여 관리**하였습니다.

### 2.Next/image를 쓰는 이유: Next/image의 자동 최적화 기능으로 이미지 로딩 시간을 단축

프로젝트 초기에는 Next.js의 Next/Image 대신 img 태그를 사용했습니다. Next/Image의 이미지 최적화 과정이 무겁다고 판단했기 때문입니다. 그러나 진행 중 img 태그의 다운로드 시간이 길다는 문제를 발견하고, Next/Image 사용을 재고하게 되었습니다.

**Next/Image의 장점**

- **자동 최적화**: 빌드 시 이미지를 자동으로 최적화. 이미지 크기를 미리 줄여주어 사용자의 이미지 로딩 시간을 단축합니다.
- **지연 로딩**: 초기 페이지 로드 시 필요하지 않은 리소스를 로드하지 않음으로써 성능을 향상시킵니다.
- **자동 캐싱**: 서버에서 이미지 크기를 자동으로 조절하고 캐싱합니다.

**Next/Image의 단점**

- **서버 부하**: next/image의 자동 이미지 최적화 기능은 수많은 이미지를 처리 시 **서버 리소스 사용량을 증가**시킬 수 있습니다.
- **기능 중복**: 이미 외부 CDN을 통해 이미지 최적화와 캐싱하고 있을 시, **next/image가 제공하는 기능(자동 최적화)과 중복**될 수도 있습니다.

**Next/Image**의 장단점들을 본 프로젝트에 고려하여 판단하였습니다.

- 본 프로젝트에서는 이미지를 Firebase storage에서 가져오고 있고, 외부 CDN 도입 시 지불해야 하는 추가 비용이 발생하기에 도입하지 않았습니다.이로 인해 **Next/Image의 기능 중복 문제는 발생하지 않았습니다.**

**성능비교**

- 빌드 상황에서 최적화된 이미지를 불러오는 속도가 빨랐습니다. (**다운로드 속도 50% 감소**)
  - 이미지 로딩 속도:
    - Next/Image: 약 6초 (slow 3G 환경)
    - img 태그: 약 12초 (slow 3G 환경)

또한 데이터나 개발 조건 변경에 따라 다시 HTML img태그로 변경 시 리팩토링이 비교적 어렵지 않았습니다.

본 프로젝트 에서는Next/Image의 장점들이 단점보다 훨씬 크기 때문에, 최종적으로 Next/Image를 사용하기로 결정했습니다. 이를 통해 이미지 로딩 시간을 단축하고 사용자 경험을 향상시켰습니다

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
