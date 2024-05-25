import random

def guess_the_number():
    number_to_guess = random.randint(1, 100)

    while True: 
        try:
            user_guess = int(input("Guess a number between 1 and 100: "))
            revaza = int(100)

            if user_guess > revaza:
                print("Please enter a valid number")

            if user_guess < number_to_guess:
                print("Too low! Try again.")
            elif user_guess > number_to_guess:
                print("Too high! Try again.")
            else:
                print("Congratulations! You guessed the right number.")
                break  
        except ValueError:
            print("Please enter a valid number.")

guess_the_number()