<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use App\Filter\OrSearchFilter;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource()
 * @ApiFilter(OrSearchFilter::class, properties={"firstName": "ipartial", "lastName": "ipartial", "number": "ipartial"})
 * @ORM\Entity(repositoryClass="App\Repository\PhonebookRepository")
 */
class Phonebook
{
    /**
     * @var int|null
     * 
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * 
     * @ORM\Column(type="string", length=25, nullable=false)
     * @Assert\NotBlank(message="You must enter a first name, the field cannont be empty.")
     * @Assert\Length(max=25)
     */
    private $firstName;

    /**
     * @var string
     * 
     * @ORM\Column(type="string", length=25, nullable=false)
     * @Assert\NotBlank(message="You must enter a last name, the field cannot be empty.")
     * @Assert\Length(max=25)
     */
    private $lastName;

    /**
     * @var string
     * 
     * @ORM\Column(type="string", length=15, nullable=false)
     * @Assert\Regex("/\+[0-9]+ [0-9]+ [0-9]{6,}$/", message="The phone number did not respect the form")
     * @Assert\Length(max=15)
     */
    private $number;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

        /**
     * @return string
     */
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    /**
     * @param string $firstName
     * 
     * @return self
     */
    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * @return string
     */
    public function getLastName(): string
    {
        return $this->lastName;
    }

    /**
     * @param string $lastName
     * 
     * @return self
     */
    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * @return string
     */
    public function getNumber(): string
    {
        return $this->number;
    }

    /**
     * @param string $number
     * 
     * @return self
     */
    public function setNumber(string $number): self
    {
        $this->number = $number;

        return $this;
    }
}
