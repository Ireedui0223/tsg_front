<template>
  <div class="card">
    <div
      class="card-header"
      id="headingOne"
    >
      <h2 class=" m-b-0">
        <button
          class="btn btn-link btn-block text-start"
          type="button"
          data-bs-target="#collapseOne"
          :aria-expanded="active ? 'false' : 'true'"
          aria-controls="collapseOne"
          @click="active = !active"
        >
          Төрөл сонгох
        </button>
      </h2>
    </div>
    <div
      class="collapse"
      :class="active ? '' : 'show'"
      id="collapseOne"
      aria-labelledby="headingOne"
    >
      <div class="card-body">
        <div
          v-for="(work, index) in workTime"
          :key="`work_time_${index}`"
          class="mb-2"
        >
          <label :for="work.value">
            <input
              v-model="selectedTime"
              type="radio"
              class="radio_animated"
              :id="work.value"
              :value="work.value"
              name="work_field"
            />
            {{ work.name }}
          </label>
        </div>
        <button
          class="btn btn-primary text-center"
          type="button"
        >
          Ажил хайх
        </button>
      </div>
    </div>
  </div>
  <div class="card">
    <div
      class="card-header"
      id="headingTwo"
    >
      <h2 class=" m-b-0">
        <button
          class="btn btn-link btn-block text-start collapsed"
          type="button"
          data-bs-target="#collapseTwo"
          :aria-expanded="active1 ? 'false' : 'true'"
          aria-controls="collapseTwo"
          @click="active1 = !active1"
        >
          Салбар
        </button>
      </h2>
    </div>
    <div
      class="collapse"
      :class="active1 ? '' : 'show'"
      id="collapseTwo"
      aria-labelledby="headingTwo"
    >
      <div class="card-body animate-chk">
        <div class="location-checkbox">
          <div
            v-for="(work, index) in fieldOfWorks"
            :key="`work_field_${index}`"
            class="mb-2"
          >
            <label :for="work.id">
              <input
                v-model="selectedField"
                type="radio"
                class="radio_animated"
                :id="work.id"
                :value="work.id"
                name="work_field"
              />
              {{ work.name }}
            </label>
          </div>
        </div>
      </div>
      <button
        class="btn btn-block btn-primary text-center"
        type="button"
      >
        Салбар хайх
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      active1: false,
      active2: false,
      workTime: [
        {
          selected: false,
          name: 'Бүтэн цагаар',
          value: 'full_time'
        },
        {
          selected: false,
          name: 'Гэрээт',
          value: 'contract'
        },
        {
          selected: false,
          name: 'Цагийн ажил',
          value: 'part_time'
        },
        {
          selected: false,
          name: 'Түр ажил',
          value: 'hour_work'
        }
      ],
      fieldOfWorks: [
        {
          selected: true,
          name: 'Автомашин, засвар үйлчилгээ',
          id: 'work_field_machine'
        },
        { selected: false, name: 'Аялал жуулчлал', id: 'work_field_tour' },
        {
          selected: false,
          name: 'Банк, санхүү, эдийн засаг, даатгал',
          id: 'work_field_bank'
        },
        {
          selected: false,
          name: 'Барилга, Инженеринг',
          id: 'work_field_construction'
        },
        {
          selected: false,
          name: 'Бизнес менежмент',
          id: 'work_field_business'
        },
        {
          selected: false,
          name: 'Боловсрол, нийгмийн ухаан',
          id: 'work_field_education'
        },
        { selected: false, name: 'Дизайн', id: 'work_field_design' },
        { selected: false, name: 'Дэд бүтэц', id: 'work_field_sub_struct' },
        {
          selected: false,
          name: 'Зочид буудал, ресторан',
          id: 'work_field_hotel'
        },
        { selected: false, name: 'Маркетинг, PR', id: 'work_field_marketing' },
        { selected: false, name: 'Мэдээлэл технологи', id: 'work_field_it' },
        {
          selected: false,
          name: 'Спорт, Гоо сайхан, Фитнесс',
          id: 'work_field_sport'
        },
        {
          selected: false,
          name: 'Төрийн болон ТББ, ОУБ',
          id: 'work_field_goverment'
        },
        {
          selected: false,
          name: 'Тээвэр, гааль, агуулах',
          id: 'work_field_tranport'
        },
        {
          selected: false,
          name: 'Уул уурхай, газрын тос',
          id: 'work_field_mining'
        },
        { selected: false, name: 'Үйлдвэрлэл', id: 'work_field_factory' },
        { selected: false, name: 'Үйлчилгээ', id: 'work_field_service' },
        { selected: false, name: 'Үл хөдлөх хөрөнгө', id: 'work_field_remax' },
        {
          selected: false,
          name: 'ХАА, Байгаль экологи',
          id: 'work_field_ecology'
        },
        { selected: false, name: 'Харилцаа холбоо', id: 'work_field_tele' },
        {
          selected: false,
          name: 'Харуул хамгаалалт',
          id: 'work_field_secuirity'
        },
        {
          selected: false,
          name: 'Худалдаа, Борлуулалт',
          id: 'work_field_selling'
        },
        { selected: false, name: 'Хууль эрх зүй', id: 'work_field_law' },
        { selected: false, name: 'Хүний нөөц, захиргаа', id: 'work_field_hr' },
        {
          selected: false,
          name: 'Хэвлэл мэдээлэл, Медиа',
          id: 'work_field_media'
        },
        { selected: false, name: 'Шинжлэх ухаан', id: 'work_field_science' },
        {
          selected: false,
          name: 'Энтертайнмент, Соёл урлаг',
          id: 'work_field_entertainment'
        },
        { selected: false, name: 'Эрүүл мэнд', id: 'work_field_health' },
        { selected: false, name: 'Бусад', id: 'work_field_etc' }
      ],

      selectedField: '',
      selectedTime: ''
    };
  }
};
</script>
