import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  currentUser: null
};

export const userSlide = createSlice({
  name: 'user', //làm tiền tố cho các action type được tạo ra.
  initialState,
  reducers: {
    updateUser: (state, action) => { //state: Đại diện cho trạng thái hiện tại của slice user
      state.currentUser = action.payload;
    },
    resetUser: (state) => {
      state.currentUser = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser} = userSlide.actions //lấy hàm action creator updateUser từ đối tượng actions của slice userSlide và xuất nó ra ngoài.

export default userSlide.reducer