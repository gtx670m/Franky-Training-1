//String template
console.log(`haha
gõ
\$nhiều\$ 
dòng
\'${add(1, 2)}\'
ok`
);

// HTML template
var cat = {
    name: 'Mun',
    job: 'Hái cau',
    bio: 'Chơi là chính, ngủ là chủ yếu, việc thì bỏ bê',
    rating: 1,
    voice() {
        return 'mimi mimi';
    },
    tags: ['màu trắng', 'lùn', 'hơi nhác'],
};
var markup = `
    <div class="cat">
        <h2>${cat.name}</h2>
        <p class="job">${cat.job}</p>
        <p class="bio">${cat.bio}</p>
        <p class="star">${cat.rating}*</p>
        <p class="voice">${cat.voice()}</p>
        <p class="tags">
            ${cat.tags.map(tag => ` <span>${tag}</span>`)}
        </p>
    </div>
`;

// Tagged template
var cat = 'Mèo meo';
var action = 'loanh quanh';
helperFunc`${cat} đi ${action} trong sân.`;
// Tương đương với việc gọi hàm
// helperFunc(["", " đi ", " trong sân."], cat, action);
// Hàm có dạng
function helperFunc(strings, expressionValue) {
    // strings => ["", " đi ", " trong sân."]
    // expressionValue => cat
}
// Hoặc
function helperFunc(strings, ...expressionValues) {
    // strings => ["", " đi ", " trong sân."]
    // expressionValues => [cat, action]
}