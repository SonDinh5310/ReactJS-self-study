# **Tổng quan về JSX**

## **1. JSX là gì?**

Chúng ta xét khai báo biến như sau :

```jsx
const element = <h1>Hello, world!</h1>;
```

-   Cú pháp thẻ này không phải là một chuỗi hay là HTML. Nó được gọi là JSX, và nó là một cú pháp mở rộng cho JavaScript. Facebook sử dụng JSX để biểu thị UI components

        JSX = Javascript + XML. Nó transform cú pháp dạng gần như XML về thành Javascript. Giúp người lập trình có thể code ReactJS bằng cú pháp của XML thay vì sử dụng Javascript. Các XML elements, attributes và children được chuyển đổi thành các đối số truyền vào React.createElement.

-   vậy javascript thì hầu như ai cũng biết rồi vậy cùng nhắc lại xml và cú pháp của xml nhé

        XML là viết tắt của từ eXtensible Markup Language, hay còn gọi là ngôn ngữ đánh dấu mở rộng. Đây là một tập hợp con đơn giản có thể mô tả nhiều loại dữ liệu khác nhau nên rất hữu ích trong việc chia sẻ dữ liệu giữa các hệ thống.

Cú pháp của tài liệu XML XML được xây dựng dựa vào cấu trúc NODE lồng nhau, mỗi node sẽ có một thẻ mở và một thẻ đóng như sau:

```jsx
<nodename>nội dung</nodename>
```

Trong đó:

```
• <nodename> là thẻ mở, tên của thẻ này do bạn tự định nghĩa.
• </nodename> là thẻ đóng, tên của thẻ này phải trùng với tên của thẻ mở.
• content là nội dung của thẻ này
```

## **2. Cú pháp JSX**

Cú pháp của JSX cũng tương tự như XML.

-   Ta có thẻ mở tag:

```jsx
  <JSXElementName JSXAttributesopt>
```

-   Đóng tag:

```jsx
  </JSXElementName>
```

> Ở đây lưu ý tên của thẻ mở tag và đống tag phải giống nhau.

ví dụ :

```jsx
<MyButton color="blue" shadowSize={2}>
    Click Me
</MyButton>
```

-   Ngoài ra JSX cũng có SelfClosingElement:

```jsx
<JSXElementName JSXAttributes />
```

ví dụ:

```jsx
<div className="sidebar" />
```

> Chú ý : JSX không phải là HTML do đó bạn nên cẩn thận kẻo nhầm với cú pháp của HTML nhé.

Ví dụ trong một div element, ta định nghĩa một Class container thì ta không viết là:

```jsx
<div class="container">...</div>
```

mà phải viết là

```jsx
<div className="container">...</div>
```

(vì class là keyword của Javascript). Hoặc for trong label element thì phải viết thành htmlfor, ....

-   Ngoài ra HTML tag không cần đóng cũng được nhưng JSX cần thiết phải đóng tag nhé.

```jsx
<JSXElementName JSXAttributesopt> # something here </JSXElementName>
```

## **3. Tại sao lại nên dùng JSX**

Việc sử dụng JSX trong ReactJS là không bắt buộc. Bạn có thể sử dụng chỉ JS thuần thôi. Nhưng có rất nhiều lý do cho việc nên sử dụng JSX trong ReactJS đấy.

-   Thứ nhất, JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript. Khi nhìn vào cấu trúc đó cũng dễ dàng đọc hiểu được ý nghĩa của các component. Code JSX ngắn hơn, dễ hiểu hơn code JS.
-   Thứ 2, JSX không làm thay đổi ngữ nghĩa của Javascript
-   Thứ 3, với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn.

Ví du với đoạn code JSX như sau:

```jsx
<div className="red">Children Text</div>;
<MyCounter count={3 + 5} />;

let gameScores = {
    player1: 2,
    player2: 5,
};
<DashboardUnit data-index="2">
    <h1>Scores</h1>
    <Scoreboard className="results" scores={gameScores} />
</DashboardUnit>;
```

Code Javascipt tương đương sẽ là:

```js
React.createElement("div", { className: "red" }, "Children Text");
React.createElement(MyCounter, { count: 3 + 5 });

React.createElement(
    DashboardUnit,
    { "data-index": "2" },
    React.createElement("h1", null, "Scores"),
    React.createElement(Scoreboard, {
        className: "results",
        scores: gameScores,
    })
);
```

## **4. Nhúng Biểu thức trong JSX**

Bạn có thể nhúng bất kỳ biểu thức JavaScript nào trong JSX bằng cách đóng nó trong dấu ngoặc nhọn. Ví dụ: 2 + 2, user.firstName, và formatName (user) là tất cả các biểu thức hợp lệ:

```jsx
function formatName(user) {
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName: "Harper",
    lastName: "Perez",
};

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById("root"));
```

## **5. JSX cũng là biểu thức**

Sau khi biên dịch, biểu thức JSX trở thành các đối tượng JavaScript thông thường. Điều này có nghĩa là bạn có thể sử dụng JSX bên trong các câu lệnh if và cho các vòng lặp, gán nó cho các biến, chấp nhận nó như các đối số, và trả về nó từ các hàm:

```jsx
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}
```

## **6.Thuộc tính chỉ định với JSX**

-   Bạn có thể sử dụng dấu ngoặc kép để xác định chuỗi literals như các thuộc tính:

```jsx
const element = <div tabIndex="0"></div>;
```

-   Bạn cũng có thể sử dụng dấu ngoặc nhọn để nhúng một biểu thức JavaScript trong một thuộc tính:

```jsx
const element = <img src={user.avatarUrl}></img>;
```

-   Không đặt dấu ngoặc kép quanh dấu ngoặc nhọn khi nhúng một biểu thức JavaScript trong một thuộc tính. Nếu không, JSX sẽ coi thuộc tính là một chuỗi chữ chứ không phải là một biểu thức.
-   Bạn nên sử dụng dấu ngoặc kép (cho giá trị chuỗi) hoặc dấu ngoặc nhọn (cho các biểu thức), nhưng không phải cả hai trong cùng một thuộc tính. 7. Chỉ định children với JSX

## **7. Chỉ định children với JSX**

Nếu một thẻ trống, bạn có thể đóng nó lại ngay lập tức với />, như XML:

```jsx
const element = <img src={user.avatarUrl} />;
```

-   JSX có thể chứa children

```jsx
const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);
```
