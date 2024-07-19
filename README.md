# ALLTHATARSENAL

### NEXT.js를 활용한 아스날FC 팬 페이지

## 프로젝트 소개

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

#### 1. NextAuth를 이용한 회원가입 및 로그인 & 로그아웃 기능

- 회원가입, 이메일 중복검사 및 비밀번호 유효성검사를 클라이언트와 서버 단에서 시행.
- API routes로 회원 정보 DB에 전달.
- NextAuth로 로그인과 로그아웃 기능 구현.
- NextAuth를 이용한 인가 페이지(마이페이지) 구현.

#### 2. 선수 목록 출력 및 선수별 정렬

- 데이터베이스는 NoSQL로 관리. 선수데이터, 사용자 정보 및 댓글 저장.
- 개인화되지 않은 요청인 선수 목록 출력은 NEXT.js에서 데이터 페칭.
- 이미지는 Firebase storage에서 관리

#### 3. 선수 상세 정보 출력 및 선수별 댓글 CRUD 구현

- 개인화되지 않은 요청인 선수 상세 정보 출력은 NEXT.js에서 데이터 페칭.
- 각 선수별 댓글,즐겨찾기와 같은 개인화된 기능은 client-side에서 관리하기 위해 TanstackQuery로 데이터페칭.
- 댓글 및 즐겨찾기 기능은 NextAuth로 인가 받지 못하면 기능 사용 불가.
- role이 Admin인 계정은 user확인없이 모든 댓글 삭제가능.

#### 4. 선수 별 즐겨찾기 기능 구현

- 로그인 상태일 때만 즐겨찾기 기능 작동 로그아웃 상태에서는 즐겨찾기 기능 미표시
- 현재 즐겨찾기 리스트에 선수 존재 여부 확인, TanstackQuery로 출력 및 수정 기능
- 마이페이지(인가 페이지)에서 즐겨찾기 리스트 출력

#### 5. Recharts를 이용한 선수 간 스탯 비교 기능 구현

- NEXT.js에서 가져온 선수 스탯 데이터를 Recharts로 시각화하여 선수 간 스탯비교 기능을 구현.
- Recharts는 선수 상세 페이지에서도 사용.

#### 6. FullCalendar와 fobmobAPI를 이용한 경기 일정 표시

- fobmobAPI의 경기 일정 데이터를 FullCalendar로 구현하여 경기 일정 시각화.

<br />

## 아키텍쳐

![alt text](image-2.png)

## DB

![alt text](image.png)

## 1. data fetching을 두 가지로 한 이유: 개인화된 요청과 개인화되지 않은 요청 분리

Data fetching에 관해 공부하며 개인화된 요청은 서버에 캐싱 되면 안 된다는 것을 알게 되었습니다. 하지만 Next.js의 데이터 페칭은 기본적으로 서버에서 요청이 캐싱 되었습니다. 그래서 개인화된 요청된 요청이냐 아니냐에 따라 data fetch를 TanstackQuery와 Next.js의 fetch로 관리하였습니다.

### 1-1) TanstackQuery

이 프로젝트에서 즐겨찾기나 와 같은 개인화된 요청이 있습니다. 개인화된 요청은 서버에 캐싱 되면 안 됩니다. 개인화된 요청이 서버에 캐싱되면 서버에 과부하가 올 수도 있고, force-cache를 사용하면 모든 사용자에게 동일한 응답이 반환됩니다.
fetch를 사용할 때 no-store 옵션을 설정하여 사용하는 방법도 고려했지만 이 경우, 새로고침 및 라우트 캐시가 만료될 때마다 API 호출이 발생한다는 단점이 있다는 것을 알게 되었습니다.

그래서 개인화된 요청을 client-side에서 TanstackQuery를 사용하여 브라우저 메모리에 개인화된 요청에 대한 응답을 캐시를 하고 queryKey와 staleTime으로 캐시를 관리하는 방법을 사용했습니다. 개인화된 요청의 경우 검색 엔진에 노출될 필요가 없으므로 SEO에 대한 걱정없이 ‘use client’를 사용하였습니다.

### 1-2) Next.js에서 페칭

Next.js의 서버 컴포넌트는 RSC에 기반하고 있습니다. Next.js fetching의 장점으로는

- 데이터 페칭 로직을 서버로 옮길 수 있어, DB와 더 가까이에서 처리할 수 있다.

- 번들 사이즈가 클라이언트에 영향을 주지 않게 할 수 있다.

- Next.js 에서는 서버 요청 및 배포 전반에 걸쳐 fetch 요청에 대한 결과를 유지하는 데이터 캐시가 내장되어 있다.

등이 있었습니다.

본 프로젝트에서는 선수 정보 등의 개인화되지 않은 정적 데이터를 캐싱하여 활용하기 위해 Next.js의 기본 fetching으로 데이터 페치를 실행하였습니다.

## 2. next/image를 쓰는 이유: next/image의 자동 최적화기능으로 이미지 로딩 시간을 단축

next/image를 사용했을 때 장점이 3가지 있습니다.

- 자동 최적화 : 빌드 시 이미지를 자동으로 최적화. 이미지 크기를 미리 줄여주어 사용자의 이미지 로딩 시간을 단축.

- 지연 로딩 : 초기 페이지 로드 시 필요하지 않은 리소스를 로드하지 않음으로써 성능을 향상.

- 자동 캐싱 : 서버에서 이미지 크기를 자동으로 조절하고 캐싱.

등이 있었고, next/image를 사용하는데 고려해야 할 단점들도 있었습니다.

- 서버 부하:next/image의 자동 이미지 최적화 기능은 수많은 이미지를 처리할 때 서버 리소스 사용량을 증가시킬 수 있습니다.

- 중복 :이미 외부 CDN을 통해 이미지 최적화와 캐싱하고 있을시, next/image가 제공하는 기능과 중복될 수도 있습니다.

저는 next/image가 가지는 장단점들을 본 프로젝트를 고려하여 판단하였습니다.

- 본 프로젝트에서는 이미지를 firebase storage에서 가져오고 있고, 현재 CDN을 사용하지 않으며, 현재 도입 계획이 없다는 점.
- 빌드 상황에서 최적화된 이미지를 불러오는 속도가 빠르다는 점.
  - slow 3G 환경에서 속도 비교(next/image에서 용량 변경이 있긴 했습니다.)
    - next/image: 약 6s
    - img태그: 약 12s
- 데이터나 개발 조건 변경에 따라 다시 img태그로 변경 시 리팩토링이 비교적 어렵지 않다는 점.
  등을 고려하여 종합적으로 next/image를 현재 프로젝트에 사용하는 것이 좋다고 판단하여 사용하였습니다.

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
