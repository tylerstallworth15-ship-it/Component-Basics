1. How did you handle optional props in your components?

I used TypeScript’s optional prop syntax, and then inside the components I just checked if the prop existed before showing anything. This made it easy to only display certain parts of the UI when those props were actually passed in.

2. What considerations did you make when designing the component interfaces?

I tried to keep the interfaces clean and only include props that the component really needed. I also made sure the types matched the kind of data each component was supposed to work with so everything stayed organized and easy to understand.

3. How did you ensure type safety across your components?

I put all my shared types in the types folder and imported them wherever I needed them. This helped keep everything consistent and made TypeScript catch mistakes early before they became bigger problems.

4. What challenges did you face when implementing component composition?

The hardest part was making sure the components passed props to each other correctly and still stayed reusable. I also had to think about where the state should go so the components didn’t depend too much on each other.