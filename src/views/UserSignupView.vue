<!-- src/views/UserSignupView.vue -->
<template>
  <div class="min-h-screen relative">
    <!-- 로고 -->
    <RouterLink to="/"></RouterLink>

    <!-- 중앙 정렬된 폼 영역 -->
    <div class="flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">일반회원 회원가입</h2>

        <!-- 회원가입 폼 -->
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- 이름 -->
          <div>
            <label class="block text-sm font-medium">이름</label>
            <input
              v-model="name"
              type="text"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
            <p v-if="name">
              <span v-if="!nameValid" class="text-red-500 text-sm"
                >이름은 2자 이상이어야 합니다.</span
              >
              <span v-else class="text-green-600 text-sm"
                >사용 가능한 이름입니다.</span
              >
            </p>
          </div>

          <!-- 닉네임 -->
          <div>
            <label class="block text-sm font-medium">닉네임</label>
            <div class="flex space-x-2 mt-1">
              <input
                v-model="nickname"
                type="text"
                class="flex-grow border border-gray-400 rounded-full px-4 py-2 outline-none"
              />
              <button
                type="button"
                class="w-24 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold"
                @click="checkNicknameDuplicate"
              >
                중복검사
              </button>
            </div>
            <p v-if="nickname">
              <span v-if="!nicknameValid" class="text-red-500 text-sm">
                닉네임은 2자 이상이어야 합니다.
              </span>
              <span
                v-else-if="isNicknameChecked"
                class="text-green-600 text-sm"
              >
                사용 가능한 닉네임입니다.
              </span>
              <span v-else class="text-yellow-600 text-sm">
                닉네임 중복검사를 진행해주세요.
              </span>
            </p>
          </div>

          <!-- 아이디 (이메일) -->
          <div>
            <label class="block text-sm font-medium">아이디 (이메일)</label>
            <div class="flex space-x-2 mt-1">
              <input
                v-model="username"
                type="email"
                class="flex-grow border border-gray-400 rounded-full px-4 py-2 outline-none"
              />
              <button
                type="button"
                class="w-24 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold"
                @click="checkUsernameDuplicate"
              >
                중복검사
              </button>
            </div>
            <p v-if="username">
              <span v-if="!usernameValid" class="text-red-500 text-sm">
                유효한 이메일 형식을 입력하세요.
              </span>
              <span
                v-else-if="isUsernameChecked"
                class="text-green-600 text-sm"
              >
                사용 가능한 이메일입니다.
              </span>
              <span v-else class="text-yellow-600 text-sm">
                이메일 중복검사를 진행해주세요.
              </span>
            </p>
          </div>

          <!-- 비밀번호 -->
          <div>
            <label class="block text-sm font-medium">비밀번호</label>
            <input
              v-model="password"
              type="password"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
            <p v-if="password">
              <span v-if="!passwordValid" class="text-red-500 text-sm">
                비밀번호는 6자 이상이어야 합니다.
              </span>
              <span v-else class="text-green-600 text-sm">
                사용 가능한 비밀번호입니다.
              </span>
            </p>
          </div>

          <!-- 비밀번호 확인 -->
          <div>
            <label class="block text-sm font-medium">비밀번호 확인</label>
            <input
              v-model="passwordConfirm"
              type="password"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
            <p v-if="passwordConfirm">
              <span v-if="!passwordsMatch" class="text-red-500 text-sm">
                비밀번호가 일치하지 않습니다.
              </span>
              <span v-else class="text-green-600 text-sm">
                비밀번호가 일치합니다.
              </span>
            </p>
          </div>

          <!-- 전화번호 -->
          <div>
            <label class="block text-sm font-medium">전화번호</label>
            <input
              v-model="phone"
              type="tel"
              maxlength="13"
              @input="onPhoneInput"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
              placeholder="숫자만 입력하세요"
            />
            <p v-if="phone">
              <span v-if="!phoneValid" class="text-red-500 text-sm">
                전화번호 형식이 올바르지 않습니다.
              </span>
              <span v-else class="text-green-600 text-sm">
                올바른 전화번호 형식입니다.
              </span>
            </p>
          </div>

          <!-- 주소 -->
          <div>
            <label class="block text-sm font-medium">주소</label>
            <div class="flex space-x-2 mt-1">
              <input
                v-model="address"
                type="text"
                readonly
                class="flex-grow border border-gray-400 rounded-full px-4 py-2 outline-none bg-gray-100 cursor-pointer"
                placeholder="주소를 검색하세요"
              />
              <button
                type="button"
                @click="openAddressPopup"
                class="w-24 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold"
              >
                검색
              </button>
            </div>
            <p v-if="address">
              <span v-if="!addressValid" class="text-red-500 text-sm">
                주소는 5자 이상이어야 합니다.
              </span>
              <span v-else class="text-green-600 text-sm">
                사용 가능한 주소입니다.
              </span>
            </p>
          </div>

          <!-- 회원가입 버튼 -->
          <div class="flex justify-center mt-6">
            <button
              type="submit"
              class="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  signup,
  checkNicknameDuplicate as apiCheckNickname,
  checkUsernameDuplicate as apiCheckUsername,
} from '@/api/auth';

