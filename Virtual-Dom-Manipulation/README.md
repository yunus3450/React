 Virtual DOM Manipülasyonu Açıklaması  

Bu proje, **React'in Virtual DOM'u nasıl yönettiğini** anlamak için bazı temel optimizasyon tekniklerini içerir. React, bileşenleri tekrar render ederken performansı artırmak için **Virtual DOM** kullanır. Bu kodda **useMemo, useCallback ve React.memo** gibi optimizasyon yöntemleriyle gereksiz render işlemleri engellenmeye çalışılmıştır.  

Virtual DOM Nedir?  

Virtual DOM (Sanal DOM), React’in performansı artırmak için kullandığı bir tekniktir. **Gerçek DOM'u doğrudan güncellemek yerine**, önce Virtual DOM üzerinde değişiklikler yapılır ve ardından farklar (diffing algoritması ile) hesaplanarak yalnızca gerekli bölümler **gerçek DOM'a yansıtılır**.  

Bu işlem, **daha az maliyetle ve daha hızlı bir şekilde** arayüz güncellemelerini sağlar. Ancak, her render işleminde gereksiz bileşenlerin tekrar oluşturulması performans kayıplarına yol açabilir. Bu nedenle **React.memo, useMemo ve useCallback** gibi optimizasyon teknikleri kullanılır.  



Virtual DOM Manipülasyonu Açısından Öne Çıkanlar  

# 1. React.memo ile Bileşen Optimizasyonu  

```jsx
const MemoizedButton = React.memo(({ onClick, children }) => {
  console.log("Button Render Oldu");
  return <button onClick={onClick}>{children}</button>;
});
