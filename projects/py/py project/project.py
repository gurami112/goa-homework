# import random

# def guess(x):
#     randoma = random.randint(1,x)
#     guess = 0 
#     while guess != randoma:
#         guess = int(input(f"guess num between 1 and {x}:" ))
#         if guess < randoma:
#             print("Sorry,too low")
#         elif guess > randoma:
#             print("Sorry,too high")
#     print(f"congrats you guessed {randoma}")
# guess(30)

# import random
# def comput(x):
#     low = 1
#     high = x
#     comp_answer = " "
#     while comp_answer != "corect":
#         if low != high:
#             guess = random.randint(low,high)
#         else:
#             guess = low
#         comp_answer = input(f"is {guess} to high (high) or too low (low) or corect (corect)" )
#         if comp_answer == "high":
#             high - 1
#         if comp_answer == "low":
#             low = guess + 1
#     print(f"congrats computer guess a number,{guess},corectly")
# comput(120)


