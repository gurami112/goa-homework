import pygame
import sys
import random

pygame.init()
display_width = 1000
display_height = 800

block_size = 50

Font = pygame.font.Font("py game/Pixeltype.ttf",block_size *2)

screen = pygame.display.set_mode((display_width,display_height))


def grid():
    for x in range(0,display_width,block_size):
        for i in range(0,display_height,block_size):
            rect = pygame.Rect(x,i,block_size,block_size)
            pygame.draw.rect(screen,"#355E3B")
    

run = True
while run:
    for Event in pygame.event.get():
        if Event.type == pygame.QUIT:
            run = False
    pygame.display.update()