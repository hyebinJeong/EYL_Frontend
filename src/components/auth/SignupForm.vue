<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signup } from '@/api/auth' // 회원가입 API 불러오기

const router = useRouter()

// 사용자 입력값
const name = ref('')
const nickname = ref('')
const username = ref('')
const password = ref('')
const passwordConfirm = ref('')
const phone = ref('')

// 유효성 검사
const nameValid = computed(() => name.value.length >= 2)
const nicknameValid = computed(() => nickname.value.length >= 2)
const usernameValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username.value))
const passwordValid = computed(() => password.value.length >= 6)
const passwordsMatch = computed(() => password.value === passwordConfirm.value)
const phoneValid = computed(() => /^\d{3}-\d{3,4}-\d{4}$/.test(phone.value))

// 전화번호 자동 하이픈
const onPhoneInput = (e) => {
  let val = e.target.value.replace(/\D/g, '')
  if (val.length < 4) {
    phone.value = val
  } else if (val.length < 8) {
    phone.value = val.slice(0, 3) + '-' + val.slice(3)
  } else {
    phone.value = val.slice(0, 3) + '-' + val.slice(3, 7) + '-' + val.slice(7, 11)
  }
}

// 회원가입 처리 함수 (→ 이 부분 교체!)
const submitForm = async () => {
  if (
    nameValid.value &&
    nicknameValid.value &&
    usernameValid.value &&
    passwordValid.value &&
    passwordsMatch.value &&
    phoneValid.value
  ) {
    try {
      const userData = {
        email: username.value,
        password: password.value,
        nickname: nickname.value,
        name: name.value,
        phone: phone.value,
        role: 'USER',
      }

      await signup(userData)
      alert('회원가입이 완료되었습니다!')
      router.push('/login')
    } catch (err) {
      console.error(err)
      alert('회원가입 실패: 서버 오류가 발생했습니다.')
    }
  } else {
    alert('모든 입력란을 올바르게 작성해주세요.')
  }
}
</script>