const router = useRouter();

// 입력 값
const name = ref('');
const nickname = ref('');
const username = ref('');
const password = ref('');
const passwordConfirm = ref('');
const phone = ref('');
const address = ref('');

// 중복검사 상태
const isNicknameChecked = ref(false);
const isUsernameChecked = ref(false);

// 유효성 검사
const nameValid = computed(() => name.value.length >= 2);
const nicknameValid = computed(() => nickname.value.length >= 2);
const usernameValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username.value),
);
const passwordValid = computed(() => password.value.length >= 6);
const passwordsMatch = computed(() => password.value === passwordConfirm.value);
const phoneValid = computed(() => /^\d{3}-\d{3,4}-\d{4}$/.test(phone.value));
const addressValid = computed(() => address.value.length >= 5);

// 입력값 변경 시 중복검사 상태 초기화
watch(nickname, () => {
  isNicknameChecked.value = false;
});
watch(username, () => {
  isUsernameChecked.value = false;
});

// 전화번호 자동 하이픈 처리
const onPhoneInput = e => {
  let val = e.target.value.replace(/\D/g, '');
  if (val.length < 4) {
    phone.value = val;
  } else if (val.length < 8) {
    phone.value = val.slice(0, 3) + '-' + val.slice(3);
  } else {
    phone.value =
      val.slice(0, 3) + '-' + val.slice(3, 7) + '-' + val.slice(7, 11);
  }
};

// 다음 주소 API 팝업
const openAddressPopup = () => {
  new window.daum.Postcode({
    oncomplete: data => {
      address.value = data.roadAddress || data.jibunAddress;
    },
  }).open();
};

// 닉네임 중복검사
const checkNicknameDuplicate = async () => {
  if (!nicknameValid.value) {
    alert('닉네임을 올바르게 입력해주세요.');
    return;
  }

  try {
    await apiCheckNickname(nickname.value);
    alert('사용 가능한 닉네임입니다.');
    isNicknameChecked.value = true;
  } catch (err) {
    alert('이미 사용 중인 닉네임입니다.');
    isNicknameChecked.value = false;
  }
};

// 이메일 중복검사
const checkUsernameDuplicate = async () => {
  if (!usernameValid.value) {
    alert('이메일 형식이 올바르지 않습니다.');
    return;
  }

  try {
    await apiCheckUsername(username.value);
    alert('사용 가능한 이메일입니다.');
    isUsernameChecked.value = true;
  } catch (err) {
    alert('이미 사용 중인 이메일입니다.');
    isUsernameChecked.value = false;
  }
};

// 회원가입 제출
const submitForm = async () => {
  if (
    nameValid.value &&
    nicknameValid.value &&
    usernameValid.value &&
    passwordValid.value &&
    passwordsMatch.value &&
    phoneValid.value &&
    addressValid.value &&
    isNicknameChecked.value &&
    isUsernameChecked.value
  ) {
    try {
      const userData = {
        email: username.value,
        password: password.value,
        name: name.value,
        nickname: nickname.value,
        address: address.value,
        phone: phone.value,
        role: 'user',
      };

      await signup(userData);
      alert('회원가입이 완료되었습니다!');
      router.push('/login');
    } catch (err) {
      alert('회원가입 중 오류가 발생했습니다.');
      console.error(err);
    }
  } else {
    alert('모든 입력란을 올바르게 작성하고, 중복검사도 완료해주세요.');
  }
};
</script>
