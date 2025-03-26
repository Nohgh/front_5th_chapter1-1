(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();class r{constructor(){this.user=JSON.parse(localStorage.getItem("user"))||{}}get(){return this.user}set({username:l="",email:a="",bio:o=""}){this.user={username:l,email:a,bio:o},localStorage.setItem("user",JSON.stringify(this.user))}clear(){localStorage.removeItem("user")}isLogin(){return!!this.get().username}}const f=()=>{let t="history";return window.location.hash.includes("#")&&(t="hash"),t},c=t=>{if(f()==="hash"){history.pushState(null,"","#/"+t.replace(/^\/+/,"")),window.dispatchEvent(new Event("hashchange"));return}history.pushState(null,"",t),window.dispatchEvent(new Event("popstate"))},u=new r;function w(t){var l,a,o,e;if(t.preventDefault(),t.target&&t.target.id==="login-form"){let s=(l=document.getElementById("username"))==null?void 0:l.value;u.set({username:s}),c("profile")}if(t.target&&t.target.id==="profile-form"){let s=(a=document.getElementById("username"))==null?void 0:a.value,n=(o=document.getElementById("bio"))==null?void 0:o.value,x=(e=document.getElementById("email"))==null?void 0:e.value;u.set({username:s,bio:n,email:x}),alert("프로필이 업데이트되었습니다.")}}function y(t){if(t.target&&t.target.nodeName=="A"){t.preventDefault();const l=t.target.href.replace(location.origin,"");c(l)}t.target&&t.target.id==="logout"&&(u.clear(),c("login"))}const E=()=>`
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
`,b=()=>`
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
  `,d="text-blue-600 font-bold",i="text-gray-600",g=()=>`
	<header class="bg-blue-600 text-white p-4 sticky top-0">
	  <h1 class="text-2xl font-bold">항해플러스</h1>
	</header>
	${new r().isLogin()?`<nav class="bg-white shadow-md p-2 sticky top-14">
	  <ul class="flex justify-around">
		<li>
		  <a href="/" class="${location.pathname==="/"||location.hash==="#/"||location.pathname==="/login"?d:i}"
			>홈</a
		  >
		</li>
		<li>
		  <a
			href="/profile"
			class="${location.pathname==="/profile"||location.hash==="#/profile"?d:i}"
			>프로필</a
		  >
		</li>
		<li>
		  <a id="logout" href="#" class=${i}>로그아웃</a>
		</li>
	  </ul>
	</nav>`:`<nav class="bg-white shadow-md p-2 sticky top-14">
	  <ul class="flex justify-around">
		<li>
		  <a href="/" class="${location.pathname==="/"||location.hash==="#/"?d:i}"
			>홈</a
		  >
		</li>
	  
		</li>
		<li>
		  <a href="/login" class=${i}>로그인</a>
		</li>
	  </ul>
	</nav>`}
  `,h=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,p=()=>`
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
      ${h()}
    </div>
  </div>
`,L=()=>{var e,s,n;const t=new r;let l=(e=t.get())==null?void 0:e.username,a=(s=t.get())==null?void 0:s.email,o=(n=t.get())==null?void 0:n.bio;return`
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
                  value=${l}
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
                  value="${a||""}"
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
                  value=${o||""}
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
        ${h()}
      </div>
    </div>
  `},$=()=>{let l=new r().isLogin(),a=f()==="hash",o=a?window.location.hash.slice(1):location.pathname,e="";return a||(e="/front_5th_chapter1-1"),console.log(e),o===`${e}/`?p():o===`${e}/profile`?(console.log("path입니다!",o),l?L():b()):o===`${e}/login`?(console.log("path입니다!",o),l?p():b()):E()},j=document.getElementById("root"),m=()=>{j.innerHTML=$()},v=document.getElementById("root");m();window.addEventListener("popstate",()=>m());window.addEventListener("hashchange",()=>m());v.addEventListener("submit",t=>w(t));v.addEventListener("click",t=>y(t));
