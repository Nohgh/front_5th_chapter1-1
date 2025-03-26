(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(e){if(e.ep)return;e.ep=!0;const l=o(e);fetch(e.href,l)}})();class i{constructor(){this.user=JSON.parse(localStorage.getItem("user"))||{}}get(){return this.user}set({username:s="",email:o="",bio:a=""}){this.user={username:s,email:o,bio:a},localStorage.setItem("user",JSON.stringify(this.user))}clear(){localStorage.removeItem("user")}isLogin(){return!!this.get().username}}const m=()=>{let t="history";return window.location.hash.includes("#")&&(t="hash"),t},b=()=>{let t=m();const s="/front_5th_chapter1-1";return console.log("프로덕션인가? ",!0),t?"":s},c=t=>{if(m()==="hash"){history.pushState(null,"","#/"+t.replace(/^\/+/,"")),window.dispatchEvent(new Event("hashchange"));return}const s=b();history.pushState(null,"",`${s}${t}`),window.dispatchEvent(new Event("popstate"))},u=new i;function y(t){var s,o,a,e;if(t.preventDefault(),t.target&&t.target.id==="login-form"){let l=(s=document.getElementById("username"))==null?void 0:s.value;u.set({username:l}),c("/profile")}if(t.target&&t.target.id==="profile-form"){let l=(o=document.getElementById("username"))==null?void 0:o.value,n=(a=document.getElementById("bio"))==null?void 0:a.value,w=(e=document.getElementById("email"))==null?void 0:e.value;u.set({username:l,bio:n,email:w}),alert("프로필이 업데이트되었습니다.")}}function L(t){if(t.target&&t.target.nodeName=="A"){t.preventDefault();const s=t.target.href.replace(location.origin,"");c(s)}t.target&&t.target.id==="logout"&&(u.clear(),c("/login"))}const $=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div
      class="bg-white p-8 rounded-lg shadow-md w-full text-center"
      style="max-width: 480px"
    >
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,f=()=>`
	 <main class="bg-gray-100 flex items-center justify-center min-h-screen">
	  <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
		<h1 class="text-2xl font-bold text-center text-blue-600 mb-8">
		  항해플러스
		</h1>
		<form id="login-form">
		  <div class="mb-4">
			<input
			  id="username"
			  type="text"
			  placeholder="사용자 이름"
			  class="w-full p-2 border rounded"
			/>
		  </div>
		  <div class="mb-6">
			<input
			  type="password"
			  placeholder="비밀번호"
			  class="w-full p-2 border rounded"
			/>
		  </div>
		  <button
			id="loginBtn"
			type="submit"
			class="w-full bg-blue-600 text-white p-2 rounded font-bold"
		  >
			로그인
		  </button>
		</form>
		<div class="mt-4 text-center">
		  <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
		</div>
		<hr class="my-6" />
		<div class="text-center">
		  <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
			새 계정 만들기
		  </button>
		</div>
	  </div>
	</main>
  `,d="text-blue-600 font-bold",r="text-gray-600",g=()=>{let s=new i().isLogin();const o=b();return`
	<header class="bg-blue-600 text-white p-4 sticky top-0">
	  <h1 class="text-2xl font-bold">항해플러스</h1>
	</header>
	${s?`<nav class="bg-white shadow-md p-2 sticky top-14">
	  <ul class="flex justify-around">
		<li>
		  <a href="/" class="${location.pathname===`${o}/`||location.hash==="#/"||location.pathname===`${o}/login`?d:r}"
			>홈</a
		  >
		</li>
		<li>
		  <a
			href="/profile"
			class="${location.pathname===`${o}/profile`||location.hash==="#/profile"?d:r}"
			>프로필</a
		  >
		</li>
		<li>
		  <a id="logout" href="#" class=${r}>로그아웃</a>
		</li>
	  </ul>
	</nav>`:`<nav class="bg-white shadow-md p-2 sticky top-14">
	  <ul class="flex justify-around">
		<li>
		  <a href="/" class="${location.pathname===`${o}/`||location.hash==="#/"?d:r}"
			>홈</a
		  >
		</li>
	  
		</li>
		<li>
		  <a href="/login" class=${r}>로그인</a>
		</li>
	  </ul>
	</nav>`}
  `},v=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,h=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${g()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea
            class="w-full p-2 border rounded"
            placeholder="무슨 생각을 하고 계신가요?"
          ></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
            게시
          </button>
        </div>

        <div class="space-y-4">
          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img
                src="https://placehold.co/40"
                alt="프로필"
                class="rounded-full mr-2"
              />
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img
                src="https://placehold.co/40"
                alt="프로필"
                class="rounded-full mr-2"
              />
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img
                src="https://placehold.co/40"
                alt="프로필"
                class="rounded-full mr-2"
              />
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img
                src="https://placehold.co/40"
                alt="프로필"
                class="rounded-full mr-2"
              />
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img
                src="https://placehold.co/40"
                alt="프로필"
                class="rounded-full mr-2"
              />
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>
      ${v()}
    </div>
  </div>
`,E=()=>{var e,l,n;const t=new i;let s=(e=t.get())==null?void 0:e.username,o=(l=t.get())==null?void 0:l.email,a=(n=t.get())==null?void 0:n.bio;return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${g()}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value=${s}
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full p-2 border rounded"
                  value="${o||""}"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                  value=${a||""}
                >
자기소개입니다. 자기소개입니다.</textarea
                >
              </div>
              <button
                id="profileUpdate"
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
        ${v()}
      </div>
    </div>
  `},P=()=>{let s=new i().isLogin(),a=m()==="hash"?window.location.hash.slice(1):location.pathname;const e=b();return console.log(`${e}/profile`),a===`${e}/`?h():a===`${e}/profile`?s?E():f():a===`${e}/login`?s?h():f():$()},O=document.getElementById("root"),p=()=>{O.innerHTML=P()},x=document.getElementById("root");p();window.addEventListener("popstate",()=>p());window.addEventListener("hashchange",()=>p());x.addEventListener("submit",t=>y(t));x.addEventListener("click",t=>L(t));
